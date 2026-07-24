function studentsMark(mark){

    if(mark <0 || mark >100){
        console.log("Invalid inputs");
        return;
    }
    switch(true){

        case(mark>=35 && mark <= 49):
            console.log("passed: grade D")
             break;

        case(mark >= 50 && mark <=74):
            console.log("passed: garde C")
             break;

        case(mark >= 75 && mark <= 84):
            console.log("passed: grade B")
            break;

        case(mark >= 85 && mark <=100):
            console.log("Passed: grade A");
             break;

        default:
            console.log("Failed")
    }    
}

studentsMark(4);
studentsMark(36);
studentsMark(74);
studentsMark(88);
studentsMark(99);