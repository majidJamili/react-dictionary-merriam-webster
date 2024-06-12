import * as React from 'react';

import ListItem from "@mui/material/ListItem";


import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


function ExampleItem({example, remove, parentId}){
    const labelId = `checkbox-list-label-${example.id}`;
 

    return(
        <ListItem alignItems="center">
            <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#D71921' }}>
                <AssignmentIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={example.text}
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {/* {example.id} */}
                </Typography>
                {example.time}
                </React.Fragment>

            }
            
            />
            <DeleteIcon onClick={remove} className='redIcons' />                    
            <Divider component="li" />
        </ListItem>
    )
}

export default ExampleItem;