var displayWebsites = function() {
  let list = document.getElementById("website-list");
  document.getElementById("website-to-remove").innerHTML = "";
  document.getElementById("website-list").innerHTML = "";
  const websites = JSON.parse(localStorage.getItem('links'));
  chrome.storage.sync.set({'links': websites}, function() {
        console.log('Settings saved in popup.js');
    });
  if (websites === null || websites.length === 0) {
    let li = document.createElement("li");
    li.innerText = "No websites added yet!";
    list.appendChild(li);
    var removalList = document.getElementById('website-to-remove');
    var option = document.createElement('option');
    option.value = "No websites";
    removalList.appendChild(option);
  }
  else {
    var removalList = document.getElementById('website-to-remove');
    websites.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
      var option = document.createElement('option');
      option.value = item;
      removalList.appendChild(option);
    });
  }
}
displayWebsites()
var addWebsite = function() {
  var websites = JSON.parse(localStorage.getItem('links'));
  if (websites === null) {
    websiteToAdd = [document.getElementById("Website").value]
    localStorage.setItem('links', JSON.stringify(websiteToAdd));
    displayWebsites()
  }
  else {
    var websiteToAdd = document.getElementById("Website").value
    var currentWebsites = JSON.parse(localStorage.getItem('links'));
    currentWebsites.push(websiteToAdd)
    localStorage.setItem('links', JSON.stringify(currentWebsites));
    displayWebsites()
  }
}

var removeWebsite = function() {
  var websites = JSON.parse(localStorage.getItem('links'));
  if (websites === null || websites.length === 0) {
    alert("You need to add websites first!")
    // websiteToAdd = [document.getElementById("Website").value]
    // localStorage.setItem('links', JSON.stringify(websiteToAdd));
    displayWebsites()
  }
  else {
    var websiteToRemove = document.getElementById("removing-input").value
    var currentWebsites = JSON.parse(localStorage.getItem('links'));
    if (currentWebsites.includes(websiteToRemove)) {
      const index = currentWebsites.indexOf(websiteToRemove);
      currentWebsites.splice(index, 1)
      localStorage.setItem('links', JSON.stringify(currentWebsites));
      displayWebsites()
    }
    else {
      alert("You need to add that website before you can remove it!")
      displayWebsites()
    }
  }
}

document.getElementById("submit-website").addEventListener("click", addWebsite);
document.getElementById("removing-input-button").addEventListener("click", removeWebsite);
