(function(d){
    function C(k){return(d.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2];}
 
    var ua = navigator.userAgent, 
        ismobile = / mobile/i.test(ua),
        mgecko = !!( / gecko/i.test(ua) && / firefox\//i.test(ua)),
        wasmobile = C('wasmobile') === "was", 
        desktopvp = 'user-scalable=yes, maximum-scale=2',
        el;
 
    if(ismobile && !wasmobile){
        d.cookie = "wasmobile=was"; 
    }
    else if (!ismobile && wasmobile){
        
        if (mgecko) {
            el = d.createElement('meta');
            el.setAttribute('content',desktopvp);
            el.setAttribute('name','viewport');
            d.getElementsByTagName('head')[0].appendChild( el );
        }else{
            d.getElementsByName('viewport')[0].setAttribute('content',desktopvp); 
        }
    }
}(document));
