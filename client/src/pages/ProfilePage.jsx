import './ProfilePage.css';
//import SearchBar from './SearchBar'
// import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
// import {IconButton} from "@material-ui/core";

import OrderTable from '../components/userPortal/OrderTable';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';



function ProfilePage(props) {
    const [searchInput, setSearchInput] = useState('');
    const [orders, setOrders] = useState([]);
    const [ordersOnTable, setOrdersOnTable] = useState([]);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();


    const updateSearchInput =  (input) => {
        setSearchInput(input);
     }
    

    const printRow = () => {
        console.log()
    }
    // console.log('ProfilePage');
    // console.log(props.info);
    const getOrdersById = (id) => {
       // console.log(id);
        axios.get("/api/users/" + id + "/orders").then((res) => {
          const orderData = res.data.map(e => { return {...e, totalCarbon: (Math.random()*(Math.random()*100)).toPrecision(3) }});
        
          setOrders(orderData);
          setOrdersOnTable(orderData);
        //   console.log(orderData);
        //   const minDate = _.reduce(orderData, (min, e) => {
        //       const date =  new Date(e.furthestDate);
        //     if(min > date){
        //         return date;
        //     }else {
        //         return min;
        //     }
        //   });
        //   if(minDate){
        //     setStartDate(minDate.toString());
        //     console.log(minDate);
        //   }
          
        });
      };

    // const getOrdersByDate = (id, startDate, endDate) => {
    //     axios.get("/api/shipments/"+ id).then((res) => {
    //       const allOrderData = res.data;
    //       const filteredData = allOrderData.filter(a => new Date(a) === date);
    //       setShipments(shipmentsData);
    //       console.log(shipmentsData);
    //     });
    //   };

    const changeTableData = () => {
        if(startDate && endDate){
            const sD = new Date(startDate);
            const eD = new Date(endDate);
            if(sD <= eD){
                const newData = orders.filter(e => {
                    const currDate = new Date(e.furthestDeliveryDate);
                    return sD <= currDate && currDate <= eD;
                });
                setOrdersOnTable(newData);
            }
        }

    }

    useEffect(() => {
        console.log(props.info.id);
        getOrdersById(props.info.id);
    }, [props.info]);


    return (
        <div className="profile-main-container">
            <h1 className="profile-title">Orders</h1>
            <Grid className="profile-search-bar" spacing={3} columns={5}>
                <Grid item>
                <h6>Date range: </h6>
                </Grid>
                <Grid item>
                    <label>Start Date</label>              
                <input 
                        type="date" 
                        class="datepicker" 
                        name="startDate"
                        value={startDate}
                        label="Start Date"
                        onChange={(e) => setStartDate(e.target.value)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />  
               </Grid>
                <Box display='flex' alignSelf='center' sx={{ mx: 2 }}> to </Box>
                <Grid item>
                    <label>End Date</label>              
                <input 
                        type="date" 
                        class="datepicker" 
                        name="endDate"
                        value={endDate}
                        label="End Date"
                        onChange={(e) => setEndDate(e.target.value)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />  
               </Grid>
                <div> 
                    <Button
                        onClick={changeTableData}
                        variant="contained"
                        style= {{ 
                        backgroundColor: "black",
                        borderRadius: 100,
                        color: "white",
                        textTransform:"none",
                        }}
                    // startIcon={ <SearchIcon fontSize="small" style={{fill: "white"}}/>}
                    >Find
                    </Button>
                </div>
            </Grid>
            <h2 className="profile-table-names">Orders</h2>
            <OrderTable orders={ordersOnTable}  />
        </div>
    );
}

export default ProfilePage;