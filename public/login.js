$('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });

$('#submitButton').click(function(){
      let name = $('#textBar').val();
      let pass = $('#passwordBar').val();
      if(name === "Admin" && pass === "admin"){
            window.location = "../admin";
      }
})