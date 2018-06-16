import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarItem from './SidebarItem'
import LeaseComponent from '../lease/LeaseComponent';


const drawerWidthOpen = '10em'
const drawerWidthClosed = '3.1em'

const styles = (theme, props) => ({
    root: {
        flexGrow: 1,
        height: 2000,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },

    menuButton: {
      marginRight: 8,
    },

    drawerPaper: {
        whiteSpace: 'nowrap',
        width: drawerWidthOpen,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: drawerWidthClosed,
    },

    toolbar: {
        ...theme.mixins.toolbar,
    },

    content: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('left'),
        width: 'calc(100% - ' + drawerWidthClosed + ')',
        left: drawerWidthClosed,
        padding: '1em',
    },

    contentOpen : {
        width: 'calc(100% - ' + drawerWidthOpen + ')',
        left: drawerWidthOpen,
    }

});

class App extends React.Component {
    state = {open: false};

    handleDrawerOpen = () => {
        this.setState({open: true,});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const { classes } = this.props

        return (
        <div className={classes.root}>
            {/* Title bar */}
            <AppBar className={classNames(classes.appBar)}>
                <Toolbar disableGutters>
                    <IconButton
                    color="secondary"
                    onClick={this.state.open ? this.handleDrawerClose : this.handleDrawerOpen}
                    className={classNames(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>Lease chicken</Typography>
            </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer
              variant={window.matchMedia("(min-width: 600px)").matches ? 'permanent' : 'persistent'}
              classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}}
              open={this.state.open}
            >
                <div className={classes.toolbar}/>
                <SidebarItem iconName='lease' text='Leases'/>
                <SidebarItem iconName='lessor' text='Lessors'/>
                <SidebarItem iconName='report' text='Reports'/>
            </Drawer>

            {/* Content pane */}
            <main className={classNames(classes.content, this.state.open && classes.contentOpen)}>
                <div className={classes.toolbar} style={{width: '100%'}} />
                <LeaseComponent/>
            </main>
        </div>
        );
    }
}



export default withStyles(styles, { withTheme: true })(App);