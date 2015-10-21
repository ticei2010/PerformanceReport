/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//window.alert("text");
var pieceCount = 0;

$(document).ready(function () {
	test();
});

function test() {
	$("#pieceEntryTemplate tr").clone().appendTo($("#pieceEntry"));
	$("#pieceEntry .pieceRow:last input").change(function () {
		if ($(":first", this).valueOf !== "") {
			if ($(":last", this).valueOf !== "") {
				$("#pieceEntryTemplate tr").clone().appendTo($("#pieceEntry"));
			}
		}
	}
);
}
