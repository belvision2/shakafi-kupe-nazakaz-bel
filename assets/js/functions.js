var ansempt="Вы не отправили данные, поэтому мы не сможем с Вами связаться! Пожалуйста, попробуйте снова.";
function Clear() {
	var inputs, index;
	inputs = document.getElementsByTagName('input');
	for (index = 0; index < inputs.length; ++index) {
		if (inputs[index].type != 'submit' && inputs[index].type != 'hidden') { inputs[index].value=''; }
	}
	document.getElementById('comment').value = '';
}



function hasPlaceholderSupport() {
  var input = document.createElement('input');
  return ('placeholder' in input);
}

/*
function initialize() {
	var map = new google.maps.Map(document.getElementById('map'),mapOptions);
	var featureOpts = [ { "stylers": [ { "saturation": 0 } ] } ];
	var styledMap = new google.maps.StyledMapType(featureOpts,{name: "Styled Map"});
	var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(56.092175, 37.123872),
		disableDefaultUI: true,
		scrollwheel: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	var map = new google.maps.Map(document.getElementById('map'),mapOptions);
	var Marker = new google.maps.Marker({
		position: new google.maps.LatLng(56.093507, 37.107159),
		map: map,
		icon: {
			url: 'images/placemark.png',
			size: new google.maps.Size(240,154),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(40, 150)
		}
	});
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}
google.maps.event.addDomListener(window, 'load', initialize);
*/

$(document).ready(function() {
	ansmsg=ansempt;
//	$(".exmpls").colorbox({rel:'exmpls', fixed:true});
//	$(".buttonLinkWithImage").colorbox({inline:true, fixed:true, title:false, opacity:0.8, onClosed:function(){ alert(ansmsg); ansmsg=ansempt; }});
	$(".buttonLinkWithImage").colorbox({inline:true, fixed:true, title:false, opacity:0.8});
	if (!hasPlaceholderSupport()) {
        $('[placeholder]').focus(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
          }
        }).blur(function() {
          var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
          }
        }).blur();
}
});
