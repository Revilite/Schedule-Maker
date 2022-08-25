function time(){
var now = moment();
var amCheck ="AM"
var nowHour = 5;


var index = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var high = [9, 10, 11, 12];
var low = [1, 2, 3, 4, 5];
// var amCheck = now.calendar();
// var nowHour = now.format("h");
nowHour = parseInt(nowHour);



// $("#" + i).addClass(""); 

for(var i = 0; i < 10; i++){
    // Make everything Primary
    $("#" + index[i]).addClass("bg-primary");
}

    // Changes current time bg
    $("#" + nowHour).addClass("bg-success");

for(var i = 0; i < high.length; i++){
    // Select what has passed
     if(high[i] >  nowHour ){
        console.log("Hello")
        $("#" + high[i]).addClass("bg-primary"); 
    }

    else if(high[i] < nowHour ){
        $("#" + high[i]).addClass("bg-secondary");
    }
}

if (9 > nowHour){
    $("#1").addClass("bg-primary")
    $("#2").addClass("bg-primary")
    $("#3").addClass("bg-primary")
    $("#4").addClass("bg-primary")
    $("#5").addClass("bg-primary")
    $("#9").addClass("bg-secondary")
    $("#10").addClass("bg-secondary")
    $("#11").addClass("bg-secondary")
    $("#12").addClass("bg-secondary")

    for(var i = 0; i < low.length; i++){
    


        if (low[i] > nowHour){
           console.log("True")
           $("#" + low[i]).addClass("bg-primary");
       }
       else if(low[i] < nowHour){
           console.log(false)
           $("#" + low[i]).addClass("bg-secondary");
       }
   }
   
}





    // Changes current time bg
$("#" + nowHour).addClass("bg-success");



}

time();