/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var pieceCount = 0;

$(document).ready(function () {
	addPieceRow(0);
	delegateListeners();
});

function delegateListeners() {
	$("#pieceEntryTable").on("change", ".pieceRow", function () { pieceListener() });
	$("#pieceEntryTable").on("click", function (event) { emptyClear(event); movementListener(event); });

}

function pieceListener(event) {
	//inspect the last piece and add a new row if it has content
	var lastPiece = $("#pieceEntryTable .pieceRow:last")
	if ($("input", lastPiece).val() != "") {
		lastPiece = lastPiece.attr("id").match("\\d");
		var pieceId = Number(lastPiece[0]) + 1;
		addPieceRow(pieceId);
	}
}


function addPieceRow(pieceId) {
	//add a new tbody to serve as a container for this piece
	$("#pieceEntryTable").append($("<tbody>", {
		"id": "pieceEntry" + pieceId,
		"class": "pieceEntry",
	}));

	var temp = $("#pieceRow").clone().attr("id", "pieceRow" + pieceId);
	temp.appendTo($("#pieceEntry" + pieceId));
	pieceId += 1;
}

function addMovementRow(parent, movementId) {
	parent.append($("#movementRow").clone().attr('id',"movementRow" + movementId));
}

function movementListener(event) {
	//begin by selecting the tbody element of the active piece
	//then retrieve the piece id as well as the last movement id (if there was one)
	

	var parent = $(event.target).parents("tbody");

	var piece = $(".pieceRow", parent);
	piece = piece.attr("id").match("\\d");
	piece = piece[0];
	
	var lastMovement = $(".movementRow:last", parent);
	if (lastMovement != null && lastMovement.length != 0) {
		//only add a new movemnt row if the last one has been used
		if ($("input:first", lastMovement).val() != "") {
			lastMovement = lastMovement.attr("id").match("^movementRow\\d-(\\d)");
			lastMovement = lastMovement[1];
		} else {
			return; // the last row does not contain info, so don't add a new one
		};
	} else {
		lastMovement = -1;
	};
	var movementId =  piece + "-" + (lastMovement + 1);
	addMovementRow(parent, movementId);
}

function emptyClear(event) {
	//remove all empty movement rows except for the one in the selected piece
	var parent = $(event.target).parents("tbody")
	var pieces = $(".pieceEntry", $("#addPieces"))
	for (i = 0; i < pieces.length; i++) {
		if (pieces[i].id != parent[0].id) {
			var lastMovement = $(".movementRow:last", pieces[i]);
			if ($("input:first", lastMovement).val() == "") {
				lastMovement.remove();
			}
		}
	}
}