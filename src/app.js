let dolarDun=9.20
let dolarBugun=9.30

//console.log(dolarDun)

const euroDun=11
console.log(euroDun) 

let konutKredileri=["Konut Kredisi","Emlak Kredisi","Kamu Konut Kredisi"]

//console.log("<ul>")

// for (let i=0;i<3;i++ ) {
    
//     console.log("<li>"+konutKredileri[i]+"</li>")
// }

//console.log("</ul>")

let student={id:1,name:"Engin"}
console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name+":"+puan)
    
}
//save(undefined, student);


let students2=[student,{id:2,name:"tuğrul"},"ankara",{id:"istanbul"}]

console.log(students2)

//rest
// let showProducts= function (id,...products) {
//     console.log(id)
//     console.log(products[0])
// }
// showProducts(10,"elma","armut","karpuz");


//Spread
let points=[1,2,3,25,40,89]
console.log(...points)
console.log(Math.max(...points))

console.log("abc","d",..."efg","h")



//destructuring

let populations=[10000,20000,30000,[40000,1000000]]
let [small,medium,high,[veryHigh,maximum]] =populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations);

let category={id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])

let{id,name}=category
console.log(id)
console.log(name)
