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
	var nbProducts = $('#nbProducts').val()
	var limit = $('#limit1').val()

	$.post("/customquery", {query: 1, nbProducts: nbProducts, limit: limit}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#sendCustomQuery2').click(function(e){
	var nbEmp = $('#nbEmployees').val()
	var limit = $('#limit2').val()

	$.post("/customquery", {query: 2, nbEmp: nbEmp, limit: limit}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

$('#sendCustomQuery5').click(function(e){
	var year = $('#year').val()
	var nbProviders = $('#nbProviders').val()
	var limit = $('#limit5').val()

	$.post("/customquery", {query: 5, year: year, nbProviders: nbProviders, limit: limit}, (res) => {
		$("#result_request").empty();
	    wrapper =  document.getElementById("result_request");
		var tree = jsonTree.create(res, wrapper);
	})
})

function ShowTree(json, elem){
	var tree = jsonTree.create(json, elem);
}