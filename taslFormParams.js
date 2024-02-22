setInterval(function() {
  var labelElement = document.getElementById('112036845');
  if (labelElement && labelElement.textContent === "AutomationSummaryPlaceholder") {
    labelElement.textContent = 'Your New Text Here';
    // Optionally clear the interval if you're sure it only needs to run once
    // clearInterval(thisInterval);
  }
}, 1000); // Checks every 1000 milliseconds (1 second)
