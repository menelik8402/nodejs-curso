const Math={}

function add(x1,x2){
    return x1+x2;
}
function substract(x2 ,x1){
return x2-x1;

}

function multiply(x1,x2){
return x1*x2;

}
function div(x1,x2){
if(x1==0)
{
    console.log('NO se puede dividir  por cero');
}
else
{
    return x2/x1;  
}

}


//I'm export an Math object now
Math.addy=add;
Math.multi=multiply;
Math.divide=div;
Math.subst=substract;

module.exports = Math;