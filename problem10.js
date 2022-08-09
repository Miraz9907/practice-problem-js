let grade = [95, 66, 80, 59, 47, 77];
for(let i = 0; i < grade.length; i++){
    // console.log(i,grade[i]);
    if(grade[i] < 50){
        console.log("Your number is : ",grade[i], "F grade");
    }
    else if(grade[i] > 50 && grade[i] < 60){
        console.log("Your number is : ",grade[i], "D grade");
    }
    else if(grade[i] > 60 && grade[i] < 70){
        console.log("Your number is : ",grade[i], "C grade");
    }
    else if(grade[i] > 70 && grade[i] < 80){
        console.log("Your number is : ",grade[i], "B grade");
    }
    else if(grade[i] > 80 && grade < 90){
        console.log("Your number is : ",grade[i], "A grade");
    }
    else if(grade[i] > 90){
        console.log("Your number is : ",grade[i], "A+ grade");
    }
}