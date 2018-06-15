// React
import React, { Component } from 'react';

// application components
import LeaseComponent from './LeaseComponent'
import  { Header, Sidebar } from '../layouts'
import {sideBarWidth} from '../layouts/Sidebar'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    app: {
        height: 2000,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        left: sideBarWidth,
        position:'relative',
        top: 64
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

