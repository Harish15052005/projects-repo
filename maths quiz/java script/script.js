let num1 = Math.floor(Math.random() * 9 + 1);
let num2 = Math.floor(Math.random() * 9 + 1);

document.getElementById('v1').value = num1;
document.getElementById('v2').value = num2;

let answer = num1 + num2;

function check(){
    if(document.getElementById('value').value == answer){
        alert("your answer is correct :)")
    }else if(document.getElementById('value').value == ""){
        alert("write your answer and then submit")
    }
    else{
        alert("Your, Answer is not correct. Correct answer is" +" " + answer + ". Try Again" ) 
    }
}