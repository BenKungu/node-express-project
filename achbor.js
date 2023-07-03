const _ = require('lodash');

let me =_.fill([1,5,6,9,5,3],'ben',1,3);
console.log(me);

const sum = (num1,num2) => num1 + num2;
const PI = 3.14;

class BenTesting{
constructor(){
  console.log('ben added a clear method')
}

}

module.exports = {sum : sum, PI : PI, BenTesting : BenTesting};
