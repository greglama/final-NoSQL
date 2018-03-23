$("#submit").click(function(){
      let name = $('#queryTextArea').val();
      console.log(name)
      $.post("/saveQuery", name, (res) => {
            console.log(res);
      })
      $('#queryTextArea').val("")
})

$('#home').click(function(){
      window.location = "../";
})