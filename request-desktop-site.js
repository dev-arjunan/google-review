(function(d){
    //quick dookie checker
    function C(k){return(d.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2];}
 
    var ua = navigator.userAgent, //get the user agent string
        ismobile = / mobile/i.test(ua), //android and firefox mobile both use android in their UA, and both remove it from the UA in their "pretend desktop mode"
        mgecko = !!( / gecko/i.test(ua) && / firefox\//i.test(ua)), //test for firefox
        wasmobile = C('wasmobile') === "was", //save the fact that the browser once claimed to be mobile
        desktopvp = 'user-scalable=yes, maximum-scale=2',
        el;
 
    if(ismobile && !wasmobile){
        d.cookie = "wasmobile=was"; //if the browser claims to be mobile and doesn't yet have a session cookie saying so, set it
    }
    else if (!ismobile && wasmobile){
        //if the browser once claimed to be mobile but has stopped doing so, change the viewport tag to allow scaling and then to max out at whatever makes sense for your site (could use an ideal max-width if there is one)
        if (mgecko) {
            el = d.createElement('meta');
            el.setAttribute('content',desktopvp);
            el.setAttribute('name','viewport');
            d.getElementsByTagName('head')[0].appendChild( el );
        }else{
            d.getElementsByName('viewport')[0].setAttribute('content',desktopvp); //if not Gecko, we can just update the value directly
        }
    }
}(document));
