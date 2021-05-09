import React from 'react'
import classnames from "classnames";

export default function Input(props) {

    const { name, label, value, error="", onChange } = props;
    return (
        <div className="input-field col s12">
                <input
                  name={name}
                  value={value}
                  id={name}
                  onChange={onChange}
                  error ={error !== ""}
                  className={classnames("", {
                        invalid: error 
                  })}
                  type="text"
                />
                <label>{label}</label>
                <span className="red-text">
                  {error}
                </span>
        </div>

    );
}