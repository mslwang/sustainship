import './Popup.css' 
import CloseIcon from '@material-ui/icons/Close';
import {IconButton} from "@material-ui/core";

function Popup({handleClose, image, header, body}) {

    return (
        <div className="popup-box">
          <div className="box">
            <div onClick={handleClose}>
                <IconButton size="default"> 
                    <CloseIcon fontSize="large" style={{fill: "black"}}/>
                </IconButton>
            </div>
            <div className="popup-content">
                <img src={image}/>
                <h3>{header}</h3>
                <p>{body}</p>
            </div>
          </div>
        </div>
    );
}

export default Popup;