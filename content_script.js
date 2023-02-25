chrome.storage.sync.get(['links'], function(items) {
  console.log(items['links'])
  for(var i = 0 ; i<items['links'].length; i++){
    if(window.location.toString().includes(items['links'][i])){
      document.body.innerHTML = "YOU MUST STAY FOCUSED TO THE GOAL!";
    }
  }
  message('Settings retrieved', items);
    });
