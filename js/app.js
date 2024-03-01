


let roham = {
    classActivity : "A+" ,
    handOut : "A+" ,
    exam : "A+" ,
    overal : "A+",
    isFirst: true
}

let yasin = {
    classActivity : "A-" ,
    handOut : "A+" ,
    exam : "A+" ,
    overal : "A+"
}

let abolfazl = {
    classActivity : "C+" ,
    handOut : "C+" ,
    exam : "B-" ,
    overal : "B-"
}

let parham = {
    classActivity : "C+" ,
    handOut : "C+" ,
    exam : "C+" ,
    overal : "C+"
}

let list = [roham,yasin,abolfazl,parham,]

console.log(list)

console.log(yasin.classActivity == roham.classActivity)
console.log(abolfazl.classActivity == parham.classActivity)

for(let key in list){
    if(list(key).isfirts !==false){
        console.log(list(key))
    }

}