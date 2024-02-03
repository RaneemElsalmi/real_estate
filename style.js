function share(){
    var shareData={
        url:document.location.href
    }
    if(navigator.canShare(shareData)){
        navigator.share(shareData);
    }
}