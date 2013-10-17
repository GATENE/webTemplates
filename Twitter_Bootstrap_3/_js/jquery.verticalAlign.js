(function($){

	$.fn.extend({ 
 		
 		verticalAlign: function() {

			//Iterate over the current set of matched elements
    		return this.each(function() {
	
				var obj = $(this);
	
				// calculate the new padding and height
				var childHeight = obj.height();
				var parentHeight = obj.parent().height();
				var diff = Math.round( ( (parentHeight - childHeight) / 2) );

				// apply new values
				//May need to change it to padding to work correctly
				// obj.css( { "display": "block", "margin-top": diff } );
				obj.css( { "display": "block", "padding-top": diff } );
			
    		});
    	}
	});
			
})(jQuery);

