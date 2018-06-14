import React from 'react'
import { observer, inject } from 'mobx-react'
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'


const styles = theme => ({
    x: {
        // flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit ,
    }

  })

const LeaseComponent = inject("store")(observer((props) => {

    const { classes } = props
    return (
        <div className={classes.x}>
            <Typography variant="title" color="inherit">
                Lease Chicken
            </Typography>
        </div>
    )
}))

export default withStyles(styles)(LeaseComponent)
