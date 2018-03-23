$('#query1').click(function(){
	$.post("/query/1", (res) => {
		console.log(res);
		ShowTree(res, document.getElementById("result_request_1"));
	})
})

$('#query2').click(function(){
	$.post("/query/2", (res) => {
	    console.log(res);
	    ShowTree(res, document.getElementById("result_request_2"));
	})
})

$('#query3').click(function(){
	$.post("/query/3", (res) => {
	    console.log(res);
	    ShowTree(res, document.getElementById("result_request_3"));
	})
})

$('#query4').click(function(){
	$.post("/query/4", (res) => {
	    console.log(res);
	    ShowTree(res, document.getElementById("result_request_4"));
	})
})

$('#query5').click(function(){
	$.post("/query/5", (res) => {
	    console.log(res);
	    ShowTree(res, document.getElementById("result_request_5"));
	})
})

$('#query6').click(function(){
	$.post("/query/6", (res) => {
	    console.log(res);
		ShowTree(res, document.getElementById("result_request_6"));
	})
})

function ShowTree(json, elem){
	var tree = jsonTree.create(json, elem);
}