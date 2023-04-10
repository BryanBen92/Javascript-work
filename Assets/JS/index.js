//Problem number one
function grades(){
    let grades = parseInt(prompt('Enter your grade:'));

    if (grades>=90){
        confirm('Your grade is A');
    }else if (grades>=80){
        confirm('Your grade is B');
    }else if(grades>=70){
        confirm('Your grade is C');  
    }else if (grades>=60){
        confirm('Your grade is D');
    }else { 
        confirm('Your grade is F');
    }
}
//Problem number two
function LeapYear() {
    let year = parseInt(prompt('Enter a year:'));

    if ((year%4==0) && (year%100!==0) || (year%400==0)){ 
        confirm('The year is a leap year');
    }else{
        confirm('The year is not a leap year');
    }
//Problem number three
}function numbers(){
    let nums = parseInt(prompt('Enter a number:'));

    if (nums<0){
        confirm('The number is negative');
    }else if (nums==0){
        confirm('The number is zero');
    }else{
        confirm('The number is positive');
    }
}
//Problem number four
function StringLength() {
    let text = prompt('Enter a word:');

    confirm(text.length);
}
//problem number five
function Login(){
    let username=prompt('Enter a username:');
    let password=prompt('Enter a password:');

    if ((username == 'Ben9') && (password == 'password2')){
        confirm('Access Granted');
    }else{
        confirm('Access Denied');
    }
}


