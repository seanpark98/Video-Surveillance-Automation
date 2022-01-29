//Function to synchronize the time of all the cameras according to the system time using an Ajax call(some parts masked due to security reasons) 
function timeSync(){
    for (let i = 0; i < cameras.length; i++){
        currDateTime();
        var url = "";
        var data = "";
        console.log(cameras[i].type);
        switch(cameras[i].type) {
            case "one":
                url = cameras[i].link + "?menu=date&action=set&Year=" + year + "&Month=" + month + "&Day=" + day + "&Hour=" + hour + "&Minute=" + minute + "&Second=" + second +"&ISUTCTIME=False&SyncType=Manual&SeqId=1";
                break;
            case "two":
                url= cameras[i].link + "?action=writeparam&SYS_CURRENTTIME=" + year + "/" + month + "/" + day + "%20" + hour + "%3A" + minute + "%3A" + second;
                break;
            case "three":
                url = cameras[i].link +"SystemHome";
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

//Button to run function timeSync
$("#time-set").click(function(){
    timeSync();
});