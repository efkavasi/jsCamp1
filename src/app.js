let dolarDun=9.20
let dolarBugun=9.30

console.log(dolarDun)

const euroDun=11
console.log(euroDun) 

let konutKredileri=["Konut Kredisi","Emlak Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")

for (let i=0;i<3;i++ ) {
    
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")

let student={id:1,name:"Engin"}
console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name+":"+puan)
    
}
save(undefined, student);


let students2=[student,{id:2,name:"tuğrul"},"ankara",{id:"istanbul"}]

console.log(students2)