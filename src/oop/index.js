class Customer{
    constructor(id,costumerNumber){
        this.id=id
        this.costumerNumber=costumerNumber;
    }
}

let customer = new Customer(1,123456);
//proptotyping
customer.name="engin"
console.log(customer.name)
console.log(customer.costumerNumber)


class IndividualCustomer extends Customer{
    constructor(fistName,id,customerNumber){
    super(id,customerNumber)
    this.fistName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }

}