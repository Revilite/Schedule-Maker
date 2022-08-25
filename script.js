function time(){
var now = moment();
var amCheck ="AM"
var nowHour = "10";


var index = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var high = ["9", "10", "11", "12"];
var low = ["1", "2", "3", "4", "5"];
// var amCheck = now.calendar();
// var nowHour = now.format("h");
console.log(nowHour)

// $("#" + i).addClass(""); 

for(var i = 0; i < 13; i++){
    // Changes current time bg
    if (nowHour == i){
        $("#" + nowHour).addClass("bg-success");
    }
    // Select what has passed
    else if(high.includes(nowHour)){
        $("#" + high[i]).addClass("bg-secondary");
    }
    else if (low.includes(nowHour)){
        $("#" + low[i - 2]).addClass("bg-secondary");
    }
    // Make rest Primary
    $("#" + index[i]).addClass("bg-primary");
    

}

console.log(high.includes(nowHour))
console.log(low.includes(nowHour))
console.log(index.includes(nowHour))

}

time();