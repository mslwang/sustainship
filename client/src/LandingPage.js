import './LandingPage.css';
import sustainshipLogo from '../images/sustainship_logo.svg'
import landingPageImage from '../images/landing_page_image.svg'

import React from 'react'
import {useHistory} from "react-router-dom";


// Material UI
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {ThemeProvider } from '@material-ui/core/styles';
import CenturyGothic from '../fonts/century_gothic.ttf';

import { THEME } from '../constants/fonts';

function LandingPage() {
    const history = useHistory();
  
    const goToEmployeePortal = () =>{ 
        history.push("/employee");
    }
    const goToUserPortal = () =>{ 
        history.push("/user");
    }
    return (
            <div className="main-container">
                <ThemeProvider theme={THEME}>
                <div className="circle-blur"></div>
                <div className="glass">
                    <div className="content">
                    <div className="menu-bar">
                        <div>
                            <img  className="sustainship-logo" src={sustainshipLogo}/>
                        </div>
                        <Box display='flex' flexDirection='row'>
                            <div className="user-portal-button">
                                <Button
                                    onClick={goToUserPortal}
                                    variant="contained"
                                    style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    borderRadius: 50,
                                    fontFamily: CenturyGothic,
                                    fontSize: 12,
                                    textTransform: "none",
                                    height:40,
                                    }}
                                >
                                    User portal
                                </Button>
                            </div>
                            <div className="employer-portal-button">
                                <Button
                                    onClick={goToEmployeePortal}
                                    variant="contained"
                                    style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    borderRadius: 50,
                                    fontFamily: CenturyGothic,
                                    fontSize: 12,
                                    textTransform: "none",
                                    height:40,
                                    }}
                                >
                                    Employee portal
                                </Button>
                            </div>
                        </Box>
                    </div>
                    <div className="main-content">
                        <div className="text">
                        <p className="incentive">AN ENVIRONMENTAL-FRIENDLY APPROACH TO LOWER AMAZON’S CARBON FOOTPRINT</p>
                        <h1>The path to a sustainable future</h1>
                        <p className="implementation">Calculate the optimal shipping time to satisfy consumers and help the environment.</p>
                        <div className="choose-sustainable-shipping-button">
                            <Button
                                onClick={() => {}}
                                variant="contained"
                                style={{
                                backgroundColor: "#1753E5",
                                color: "white",
                                borderRadius: 50,
                                fontFamily: CenturyGothic,
                                fontSize: 12,
                                textTransform: "none",
                                height:40,
                                }}
                            >
                                Choose sustainable shipping
                            </Button>
                        </div>    
                        </div>
                        <div>
                            <img className="landing-page-image" src={landingPageImage}/>
                        </div>
                    </div>
                    </div>
                </div>
                </ThemeProvider>
            </div>
    );
}

export default LandingPage;
