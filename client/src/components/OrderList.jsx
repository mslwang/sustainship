import React from 'react';
import {Grid, List, Paper} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

export default function OrderList(props){
    return(
        <div>
        { Object.keys(props.items.itemList).length > 0 && 
        <Paper>
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
secondary={Number(entry[1]) === 1 ? entry[1] + " lb" : entry[1] + " lbs"}
/>
                                <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
        <DeleteIcon onClick={props.deleteItem(entry[0])}/>
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