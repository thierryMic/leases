import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const styles = theme => ({

    drawerPaper: {
      width: '15em',
      zIndex: 0
    },

    toolbar: theme.mixins.toolbar,
  })


function SideBar(props) {
    const { classes } = props
    return (
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
            <div className={classes.toolbar} />
            <List>
                <ListItem button>
                    <ListItemText primary="Leases" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Reports" />
                </ListItem>
                <Divider />

            </List>
      </Drawer>
    )
}

// SideBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// }

  export default withStyles(styles)(SideBar)