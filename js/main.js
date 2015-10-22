/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//window.alert("text");
//var pieceCount = 0;

$(document).ready(function () {
	addNewPieceRow();
});


function newPieceListener(event) {
	var parent = $(event.target).parents("tr");
	if ($("input:first", parent).val() !== "") {
		if ($("input:last", parent).val() !== "") {
			$("#pieceEntry .pieceRow:last").unbind("change");
			addNewPieceRow();
		}
	}
}

function addNewPieceRow() {
	var temp = $("#pieceEntryTemplate .pieceRow").clone()
	temp.change(event, newPieceListener)
	$("#pieceEntry").append(temp)
}

