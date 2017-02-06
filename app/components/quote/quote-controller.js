(function(){
	
	//Get your QuoteService
	//Your QuoteService is a global constructor function what can you do here if you new it up?
	var quoteService = new QuoteService();
	
	quoteService.getQuote(function(quote){
		console.log(quote);
		var parsedQuote = JSON.parse(quote)
		var quoteText = parsedQuote.quote
		var quoteAuthor = parsedQuote.author
		//What can you do with this quote object?
		new Vue({
			el: '#quote',
			data:{
				quote: quoteText,
				author: quoteAuthor,
				isActive: false
			},
			mounted: function() {
				console.log(this.quote)
			}
		})
	})
}())
