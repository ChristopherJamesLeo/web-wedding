// console.log("hello world");

// Start jquery area

$(window).on('load',function(){
    $("#preloader").delay(700).fadeOut("slow");
    $("#loader").delay(500).fadeOut("slow");
})
$(document).ready(function(){
    // console.log("hello jquery");
    // Start nav bar 
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $("nav").addClass("active");
        }else {
            $("nav").removeClass("active");
        }
    })
    // End Nav bar 

    // Start Footer Carousel Section
    $("#footer_carousel").owlCarousel({
        items : 8 ,
        nav : false,
        dots : false,
        loop : true,
        autoplay: true,
        responsive : {
            0 : {
                items : 1,
            },
            452: {
                items : 3,
            },
            768 : {
                items : 5,
            },
            992 :{
                items : 8
            }
        }
    })
    // end footer carouse section
})

// End jquery area




// Start Wow js
new WOW().init();
// End Wow js