$('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });

$('#submitButton').click(function(){
      let name = $('#textBar').val();
      let pass = $('#passwordBar').val();
      $.post("/login", name + "," + pass, (res) => {
            console.log(res);
      })
})