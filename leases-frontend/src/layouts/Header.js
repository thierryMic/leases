import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

export default props =>
    <AppBar position="static">
    <Toolbar>
        <Typography variant="title" color="inherit">
            Lease Chicken
        </Typography>
        <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
