var browser = navigator.userAgent.toLowerCase();
if (browser.indexOf('firefox') > -1) {
   console.log('firefox');
    var el;
    var desktopvp = 'user-scalable=yes, maximum-scale=2';
    el=document.createElement('meta');
    el.setAttribute('content',desktopvp);
    el.setAttribute('name','viewport');
}


