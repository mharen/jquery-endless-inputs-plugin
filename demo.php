<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8 />
	<title>Sample Use of Endless Inputs</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
	<script src="jquery.endlessInputs.js"></script>
	<script>
		$(function(){
		
			$('.endless').endlessInputs();
			
		});
	</script>
</head>
<body>
	<?php if(count($_REQUEST)> 0) { ?>
	<div>
		<pre><?php print_r($_REQUEST); ?></pre>
	</div>
	<?php } ?>
	<form>
		<fieldset>
			<legend>Behold! A never ending list!</legend>
			<ol class='endless'>
				<li class='endlessItem'><input name='li-input[]'/></li>
			</ol>
		</fieldset>
		<br/>
		<fieldset>
			<legend>ZOMG! A never ending table!</legend>
			<table class='endless'>
				<thead>
					<tr><th>Foo</th><th>Bar</th></tr>
				</thead>
				<tbody>
					<tr class='endlessItem'>
						<td>Random Label</td>
						<td><input name='table-input[]'/></td>
						<td><select name='table-select[]'><option></option><option>hi!</option></select></td>
						<td><span class='endlessSkip'>Don't clone this text</span></td>
					</tr>
				</tbody>
			</table>
		</fieldset>
		<br/>
		<input type='submit'/>
	</form>
</body>
</html>