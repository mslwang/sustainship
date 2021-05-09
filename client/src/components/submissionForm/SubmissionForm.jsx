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
import CustomButton from './CustomButton';
import OrderList from './OrderList';
import axios from 'axios';
import classnames from 'classnames';

// Material UI
import CenturyGothic from '../../fonts/century_gothic.ttf';

const useStyles = makeStyles((theme) => ({

    form: {
        width:'80%'
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '20ch',
    },
    card: {
        width: '100%'
    }
  }));

  const date = new Date();

const initialFValues = {
    item: '',
    weight: '',
    furthestDate: date.getDate().toString(),
}

export default function Submission(props) {
    const classes = useStyles();
    const [items, setItems] = useState({ itemList: {} });
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        // if ('name' in fieldValues)
        //     temp.name = fieldValues.name ? "" : "This field is required."
        // if ('address' in fieldValues)
        //     temp.address = fieldValues.address ? "" : "This field is required."
        // if ('postalCode' in fieldValues)
        //     temp.postalCode = fieldValues.postalCode ? "" : "This field is required."
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
            const totalWeight = Object.keys(items.itemList).length > 0 ? _.reduce(Object.values(items.itemList).map(v => Number(v)), (sum, v) => sum + v) : 0;
            const data = {
                buyerName: props.info.name,
                buyerId: props.info.id,
                address: props.info.address,
                postalCode: props.info.postalCode,
                orderWeight: totalWeight.toString(),
                items: Object.entries(items.itemList).map(e => { return {item: e[0], weight: e[1]} }),
                furthestDeliveryDate: values.furthestDate,
                areaCode: props.info.postalCode.substring(0, 3)
            }
            axios.post('/api/orders', data).then(
                (res) =>{
                    console.log(res.data);
                    resetForm();
                    setItems({ itemList: {} });
                    props.goBack();
                }

            );

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

        <Form onSubmit={handleSubmit} className={classes.form}>
                <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="center">
                <Box  display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    {/* <Input
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
                    value={values.postalCode}
                    onChange={handleInputChange}
                    error={errors.postalCode}
                /> */}

                    <label>Furthest Date</label>              
               <input 
                    type = "date" 
                    class = "datepicker" 
                    name="furthestDate"
                    value={values.furthestDate}
                    label="furthestDate"
                    onChange={handleInputChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
               
               />  
               </Box>
                                   {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        name="furthestDate"

                        />
                     </MuiPickersUtilsProvider> */}
                     <Card variant="standard" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}className={classes.card}>                    
                         <CardContent>
                            <Box display="flex" container flexDirection="row" justifyContent="space-around" alignItems="center"> 
                                <div className="input-field col s12">
                                <input name="item"
                                    id="item"
                                    value={values.item}
                                    onChange={handleInputChange}
                                    error = {values.item in items.itemList}
                                    className={classnames("", {
                                            invalid: values.item in items.itemList ? "Item already added." : ""
                                    })}
                                    type="text"
                                    />
                                    <label>Item</label>
                                    <span className="red-text">
                                    {values.item in items.itemList ? "Item already added." : ""}
                                    </span>
                                    </div>
                                <div className="input-field col s12">
                                    <input
                                    name="weight"
                                    id="weight"
                                    value={values.weight}
                                    onChange={handleInputChange}
                                    type="text"
                                    />
                                    <label>Weight</label>
                                </div>
                                <Button
                                    onClick={addItem}
                                    variant="contained"
                                    style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    borderRadius: 50,
                                    fontFamily: CenturyGothic,
                                    fontSize: 12,
                                    textTransform: "none",
                                    height:40,
                                    marginLeft:"1rem"
                                    }}
                            >
                                Add
                            </Button>
                            </Box>
                            </CardContent>
                            <CardContent>
                                <OrderList items={items} deleteItem={deleteItem} />
                        </CardContent>
                     </Card>
                        {/* Should add Button component */}
                        {/* <CustomButton type="submit" text="submit" /> */}
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                            width: 100,
                            backgroundColor: "#1753E5",
                            color: "white",
                            borderRadius: 50,
                            fontFamily: CenturyGothic,
                            fontSize: 12,
                            textTransform: "none",
                            height:40,
                            marginTop:"1rem",
                            marginBottom:"1rem"
                            }}
                        >
                            Submit
                        </Button>

                    </Box>
        </Form>
    );
}