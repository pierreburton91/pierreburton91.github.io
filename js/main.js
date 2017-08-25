$(document).ready(function(e) {

	var kkeys = [],
		konami = [38,38,40,40,37,39,37,39,66,65];

    $(window).on("keydown", function(e){

        kkeys.push( e.keyCode );

        if ( kkeys.toString() == konami.toString() ) {

            // User entered Konami Code, do something cool!!!
            $('html').css('overflow', 'hidden');
        	$('.animated').addClass('hinge');

        	function removeClass() {
        		$('html').attr("style","");  
        		$('.animated').removeClass('hinge');
        	}
        	setTimeout(removeClass, 5000);
            kkeys = [];
        }
    });

});