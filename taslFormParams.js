(function(){
window.addEventListener('load', function(){

	var targetControlId = 112037450; /** ID OF THE RECEIVER CONTROL **/
	var targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	targetControlInstance.setValue("hello");
});
})();
