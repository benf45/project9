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


    });
    
    
    var isFixed = 1;

    $.fn.isInViewportImage = function() {

        var wTop = $(window).scrollTop() + 5;
        var wBot = wTop + $(window).height();
        var eTop = $(this).offset().top + 5;
        var eBot = eTop + $(this).height();
        return ((eBot <= wBot) && (eTop >= wTop));
    
    };
    
    $.fn.isInViewportStory = function() {

        var elementTop = $(this).offset().top;
    
        var elementBottom = elementTop + $(this).outerHeight() / 1.3;
    
        var viewportTop = $(window).scrollTop();
    
        var viewportHalf = viewportTop + $(window).height() / 1.3;
    
        return elementBottom > viewportTop && elementTop < viewportHalf;
    
    };

    
    $.fn.isInViewport = function () {
        
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();
      
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + window.innerHeight; // <-- here
      
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }; 


    $(window).on('load scroll', function() {

        /* We check if the logo is fixed and reached the story section */
        if ($('.story').isInViewportStory() && isFixed) {
               
            $('.banner img').css({'position': 'absolute', 'bottom': '-75px'});
                
            isFixed = 0;

        } else if ($('.banner  img').isInViewportImage() && !$('.story').isInViewportStory() && !isFixed){
                
            $('.banner img').css({'position': 'fixed', 'bottom': '220px'});
                
            isFixed = 1;

        } 

        /* We check if the banner is not in the viewport, if no change the position of image */
        if(!$('.banner').isInViewport()){
                
            $('.banner img').css({'position': 'absolute', 'bottom': '-75px'});
                
            isFixed = 0;
        }

        /* Check if story title is not shown if not we show it*/
        if (!$('.story').hasClass('show-title')) {
            if ($('.story').isInViewport()) {
            
                $('.story h2').show().css( {'opacity': 0, 'bottom': '-50px' } )
                .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );

                $('.story').addClass('show-title');
           
            }
            
        }
        
        /*Check if studio title is not shown if not we show it */
        if (!$('.studio').hasClass('show-title')) {
            if ($('.studio').isInViewport()) {

                $('.studio h2').show().css( {'opacity': 0, 'bottom': '-50px' } )
                .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );

                $('.studio').addClass('show-title');

            } 
        }

        /* Check if clouds have mouved if not we mouve them */
        if (!$('.place').hasClass('clouds-mouved')) {
            if ($('.place').isInViewport()) {

                $('.clouds').show().animate( { 'left' : '550px' }, 4000 );

                $('.place').addClass('clouds-mouved');

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