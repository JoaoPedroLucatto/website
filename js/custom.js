
//
$(document).ready(function() {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'autoScrolling': false,
		'setFitToSection': false,
		'fitToSection': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
		'setResponsive': true,
	});

	setTimeout(function() {
		var typed = new Typed('#element', {
		  strings: [
			"Hi! I'm João Pedro"
		  ],
		  typeSpeed: 100,
		  contentType: 'html'
		});
		var typed2 = new Typed('#element2', {
			strings: [
			  "Software Developer | Ruby on Rails | Go | API | DevOps"
			],
			typeSpeed: 120,
			contentType: 'html'
		  });
	}, 500);

});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
