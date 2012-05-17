/* Author:

*/

$(document).ready(function() {
	$('.panel-button .button').click(function(e) {
		e.preventDefault();

		var arrow = '<span class="panel-button-arrow"></span>';
		var txt = $(this).html() == arrow + 'View Properties' ? arrow + 'Close Properties' : arrow + 'View Properties';
		$(this).html(txt);

		$('.logos').animate({height: 'toggle'});
	});
});
