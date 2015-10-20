/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//window.alert("text");

$(document).ready(function(){
	test();
});

function test() {
	$("#pieceEntryTemplate").clone().appendTo($("#pieceEntry"));
	/* $("#pieceEntry .pieceRow:last input").change(function(){
		 if ($(":first", this).valueOf !== "") {
			 if ($(":last", this).valueOf !== "") {
				 $(".pieceRow:last").hide()
				 $()
			 }}
 }
);*/
}
