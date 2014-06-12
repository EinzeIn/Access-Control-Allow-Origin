chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
	/*Isolate Video Player*/
	$("body").html($("body").html().replaceWith(document.getElementByID('flashcontent').innerHtml));
  });
});
