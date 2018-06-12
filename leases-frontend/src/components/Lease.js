import React from 'react'
import {observer, inject} from 'mobx-react'


export const Lease = inject("store")(observer((props) => {
    
    const { leases, addLease } = props.store

    const handleInput = (e) => {
        if (e.which === 13) {
            addLease({id:e.target.value, address:"bird"})
            e.target.value = ""
        }
            
    }

    return (
        <div>   
             <input onKeyPress={(e) => handleInput(e)}></input>        
            <h1>Leases</h1>   

            <ul>                      
                {leases.map ( (l) => {return <li>{l.id}</li>})}     
            </ul>
              
        </div>

    )
}))
