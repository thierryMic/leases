// React
import React, { Component } from 'react';

// application components
import LeaseComponent from './LeaseComponent'
import  { Header, Sidebar } from '../layouts'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    app: {
        // display: 'flex',
        // height: 2000,
        // overflow: 'hidden',
        flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        left: '15em',
        position:'relative'
    },
    toolbar: theme.mixins.toolbar,

  })

class App extends Component {

    render() {
        const { app, content, toolbar } = this.props.classes
        return (
            <div className={app}>
               <Header/>
               <Sidebar/>
               <div className={content}>
                    <div className={toolbar} />
                    <LeaseComponent/>
                    <LeaseComponent/>
                    <LeaseComponent/>
                    <LeaseComponent/>
                    <LeaseComponent/>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(App)

