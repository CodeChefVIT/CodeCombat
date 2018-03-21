(function($) {
    $(document).ready(function() {
    
        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            
            $('.video-background').addClass(
                'video-background-default-image');
        }
    });
})(jQuery);