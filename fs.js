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

console.log('Last line');

