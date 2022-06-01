const fu=require(./src/logger/logger.js);
fu.welcome()
const gu=require('src/util/helper.js');
gu.printDate()
const ku=require('src/util/helper');
ku.printMonth()
const pu=require('src/util/helper');
pu.getBatchinfo()
const tu=require('src/Validator/formatter');
tu.trim()
const ru=require('src/Validator/formatter');
ru.changetoUppercase()
const nu=require('src/Validator/formatter');
nu.changetoLowercase()
try{
console.log(fu)
console.log(gu)
console.log(ku)
console.log(pu)
console.log(tu)
console.log(ru)
console.log(nu)

}

catch(err){
    console.log(fu)
    console.log(gu)
    console.log(ku)
    console.log(pu)
    console.log(tu)
    console.log(ru)
    console.log(nu)
}