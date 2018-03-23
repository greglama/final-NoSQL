$('#query1').click(function(){
	$.post("/query", {query: 1}, (res) => {
		$("#result_request").empty();
		wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query2').click(function(){
	$.post("/query", {query: 2}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query3').click(function(){
	$.post("/query", {query: 3}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query4').click(function(){
	$.post("/query", {query: 4}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query5').click(function(){
	$.post("/query", {query: 5}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query6').click(function(){
	$.post("/query", {query: 6}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#sendCustomQuery1').click(function(e){
	var nbEmp = $('#nbEmployees').val()
	var limit = $('#limit').val()

	$.post("/customquery", {query: 1, nbEmp: nbEmp, limit: limit}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

function ShowTree(json, elem){
	var tree = jsonTree.create(json, elem);
}
