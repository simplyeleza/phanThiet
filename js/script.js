$(function(){

"use strict";
var topoffset=40;
var slideqty =$('#featured .item').length;
var wheight = $("#featured ").height();
var randSlide = Math.floor(Math.random()*slideqty);

$('#featured .item').eq(randSlide).addClass('active');

$('#featured .item').css('height',wheight);


//adjust height of fullheight element

$(window).resize(function(){

 wheight = $("#featured.item").height();

$('#featured ').css('height',wheight);

});



// Automatically generate carousel indicators
for(var i=0; i < slideqty; i++){

	var insertText = '<li data-target="#featured" data-slide-to="'+ i + '"> </li>';

	$('#featured ol').append(insertText);
}

$('.carousel').carousel({
	interval:2000,
	
});

$('[data-toggle="popover"]').popover();

});

