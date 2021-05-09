import "./UserPortalPage.css";

import { useHistory, Link } from "react-router-dom";
import React, { useState } from "react";
import sustainshipIcon from "../images/sustainship_icon.svg";
import axios from 'axios';

// Material UI
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import CenturyGothic from "../fonts/century_gothic.ttf";

import { THEME } from "../constants/fonts";

import SubmissionPage from "./SubmissionPage.js";
import ProfilePage from "./ProfilePage";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { useEffect } from "react";

function UserPortalPage(props) {
  const [isProfileShown, setProfileShown] = useState(true);
  const [isSubmissionShown, setSubmissionShown] = useState(false);
  const [info, setInfo] = useState({});

  const history = useHistory();

  const goToLandingPage = () => {
    history.push("/");
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  const { user } = props.auth;

  console.log(user);
  useEffect(() => {
    axios.get('/api/users/' + user.id).then((res) => {
      setInfo({...res.data, id: user.id});
    });
  }, []);


  const handleProfile = (e) => {
    e.preventDefault();
    setProfileShown(true);
    setSubmissionShown(false);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setProfileShown(false);
    setSubmissionShown(true);
  };

  return (
    <div>
    { !isSubmissionShown ? 
    <div className="user-portal-main-container">
      <ThemeProvider theme={THEME}>
        <div className="user-portal-menu-bar">
          <div className="user-portal-menu-bar-left">
            <img src={sustainshipIcon} />
            <Link to="/user">
              <li onClick={handleProfile}>Profile</li>
            </Link>
            <Link to="/user">
              <li onClick={handleSubmission}>Submit Order</li>
            </Link>
          </div>
          <div className="user-portal-menu-bar-right">
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
        <div className="user-portal-glass">
          {isProfileShown && <ProfilePage info={info}/>}
        </div>
      </ThemeProvider>
    </div> : 
    <SubmissionPage info={info} setProfileShown={setProfileShown} setSubmissionShown={setSubmissionShown} />}
    </div>
  );
}

UserPortalPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(UserPortalPage);
