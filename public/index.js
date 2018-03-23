$('#query1').click(function(){
	$.post("/query/1", (res) => {
		wrapper =  document.getElementById("result_request_1");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query2').click(function(){
	$.post("/query/2", (res) => {
	    wrapper =  document.getElementById("result_request_2");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query3').click(function(){
	$.post("/query/3", (res) => {
	    wrapper =  document.getElementById("result_request_3");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query4').click(function(){
	$.post("/query/4", (res) => {
	    wrapper =  document.getElementById("result_request_4");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query5').click(function(){
	$.post("/query/5", (res) => {
	    wrapper =  document.getElementById("result_request_5");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query6').click(function(){
	$.post("/query/6", (res) => {
	    wrapper =  document.getElementById("result_request_6");
		var tree = jsonTree.create(res, wrapper);
	})
})

function ShowTree(json, elem){
	var tree = jsonTree.create(json, elem);
}