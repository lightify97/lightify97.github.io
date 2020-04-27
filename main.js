$(function() {

    $(".navbar-nav li").click(function(){
        $(".navbar-nav li.active").removeClass("active");
        $(this).addClass("active");
    });

    // change active link in navbar on scroll
    let sections = [$("#home"), $("#projects"), $("#skills"), $("#contact")];

    let viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    function scroll(e) {
        let element = $("#" + e.attr("id"))[0];
        let elementPosition = element.getBoundingClientRect();
        if (elementPosition.top <= viewportHeight / 2) {
            $(".active").removeClass("active");
            $(".nav-link[href='#" + e.attr("id")  + "']").parent().toggleClass("active");
        }
    }
    $(document).scroll(function() {
        sections.forEach(function(section) {
            scroll(section);
        });
    });
});
