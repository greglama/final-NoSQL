$('#query1').click(function(){
	$.post("/query/1", (res) => {
		console.log(res);
		wrapper =  document.getElementById("result_request_1");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query2').click(function(){
	$.post("/query/2", (res) => {
	    console.log(res);
	    $("#result_request_2").text(res)
	})
})

$('#query3').click(function(){
	$.post("/query/3", (res) => {
	    console.log(res);
	    $("#result_request_3").text(res)
	})
})

$('#query4').click(function(){
	$.post("/query/4", (res) => {
	    console.log(res);
	    $("#result_request_4").text(res)
	})
})

$('#query5').click(function(){
	$.post("/query/5", (res) => {
	    console.log(res);
	    $("#result_request_5").text(res)
	})
})

$('#query6').click(function(){
	$.post("/query/6", (res) => {
	    console.log(res);
	    $("#result_request_6").text(res)
	})
})