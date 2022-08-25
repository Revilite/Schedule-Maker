function time(){
var now = moment();
var amCheck ="AM"
var nowHour = "12";


var index = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var high = [9, 10, 11, 12];
var low = [1, 2, 3, 4, 5];
// var amCheck = now.calendar();
// var nowHour = now.format("h");
nowHour = parseInt(nowHour);

console.log(nowHour)

// $("#" + i).addClass(""); 

for(var i = 0; i < 9; i++){
    // Make everything Primary
    $("#" + index[i]).addClass("bg-primary");
}

    // Changes current time bg
    $("#" + nowHour).addClass("bg-success");

for(var i = 0; i < high.length; i++){
    // Select what has passed
     if(high[i] <  nowHour){
        console.log("True")
        $("#" + high[i]).addClass("bg-secondary");
    }
    else{
        $("#" + index[i]).addClass("bg-primary");
    }
}



    // Changes current time bg
$("#" + nowHour).addClass("bg-success");


console.log(high.includes(nowHour))
console.log(low.includes(nowHour))
console.log(index.includes(nowHour))

}

time();