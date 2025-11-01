!function(exports) {
  exports.submitGoogleForm = submitGoogleForm;

  function submitGoogleForm(form) {
    try {
      var data = [].slice.call(form).map(function(control) {
        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : control.value) :
          '';
      }).join('&');
      var xhr = new XMLHttpRequest();
      var form_action = form.action + '/formResponse';
      alert(form_action) 
      xhr.open('POST', form_action , true);
      xhr.setRequestHeader('Accept', 'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');

      xhr.onload = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              // The request is complete and the response is available
              console.log("HTTP Status Code:", xhr.status);
              alert(xhr.status);

              if (xhr.status === 200) {
                  console.log("Request successful!");
                  // Process the response data, e.g., xhr.responseText or xhr.response
              } else {
                  console.log("Request failed with status:", xhr.status);
                  // Handle error based on the status code
              }
          }
      };

      xhr.onerror = function() {
          // This handles network errors, not HTTP status errors like 404
          console.error("Network error occurred.");
          alert("error net")
      };


      alert(data);
      xhr.send(data);
      alert("enviado");
    } catch(e) {
      alert(e);
    }
    // alert("envio");

    // https://docs.google.com/forms/d/1kAzdkAtq6Xv67W5vuk6Ci7F-D5fsQoQtrkTx_4kt6ik/edit
    // https://docs.google.com/forms/d/e/1FAIpQLSeEwjAfU72c6wGaJX2qrD23b5Is46wdfukdnWPYiy4A922-yg/viewform
    // https://docs.google.com/forms/u/0/d/e/1FAIpQLSeEwjAfU72c6wGaJX2qrD23b5Is46wdfukdnWPYiy4A922-yg/formResponse

    //form.parentNode.className += ' submitted';

    return false;
  }
}(typeof module === 'undefined' ? window : module.exports);


