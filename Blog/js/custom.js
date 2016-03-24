// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(100).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
    $("#1").click(function(){
    	window.location.href='1.html';
	});
    $("#2").click(function(){
    	window.location.href='2.html';
	});
    $("#3").click(function(){
    	window.location.href='3.html';
	});
    $("#4").click(function(){
    	window.location.href='4.html';
	});
    $("#5").click(function(){
    	window.location.href='5.html';
	});
    $("#6").click(function(){
    	window.location.href='6.html';
	});
    $("#7").click(function(){
    	window.location.href='7.html';
	});
})