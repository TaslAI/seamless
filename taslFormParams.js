



window.document.onload = function(e){ 
    setTimeout(() => {
       let url = new URL(window.location.href);
        document.getElementById("heading-0000000b-acc").innerHTML = url.searchParams.get('AutomationName');
        document.getElementById("heading-0000000d-acc").innerHTML = url.searchParams.get('AutomationSummary');
      }, "500");
   
}

setTimeout(() => {
    let url2 = new URL(window.location.href);
    document.getElementById("heading-0000000b-acc").innerHTML = url2.searchParams.get('AutomationName');
    document.getElementById("heading-0000000d-acc").innerHTML = url2.searchParams.get('AutomationSummary');
  }, "500");
