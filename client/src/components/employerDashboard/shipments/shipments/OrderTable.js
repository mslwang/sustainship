import './Table.css';

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import OrderTableTemplate from './OrderTableTemplate'
// import ReactTable from "react-table";


function OrderTable({data}) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'ORDER ID',
                accessor: '_id',
            },{
                Header: 'BUYER NAME',
                accessor: 'buyerName',  
            },{
                Header: 'ADDRESS',
                accessor: 'address',
            },{
                Header: 'FURTHEST DELIVERY DATE',
                accessor: 'furthestDeliveryDate',
            },{
                Header: 'TOTAL WEIGHT (KG)',
                accessor: 'orderWeight',
          }
        ]
      )

    return (
        <OrderTableTemplate columns={columns} data={data} />
    )
}

export default OrderTable