jQuery(function($) {
    
    /*--------------------------------------------------------------
    1.0 Scroll
    --------------------------------------------------------------*/
    
    (function() {
        var header = $(".navbar-primary");

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
    
            if (scroll >= 32) {
                header.addClass("scrolled");
              
            } else {
                header.removeClass("scrolled");
               
            }
        });
    })();

    
    
    /*--------------------------------------------------------------
    2.0 Search Overlay
    --------------------------------------------------------------*/
    $('.search-toggle').on({
        click: function () {
            $('.search-box-wrapper').popup({
                autoopen: true,
                type: 'overlay',
                color: '#fff',
                opacity: 1,
                scrolllock: true,
                transition: 'all 0.2s'
            });
        },
    });
    $('.popup-close button').on({
        click: function () {
            $('.search-box-wrapper').popup('hide');
        },
    });

    /*--------------------------------------------------------------
    2.0 Slick
    --------------------------------------------------------------*/    
    
    (function(){
        
        var screenWidth = $(window).width();
        var slidesToShowVal;
        
        if (screenWidth > 992) {
            slidesToShowVal = 1;
      
        } else {
            slidesToShowVal = 1;
         
        }
        
        
        
        $('.slick').slick({
            infinite: true,
            autoplay: true,   
            autoplaySpeed: 4000,
            arrows: false,
            slidesToShow: slidesToShowVal,
            slidesToScroll: slidesToShowVal
         });
    })();

    /*--------------------------------------------------------------
    3.0 Match Height
    --------------------------------------------------------------*/  
    
   // You can use $() inside of this function
     //equalise heights where required
    var maxHeight = 0;

    $(".archive-single-testimonial").each(function(){
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    
    $(".archive-single-testimonial").height(maxHeight);   

    
    /*--------------------------------------------------------------
    4.0 Bootstrap Carousel
    --------------------------------------------------------------*/ 

    (function(){
    
        $("#bs-carousel .carousel-indicators li:first").addClass("active");
        $("#bs-carousel .carousel-inner .item:first").addClass("active"); 
    })();
    
    /*--------------------------------------------------------------
    5.0 Colorbox js
    --------------------------------------------------------------*/     
    
    (function(){
        $(".gallery-icon a").colorbox({
            rel:"gallery",
            transition: "fade",
            maxWidth:'95%',
			maxHeight:'95%',
        });
    })();
    
    
    /*--------------------------------------------------------------
    6.0 Price Calcs
    --------------------------------------------------------------*/     
    
    (function(){
        $("td.quantity input").change(function(){
           var totalCost = 0;
           var totalCostIncGST
           $(".price-list tbody tr").each(function() {
                var price = parseFloat($('td.price', this).text().replace('$',''));
                price = isNaN(price) ? 0 : price;
              
                var quantity = $('td.quantity input', this).val();
                var cost = price * quantity;
                totalCost += cost;
                totalCostIncGST = totalCost * 1.1;
                
           });
            $('#totalPrice').val('$' + totalCost.toFixed(2));
            $('#totalPriceIncGST').val('$' + totalCostIncGST.toFixed(2));
        });
    })();

    /*--------------------------------------------------------------
    7.0 Slide In Menu
    --------------------------------------------------------------*/       
    
    (function(){
        $("button.navbar-toggle").on("click", function (e) {
            e.preventDefault();
            $("nav.menu-slide").toggleClass("sml-open");
        });
        
        $("li.close-menu").on("click", function (e) {
            e.preventDefault();
            $("nav.menu-slide").removeClass("sml-open");
        });
        
        $('li.menu-item-has-children > a').click(function(event) {
            $(this).toggleClass('down');
            $('.menu-slide ul.sub-menu').toggleClass('visible');
            event.preventDefault();
        });
    })();
    

    


});