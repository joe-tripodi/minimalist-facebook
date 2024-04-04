document.addEventListener('DOMContentLoaded', removeBadge())
document.addEventListener('DOMContentLoaded', removeMessengerBadge())
document.addEventListener('DOMContentLoaded', removeNewsFeed())
document.addEventListener('DOMContentLoaded', removeStories())
document.addEventListener('DOMContentLoaded', removeWatch())
document.addEventListener('DOMContentLoaded', removeMarketplace())
document.addEventListener('DOMContentLoaded', removeGames())
document.addEventListener('DOMContentLoaded', removeLeftMenu())
document.title = "Facebook"

const observer = new MutationObserver( function mutate(){
  removeBadge()
  removeMessengerBadge()
  removeMessengerBadgeJp()
  removeNewsFeed()
  removeGroupFeeds()
  removeStories()
  removeWatch()
  removeGames()
  removeMarketplace()
  removeLeftMenu()
  removeLeftMenuJp()
  document.title = "Facebook"
});
observer.observe(document.body, {attributes: true, childList: true, subtree: true});


// a setting for later
let removeGroupFeed = true
if (removeGroupFeed) {
  document.addEventListener('DOMContentLoaded', removeGroupFeeds())
}

function removeMarketplace(){
  let mp = document.querySelector('[href="/marketplace/?ref=app_tab"]')
  if (mp != null){
    mp.remove()
  }
}

function removeGames(){
  let g = document.querySelector('[href="/gaming/play/?store_visit_source=gaming_tab"]')
  if (g != null){
    g.remove()
  }
}

function removeWatch(){
  let watch = document.querySelector('[href="/watch/?ref=tab"')
  if (watch != null){
    watch.remove()
  }
}

function removeBadge(){
  let nodes = document.querySelectorAll('[aria-label^="Notifications"]')
  nodes.forEach((node) => {
    if (node["ariaLabel"] != null && node["ariaLabel"].includes("unread")) {
      if (node["role"] == "button"){
        node.remove()
      }
    }
  })
}

function removeMessengerBadge(){
  let nodes = document.querySelectorAll('[aria-label^="Messenger"]')
  nodes.forEach((node) => {
    if (node["ariaLabel"] != null && node["ariaLabel"].includes("unread")) {
      if (node["role"] == "button" && node["ariaHidden"]){
        node.remove()
      }
    }
  })
}

function removeMessengerBadgeJp(){
  let nodes = document.querySelectorAll('[aria-label^="Messenger"]')
  nodes.forEach((node) => {
    if (node["ariaLabel"] != null && node["ariaLabel"].includes("読")) {
      if (node["role"] == "button" && node["ariaHidden"]){
        node.remove()
      }
    }
  })
}

function removeNewsFeed(){
  var xpath = "//h3[text()='News Feed posts']";
  var el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (el != null) {
    el.closest('div').remove()
  }
}

function removeStories(){
  var xpath = "//h3[text()='Stories']";
  var el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (el != null){
    el.closest('div').remove()
  }
  xpath = "//h3[text()='ストーリーズ']";
  el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (el != null){
    el.closest('div').remove()
  }

}
function removeLeftMenuJp(){
  var xpath = '//h2[text()="Facebookメニュー"]';
  var el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (el != null){
    el.closest('div').remove()
  }
}

function removeLeftMenu(){
  var xpath = '//h2[text()="Facebook menu"]';
  var el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (el != null){
    el.closest('div').remove()
  }
}

function removeGroupFeeds(){
  let nodes = document.querySelectorAll('[role="feed"]')
  nodes.forEach((node)=>{
    node.remove()
  })
}
