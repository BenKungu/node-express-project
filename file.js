 const fs = require ('fs');

// create and read a file

fs.writeFile('example.txt',"this is an example",(err)=>{
    if(err)
    console.log(err);
    else
    console.log('file successfully created');
    fs.readFile('example.txt','utf8' ,(err, file)=>{
        if(err)
        console.log(err);
        else
        console.log(file);
    })
});

//rename a file

fs.rename('example.txt','example2.txt',(err)=>{
    if (err)
    console.logK(err);
    else
    console.log('successfully renamed the file')
});

//edit/append  a file

fs.appendFile('example2.txt','some data being appended',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('successfully added data to the file')
});

//delete/unlink a file

fs.unlink('example2.txt', (err)=>{
    if(err)
    console.log(err);
    else
    console.log('successfully deleted the file');
})

//working on directories

fs.mkdir('another',(err)=>{
    if(err)
    console.log(err);
    else{
fs.writeFile('./another/newfile.txt','139jdhh',(err)=>{
    if(err)
    console.log(err);
    else{
        console.log('another new file crreated');
    }
})
    }
});