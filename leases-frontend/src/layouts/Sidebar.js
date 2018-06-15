import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


export const sideBarWidth = '12em'
const styles = theme => ({

    drawerPaper: {
      width: sideBarWidth,
      zIndex: 0,
      position: 'relative',
    },

    toolbar: theme.mixins.toolbar,
  })

class SideBar extends React.Component {

    state = {
        open: false,
    }

    render () {
        const { toolbar, drawerPaper } = this.props.classes
        return (
            <Drawer variant="persistent" classes={{paper: drawerPaper}} open={false}>
                <div className={toolbar} />
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
}


  export default withStyles(styles)(SideBar)
