$("#submit").click(function(){
      let query = $('#queryTextArea').val();
      $.ajax({
            type: "POST",
            url: "/saveQuery",
            data: {"query":query},
            success: success,
            dataType: "application/json"
          });
      $('#queryTextArea').val("")
})

function success(res){
      console.log(res);
}

$('#home').click(function(){
      window.location = "../";
})