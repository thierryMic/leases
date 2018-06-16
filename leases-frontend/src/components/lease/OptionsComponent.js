import React from 'react'
import {observer, inject} from 'mobx-react'


export const OptionsComponent = inject("store")(observer((props) => {

    return (
        <div class='options-component'>   

            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>        
            </table>          
        </div>

    )
}))
