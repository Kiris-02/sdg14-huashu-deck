// Shared Deck Helper for Huashu Presentations
(function() {
  window.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    try {
      window.parent.postMessage({
        type: 'deck-keydown',
        key: e.key,
        code: e.code,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        shiftKey: e.shiftKey
      }, '*');
    } catch (err) {}
  });

  document.addEventListener('click', function(e) {
    if (e.target.closest('button, input[type="range"], .interactive-node, .tab-btn, .pill-btn, .clickable')) {
      try {
        window.parent.postMessage({ type: 'play-sfx', sound: 'click' }, '*');
      } catch (err) {}
    }
  });
})();
