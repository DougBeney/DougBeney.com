---
---

// jQuery 3.2.1
{% include_relative jQuery.js %}

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

$("img#async").each(function(){
    $(this).attr("src", $(this).data('src'));
    $(this).on('load', function(){
        console.log('loaded!');
    });
});
