import './Table.css';

import React, { useState } from 'react';

import OrderTableTemplate from './OrderTableTemplate'


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