document.addEventListener('DOMContentLoaded', function() {
    // Example of getting a URL parameter value
    var params = new URLSearchParams(window.location.search);
    var valueFromUrl = params.get('paramName'); // Replace 'paramName' with the actual parameter name

    // Example of setting this value to another field
    var targetField = document.getElementById('112037450'); // Replace 'targetFieldId' with the actual ID of your target field
    if (targetField) {
        targetField.value = valueFromUrl; // Or any logic to determine the value
    }
});
