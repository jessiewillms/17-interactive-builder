var app = {
    content: ""
};

app.init = function() {
    $('.wrap-input:nth-of-type(1)').fadeIn();

    $('input').focus(function(){
		$('.inner-wrap, .text-wrap').children().removeClass('match');
		var getInputClass = $(this).attr('data-attr');
        console.log(getInputClass)

		$('.inner-wrap  > *, .text-wrap > *').each(function () {
		    var getCurrentClass = $(this).attr('data-attr');

		    if (getInputClass == getCurrentClass) {
		    	$(this).addClass('match').css('opacity','1');
		    } else {
		    	$(this).css('opacity','.25')
		    };
		    
		});
    });
};

$('h2').click(function(){
    $(this).children().slideDown();
});


$('.submit').click(function(e) {
    e.preventDefault();

    var hed = '<h1>' + $('.hed').val() + '</h1>',
        intro = '<p class="intro">' + $('.intro').val() + '</p>',
        label = '<p class="label">' + $('.label').val() + '</p>',
        image = '<img src="images/jays.jpg" alt="">',

        txt1 = '<li>' + $('.txt1').val() + '</li>',
        txt2 = '<li>' + $('.txt2').val() + '</li>',
        txt3 = '<li>' + $('.txt3').val() + '</li>',

        txt4 = '<li>' + $('.txt4').val() + '</li>',
        txt5 = '<li>' + $('.txt5').val() + '</li>',
        txt6 = '<li>' + $('.txt6').val() + '</li>',

        span4 = '<span>' + $('.span4').val() + '</span>',
        span5 = '<span>' + $('.span5').val() + '</span>',
        span6 = '<span>' + $('.span6').val() + '</span>';

    var header = '<header class="cf"><div class="inner-wrap"><div class="img-wrap"> <img src="images/jays.jpg" alt=""> </div></div><div class="inner-wrap">' + label + hed + intro + '</div></header>',
        ul = '<ul class="text-wrap cf">' + txt1 + txt2 + txt3 + '</ul>',
        ul_2 = '<ul class="text-wrap cf">' + span4 + txt4 + span5 + txt5 + span6 + txt6 + '</ul>';


    //compiles inputs to 
    app.content = '<section class="wrap" id="wrap-id">' + header + ul + ul_2 + '</section>';
    $('.generated-card').html(app.content);

    $('.preview').fadeOut();

})


$('.compile').on('click', function() {


    var linkToCSS = '<link rel="stylesheet" href="http://jessiewillms.github.io/17-interactive-builder/styles/styles.css">';

    var linkToFont = "<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>";

    var iframe = '<iframe frameborder="0" title="Features " id="myIframe9034" src="http://projects.thestar.com/poll-tracker/PollTrackerVersion4.html" scrolling="no"></iframe>';

    var getHTML = document.getElementById("generated-card-output").outerHTML.toString();

    $('.iframe').text(linkToFont + linkToCSS + getHTML)

});

$(function() {
    new Clipboard('.compile');

    app.init();
});
