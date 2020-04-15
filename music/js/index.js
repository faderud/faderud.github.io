var ytEventNames = {
  "-1": "unstarted",
  "0": "ended",
  "1": "playing",
  "2": "paused",
  "3": "buffering",
  "5": "cued"
};

var curArticleIdx = 0;
var articles, articleCount, navEl, navClipEl;

function initializeNav() {
  // Enable floating-navigation styles across the document
  document.body.className = "floating-nav";

  // Get global references to all articles and to the first scroll-footer
  articles = document.querySelectorAll("article");
  articleCount = articles.length;

  // Create the primary floating navigation element
  navEl = articles[curArticleIdx].querySelector("nav").cloneNode(true);
  // Clone scroll-footer into navigation
  navEl.appendChild(articles[curArticleIdx].querySelector(".scroll-footer").cloneNode(true));
  // Clone footer into navigation
  navEl.appendChild(document.querySelector("footer").cloneNode(true));
  document.body.insertBefore(navEl, document.body.firstChild);

  // Create the secondary clipped navigation element
  navClipEl = navEl.cloneNode(true);
  navClipEl.className = "nav-clip";
  document.body.insertBefore(navClipEl, navEl.nextSibling);

  // Populate the clipped navigation element
  populateNavEl(navEl, curArticleIdx);
  populateNavEl(navClipEl, curArticleIdx + 1);

  // Attach scroll/resize events to update navigation state
  addEventListener("scroll", updateNav);
  addEventListener("resize", updateNav);

  // Manually update navigation state initially
  updateNav();
}

function updateNav() {
  // Get the current dimensions and compute the visible article index
  var docScrollTop = Math.max(document.documentElement.scrollTop, 0);
  var articleWidth = articles[0].offsetWidth;
  var articleHeight = articles[0].offsetHeight;
  var articleIdx = Math.floor(docScrollTop / articleHeight);
  var articleOffset = docScrollTop % articleHeight;
  var curArticleEl = articles[articleIdx];

  if (curArticleIdx != articleIdx) {
    // Populate current and clipped navigation with the current and next articles
    populateNavEl(navEl, articleIdx);
    populateNavEl(navClipEl, articleIdx + 1);
    // Reset any active player when changing articles, except for in the current active articles
    resetPlayer([curArticleEl, articles[articleIdx + 1]]);
    // Update hash
    history.pushState(null, document.title, "#" + curArticleEl.id);

    // Keep track of the active article
    curArticleIdx = articleIdx;
  }
  // Reset player in non-active article when scrolling all the way to the top of an article
  if (articleOffset == 0)
    resetPlayer([curArticleEl]);
  // Mute the scroll footer once we're past the first article
  if (curArticleIdx > 0 && navEl.getAttribute("data-scroll-muted") === null)
    navEl.setAttribute("data-scroll-muted", "1");

  // Adjust the clipping according to the current scale and scroll
  var clipHeight = articleHeight - articleOffset - 1;
  navEl.style.clipPath = "inset(0px 0px " + articleOffset + "px 0px)";
  navClipEl.style.clipPath = "inset(" + clipHeight + "px 0px 0px 0px)";
}

function populateNavEl(navEl, articleIdx) {
  var articleEl = articles[articleIdx];
  // Check if there's a valid article
  if (articleEl) {
    // Get navigation sub-elements
    var articleTitleEl = articleEl.querySelector(".title");
    var navTitleEl = navEl.querySelector(".title");

    // Propagate article id and theme to the floating navigation element
    propagateAttribute(navEl, "data-article-id", articleEl.getAttribute("id"));
    propagateAttribute(navEl, "data-theme", articleEl.getAttribute("data-theme"));
    // Flag as last article
    propagateAttribute(navEl, "data-last", articleIdx == articleCount - 1 && "1");
    // Update floating title content
    if (navTitleEl)
      navTitleEl.innerHTML = articleTitleEl && articleTitleEl.innerHTML || "";
  }
}

function propagateAttribute(el, attrName, val) {
  val = val || null;

  if (el.getAttribute(attrName) != val) {
    if (val)
      el.setAttribute(attrName, val);
    else
      el.removeAttribute(attrName);
  }
}

