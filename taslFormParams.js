(function(){
    window.addEventListener('load', function(){
        var targetControlId = '112037450'; // Replace 'yourTargetFieldId' with the actual ID of your target field

        var domAbstractionLayer = loader.getDOMAbstractionLayer();

        // Here you set the new value for the target field
        domAbstractionLayer.setControlValueById(
            String(targetControlId),
            "New Value" // Replace "New Value" with the value you want to set
        );
    });
})();
