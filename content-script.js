document.addEventListener('DOMContentLoaded', function(){
  console.log('文件加载完成');

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse(document.getElementById('su').value);
  });
});
