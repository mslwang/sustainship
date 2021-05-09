import sustainshipLogo from '../images/sustainship_logo.svg';

import {ThemeProvider } from '@material-ui/core/styles';
import CenturyGothic from '../fonts/century_gothic.ttf';

import { THEME } from '../constants/fonts';
import submissionPage1 from '../images/submission_page_1.svg';
import submissionPage2 from '../images/submission_page_2.svg';

import React from 'react';
import { makeStyles, Box} from '@material-ui/core';
import { Link } from "react-router-dom";
import SubmissionForm from '../components/submissionForm/SubmissionForm';

const useStyles = makeStyles((theme) => ({

    mainContainer: {
        display: 'flex',
        alignItems: 'right',
        background: "linear-gradient(180deg, #E8F1F1 0%, #F9EEE4 100%)",
    },
    mainCard: {
        display: 'flex',
        position: 'absolute',
        width: '50%',
        height: 'auto',
        top: '0px',
        bottom: '0px',
        background: '#FFFFFF'
    },
    formDiv: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    subForm:{
        width: '100%'
    },
    image1: {
        position: 'absolute',
        width: '271px',
        height: '332px',
        left: '438px',
        top: '88px'
    },
    image2: {
        position: 'absolute',
        left: '3.44%',
        right: '69.22%',
        top:  '52.78%',
        bottom: '12.64%'
    },
    logo: {
         position: 'absolute',
         width: '200px',
         height: '100px',
         left: '370px',
        //  top: '88px'
        // width: 78.91px;
        // height: 109.4px;
        // left: 792px;
        // top: 88px;
    }
  }));

  function SubmissionPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.mainContainer} justifyContent="flex-end">

                        <div>
                <img  className={classes.image1} src={submissionPage1}/>
            </div>
            <div>
                <img  className={classes.image2} src={submissionPage2}/>
            </div>
            <Box className={classes.mainCard} display="flex" flexDirection="column" justifyContent="space-around" alignItems="center">
            <div>
                            <img className={classes.logo} src={sustainshipLogo}/>
                        </div>
                        <Box display="flex" alignItems="center" flexDirection="column">
                        <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
                    <SubmissionForm className={classes.subForm} history={props.history}/>
                    </Box>
            </Box>
        </Box>
    );

  }

  export default SubmissionPage;