var browser = navigator.userAgent.toLowerCase();
if (browser.indexOf('firefox') > -1) {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Desktop',
      writable: true
    });
}
