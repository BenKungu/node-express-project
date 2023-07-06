const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const Joi = require('joi');
const { result } = require('lodash');

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();

}); 

app.get('/:userQuery',(req,res)=>{
res.render('index',{data : {userQuery : req.params.userQuery}});


});

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object({
        email : Joi.string().trim().required(),
        password : Joi.string().min(5).max(10).required(),
    });
    const { error, value } = schema.validate(req.body);
        if(error){
            res.send('an error has occured');
        }else{
        console.log(value);
        res.send('posted data as expected');
    }
});


app.get('/waigata',(req,res)=>{
    res.send('a new route of a different page');
});

app.get('/waigata/:name/:age',(req,res)=>{
console.log(req.params);
console.log(req.query);
res.send(req.params.name + ":" +req.params.age );

});


app.listen(9000);