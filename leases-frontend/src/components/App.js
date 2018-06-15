import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarItem from './SidebarItem'
// import { SidebarItem }from './SidebarItem'

const drawerWidth = '10em';

const styles = theme => ({
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
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
  menuButton: {
    marginLeft: 0,
    marginRight: 8,
  },
//   hide: {
//     display: 'none',
//   },
  drawerPaper: {
    // position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
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
    width: theme.spacing.unit * 6.2,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing.unit * 6.2,
    // },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 16px',
    ...theme.mixins.toolbar,
  },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
});

class App extends React.Component {
    state = { open: false };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;

        return (
        <div className={classes.root}>
            {/* Title bar */}
            <AppBar className={classNames(classes.appBar)}>
                <Toolbar disableGutters='true'>
                    <IconButton
                    color="secondary"
                    aria-label="open drawer"
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
              variant="permanent"
              classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}}
              open={this.state.open}
            >
                <div className={classes.toolbar}/>
                <SidebarItem iconName='lease' text='Leases'/>
                <SidebarItem iconName='lessor' text='Lessors'/>
                <SidebarItem iconName='report' text='Reports'/>
            </Drawer>

            {/* Content pane */}
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
        </div>
        );
    }
}



export default withStyles(styles, { withTheme: true })(App);