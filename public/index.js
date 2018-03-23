
$('#query1').click(function(){
	$.post("/query/1", (res) => {
	    console.log(res);
	    $("#result_request_1").text(res)
	})
	
})