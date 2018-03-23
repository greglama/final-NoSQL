$('#query1').click(function(){
	$.post("/query/1", (res) => {
		console.log(res);
		wrapper =  document.getElementById("result_request_1");
		var tree = jsonTree.create(res, wrapper);
	})
	
})