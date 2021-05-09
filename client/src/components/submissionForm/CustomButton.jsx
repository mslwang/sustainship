import React from 'react';

function CustomButton({type, text}) {

    return (
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          type={type}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          {text}
        </button>
      </div>
    );

}

export default CustomButton;