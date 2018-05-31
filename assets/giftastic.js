var sports = ["Baseball", "Football", "Basketball"];
var sportAddition = "";
var sportName = "";
$("#submit").on("click", function() {
    // Capturing the value of the input entry
    sportAddition = $("#sport-addition").val()
    // Creating the new button element and attributes
    var newButton = $("<button>");
    newButton.attr("type", "button");
    newButton.attr("data-name", sportAddition);
    newButton.attr("class", "sport-button btn-primary btn-secondary");
    
    // Dropping the value to the beginning of the fruits array
    sports.unshift(sportAddition);
    // Add the fruitAddition inside the text of the new button
    newButton.text(sportAddition);
    // Appending the new button
    $("#sport-buttons").append(newButton);
    
    // Debugging
    console.log(sportAddition);
    console.log(sports);
})
$("#sport-buttons").on("click", ".sport-button", function() {
    // Capture the text of the element in the 
    sportName = $(this).text()
    // Declaring URL variable to be used in API call
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    sportName + "&api_key=cxh7RvHzjpIPl7D4JXOQqqKfmg4vzPC9"
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
        }
    })
    
})