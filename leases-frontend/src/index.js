import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/main/App'

// react-router
import { BrowserRouter } from 'react-router-dom'

// Mobx
import { Provider } from 'mobx-react';
import store from './stores/LeaseStore';

// Material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './styles/Theme'


ReactDOM.render(
                <BrowserRouter>
                    <Provider store={store}>
                        <MuiThemeProvider theme={Theme}>
                            <CssBaseline/>
                            <App />
                        </MuiThemeProvider>
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root')
            )

