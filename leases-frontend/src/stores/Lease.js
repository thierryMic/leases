import { decorate, observable } from 'mobx'


class Lease  {

    constructor() {
        this.leaseId = 2
        this.leaseItem ='xyz'
        this.type = 'Equipment'
        this.startDate = '2017-05-24'
        this.expiryDate = '2018-05-01'
       }
}

decorate(Lease, {
    leaseId: observable,
    leaseItem: observable,
    type: observable,
    startDate: observable,
    expiryDate: observable,
})

export default Lease
