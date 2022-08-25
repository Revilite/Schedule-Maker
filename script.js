function time(){
var now = moment();
nowHour = 10;
// var nowHour = now.format("h");
var amCheck = now.calendar();

for(var i = 0; i < 17; i++){
    if (nowHour == i){
        $("#" + i).addClass("bg-success");
    }
    else if (i <= 12 && i >= 9 && nowHour != i){
       
        $("#" + i).addClass("bg-secondary");
    }
    else if (i <= 5 && i >= 1 && nowHour != i){
        $("#" + i).addClass("bg-secondary");
    }
    else{
        $("#" + i).addClass("bg-primary");
    }
    
}




}

time();