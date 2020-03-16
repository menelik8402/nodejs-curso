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

console.log(add(2,3));
console.log(substract(2,3));
console.log(multiply(2,3));
console.log(div(0,0));