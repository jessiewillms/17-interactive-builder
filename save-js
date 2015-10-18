var app = {
	content: ""
};

app.init = function() {
	$('input').click(function(){
		$(this).val("")
	})
	$('.submit').click(function(e){
		e.preventDefault();

		var hed = '<h1>' + $('.hed').val() + '</h1>',
		intro = '<p class="intro">' + $('.intro').val() + '</p>',
		dek = '<p class="dek">' + $('.dek').val() + '</p>',
		image = '<img src="images/jays.jpg" alt="">',

		txt1 = '<li>' + $('.txt1').val() + '</li>',
		txt2 = '<li>' + $('.txt2').val() + '</li>',
		txt3 = '<li>' + $('.txt3').val() + '</li>';

		txt4 = '<li>' + $('.txt4').val() + '</li>',
		txt5 = '<li>' + $('.txt5').val() + '</li>',
		txt6 = '<li>' + $('.txt6').val() + '</li>'

		span4 = '<span>' + $('.span4').val() + '</span>',
		span5 = '<span>' + $('.span5').val() + '</span>',
		span6 = '<span>' + $('.span6').val() + '</span>';

		var header = '<header class="cf"><div class="inner-wrap"><div class="img-wrap"> <img src="images/jays.jpg" alt=""> </div></div><div class="inner-wrap">' + hed + intro + dek + '</div></header>';

		var ul = '<ul class="text-wrap cf">' + txt1 + txt2 + txt3 + '</ul>';

		var ul_2 = '<ul class="text-wrap cf">' + span4 + txt4 + span5 + txt5 + span6 + txt6 + '</ul>';


		//compiles inputs to 
		app.content =  '<section class="wrap" id="wrap-id">' + header + ul + ul_2 + '</section>';
		$('.wrap').html(app.content);
		
	})
};

$('.compile').on('click',function(){

	var linkToCSS = '<link rel="stylesheet" href="http://jessiewillms.github.io/17-interactive-builder/styles/styles.css">';

	var linkToFont = "<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>";

	var iframe = '<iframe frameborder="0" title="Features " id="myIframe9034" src="http://projects.thestar.com/poll-tracker/PollTrackerVersion4.html" scrolling="no"></iframe>';

	var getHTML = document.getElementById("wrap-id").outerHTML.toString();

	$('.iframe').text(linkToFont + linkToCSS + getHTML)

});

$(function() {
    app.init();
});


