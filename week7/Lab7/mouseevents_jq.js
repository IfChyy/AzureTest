// JavaScript Document

$(function(){
	// usual main starting point when web page loads
	
	
	// use jquery to find the div with id button1
	// set the mouse enter and mouse leave functions, just like the onclick in the lecture
	// use the html attribute to set the text
	$("#button1").mouseenter(function(){
		$("#button1").text("Thank you");
	});

	$("#button1").mouseout(function(){
		$("#button1").text("Mouse over me");
	});

	$("#button2").mousedown(function(){
		$("#button2").text("Release me!");
        $("#button2").css("background", "lightblue");

	});

	$("#button2").mouseup(function(){
		$("#button2").html("Thank you ma frend!");
        $("#button2").css("background", "lightgreen");
	});
	
	// now you need to do the same for button1 for mouseleave
	// and mouseup, mousedown for button2
	
});

