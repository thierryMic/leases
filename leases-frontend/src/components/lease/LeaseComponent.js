import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import { Selecter } from '../../utils/Selecter'
import { observer, inject } from 'mobx-react'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
    },
    fieldPadding: {
        marginTop: '1em',
      },
})


const LeaseComponent = inject("store")(observer(
class LeaseComponent extends React.Component {

    handleChange = (e, lease) => {
        lease[e.target.name]= e.target.value
    }

    render () {
        const { root, paper, container, fieldPadding, flexColumn } = this.props.classes
        const { leaseId, type, leaseItem, startDate, expiryDate, term } = this.props.store.lease
        const { lease } = this.props.store

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
                        />

                        {/* Lease item */}
                        <TextField
                            name="leaseItem"
                            label="Lease item"
                            className={fieldPadding}
                            value={leaseItem}
                            onChange={(e) => this.handleChange(e, lease)}
                        />

                        {/* Lease type */}
                        <Selecter
                            xid='type'
                            values={['Property', 'Equipment']}
                            val={type}
                            handleChange={(e) => this.handleChange(e, lease)}
                            xClass={fieldPadding}
                        />

                        {/* Start date */}
                        <TextField
                            type='date'
                            name="startDate"
                            label="Start date"
                            className={fieldPadding}
                            value={startDate}
                            onChange={(e) => this.handleChange(e, lease)}
                            InputLabelProps={{shrink:true}}
                        />

                        {/* Expiry date */}
                        <TextField
                            type='date'
                            name="expiryDate"
                            label="Expiry date"
                            className={fieldPadding}
                            value={expiryDate}
                            onChange={(e) => this.handleChange(e, lease)}
                            InputLabelProps={{shrink:true}}
                        />

                        {/* Term */}
                        <TextField
                            name="term"
                            label="Lease term (years)"
                            className={fieldPadding}
                            value={term}
                        />

                    </form>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        )
    }
}))



LeaseComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(LeaseComponent)