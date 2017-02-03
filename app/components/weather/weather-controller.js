(function (){
	
	var wc = this;
	var weatherService = new WeatherService();

	
	weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
		var weatherData = JSON.parse( weather )

		var temp = weatherData.main.temp;
		var tempC = temp - 273.15;
		var tempF = tempC * 1.8 + 32;

		new Vue({
			el: '#weather',
			data:{
				weather: weatherData,
				temp: temp,
				tempC: tempC,
				tempF: tempF
			},
			mounted: function() {
				console.log(this.temp)
			},
		})
	})
	
	
	
	
	
}())
