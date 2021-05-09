import submissionPage1 from '../images/submission_page_1.svg';
import submissionPage2 from '../images/submission_page_2.svg';
import sustainshipLogo from '../images/sustainship_logo.svg';

import './SubmissionPage.css'
import {useHistory} from "react-router-dom";

// Material UI
import Button from '@material-ui/core/Button';
import CenturyGothic from '../fonts/century_gothic.ttf';

import SubmissionForm from '../components/submissionForm/SubmissionForm';


function SubmissionPage(props) {
    const history = useHistory();

    const goBack = () => {
        props.setSubmissionShown(false);
        props.setProfileShown(true);
    }
    const goToHome = () => {
        history.push('/');
    }
    return (
        <div className="submission-page-main-container">
            <div className="submission-page-image2">
                <img src={submissionPage2}/>
            </div>
            <div className="outer-box">
                <div className="general">
                        <div className="return-buttons">
                            <Button
                                onClick={goBack}
                                variant="contained"
                                style={{
                                width: 100,
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: 50,
                                fontFamily: CenturyGothic,
                                fontSize: 12,
                                textTransform: "none",
                                height:40,
                                marginTop:"1rem"
                                }}
                            >
                                Back
                            </Button>
                            <Button
                                onClick={goToHome}
                                variant="contained"
                                style={{
                                width: 100,
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: 50,
                                fontFamily: CenturyGothic,
                                fontSize: 12,
                                textTransform: "none",
                                height:40,
                                marginTop:"1rem"
                                }}
                            >
                                Home
                            </Button>
                        </div>
                    <div className="submission-page-form">
                        <div className="inner-div-form">
                            <div className="submission-page-user-form">
                                    <img src={sustainshipLogo}/>
                                    <SubmissionForm info={props.info} goBack={goBack}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submission-page-image1">
                <img src={submissionPage1}/>
            </div>
        </div>
    );
}

export default SubmissionPage;