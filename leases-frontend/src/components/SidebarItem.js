import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ListItem } from '@material-ui/core';
import { Iconer } from '../utils/Iconer'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    listItem:{
        padding: 0,
    }
  })

const SidebarItem = (props) => {
    const {iconName, text, classes } = props
    return (
          <List disablePadding>
          <ListItem button divider className={classes.listItem} >
              <IconButton>
                  <Iconer name={iconName} color='primary'/>
              </IconButton>
              <Typography>{text}</Typography>
          </ListItem>
        </List>
    )
}



export default withStyles(styles)(SidebarItem)