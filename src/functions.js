function addToCart(quantity,productName="elma") {
    console.log("sepete eklendi : ürün : " + productName + " adet : " + quantity)    
}

// addToCart("bilgisayar")
// addToCart()
addToCart(15)


let sayHello = ()=>{
    console.log("hello world")
}
sayHello()

let sayHello2= function (params) {
    console.log("hello wolrd 2")
}
sayHello2()


function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("elma",2,5)
addToCart2("armut",4,20)
addToCart2("limon",3,15)

let product1 ={productName:"elma",unitPrice:10,quantity:5}


function addToCart3(product) {
console.log("Ürün : " + product.productName)
console.log("Fiyatı : " + product.unitPrice)
console.log("Adedi : " +product.quantity )    
}

addToCart3(product1)


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"ceviz",unitPrice:40,quantity:2},
    {productName:"fındık",unitPrice:20,quantity:5},
    {productName:"ayva",unitPrice:15,quantity:10}
]

addToCart4(products)


function sum(bisey,...numbers) {
    let total=0
    for (let i = 0; i<numbers.length;i++){
        total=total+numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

sum(10,7)
//sum(10,7,4,45)
//sum(10,7,4,45,64)

//spread
let numbers=[10,23,55,60,670,122,444]
console.log(Math.max(...numbers))

//destractiring
let [icAnadolu,marmara,Akdeniz,[icAnadoluSehirleri]]= [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"40M"},
    {name:"Akdeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Mersin","Antalya"]
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newproductName,newunitPrice,newquantity

({productName:newproductName,unitPrice:newunitPrice,quantity:newquantity}
= {productName:"fındık",unitPrice:20,quantity:5})

console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)