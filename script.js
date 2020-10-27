//javascript for how to calculate the input and also how to make it appear in the answer also fix classes//

//style text and also make a box around the quest//
$(".button3").click(function() {
    let yourName = $(".speech1").val();
    $(".name").append(`By the year 2035 ${yourName}`);
});

$(".button3").click(function() {
    let Youtuber = $(".speech2").val();
    $(".favYoutuber").append(`would have watched ${Youtuber},`);
});

$(".button3").click(function() {
    let Hours = $(".speech3").val();
    $(".hours").append(`a total of ${180*Hours}`);
});


