import { decorate, observable } from 'mobx'

class LeaseStore  {
    leases = [{id: 2, Address: '820 Mountain highway'}]

    addLease = (val) => {
        this.leases.push(val)
    }

}

decorate(LeaseStore, {
    leases: observable,
})

var store = new LeaseStore()

export default store
