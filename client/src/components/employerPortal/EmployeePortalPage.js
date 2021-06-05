import "./EmployeePortalPage.css";

import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import sustainshipIcon from "../../images/sustainship_icon.svg";

// Material UI
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import CenturyGothic from "../../fonts/century_gothic.ttf";

import { THEME } from "../../constants/fonts";

import Dashboard from "./dashboard/Dashboard";
import ShipmentsPage from "./shipments/ShipmentsPage"

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

function EmployeePortalPage(props) {
  const [isDashboardShown, setDashboardShown] = useState(true);
  const [isShipmentsShown, setShipmentsShown] = useState(false);
  const [isSingleShipmentShown, setSingleShipmentShown] = useState(false);
  const [isBuyersShown, setBuyersShown] = useState(false);

  const history = useHistory();

  const goToLandingPage = () => {
    history.push("/");
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  const { user } = props.auth;

  const handleDashboard = (e) => {
    e.preventDefault();
    setDashboardShown(true);
    setShipmentsShown(false);
    setBuyersShown(false);
    setSingleShipmentShown(false);
  };

  const handleShipments = (e) => {
    e.preventDefault();
    setDashboardShown(false);
    setShipmentsShown(true);
    setBuyersShown(false);
    setSingleShipmentShown(false);
  };

  const handleBuyers = (e) => {
    e.preventDefault();
    setDashboardShown(false);
    setShipmentsShown(false);
    setBuyersShown(true);
    setSingleShipmentShown(false);
  };

  return (
    <div className="employee-portal-main-container">
      <ThemeProvider theme={THEME}>
        {/* <div className="circle-blur2"></div> */}
        <div className="employee-portal-menu-bar">
          <div className="employee-portal-menu-bar-left">
            <img src={sustainshipIcon} />
            <Link to="/employee">
              <li onClick={handleDashboard}>Dashboard</li>
            </Link>
            <Link to="/employee">
              <li onClick={handleShipments}>Shipments</li>
            </Link>
          </div>
          <div className="employee-portal-menu-bar-right">
            <Button
              onClick={goToLandingPage}
              variant="contained"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 50,
                fontFamily: CenturyGothic,
                fontSize: 12,
                textTransform: "none",
                height: 40,
                marginRight: 25,
              }}
            >
              Homepage
            </Button>
            <Button
              onClick={onLogoutClick}
              variant="contained"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 50,
                fontFamily: CenturyGothic,
                fontSize: 12,
                textTransform: "none",
                height: 40,
              }}
            >
              Sign Out
            </Button>
          </div>
        </div>
        <div className="employee-portal-glass">
          {isDashboardShown && <Dashboard user={user} />}
          {isShipmentsShown && <ShipmentsPage isSingleShipmentShown={isSingleShipmentShown} setSingleShipmentShown={setSingleShipmentShown}/>}
        </div>
      </ThemeProvider>
    </div>
  );
}

EmployeePortalPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(EmployeePortalPage);
