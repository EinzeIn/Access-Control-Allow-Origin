chrome.browserAction.onClicked.addListener(function(tab){
	/*Isolate Video Player*/
	$('body').replaceWith($('div .application/x-shockwave-flash', 'body').html());
});
