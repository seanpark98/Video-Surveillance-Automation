/*JS file with a function to get current time for constant access by other functions*/

let now;
let year;
let month;
let day;
let hour;
let minute;
let second;

//Function to get the current date and time
function currDateTime(){
    now = new Date();
    year = now.getFullYear;
    month = now.getMonth()+ 1;
    day = now.getDate();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
}
