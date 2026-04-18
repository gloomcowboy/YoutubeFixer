    // Redirect home page to subscriptions
if (window.location.href === 'https://www.youtube.com/' || 
    window.location.href === 'https://www.youtube.com/?') {
  window.location.replace('https://www.youtube.com/feed/subscriptions');
}

const observer = new MutationObserver(() => { //  MutationObserver -> browser API that watches the page for any DOM changes (new elements appearing, things moving around)
  const sidebar = document.querySelector('#secondary');
  if (sidebar) sidebar.style.display = 'none';
});
// Observe -> starts watching the entire page for changes
observer.observe(document.documentElement, { childList: true, subtree: true });