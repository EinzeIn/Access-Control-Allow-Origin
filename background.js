chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
	/*Isolate Video Player*/
	//$('#body').html($('#flashcontent').html());
	$('#flashcontent').remove();
	//document.body.innerHTML = document.getElementById('flashcontent').innerHTML;
  });
});
