import './LandingPageSmallScreen.css';
import sustainshipLogo from '../images/sustainship_logo.svg'
import landingPageImage from '../images/landing_page_small_image.svg'

import React from 'react'


// Material UI
import Button from '@material-ui/core/Button';
import {ThemeProvider } from '@material-ui/core/styles';
import CenturyGothic from '../fonts/century_gothic.ttf';
import CenturyGothicBold from '../fonts/century_gothic_bold.ttf'


import { THEME } from '../constants/fonts';

function LandingPage() {
    return (
    <div className="landing-page-small-main-container">
        <ThemeProvider theme={THEME}>
            <div className="landing-page-small-glass">
                <div className="landing-page-small-content">
                    <div>
                        <img  className="landing-page-small-sustainship-logo" src={sustainshipLogo}/>
                    </div>
                    <div className="landing-page-small-main-content">
                        <div className="landing-page-text">
                            <p className="landing-page-small-incentive">AN ENVIRONMENTAL-FRIENDLY APPROACH TO LOWER AMAZON’S CARBON FOOTPRINT</p>
                            <h1 className="landing-page-small-header">The path to a sustainable future</h1>
                            <p className="landing-page-small-implementation">Calculate the optimal shipping time to satisfy consumers and help the environment.</p>
                            <div>
                                <img className="landing-page-small-image" src={landingPageImage}/>
                            </div>
                            <div className="landing-page-small-buttons">
                                <div className="landing-page-choose-sustainable-shipping-button">
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
                                        width:200
                                        }}
                                    >
                                        Choose sustainable shipping
                                    </Button>
                                </div>
                                <div className="landing-page-small-employer-portal-button">
                                    <Button
                                        onClick={() => {}}
                                        variant="contained"
                                        style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        borderRadius: 50,
                                        fontFamily: CenturyGothic,
                                        fontSize: 12,
                                        textTransform: "none",
                                        height:40,
                                        width:200
                                        }}
                                    >
                                        Employer portal
                                    </Button>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    </div>
    );
}

export default LandingPage;
