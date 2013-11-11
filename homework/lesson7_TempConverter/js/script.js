document.getElementById('convertToC').onclick = convertToC;
document.getElementById('convertToF').onclick = convertToF;

// converts the celsius input value to fahrenheit and puts it in the fahrenheit input box
function convertToF(){
//retrieves celsius input value
  var celsius = document.getElementById('celsius').value;
// converts the celsius value to fahrenheit
  var fahrenheit = ((9 / 5) * celsius) + 32;
// put the fahrenheit value in the fahrenheit input field
  document.getElementById('fahrenheit').value = fahrenheit;
}
;
function convertToC(){
//retrieves fahrenheit input value
  var fahrenheit = document.getElementById('fahrenheit').value;
// converts the fahrenheit value to celsius
  var celsius = ((fahrenheit - 32) * (5 / 9));
// put the celsius value in the celsius input field
  document.getElementById('celsius').value = celsius;
}
;
