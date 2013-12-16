$( document ).ready(function() {

var HKbranches = {
    "HKHLD": {
      "value":"0",
      "countryCode": "HK",
      "countryName": "Hong Kong",
      "branchName": "hldgs",
      "branchNameFull": "Holdings",      
      "lat":"22.279184",
      "lng":"114.169375",
      "businessUnits":"CWW"
    },
    "HKSHA": {
      "value":"1",
      "countryCode": "HK",
      "countryName": "Hong Kong",
      "branchName": "shatin",
      "branchNameFull": "Shatin",
      "lat":"22.382388",
      "lng":"114.207824",
      "businessUnits":"CR, CWM, CFA"
    }
};

$('button').on('click', function(){
  for (var key in HKbranches) {

$('#results-box').append( "<div class='result'>"+HKbranches[key].branchName+"</div>");
};

});








  


//text - replace content with a string
//innerhtml - same as text but get the html of children
//html - same but can put html elements
//insert - do stuff 'around' the target [text or jQuery element]
//append/prepend/before/after etc -  [text or jQuery element]





});