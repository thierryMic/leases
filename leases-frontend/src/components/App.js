import '../styles/App.css'
// React
import React, { Component, Fragment } from 'react';

// application components
import { LeaseComponent }  from './LeaseComponent'
import  { Header, Footer, Sidebar } from '../layouts'



class App extends Component {
    render() {
        return (
            <Fragment>
               <Header/>
               {/* <LeaseComponent/> */}
               {/* <Footer/> */}
               <Sidebar/>
            </Fragment>
        );
    }
}

export default App
