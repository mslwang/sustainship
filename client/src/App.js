import './App.css';
import SubmissionPage from './pages/SubmissionPage';

import { useMediaQuery } from 'react-responsive'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/submission" exact component={SubmissionPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
