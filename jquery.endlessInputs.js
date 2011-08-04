/*
	Copyright (c) 2011 Michael Haren, mharen@gmail.com
	Twitter @mharen
	Web http://blog.wassupy.com
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function($){
	/// Append an empty set of inputs to the given container
	///  - The container should be something that can be appended to a table or ul
	///  - Within the container should be something tagged 'endlessItem' like a tr or li. This node
	///    will be cloned as necessary.
	///  - Anything within this cloneable item tagged 'endlessSkip' will be removed from new clones
    ///
	/// eg:
	///     $('.endlessContainer').endlessInputs();
	
	$.fn.endlessInputs = function(options) {
		var settings = $.extend({}, $.fn.endlessInputs.defaultOptions, options);

		return this.each(function() {
		
			var $container = $(this);			
			
			$container.bind('keyup change',function(){
				var $lastItem = $container.find(settings.ElementToCloneSelector + ':last');
				// we only need to do something if the lastItem has a non-empty input
				if($lastItem.find(settings.DoCloneElementPredicate).size() > 0) {
					$lastItem
						.clone(settings.CloneWithEventHandlers) // e.g. LI
						.find(settings.ElementsToSkipSelector) 
							.remove() // remove unwanted elements
							.end() 
						.appendTo($container) // attach to the end of the container (e.g. UL)
						.find(settings.ElementsToClearOnCloneSelector) // clear out values
							.each(function(i) {
								// clear values, selections, and text elements (if included in ElementsToClearOnCloneSelector)
								$(this)
									.filter('textarea,input').val('').end() 
									.filter('select').each(function() { this.selectedIndex = 0; }).end();
							})
							.end();
				}
			});
		});
	};

	$.fn.endlessInputs.defaultOptions = {
		ElementToCloneSelector: '.endlessItem',
		DoCloneElementPredicate: 'input[value!=""],textarea[value!=""],select[selectedIndex!=0]',
		ElementsToSkipSelector: '.endlessSkip',
		ElementsToClearOnCloneSelector: 'textarea,input,select',
		CloneWithEventHandlers: false
	};
})(jQuery);
