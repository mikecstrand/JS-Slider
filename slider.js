(function($){

	$.fn.extend({
	
		slider:function(options){
		
			var defaults = {
			
				itemSpan:1,
				hasNav:false,
				autoPlay:false,
				playDuration:0,
				transition:'linear',
				transitionDuration:2000,
				theme:'default'
				
			}
			
			var options =  $.extend(defaults, options);
 
            return this.each(function() {
                
				var opt = options,
					sliderHolder = $(this).find('ul'),
					sliderItems = sliderHolder.find('li'),
					sliderItemLength = sliderItems.length,
					currentSlide = -1,
					targetSlider = 0;
				
				if(opt.theme != 'default'){
					$(this).addClass('themename');
				}
				
				if(opt.hasNav){
					//this.append('
				}
                
				
             
            });
		
		}
		
	
	});

})(jQuery);