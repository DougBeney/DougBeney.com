---
---

{% include_relative _lib/jQuery.js %}
{% include_relative _lib/photoswipe.js %}
{% include_relative _lib/photoswipe-ui.js %}
{% include_relative _lib/photoswipe-custom.js %}

$( document ).ready(function() {
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    //ASYNC IMAGE
    $("img#async").each(function(){
        $(this).attr("src", $(this).data('src'));
        $(this).on('load', function(){
            console.log('loaded!');
        });
    });
    //ASYNC IMAGE


    //Lightbox
    lightboxify('.post-area img');
    //Lightbox
});
