var app = {};

app.init = function() {
	var hed, intro1, intro2, intro3;

	$('.submit').click(function(e){
		e.preventDefault();
		console.log('hsdf')
		

		hed = '<h1>' + $('.hed').val() + '</h1>',
		dek = '<h2>' + $('.dek').val() + '</h2>',
		image = '<div class="img-wrap"><img src="images/jays.jpg" alt=""></div>',
		intro1 	= '<li>' + $('.intro1').val() + '</li>',
		intro2 	= '<li>' + $('.intro2').val() + '</li>',
		intro3 	= '<li>' + $('.intro3').val() + '</li>';

		var content =  '<header>' + hed  + dek + '</header>' + image + '<ul>' + intro1 + intro2 + intro3 + '</ul>';
		$('.wrap').html(content);
		
	})
};

$('.compile').on('click',function(){

});

$(function() {
    app.init();
});
