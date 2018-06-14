import React from 'react'
import { observer, inject } from 'mobx-react'
import { OptionsComponent } from './OptionsComponent'
import Button from '@material-ui/core/Button';

export const LeaseComponent = inject("store")(observer((props) => {

    const { leases, addLease } = props.store

    const handleInput = (e) => {
        if (e.which === 13) {
            addLease({id:e.target.value, address:"bird"})
            e.target.value = ""
        }

    }

    return (
        <div class='lease-component'>
            <label for='lease-id' >Lease id:</label>
            <input id='lease-id'></input>

            <label for='item-type' >Item type:</label>
            <select>
                <option value="A">Property</option>
                <option value="B">Equipment</option>
            </select>

            <label for='Description' >Description:</label>
            <input id='Description'></input>

            <label for='inception-date' >Inception date:</label>
            <input id='inception-date'></input>

            <label for='term' >Term:</label>
            <input id='term'></input>

            <label for='termination-date' >Termination date:</label>
            <input id='termination-date'></input>

            <label for='initial-rent' >Initial rent:</label>
            <input id='initial-rent'></input>

            <label for='incentives' >Incentives:</label>

            <label for='options' >Options:</label>
            <OptionsComponent/>

            <Button variant="contained" size="small" color="secondary" >Save</Button>
            <Button variant="fab" size="small" color="secondary" >Save</Button>


        </div>

    )
}))
