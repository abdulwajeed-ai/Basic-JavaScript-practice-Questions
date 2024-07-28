// check number is prime number or not

let num = 8; 
if(num==1){
    console.log(`${num} is neither prime nor composite`)
}
else if(num<1){
    console.log(`${num} is not a prime number `);
}
else{
    for(let i = 2; i<num; i++){
        if(num %i==0){
            console.log(`number is not a prime number`)
            break;
        }
        else{
            console.log(`it is a prime number`)
        }
    }
} 

