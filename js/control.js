/* JS file with functions to control the cameras itself with time synchronization, swing routines, shift view, and set default (some parts edited due to security reasons) */

//Function to synchronize the time of all the cameras according to the system time using an Ajax call
function timeSync(){
    for (let i = 0; i < cameras.length; i++){
        currDateTime();
        var url = "";
        var data = "";
        switch(cameras[i].type) {
            case "one":
                url = cameras[i].link + "?menu=date&action=set&Year=" + year + "&Month=" + month + "&Day=" + day + "&Hour=" + hour + "&Minute=" + minute + "&Second=" + second +"&ISUTCTIME=False&SyncType=Manual&SeqId=1";
                break;
            case "two":
                url= cameras[i].link + "?action=writeparam&SYS_CURRENTTIME=" + year + "/" + month + "/" + day + "%20" + hour + "%3A" + minute + "%3A" + second;
                break;
            case "three":
                url = cameras[i].link +"/SystemHome";
                data = "<Time><timeMode>manual</timeMode><localTime>" + year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "</localTime><timeZone>CST-9:00:00></timeZone></Time>";
                break;
        } if (data != ""){
            $.ajax({
                url: url,
                type: "POST",
                username: "admin",
                password: cameras[i].pass,
                timeout:1000,
                async: true
            });
        } else {
            $.ajax({
                url: url,
                data: data,
                type: "PUT",
                username: "admin",
                password: cameras[i].pass,
                timeout:1000,
                async: true
            });
        }
    }
}

//Function that shifts the camera's view to the passed on view. If camera doesn't exist, it alerts the user
function shiftView(cam, view){
    if (camInfo(cam)){
        var temp = camInfo(cam);
        var url = "";
        var request = "";
        switch(temp.type) {
            case "one":
                url = temp.link + "?menu=preset&action=control&Channel=0&Preset=" + view + "&SeqId=1"
                request = "POST";
                break;
            case "two":
                url= temp.link + "?action=sendptz&PTZ_CHANNEL=1&PTZ_PRESETGOTO=" + view;
                request = "POST"
                break;
            case "three":
                url = temp.link +"/PTZCtrl/channels/1/presets/" + view + "/goto";
                request = "PUT";
                break;
        } $.ajax({
            url: url,
            type: request,
            username: "admin",
            password: temp.pass,
            timeout:1000,
            async: true
        });
    } else {
        alert(currCam() + "(은)는 존재하지 않는 카메라입니다.");
    }
}

//Function that shifts the camera's view to the passed on view. If the camera doesn't exist, it alerts the user
function startRoutine(cam, route){
    if (camInfo(cam)){
        var temp = camInfo(cam);
        var url = "";
        var request = "";
        switch(temp.type) {
            case "one":
                url = temp.link + "?menu=swing&action=control&Channel=0&Mode=" + route + "&SeqId=1";
                request = "POST";
                break;
            case "two":
                url= temp.link + "?action=sendgrp&GRP_CHANNEL=1&GROUP_GOTO=" + route;
                request = "POST"
                break;
            case "three":
                url = temp.link +"/PTZCtrl/channels/1/patrols/" + route + "/start";
                request = "PUT";
                break;
        } $.ajax({
            url: url,
            type: request,
            username: "admin",
            password: temp.pass,
            timeout:1000,
            async: true
        });
    } else {
        alert(currCam() + "(은)는 존재하지 않는 카메라입니다.");
    }
}

//Function returning all the cameras to their default view
function goHome(){
    for (let i = 0; i < cameras.length; i++){
        var url = "";
        var request = "";
        switch(cameras[i].type) {
            case "one":
                url = cameras[i].link + "?menu=home&action=control&Channel=0&SeqId=1" 
                request = "GET"
                break;
            case "two":
                url= cameras[i].link + "?action=sendptz&PTZ_CHANNEL=1&PTZ_PRESETGOTO=0";
                request = "GET"
                break;
            case "three":
                url = cameras[i].link + "/PTZCtrl/channels/1/presets/0/goto";
                request = "PUT"
                break;
        } $.ajax({
            url: url,
            type: request,                
            username: "admin",
            password: cameras[i].pass,
            timeout:1000,
            async: true
        });
    }
}

