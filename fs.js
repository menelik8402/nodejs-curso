const fs = require('fs');

fs.writeFile('./texto.txt','My name is Menelik , Im ready to up!!',function(err){
    if(err)
    {
        console.log('There es an error');
    }
    else
    {
        console.log('File created!!!');
    }
})

fs.readFile('./texto.txt',function(err,data){

    if(err)
    {
        console.log('There is an error when it trying to read the file');
    }
    else
    {
        console.log(data.toString());
    }
})

