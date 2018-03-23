$('#query1').click(function(){
	$.post("/query", {query: 1}, (res) => {
		wrapper =  document.getElementById("result_request_1");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query2').click(function(){
	$.post("/query", {query: 2}, (res) => {
	    wrapper =  document.getElementById("result_request_2");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query3').click(function(){
	$.post("/query", {query: 3}, (res) => {
	    wrapper =  document.getElementById("result_request_3");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query4').click(function(){
	$.post("/query", {query: 4}, (res) => {
	    wrapper =  document.getElementById("result_request_4");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query5').click(function(){
	$.post("/query", {query: 5}, (res) => {
	    wrapper =  document.getElementById("result_request_5");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#query6').click(function(){
	$.post("/query", {query: 6}, (res) => {
	    wrapper =  document.getElementById("result_request_6");
		var tree = jsonTree.create(res, wrapper);
	})
})

<<<<<<< HEAD
$('#sendCustomQuery1').click(function(e){
	var nbEmp = $('#nbEmployees').val()
	var limit = $('#limit').val()

	$.post("/customquery", {query: 1, nbEmp: nbEmp, limit: limit}, (res) => {
	    wrapper =  document.getElementById("result_request_custom_1");
		var tree = jsonTree.create(res, wrapper);
	})
})
=======
function ShowTree(json, elem){
	var tree = jsonTree.create(json, elem);
}
>>>>>>> 7cf0ab9c95d68a411d6d00c51cb46eff65e97964
