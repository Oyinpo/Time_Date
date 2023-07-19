


let currentDate = new Date();
let day = currentDate.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector('.day').innerHTML = "Today is :" + " " + dayList[day] + ".";

let hour = currentDate.getHours();
let minutes =currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let clock = (hour >= 12) ? " PM" : " AM";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && clock === " PM"){
    if (minutes === 0 && seconds === 0){
        hour = 12;
        clock = "Noon"
    }
    else{
        hour = 12;
        clock = " PM"
    }
}
if (hour === 0 && prepand ===" AM"){
    if(minutes === 0 && seconds === 0){
        hour = 12;
        clock = "Midnight"
    }
    else{
        hour= 12;
        clock = " AM"
    }
}

document.querySelector('.time').innerHTML = "Curent Time:" + " " + hour + clock + " :" + " " + minutes + ":" + " " + seconds;

let date= currentDate.getDate()
let month= currentDate.getMonth() 
let monthList= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
let year= currentDate.getFullYear()

document.querySelector('.date').innerHTML= date + "/" + (month+1) + "/" + year

let printContent= function(){
    window.print();
}