import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'mobx-react';
import store from './stores/LeaseStore';


ReactDOM.render(
                <BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root')
            )

