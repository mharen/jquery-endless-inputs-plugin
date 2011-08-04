#jQuery Endless Inputs Plugin
##What?
This plugin gives you an endless stream of automatically appearing inputs.

##How?
Suppose you have this markup:

    <ul class='endless-input-container'>
	  <li class='endless-input-item'><input/></li>
	</ul>

And this call to the plugin:

    $('.endless-input-container').endlessInputs();

The plugin will clone that `<li>` element each time something is entered into its `<input/>`.

##Note!
This plugin allows you to keep on chaining, so, for example:

    $('#myelement').pluginname().css({border:'1px solid blue'});

Would run `pluginname` name on `#myelement` then add a blue border to it after.

##Whats next?

The world!

##Found a bug? 

Submit a bug report above or [here](https://github.com/mharen/jquery-endless-inputs-plugin/issues)

Or find ping me on [Twitter](http://www.twitter.com/mharen) or on my [blog](http://blog.wassupy.com)