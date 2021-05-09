import clsx from 'clsx';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import _ from 'lodash';

import React, { useState } from 'react'
import { 
    Grid, 
    Button,  
    InputAdornment , TextField, makeStyles, Card, CardContent, Container, Box} from '@material-ui/core';
import Input from "./Input";
import { useForm, Form } from './Form';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import OrderList from './OrderList';


const useStyles = makeStyles((theme) => ({

    outerContainer: {
        display: 'flex',
        direction: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));


const initialFValues = {
    id: 0,
    name: '',
    address: '',
    postalCode: '',
    item: '',
    weight: '',
    furthestDate: new Date(),
}

export default function Submission() {
    const classes = useStyles();
    const [items, setItems] = useState({ itemList: {} });
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('address' in fieldValues)
            temp.address = fieldValues.address ? "" : "This field is required."
        if ('postalCode' in fieldValues)
            temp.postalCode = fieldValues.postalCode ? "" : "This field is required."
        if('weight' in fieldValues)
            temp.weight = (/^\d+$/).test(fieldValues.weight) ? "" : "Weight is not valid." 
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, setErrors, validate, values, setValues);



    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()){
            resetForm();
        }
    }

    const addItem = () => {
        const item = values.item;
        const weight = values.weight; 

        setItems(prev => ({ itemList: {...prev.itemList, [item]: weight}}));
        setValues(prev => ({...prev, item: '', weight: ''}));
    }

    const deleteItem = (i) => {
        return () => {
            const newState = {
                itemList: _.omit(items.itemList, i)
            };
            setItems(newState);
        };
    }


    return (
        <Form onSubmit={handleSubmit}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item xs={5}  justify="center" alignItems="center">
                    <Input
                        label="Name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Input
                    label="Address"
                    name="address"
                    value={values.address}
                    onChange={handleInputChange}
                    error={errors.address}
                    />
                <Input
                    label="Postal Code"
                    name="postalCode"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        name="furthestDate"
                        label="Furthest date"
                        value={values.furthestDate}
                        onChange={date => handleInputChange(convertToDefEventPara("furthestDate", date))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                     </MuiPickersUtilsProvider>
                     </Grid>
                     <Card variant="standard">
                         <CardContent>
                            <Grid container direction="column" justify="space-around" alignItems="center"> 
                                <Grid key="item" item>
                                        <TextField 
                                        variant="standard"
                                        label="Item"
                                        name="item"
                                        value={values.item}
                                        onChange={handleInputChange}
                                        error = {values.item in items.itemList}
                                        helperText = {values.item in items.itemList ? "Item already added." : ""}
                                    />
                                </Grid>
                                <Grid key="weight" item>
                                        <TextField
                                        variant="standard"
                                        label="Weight"
                                        name="weight"
                                        value={values.weight}
                                        onChange={handleInputChange}
                                        className={clsx(classes.margin, classes.textField)}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid key="add" item>
                                <Button
                                    variant= "outlined"
                                    size="large"
                                    color="primary"
                                    onClick={addItem}>
                                Add
                                </Button>
                                </Grid>
                            </Grid>
                            </CardContent>
                            <CardContent>
                                <OrderList items={items} deleteItem={deleteItem} />
                        </CardContent>
                     </Card>
                     
                     <Grid container alignItems="center" justify="center">
                        {/* Should add Button component */}
                        <Button
                            variant= "contained"
                            size="large"
                            color="primary"
                            type="submit">
                        Submit
                        </Button>
                    </Grid>

            </Grid>
        </Form>
    )
}