#jQuery Endless Inputs Plugin
##What?
This plugin gives you an endless stream of automatically appearing inputs.

[DEMO!](http://jsfiddle.net/gh/get/jquery/1.6/mharen/jquery-endless-inputs-plugin/tree/master/fiddle-demo/) (Hint: enter stuff in the boxes.)

##How?
Suppose you have this markup:

    <ul class='endless'>
	  <li class='endlessItem'><input/></li>
	</ul>

And this call to the plugin:

    $('.endless').endlessInputs();

The plugin will clone that `<li>` element each time something is entered into its `<input/>`. Check out `demo.html` or [this fiddle](http://jsfiddle.net/gh/get/jquery/1.6/mharen/jquery-endless-inputs-plugin/tree/master/fiddle-demo/) for a slightly more complex example.

##Note!
This plugin allows you to keep on chaining, so, for example:

    $('#myelement').endlessInputs().css({border:'1px solid blue'});

Would run `endlessInputs` on `#myelement` then add a blue border to it after.


##Options:

The following options can be provided like so (default values specified):

    $('.yourSelector').endlessInputs({
		// this is the inner element, within '.yourSelector' that will be cloned and
		// appended to '.yourSelector'. If '.yourSelector' is a table, this should be a row
		ElementToCloneSelector: '.endlessItem',
		
		// this selector is applied to the last item matched by 'ElementToCloneSelector'. 
		// If anything matches, it is cloned
		DoCloneElementPredicate: 'input[value!=""],textarea[value!=""],select[selectedIndex!=0]',
		
		// Anything with this class will be removed from the newly cloned element before it is 
		// appended to '.yourSelector'
		ElementsToSkipSelector: '.endlessSkip',
		
		// These are the elements to clear out before the newly cloned element is 
		// appended to '.yourSelector'
		ElementsToClearOnCloneSelector: 'textarea,input,select',
		
		// This is simply passed to jQuery's .clone() command. Set to true to also clone
		// event handlers. More about what this means here: http://api.jquery.com/clone
		CloneWithDataAndEvents: false
	});
	  

##Whats next?

The world!

##Found a bug? 

Submit a bug report above or [here](https://github.com/mharen/jquery-endless-inputs-plugin/issues)

Or find ping me on [Twitter](http://www.twitter.com/mharen) or on my [blog](http://blog.wassupy.com)