function launchPlayer(linkEl) {
  // Get link URL and grab the YouTube video ID
  var linkUrl = linkEl.href;
  var ytId = /(?:\/|v=)([a-zA-Z0-9_-]{11})(?:[?&]|$)/.test(linkUrl) && RegExp.$1;

  // Reset any active player
  resetPlayer();

  if (ytId) {
    // Create the player container elements
    var playerOuterEl = document.createElement("div");
    playerOuterEl.id = "player-outer";

    var playerInnerEl = playerOuterEl.appendChild(document.createElement("div"));
    playerInnerEl.id = "player-inner";

    var playerSizerEl = playerInnerEl.appendChild(document.createElement("div"));
    playerSizerEl.id = "player-sizer";

    // Create the YouTube player frame
    playerInnerEl.appendChild(createPlayer(ytId));

    // Add the player to the screen
    linkEl.parentNode.appendChild(playerOuterEl);

    // Attach a global resize handler to keep the player's size synced
    addEventListener("resize", updatePlayerSize);
    // Initialize the player's size
    updatePlayerSize();

    // Scroll to fit article on screen
    scrollToArticle(linkEl);

    // Signal that a player was created and the default link action should be cancelled
    return true;
  }
}

function createPlayer(ytId) {
  var ytScript = document.createElement("script");
  ytScript.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(ytScript);

  // Create the YouTube player frame
  var playerFrameEl = document.createElement("iframe");
  playerFrameEl.id = "player-frame";
  playerFrameEl.frameBorder = 0;
  playerFrameEl.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  playerFrameEl.allowFullscreen = true;
  playerFrameEl.src = "https://www.youtube.com/embed/" + ytId + "?enablejsapi=1&modestbranding=1&rel=0&autoplay=1";

  return playerFrameEl;
}

function updatePlayerSize() {
  // Update the player's max-width to ensure it maintains aspect ratio when its height is limited
  var playerOuterEl = document.getElementById("player-outer");
  var playerInnerEl = document.getElementById("player-inner");

  if (playerOuterEl && playerInnerEl)
    playerInnerEl.style.maxWidth = playerOuterEl.offsetHeight * 1.777 + "px";
}

function resetPlayer(activeArticles) {
  // Look for an existing player
  var playerOuterEl = document.getElementById("player-outer");
  // Check if the player is contained within the specified articles
  var isPlayerContained = playerOuterEl && activeArticles && activeArticles.reduce(
    function (res, curArticleEl) {
      return res || curArticleEl && curArticleEl.contains(playerOuterEl);
    },
    false
  );

  if (playerOuterEl && !isPlayerContained) {
    // Log analytics event
    logEvent(playerOuterEl, "youtube_terminated");
    // Remove global resize handler
    removeEventListener("resize", updatePlayerSize);
    // Destroy player
    playerOuterEl.parentNode.removeChild(playerOuterEl);
  }
}

function onYouTubeIframeAPIReady() {
  new YT.Player("player-frame", {
      events: {
        "onReady": logYTEvent,
        "onStateChange": logYTEvent
      }
  });
}

function logYTEvent(event) {
  var eventId = ytEventNames[event.data] || "ready";
  var playerEl = document.getElementById("player-frame");

  logEvent(playerEl, "youtube_" + eventId);
}

function scrollToArticle(el) {
  var articleEl = el;
  while (articleEl && articleEl.tagName!="ARTICLE")
    articleEl = articleEl.parentNode;

  if (articleEl) {
    scroll({ top: articleEl.offsetTop, left: 0, behavior: "smooth" });
  }
}

function logEvent(eventEl, eventId) {
  // Log event to SimpleAnalytics if it's available
  if (window.sa_event) {
    var articleId;

    // Look for a container
    var containerEl = eventEl;
    while (containerEl && containerEl.tagName != "NAV" && containerEl.tagName != "ARTICLE")
      containerEl = containerEl.parentNode;
    if (containerEl)
      articleId = containerEl.getAttribute(containerEl.tagName == "ARTICLE" ? "id" : "data-article-id");
    // Add article ID to event ID if found
    if (articleId)
      eventId = articleId.replace(/-/g,"") + "_" + eventId;

    // Log event to analytics
    sa_event(eventId);
  }
}

addEventListener(
  "click",
  function (event) {
    // Check if the click originated within a link
    var targetEl = event.target;
    var linkAction;

    while (targetEl && targetEl.nodeType == 1 && (linkAction = targetEl.getAttribute("data-action")) === null)
      targetEl = targetEl.parentNode;

    if (linkAction) {
      // Log click to analytics
      logEvent(targetEl, linkAction.replace(/-.+/,""));

      // Attempt to launch player if a play button was found, and cancel the default action if successful
      if (linkAction == "play-button" && launchPlayer(targetEl))
        event.preventDefault();
    }
  }
);

// Initialize the floating navigation handling
initializeNav();
