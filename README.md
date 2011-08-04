#jQuery Endless Inputs Plugin
##What?
This plugin gives you an endless stream of automatically appearing inputs.

Checkout `demo.html` for an example.

##How?
Suppose you have this markup:

    <ul class='endless'>
	  <li class='endlessItem'><input/></li>
	</ul>

And this call to the plugin:

    $('.endless').endlessInputs();

The plugin will clone that `<li>` element each time something is entered into its `<input/>`. Check out `demo.html` a more complex example.

##Note!
This plugin allows you to keep on chaining, so, for example:

    $('#myelement').endlessInputs().css({border:'1px solid blue'});

Would run `endlessInputs` on `#myelement` then add a blue border to it after.


##Options:

The following options can be provided like so (default values specified):

    $('.yourSelector').endlessInputs({
		// this is the inner element, within '.yourSelector' that will be cloned and
		// appended to '.yourSelector'. If '.yourSelector' is a table, this should be a row
		elementToCloneSelector: '.endlessItem',
		
		// this selector is applied to the last item matched by 'ElementToCloneSelector'. 
		// If anything matches, it is cloned
		doCloneElementPredicate: 'input[value!=""],textarea[value!=""],select[selectedIndex!=0]',
		
		// Anything with this class will be removed from the newly cloned element before it is 
		// appended to '.yourSelector'
		elementsToSkipSelector: '.endlessSkip',
		
		// These are the elements to clear out before the newly cloned element is 
		// appended to '.yourSelector'
		elementsToClearOnCloneSelector: 'textarea,input,select',
		
		// This is simply passed to jQuery's .clone() command. Set to true to also clone
		// event handlers. More about what this means here: http://api.jquery.com/clone
		cloneWithDataAndEvents: false,
		
		// Set the max number of elements, including the initial element. e.g. if you set this to 5,
		// and you already have 3 items in your container, the plugin will add at most 2 more
		// Set maxElementCount <= 0 for unlimited cloning fun (default behavior)
		maxElementCount: 0
	});
	  

##Whats next?

The world!

##Found a bug? 

Submit a bug report above or [here](https://github.com/mharen/jquery-endless-inputs-plugin/issues)

Or find ping me on [Twitter](http://www.twitter.com/mharen) or on my [blog](http://blog.wassupy.com)
