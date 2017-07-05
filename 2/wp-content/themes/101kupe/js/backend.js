jQuery(document).ready(function($) {



	$('.wpcf7-submit').on('click', function(event) {
		event.preventDefault();
		var input = $(event.target).closest(".wpcf7-form").find('.input-text');
		var form = $(event.target).closest(".wpcf7-form");
		var x = $(event.target).closest(".wpcf7-form").find("input[type='text']");
		var y = $(event.target).closest(".wpcf7-form").find("input[type='tel']");
		x.removeClass('border1');
		y.removeClass('border2');
		if( input[0]['value'] != '' && input[1]['value'] != '' && $.isNumeric(input[1]['value'])){form.submit();}
		if( input[0]['value'] == '' ){ x.addClass('border1');}
		console.log();
		if( input[1]['value'] == '' || !$.isNumeric(input[1]['value']) ){ y.addClass('border2');}
		//
             yaCounter25420997.reachGoal('order');

	});
	
});