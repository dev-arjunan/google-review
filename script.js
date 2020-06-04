var browser = navigator.userAgent.toLowerCase();
if (browser.indexOf('firefox') > -1) {
   console.log('firefox');
    var el;
    var desktopvp = 'width=1200';
    el=document.createElement('meta');
    el.setAttribute('content',desktopvp);
    el.setAttribute('name','viewport');
   document.getElementsByTagName("head")[0].appendChild(el);
}


