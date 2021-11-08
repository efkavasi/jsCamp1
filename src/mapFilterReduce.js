let cart =[
    {id:1,productName:"telefon",quantity:3, unitPrice:4000},
    {id:1,productName:"bilgisayar",quantity:1, unitPrice:10000},
    {id:1,productName:"kitap",quantity:8, unitPrice:100},
    {id:1,productName:"kalem",quantity:5, unitPrice:4},
    {id:1,productName:"bellek",quantity:6, unitPrice:50},
    {id:1,productName:"fare",quantity:2, unitPrice:45}
]
cart.map(product=>{
    console.log(product.productName + " "+ product.quantity * product.unitPrice)
}
)

let total=cart.reduce((acc,product)=> acc+product.quantity * product.unitPrice,0)
console.log(total)


let quantityOver2= cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7,productName:"çorap",quantity:1,unitPrice:15})
}

addToCart(cart)
console.log(cart)

