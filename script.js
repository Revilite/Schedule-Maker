function time() {
    var now = moment();

    var nowHour = now.format("h");
    nowHour = parseInt(nowHour);




    var index = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    var high = [9, 10, 11, 12];
    var low = [1, 2, 3, 4, 5];



    // $("#" + i).addClass(""); 

    for (var i = 0; i < 10; i++) {
        // Make everything Primary
        $("#" + index[i]).addClass("bg-primary");
    }

    // Changes current time bg
    $("#" + nowHour).addClass("bg-success");

    for (var i = 0; i < high.length; i++) {
        // Select what has passed
        if (high[i] > nowHour) {
            $("#" + high[i]).addClass("bg-primary");
        }

        else if (high[i] < nowHour) {
            $("#" + high[i]).addClass("bg-secondary");
        }
    }
    if (9 > nowHour) {
        $("#1").addClass("bg-primary")
        $("#2").addClass("bg-primary")
        $("#3").addClass("bg-primary")
        $("#4").addClass("bg-primary")
        $("#5").addClass("bg-primary")
        $("#9").addClass("bg-secondary")
        $("#10").addClass("bg-secondary")
        $("#11").addClass("bg-secondary")
        $("#12").addClass("bg-secondary")

        for (var i = 0; i < low.length; i++) {
            if (low[i] > nowHour) {
                $("#" + low[i]).addClass("bg-primary");
            }
            else if (low[i] < nowHour) {
                $("#" + low[i]).addClass("bg-secondary");
            }
        }
    }
    // Changes current time bg
    $("#" + nowHour).addClass("bg-success");
}


// global variables
var divEl = $(".container")



divEl.on("submit", function(event){
    event.preventDefault();
    console.log("Hello World")


    var time9 = $("#9");
    var time10 = $("#10");
    var time11 = $("#11");
    var time12 = $("#12");
    var time1 = $("#1");
    var time2 = $("#2");
    var time3 = $("#3");
    var time4 = $("#4");
    var time5 = $("#5");
    var todos = {
        value9: time9.value,
        value10: time10.value,
        value11: time11.value,
        value12: time12.value,
        value1: time1.value,
        value2: time2.value,
        value3: time3.value,
        value3: time4.value,
        value4: time5.value,
    
    };

    console.log(time9.value + " there is something here i swear");

    console.log(todos);

    localStorage.setItem("todos", JSON.stringify(todos))
})





















time();


