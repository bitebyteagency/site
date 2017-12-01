$(function() {
   
    // Scroll to Timeline
    $(".scroll").on("click", function() { 
       $("html, body").animate({
           scrollTop: $(".timeline").offset().top
       }, 1000); 
    });
    
    
    
    // Reveal 
    $(window).on("scroll", function() {
        const topDocument = $(document).scrollTop();
        const scrollPos = $(window).height() * 3/4;
        
        $(".animate").each(function() {
            const animatesPos = $(this).offset().top;
            
           if (topDocument > animatesPos - scrollPos) {
            $(this).addClass("animate-active");
        } else {
            $(this).removeClass("animate-active");
        } 
        });
        
    });
    
});