//Function that enables quick changes to view according to the inputted key
$(document).keyup(function(event){
    if (event.which >= 48 && event.which <=57 && event.ctrlKey && event.shiftKey){
        shiftView(currCam(),String.fromCharCode(event.which));
    }
});

//Function that enables quick starts to routine according to the inputted key
$(document).keyup(function(event){
    if (event.which >= 48 && event.which <=57 && event.altKey && event.shiftKey){
        startRoutine(currCam(),String.fromCharCode(event.which));
    }
});

//Set cameras to default, shift to day view, and start swing routines when day-view button is clicked
$("#day-view").click(function(){
    goHome();
    shiftView("A 1", 1);
    shiftView("A 3", 1);
    shiftView("A 4", 1);
    shiftView("A 7", 1);
    shiftView("A 9", 1);
    shiftView("A 10", 1);
    shiftView("B 1", 1);
    shiftView("B 2", 1);
    shiftView("B 3", 1);
    shiftView("B 6", 1);
    shiftView("B 7", 1);
    shiftView("C 3", 1);
    shiftView("C 8", 1);
    shiftView("D 1", 1);
    shiftView("D 6", 1);
    shiftView("D 9", 1);
    shiftView("E 1", 1);
    shiftView("E 7", 1);
    shiftView("E 8", 1);
    shiftView("E 9", 1);
    startRoutine("A 5", 1);
    startRoutine("B 8", 1);
    startRoutine("C 2", 1);
    startRoutine("D 2", 1);
    startRoutine("D 3", 1);
    startRoutine("D 4", 1);
    startRoutine("D 5", 1);
    startRoutine("E 2", 1);
    startRoutine("E 3", 1);
    startRoutine("E 5", 1);
    timeSync();
});

//Set cameras to default, shift to night view, and start swing routines when night-view button is clicked
$("#night-view").click(function(){
    goHome();
    shiftView("A 2", 2);
    shiftView("A 3", 2);
    shiftView("A 5", 2);
    shiftView("A 8", 2);
    shiftView("A 9", 2);
    shiftView("A 10", 2);
    shiftView("B 1", 2);
    shiftView("B 6", 2);
    shiftView("B 9", 2);
    shiftView("C 6", 2);
    shiftView("C 9", 2);
    shiftView("D 2", 2);
    shiftView("D 3", 2);
    shiftView("D 5", 2);
    shiftView("D 7", 2);
    shiftView("E 1", 2);
    shiftView("E 4", 2);
    shiftView("E 5", 2);
    shiftView("E 7", 2);
    shiftView("E 9", 2);
    startRoutine("B 5", 2);
    startRoutine("C 2", 2);
    startRoutine("C 3", 2);
    startRoutine("C 7", 2);
    startRoutine("C 8", 2);
    startRoutine("C 10", 2);
    startRoutine("D 1", 2);
    startRoutine("E 2", 2);
    startRoutine("E 6", 2);
    startRoutine("E 8", 2);
    timeSync();
});

//Run timeSync when time-set button is clicked
$("#time-set").click(function(){
    timeSync();
});

//Check if selected server or camera is online by a ping test when ping-test button is clicked. If the server or camera doesn't exist, it throw an error and alerts the user
$("#ping-test").click(function(){
    var objShell = new ActiveXObject("WScript.shell");
    try {
        objShell.run("%SystemRoot%\\System32\\ping.exe " + camInfo(currCam()).ip + " -t");
    } catch(err){
        if ($("input[name = 'temp']:checked").val() === "서버 "){
            alert(currCam() + "(은)는 존재하지 않는 서버입니다.");
        } else {
            alert(currCam() + "(은)는 존재하지 않는 카메라입니다.");
        }
    }
});
