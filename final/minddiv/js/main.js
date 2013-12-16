function initialize (){

var branchClicked;
var activeBranchCount = 0;
var currentActiveBranch;
var countryClicked;
var countryChoice;
var marker1;
var marker2;
var point1;
var point2;


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
    /*,
    "VNHAN": {
      "value":"2",
      "branchName": "hanoi",
      "countryCode": "VN",
      "lat":"21.033333",
      "lng":"105.850000",
      "businessUnits":"CR, CWM, CFA"
    },
    "VNHCM": {
      "value":"3",
      "branchName": "hcmc",
      "countryCode": "VN",
      "lat":"10.810583",
      "lng":"106.709142",
      "businessUnits":"CRM, CR"
    }*/
};

/*var centerBlank = new google.maps.LatLng(22.311014, 114.134045);
var myOptions = {
    zoom: 3,
    center: centerBlank,
    mapTypeId: google.maps.MapTypeId.HYBRID
};
var mapBlank = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
*/
var center = new google.maps.LatLng(15.782361, 111.201000);
  var myOptions = {
      zoom: 4,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapMain = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
 
  var marker = [];
  var position = 0;
  for (var key in HKbranches) {
    marker[position] = new google.maps.Marker({
        position: new google.maps.LatLng(HKbranches[key].lat, HKbranches[key].lng),
        map:mapMain,
        title: key,
        icon: 'http://i.imgur.com/p7wqU5t.png'
    });
    position++;
  };


  
/*
  point1 = new google.maps.LatLng(22.279184, 114.169375);
  marker1 = new google.maps.Marker({
      position:point1,
      map:mapMain,
      title: 'HKHLD',
      icon: 'http://i.imgur.com/p7wqU5t.png'
  });

  point2 = new google.maps.LatLng(22.382388, 114.207824);
  marker2 = new google.maps.Marker( {
    position:point2,
    map:mapMain,
    title: 'HKSHA',
    icon: 'http://i.imgur.com/p7wqU5t.png'
  }); 

 point3 = new google.maps.LatLng(21.033333, 105.850000);
  marker3 = new google.maps.Marker( {
    position:point3,
    map:mapMain,
    title: 'VNHAN',
    icon: 'http://i.imgur.com/p7wqU5t.png'
  }); 

  point4 = new google.maps.LatLng(10.810583, 106.709142);
  marker4 = new google.maps.Marker( {
    position:point4,
    map:mapMain,
    title: 'VNHCM',
    icon: 'http://i.imgur.com/p7wqU5t.png'
  }); 
*/

function HKselected(){
  var myOptionsHK = {
      zoom: 11,
      center: new google.maps.LatLng(22.311014, 114.134045),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapHK = new google.maps.Map(document.getElementById("map-canvas"), myOptionsHK);
 

  markerHK1 = new google.maps.Marker({
      position:new google.maps.LatLng(22.279184, 114.169375),
      map:mapHK,
      title: 'HKHLD',
      icon: 'http://i.imgur.com/p7wqU5t.png',
  });

  markerHK2 = new google.maps.Marker( {
    position: new google.maps.LatLng(22.382388, 114.207824),
    map:mapHK,
    title: 'HKSHA',
    icon: 'http://i.imgur.com/p7wqU5t.png',
  }); 

/************************************EVENTS***************************/

/***MARKER EVENTS***/
//clicked map marker 
//!TO DO! how to apply this to all markers?
for (var i=0; i<marker.length; i++) {
  // Add click event
  google.maps.event.addListener(marker[i],'click',function(){
    alert('clicked');
    $this = $(this);
    //get branch code of clicked marker
    markerClicked = this.getTitle();
    //hilight that search result
    $('#'+markerClicked).addClass('hilit'); 
    //show that info box
    $('#'+markerClicked+'-info').addClass('show').removeClass('hide');
    activeBranchCount = 1;
    currentActiveBranch = markerClicked;
  });

  // Add mouseover event
  google.maps.event.addListener(marker[i], 'mouseover',function(){
    var markerHover = this.getTitle();
    $('#'+markerHover).addClass('hilit');
  });
}

/*

//(do the same for the other marker)
google.maps.event.addListener(markerHK2,'click',function(){
    $this = $(this);
    var markerClicked = this.getTitle();
    $('#'+markerClicked).addClass('hilit'); 
    $('#'+markerClicked+'-info').addClass('show').removeClass('hide');
    activeBranchCount = 1;
    currentActiveBranch = markerClicked;
      });/




google.maps.event.addListener(markerHK1, 'mouseout',function(){
  var markerHover = this.getTitle();
  $('#'+markerHover).removeClass('hilit');
});

*/

};
/***SEARCH RESULT EVENTS***/
//clicked search result
$('.result').on('click', function(){
  var resultClicked = $(this).attr('id');
  if (activeBranchCount < 1) {
      $('#'+resultClicked).addClass('hilit'); 
      $('#'+resultClicked+'-info').addClass('show').removeClass('hide');
      activeBranchCount = 1;
      currentActiveBranch = resultClicked;
  } else if (resultClicked == currentActiveBranch) {
      $('#'+resultClicked).removeClass('hilit'); 
      $('#'+resultClicked+'-info').addClass('hide').removeClass('show');
      activeBranchCount = 1;
  } else {

      $('.result').removeClass('hilit'); 
      $('#'+resultClicked).addClass('hilit'); 
      $('.info-box').addClass('hide').removeClass('show'); 
      $('#'+resultClicked+'-info').addClass('show').removeClass('hide');
      //$('#'+resultClicked).addClass('hilit'); 
      //$('#'+resultClicked+'-info').addClass('show').removeClass('hide');
      currentActiveBranch = resultClicked;
  }

});


//close info box
$('.close').on('click', function(){
  $('.info-box').addClass('hide').removeClass('show');
  $('.result').removeClass('hilit');
  activeBranchCount = 0;
});

//select country
$('#country-dropdown').change(function(){
  countryChoice = $('#country-dropdown option:selected').text()+'branches';
  HKselected();
});
};

google.maps.event.addDomListener(window, 'load', initialize);

/******************************/

















