import './OrderTable.css';

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Table from './userTable';


function OrderTable({orders}) {

    // useEffect(()=>{
    //     data = data.map(e => {
    //         orderId: e._id,
    //         deliveryDate:
    //     })
    // }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'ORDERID',
                accessor: 'orderId',
            },{
                Header: 'DELIVERY DATE',
                accessor: 'deliveryDate',  
            },{
                Header: 'Status',
                accessor: 'status',
            },{
                Header: 'TOTAL WEIGHT (KG)',
                accessor: 'totalWeight',
          },{
                Header: 'CARBON EMISSIONS SAVED (KG)',
                accessor: 'totalCarbon',
            },
           {
                Header: " ",
                Cell: () => (
                    <Button
                        variant="contained"
                        style= {{ 
                        backgroundColor: "#1753E5",
                        borderRadius: 100,
                        color: "white",
                        textTransform:"none",
                        }}
                    >View Order
                    </Button>
                )
          }
        ]
      )

    const today = new Date();

     const data = [
        { orderId: 'AAA1', deliveryDate: '05/22/2021', status: 'Completed', totalWeight:5, totalCarbon: 10 },
        { orderId: 'AAA2', deliveryDate: '05/30/2021', status: 'Completed', totalWeight:5, totalCarbon: 15},
        { orderId: 'AAA3', deliveryDate: '05/31/2021', status: 'In Progress', totalWeight:7, totalCarbon: 12}
      ];

    // Render the UI for your table
    return (
        <Table columns={columns} data={orders.map(e => {
            return {
                orderId: e._id,
                deliveryDate: e.furthestDeliveryDate,
                status: new Date(e.furthestDeliveryDate) <= today ? 'Completed' : 'In Progress',
                totalWeight: e.orderWeight,
                totalCarbon: e.totalCarbon,
            }
        })} />
        // <ReactTable
        //     data={data}
        //     columns={columns}
        //     // minRows={0}
        //     showPagination={false}
        // />
    )
}

export default OrderTable