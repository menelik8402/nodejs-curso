//console.log(process.argv);
/*
var name='Menelik';
process.stdout.write('What is your lastname ? : \n')
process.stdin.on('data',function(data){
    process.stdout.write(`The full name is ${name}  ${data}`);
    process.exit();
});*/

process.stdout.write('Write a list of numbers to sum them. Press (.) key to end. \n ');

var sum = 0;

process.stdin.on('data',function(data){
    if(data.toString().trim()== '.'){
       // Console.log('End process. ')
        process.exit()
    }
    else{
        sum=sum + parseInt(data.toString().trim());
    }

} );

process.on('exit',function(){
    process.stdout.write('Total sum of the numbers is : '+ sum + '\n' );
});
