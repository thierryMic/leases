import { decorate, observable, computed } from 'mobx'

class Lease  {

    constructor() {
        this.leaseId = 2
        this.leaseItem ='xyz'
        this.type = 'Equipment'
        this.startDate = '2017-05-01'
        this.expiryDate = '2019-04-30'
       }

       get term () {
           // /1000ms / 60s/ 60min / 24hr / 365.25
           return ((Date.parse(this.expiryDate) - Date.parse(this.startDate))/1000/60/60/24/365.25).toFixed(1)
    }
}

decorate(Lease, {
    leaseId: observable,
    leaseItem: observable,
    type: observable,
    startDate: observable,
    expiryDate: observable,
    term: computed,
})

export default Lease
