(function(){
window.addEventListener('load', function(){

	var targetControlId = "text-00000014"; /** ID OF THE RECEIVER CONTROL **/
	var targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	targetControlInstance.setValue("hello");
});
})();
