$(document).ready(function(){

	var resumen = $('#resumen');
	var sensacion = $('#sensacion');
	var probabilidad = $('#probabilidad');
	var humedad = $('#humedad');
	var imagen = $('.img-responsive');
	var escondido = $('#escondido');

	var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
	var key = 'e13fc8c9ff2687b5d99c22c9ec0c84b9';
	var coords = {
		scl: '-33.4488897,-70.6692655',
		ccp: '-36.8201352,-73.0443904'
	}

	var queryParams =['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es' , 'units=auto' ];
	
	var image = {
		'clear-day': 'https://www.iconsdb.com/icons/preview/orange/sun-3-xxl.png',
		'rain': 'http://www.ligadom.com/wp-content/uploads/2016/10/rain-cloud-icon-5.png'
	}


	$('#select').on('change', function(){
		$.ajax({
			url: url + key + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
			method: 'GET'
		}).then(function(data) {
			resumen.text(parseInt(data.currently.temperature) + '°' + data.currently.summary);
			sensacion.text(data.currently.apparentTemperature + '°');
			probabilidad.text(data.currently.precipProbability * 100 + '%');
			humedad.text(data.currently.humidity * 100 + '%');
			imagen.attr('src', image[data.currently.icon]);
			escondido.removeAttr('hidden');
		});
	});
});




