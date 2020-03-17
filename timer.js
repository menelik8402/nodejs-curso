var idt=setTimeout(function(){
    console.log('Running....');
},1000);

clearTimeout(idt);

value =0;
var sid=setInterval(function(){
value +=1;
console.log(value);

if(value==10){
    clearInterval(sid);
}

},1000);