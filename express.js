const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //database reaching task
    res.json({success : true});
})

app.get('/waigata',(req,res)=>{
    res.send('a new route of a different page');
});

app.get('/waigata/:name/:age',(req,res)=>{
console.log(req.params);
console.log(req.query);
res.send(req.params.name + ":" +req.params.age );

});


app.listen(9000);