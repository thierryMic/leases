import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'mobx-react';
import store from './stores/LeaseStore';


// Material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';
// import { Theme } from './layouts'

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#000000'
        },
      secondary: {
          main: '#7f0000'
        }
    }})

ReactDOM.render(
                <BrowserRouter>
                    <Provider store={store}>
                        <MuiThemeProvider theme={theme}>
                            <CssBaseline/>
                            <App />
                        </MuiThemeProvider>
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root')
            )

