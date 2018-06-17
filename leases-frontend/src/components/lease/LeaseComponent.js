import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import { Selecter } from '../../utils/Selecter'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        // textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
    },
    fieldPadding: {
        marginTop: '1em',
        // width: '2em',
      },
})


class LeaseComponent extends React.Component {

    state = {
        leaseId: '<auto>',
        leaseItem: '',
        type: '',
        startDate: '',
        expiryDate: '',
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(event.target)
    }

    render () {
        const { root, paper, container, fieldPadding, flexColumn } = this.props.classes
        const { leaseId, type, leaseItem, startDate, expiryDate } = this.state

        return (
            <div className={root}>
            <Grid container spacing={24}>

                <Grid item xs={12} sm={6}>
                    <Paper className={paper}>
                    <form className={classNames(container, flexColumn)} noValidate autoComplete="off">
                        {/* Lease Id */}
                        <TextField
                            name="leaseId"
                            label="Lease id"
                            className={fieldPadding}
                            value={leaseId}
                            // margin="normal"
                        />

                        {/* Lease item */}
                        <TextField
                            name="leaseItem"
                            label="Lease item"
                            className={fieldPadding}
                            value={leaseItem}
                            onChange={this.handleChange}
                            // margin="normal"
                        />

                        {/* Lease type */}
                        <Selecter
                            xid='type'
                            values={['Property', 'Equipment']}
                            val={type}
                            handleChange={this.handleChange}
                            xClass={fieldPadding}
                        />

                        {/* Start date */}
                        <TextField
                            type='date'
                            name="startDate"
                            label="Start date"
                            className={fieldPadding}
                            value={startDate}
                            onChange={this.handleChange}
                            InputLabelProps={{shrink:true}}
                        />

                        {/* Expiry date */}
                        <TextField
                            type='date'
                            name="expiryDate"
                            label="Expiry date"
                            className={fieldPadding}
                            value={expiryDate}
                            onChange={this.handleChange}
                            InputLabelProps={{shrink:true}}
                        />

                    </form>
                    </Paper>

                </Grid>


            </Grid>
            </div>
        )
    }
}

LeaseComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LeaseComponent)