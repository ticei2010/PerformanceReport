/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//window.alert("text");
var pieceCount = 0;

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

function addPieceGroup() {
	var test = $("<tbody>", {
		"id": "pieceEntry" + pieceCount,
		"class": "pieceEntry"
	});
	$("#pieceEntryTable").append(test);
}

function addNewPieceRow() {
	
	var temp = $("#pieceRow").clone();
	temp.change(event, newPieceListener).attr("id", "pieceRow" + pieceCount);
	//add a new tbody to serve as a container for this piece
	$("#pieceEntryTable").append($("<tbody>", {
		"id": "pieceEntry" + pieceCount,
		"class": "pieceEntry",
		on: {
			focusin: function (event) { addNewMovementRow(event); },
			
		}
	}));
	temp.appendTo($("#pieceEntry" + pieceCount));
	pieceCount += 1;
}

function addNewMovementRow(event) {
	if (event.type == "focusin") {
		//begin by selecting the tbody element of the active piece
		//then retrieve the piece id as well as the last movement id (if there was one)
		var parent = $(event.target).parents("tbody");
		var piece = $(".pieceRow", parent);
		piece = piece.attr("id").match("\\d");
		piece = piece[0];
		var lastMovement = $(".movementRow:last", parent);
		if (lastMovement != null & lastMovement.length != 0) {
			//only add a new movemnt row if the last one has been used
			if ($("input:first", lastMovement).val() != "") {
				lastMovement = lastMovement.attr("id").match("^movementRow\\d-(\\d)");
				lastMovement = lastMovement[1];
				$(".movementRow").unbind();
			} else {
				return;
			};
		} else {
			lastMovement = -1;
		};
		var rowId = "movementRow" + piece + "-" + lastMovement + 1
		parent.append($("#movementRow").clone().attr('id', rowId));

	}
}
function newMovementListener() {

}