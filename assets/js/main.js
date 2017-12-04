$(document).ready(function(){

	getQuote();

	$('#searchGoogle').click(function(event) {
		event.preventDefault();

		var query = $('#query').val();

		var link = "http://google.com.ng/search?q=" + query;

		window.open(link, '_blank');	
	});


	$('#next').click((event) => {
		getQuote()
	});

		
	// Display random quote from API
	function getQuote(){

		var quoteUrl = "https://talaikis.com/api/quotes/random";
		
		$.getJSON(quoteUrl, function(data) {

			$('#quote').html(data.quote);
			$('#author').html(data.author);

		});

	}
	

	// TYPE-It js
	$('.type-it').typeIt({
      strings: [
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text', 
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  		'Hello, friends welcome to my profile !!!', 'Look very well at this text',
  	
  		],
      breakLines: false
	});

});

