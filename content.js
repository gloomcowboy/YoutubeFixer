    // Redirect home page to subscriptions
if (window.location.href === 'https://www.youtube.com/' || 
    window.location.href === 'https://www.youtube.com/?') {
  window.location.replace('https://www.youtube.com/feed/subscriptions');
}

function isWatchingPLaylist() {
  const params = new URLSearchParams(window.location.search);
  return params.has('list'); 
}

function updateSideBar() {
  const sidebar = document.querySelector('#secondary');
  if (!sidebar) return;

  if (isWatchingPLaylist()) {
    //show side bar if its a playlist
    sidebar.style.display = '';

    const recommended = sidebar.querySelector('#related');
    if (recommended) recommended.style.display = 'none';

    const autoplay = sidebar.querySelector('ytd-compact-autoplay-renderer');
    if (autoplay) autoplay.recommended.style.display = 'none';
  } else {
    //no playlist hide the sidebar
    sidebar.style.display = 'none';
  }
}

const observer = new MutationObserver(updateSideBar);
observer.observe(document.documentElement, {childList: true, subtree: true });

window.addEventListener('yt-navigate-finish', updateSideBar);