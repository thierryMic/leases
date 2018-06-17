import { decorate, observable } from 'mobx'
import Lease from './Lease'


class LeaseStore  {
    lease = new Lease()

    addLease = (val) => {
        this.leases.push(val)
    }

}

decorate(LeaseStore, {
    lease: observable
})

var store = new LeaseStore()

export default store
