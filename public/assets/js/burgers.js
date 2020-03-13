$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let myBurger = $("#burg").val().trim()
      
      if(myBurger === ""){
        alert("You must give your burger a name.")
        return
      }
      var newBurger = {
        name: myBurger,
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added new burger");
        location.reload();
      });
    });
  
    $(".devourburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });
  
    $("#trashbutton").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });