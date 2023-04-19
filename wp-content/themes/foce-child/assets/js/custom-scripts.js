(function($){

    /* When page ready */
    $( document ).ready(function() {

        // Fade in section of the home page when page ready
        $('.banner').css( {'opacity': 0, 'margin-top': '-100px' } )
        .animate( { 'opacity': '1', 'margin-top' : 0 }, 1300 );

        $('.banner img').css( {'opacity': 0, 'bottom': '-80px' } )
        .animate( { 'opacity': '1', 'bottom' : '160px',  }, 1400 );

        $('main').css( {'position': 'relative', 'opacity': 0, 'bottom': '-55px' } )
        .animate( { 'opacity': '1', 'bottom' : '0px' }, 1400 );


        //We init Skrollr for the parralax
        const imageBannerSkrollrData = {
            "data-0": "opacity:1; position:fixed;bottom: 155px;",
            "data-228": "",
            "data-229": "position: absolute; bottom: -65px;",
            "data-1200": "opacity:0;"
        };
        $('.banner img').attr(imageBannerSkrollrData);

        skrollr.init({ 
            skrollrBody: 'mobile-body' 
        });

    });
    

    /* Function to check if elelment is in the viewport */
    $.fn.isInViewport = function () {
        
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();
      
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + window.innerHeight; // <-- here
      
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }; 


    var storyTitleShowed = 0;
    var studioTitleShowed = 0;
    var cloudMoved = 0;

    $(window).on('load scroll', function() {

        /* Check if story title is not shown if not we show it*/
        if (!storyTitleShowed) {
            if ($('.story').isInViewport()) {
            
                $('.story h2').show().css( {'opacity': 0, 'bottom': '-50px' } )
                .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );

                storyTitleShowed = 1;
           
            }
            
        }
        
        /*Check if studio title is not shown if not we show it */
        if (!studioTitleShowed) {
            if ($('.studio').isInViewport()) {

                $('.studio h2').show().css( {'opacity': 0, 'bottom': '-50px' } )
                .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );

                studioTitleShowed = 1;

            } 
        }

        /* Check if clouds have mouved if not we mouve them */
        if (!cloudMoved) {
            if ($('.place').isInViewport()) {

                $('.clouds').show().animate( { 'left' : '550px' }, 4000 );

                cloudMoved = 1;

            } 
        }

    });
   

    /* Function to slide character images */
    var slider = tns({
        container: '.tinyslider-wrapper',
        "items": 3,
        "center": true,
        "loop": false,
        "slideBy": "page",
        "controls": false,
        "nav": false,
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400
    });

  
    
    /* Navigation */
    $('.menu-toggle').on('click', function (e){

        e.stopPropagation();

        var ariaExpanded = $(this).attr('aria-expanded');
        
        if (ariaExpanded === 'false'){

            /* Expand the menu in fade in */
            $('.main-navigation ul').fadeIn(800);


            let content= '<span class="dashicons dashicons-no-alt close-navigation-icon"></span>';

            $(this).html(content);

            /* Animate the links of navigation when the menu expands */
            $('.site-menu li .menu-link').show().css( {'opacity': 0, 'position': 'relative', 'bottom': '-100px' } )
            .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );


        }else{

            /* Hide the menu */
            $('.main-navigation ul').hide();
            
            let content= '<span class="line"></span>'+
                         '<span class="line"></span>'+
                         '<span class="line"></span>';

            $(this).html(content);
          
        }
        


    });
    

})( jQuery );