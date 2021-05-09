import "./App.css";
import SubmissionPage from "./pages/SubmissionPage";
import LandingPage from "./components/LandingPage";
import LandingPageSmallScreen from "./components/LandingPageSmallScreen";
import EmployeePortalPage from "./components/employerPortal/EmployeePortalPage";
import UserPortalPage from "./pages/UserPortalPage";

import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/authPage/register";
import Login from "./components/authPage/login";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              component={
                !isTabletOrMobile ? LandingPage : LandingPageSmallScreen
              }
            />
           
            
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Switch>
              <PrivateRoute path="/employee" exact component={EmployeePortalPage} />
              <PrivateRoute path="/user" exact component={UserPortalPage} />
            </Switch>
            {/* <Route path="/employee/shipments" exact component={Shop}/>
          <Route path="/employee/shipments/:id" component={ItemDetail}/> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
