(function(){
	
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imgService = new ImageService();
	
	imgService.getImage(function(image){
		console.log(image);
		//What can you do with this image object?
		new Vue({
			el: '#background',
			data:{
				image: JSON.parse(image)
			},
			mounted: function() {
				console.log(this.image)
				console.log(this.image.url)
			}
		})
		

	})
	
}())
