import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";

export function useForm(initialFormValues, validateOnChange = false, setErrors, validate, values, setValues) {

    const handleInputChange = e => {
        const { name, value } = e.target;
        console.log(value);
        setValues({
            ...values,
            [name]: value
        });
        if (validateOnChange){
            validate({ [name]: value });
        }

    };

    const resetForm = () => {
        setValues(initialFormValues);
        setErrors({});
    }


    return {
        handleInputChange,
        resetForm
    };
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    );
    }