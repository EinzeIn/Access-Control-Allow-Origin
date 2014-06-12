chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
	/*Isolate Video Player*/
	$('#body').html($('flashcontent').html());
  });
});
