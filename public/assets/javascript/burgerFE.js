$(function() {

    $(".create-burger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".devour").on("click", function() {
        // alert($(this).data("id"));
        var id = $(this).data("id");

        var successObj = {
            sucess: true
        }

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: successObj
        }).then(function() {
            console.log("changed to devoured");
            location.reload();
        });
    });


    $(".delete").on("click", function(){
      var id = $(this).data("id");

      $.ajax("/api/burger/" + id, 
      {
        type: "DELETE"
      }).then(function(){
        console.log("Deleted id " + id);

        location.reload();
      });
    });



});