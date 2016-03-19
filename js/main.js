$(document).ready(function(){

	$("#boston").on('mouseenter',function(){
			$(this).toggleClass("hidden");
			$("#beanTown").toggleClass("hidden");
	});
	$("#secBoston").on('mouseleave',function(){
			$("#boston").toggleClass("hidden")
			$("#beanTown").toggleClass("hidden");
	});
});

$(document).ready(function(){

	$("#newYork").on('mouseenter',function(){
			$(this).toggleClass("hidden");
			$("#bigApple").toggleClass("hidden");
	});
	$("#secNewyork").on('mouseleave',function(){
			$("#newYork").toggleClass("hidden")
			$("#bigApple").toggleClass("hidden");
	});
});

$(document).ready(function(){

	$("#paris").on('mouseenter',function(){
			$(this).toggleClass("hidden");
			$("#laVille").toggleClass("hidden");
	});
	$("#secParis").on('mouseleave',function(){
			$("#paris").toggleClass("hidden")
			$("#laVille").toggleClass("hidden");
	});
});

$(document).ready(function(){

	$("#venice").on('mouseenter',function(){
			$(this).toggleClass("hidden");
			$("#brideOf").toggleClass("hidden");
	});
	$("#secVenice").on('mouseleave',function(){
			$("#venice").toggleClass("hidden")
			$("#brideOf").toggleClass("hidden");
	});
});