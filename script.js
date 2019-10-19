$(document).ready(function(){
    //Super Slides
	$('#slides').superslides({
		play:3000,
		animation: 'fade',
		pagination:false,
	});

//owl.carousel.js
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//easy-pie-chart
	var skillsTopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            // Easy Pie Chart
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor: 'white',
                trackColor: false,
                scaleColor: false,
                lineWidth:4,
                size:152,
                onStep(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });


     // FancyBox
    $("[data-fancybox]").fancybox();

    // Isotope Sort & Filtering

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
    // Filtering
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });



    $("html").niceScroll({
    cursorwidth:5,   //atar jnno width hbe
    cursorborder:0,
    cursorcolor:'#01A7ED',  //atar jno scroll bar ar color hbe
    autohidemode:false,   //atar jnno csrooll bar ta sb smy show krbe hide hbe na
    cursorborderradius: 0,
    horizrailenabled: false,//atar jnno horizontal kno scroll bar thakle seta asbe na
});

// circle text
    $('#title').circleType({
        radius:200,       //radius barale kmale circle kom bara hbe
        fluid:true,   //atar fle responsive hbe. zoom krleo size choto bro hbe

    });

});