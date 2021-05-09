import React from 'react';
import {Grid, List, Paper} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HighlightOff from '@material-ui/icons/HighlightOff';

export default function OrderList(props){
    return(
        <div>
        { Object.keys(props.items.itemList).length > 0 && 
        <Paper style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
        <List>
        {/* <ListItem key='title'>
        <Grid container justify="center" alignItems="center" spacing={1} >
            <Grid key="item" item>
                                        Item
            </Grid>
            <Grid key="weight" item>
                                        Weight
            </Grid>
        </Grid>
    </ListItem> */}
{Object.entries(props.items.itemList).map(entry => {
    return(
    <ListItem key={entry[0]}>
                          <ListItemText
primary={entry[0]}
secondary={entry[1] + " kg"}
/>
                                <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
        <HighlightOff onClick={props.deleteItem(entry[0])}/>
        </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
    );
})}
</List>
</Paper>
}
</div>);
}