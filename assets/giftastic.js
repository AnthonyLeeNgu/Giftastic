var sports = ["Baseball", "Football", "Basketball"];
var sportAddition = "";
var sportName = "";
$("#submit").on("click", function() {

    var animal = $(this).attr("data-animal");

    sportAddition = $("#sport-addition").val()
  
    var newButton = $("<button>");
    newButton.attr("type", "button");
    newButton.attr("data-name", sportAddition);
    newButton.attr("class", "sport-button btn-primary btn-secondary");
    
   
    sports.unshift(sportAddition);

    newButton.text(sportAddition);
  
    $("#sport-buttons").append(newButton);
    

    console.log(sportAddition);
    console.log(sports);
})
$("#sport-buttons").on("click", ".sport-button", function() {
  
    sportName = $(this).text()
 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    sportName + "&api_key=cxh7RvHzjpIPl7D4JXOQqqKfmg4vzPC9&limit=10"
    ;
    $.ajax ({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        var result = (response.data);
        console.log(result);
        for (var i = 0; i < result.length; i++) {
            var gifContainer = $("<div>");
            gifContainer.attr("class", "container");
            var gifImage = $("<img>");
            gifImage.attr("src", result[i].images.fixed_height.url);
            
            gifContainer.prepend(gifImage);
            $("#gifs").prepend(gifContainer);


            var p = $("<p>").text("Rating: " + result[i].rating);
        }
    })
    
})


   