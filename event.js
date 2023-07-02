const EventEmitter = require ('events');
const eventEmitter = new EventEmitter();

eventEmitter.on ('achbor',(num1,num2)=>{
console.log(num1 + num2);

} );

eventEmitter.emit('achbor',1,7);

class Ben extends EventEmitter{
    constructor(name){
        super();
        this._name = name

    }

    get name (){
        return this._name;
    }
}

let vivian = new Ben('Vivian');
let wangui = new Ben('wangui');
wangui.on('name',()=>{
    console.log('my other name is ' + wangui.name);
});
vivian.on('name',()=> {
    console.log('my name is ' + vivian.name)
});

vivian.emit('name');
wangui.emit('name');