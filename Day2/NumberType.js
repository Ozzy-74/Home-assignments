function NumberType(num){
    let Number1 = num;
    if(Number1>0){
        console.log(`${Number1} is positive number`);
    }
    else if(Number1<0){
        console.log(`${Number1} is a negative number`);
    }
    else{
        console.log("entered a neutral number");
    }
}

NumberType(5);
NumberType(-2);
NumberType(0);