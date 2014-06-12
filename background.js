chrome.browserAction.onClicked.addListener(function(tab){
	/*Isolate Video Player*/
	$('form').replaceWith($('div .application/x-shockwave-flash', 'form').html());
});
