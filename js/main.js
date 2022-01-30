/* JS file with functions to control the display of the website and to access cameras array*/

//Function with display features of the webpage such as day of operation and password of inputted camera(some parts masked due to security reasons)
function display() {
    document.querySelector("#text").innerText = currCam();
    currDateTime();
    let startDay = new Date("2020-01-01T12:00:00");
    let timePassed = Math.round((now.getTime()- startDay.getTime())/(1000*60*60*24));
    document.querySelector("#time").innerText = "완전경계작전 D+" + timePassed;
    //If the camera exists change the hidden text fied
    if (camInfo(currCam())){
        document.querySelector("#pw").innerText = camInfo(currCam()).pass;
    //If the camera doesn't exist set the innerText to default
    } else {
        document.querySelector("#pw").innerText = 'pw';
    }
}

//Function running display when a radio item is clicked and selecting the inputted number for easy input
function clickRadio(){
    display();
    document.querySelector("#input-text").select();
}

//Run clickRadio when a radio item is clicked
$(".sr-only").click(clickRadio);

/*
When a number is inputted, run display
When enter(13) is pressed, run searchWeb
JS key codes: https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/
$("#input-text").keyup(function(event){
    display();
    if (event.which == 13){
        openWeb();
    }
});

//Function returning the name of the camera currently inputted
function currCam(){
    let value = $("input[name = 'temp']:checked").val() + $("#input-text").val();
    if (!$("input[name = 'temp']:checked").val()) {
        value = $("#input-text").val();
    }
    return value;
}

//Function returning an object from the cameras array that matches the name of the camera passed on as a parameter
function camInfo(cam){
    let value = cameras.filter(function(element){
        if (element.name == cam){
            return true;
        }
    })[0];
    return value;
}

//Function opening the website version of the camera. If the camera doesn't exist throw an error and alerts the user.
function openWeb(){
    currDateTime();
    try{
        window.open(camInfo(currCam()).link, now, "width = 650, height = 500, top = 250, left = 630, scrollbars = yes, resizeable = yes");
    } catch(err){
        alert(currCam() + "(은)는 존재하지 않는 카메라입니다.");
    }
}