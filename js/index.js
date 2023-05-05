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
    // Start banner section
    $("#banner_carousel").owlCarousel({
        items : 1 ,
        nav : false,
        dots : false,
        loop : true,
        autoplay: true
    })
    // end banner section

    // Start registry gift section
    $("#registry_gift_carousel").owlCarousel({
        items : 5 ,
        nav : false,
        dots : false,
        loop : true,
        autoplay: true,
        responsive : {
            0 : {
                items : 1,
            },
            452: {
                items : 2
            },
            768 : {
                items : 3,
            },
            992 :{
                items : 5
            }
        }
    })
    // end registry gift section

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

// Start Day Couter Section
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

var day = document.querySelector( '#day' );
var hour = document.querySelector( '#hour' );
var minute = document.querySelector( '#minute' );
var second = document.querySelector( '#second' );
IO.observe( day );
IO.observe( hour );
IO.observe( minute );
IO.observe( second );

;

let timeInt ;

timeInt = setInterval(function(){
    let getdate = new Date();
    let gettime = getdate.getTime();

    
    let setdate = new Date("May-5-2023 09:18:00");

    
    let settime = setdate.getTime();

    
    let getdiftime =settime - gettime     ;


    showdisclock(getdiftime);


    if(  getdate > setdate) {

        getdiftime =gettime - settime;
        showdisclock(getdiftime);
    }
},1000)

let showdisclock=(mili)=>{
    let difdays = Math.floor(mili / (24*60*60*1000));
        
    let difhours = Math.floor((mili / (1000 * 60 * 60)) % 24);
    let difminutes = Math.floor((mili / (1000 * 60)) % 60);
    let difseconds = Math.floor((mili / 1000) % 60);
    day.innerText = `${difdays < 10 ? "0"+difdays : difdays}` ;
    hour.innerText = `${difhours < 10 ? "0"+difhours : difhours}` ;
    minute.innerText = `${difminutes < 10 ? "0"+difminutes : difminutes}` ;
    second.innerText = `${difseconds < 10 ? "0"+difseconds : difseconds}` ;
}


// Edn Day Counter section