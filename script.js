function time(){
var now = moment();
nowHour = 5;

// var nowHour = now.format("h");

for(var i = 9; i < 17; i++){
    if (i < nowHour){
        $("#" + i).addClass("bg-secondary");
    }
}


}

time();