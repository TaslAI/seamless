(function(){

	window.addEventListener('load', function()
				{
					document.getElementById("heading-0000000b-acc").innerHTML = "new title";

	var targetControlId = "text-00000014"; /** ID OF THE RECEIVER CONTROL **/
	var targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	targetControlInstance.setValue("hello");
});
})();
