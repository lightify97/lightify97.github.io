$(function() {
    $(".video").click(function(){
        var theModal = $(this).data("target"),
            videoSrc = $(this).attr("data-video"),
            videoSrcAuto = videoSrc + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + " iframe").attr("src", videoSrcAuto);
        $(theModal + " button.close").click(function(){
            $(theModal + " iframe").attr('src', videoSrc);
        });
    });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
});
