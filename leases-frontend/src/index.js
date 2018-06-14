import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// react-router
import { BrowserRouter } from 'react-router-dom'

// Mobx
import { Provider } from 'mobx-react';
import store from './stores/LeaseStore';

// Material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { Theme } from './layouts'

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';


const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';


ReactDOM.render(
                <BrowserRouter>
                    <Provider store={store}>
                        <JssProvider jss={jss} generateClassName={generateClassName}>
                            <MuiThemeProvider theme={Theme}>
                                <CssBaseline/>
                                <App />
                            </MuiThemeProvider>
                        </JssProvider>
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root')
            )

