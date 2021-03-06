function initialize() {
  var myLatlng1 = new google.maps.LatLng(-22.360000, 114.128000);
  var myLatlng2 = new google.maps.LatLng(-22.365000, 114.239000);	
  var myLatlng3 = new google.maps.LatLng(-22.365500, 114.350000);	

  var mapOptions = {
    //center: new google.maps.LatLng(22.352734, 114.127699),
    center: myLatlng1,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
  
  /*var circleIcon = new google.maps.Icon({
    url: 'http://i.imgur.com/Ha3vsT6.png'
  });*/


  var infowindow1 = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400
  });

  var marker1 = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      icon: 'http://i.imgur.com/p7wqU5t.png',
      title: 'Uluru (Ayers Rock)'
  });

  var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      title: '2nd title'
  });

  var marker3 = new google.maps.Marker({
      position: myLatlng3,
      map: map,
      title: '3rd title'
  });
  


  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);




