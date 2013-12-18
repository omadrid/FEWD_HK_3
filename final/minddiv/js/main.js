$(document).ready(function() {
 
    var branchClicked;
    var activeBranchCount = 0;
    var currentActiveBranch;
    var countryClicked;
    var selectedCountryCode;
    var marker = [];
    
    var countryMaps = {
      "HK":{
        "zoom":11,
        "lat":22.339153,
        "lng":114.205358,
        "branches": [
          "HKHLD",
          "HKSHA"
        ]
      },
      "VN":{
        "zoom":5,
        "lat":17.048440,
        "lng":106.520112,
        "branches": [
          "VNHAN",
          "VNHCM"
        ]
      }
    };

    var branches = {
      "HKHLD": {
        "value":"0",
        "countryCode": "HK",
        "countryName": "Hong Kong",
        "branchName": "hldgs",
        "branchNameFull": "Holdings",     
        "lat":"22.279184",
        "lng":"114.169375",
        "businessUnits":"CWW",
        "pic":"http://i.imgur.com/tHYzNHB.jpg"
      },
      "HKSHA": {
        "value":"1",
        "countryCode": "HK",
        "countryName": "Hong Kong",
        "branchName": "shatin",
        "branchNameFull": "Shatin",
        "lat":"22.382388",
        "lng":"114.207824",
        "businessUnits":"CR, CWM, CFA",
        "pic":"http://i.imgur.com/i4KKHnb.jpg"
      },
      "VNHAN": {
        "value":"2",                                
        "countryCode": "VN",
        "countryName": "Vietnam",
        "branchName": "hanoi",
        "branchNameFull": "Hanoi",
        "lat":"21.033333",
        "lng":"105.850000",
        "businessUnits":"CR, CWM, CFA",
        "pic":"http://i.imgur.com/eAohWxt.jpg"
      },
      "VNHCM": {
        "value":"3",
        "countryCode": "VN",
        "countryName": "Vietnam",
        "branchName": "hcmc",
        "branchNameFull": "Ho Chi Minh City",
        "lat":"10.810583",
        "lng":"106.709142",
        "businessUnits":"CRM, CR",
        "pic":"http://i.imgur.com/jlEfIvS.jpg"
      }
    };
    var myOptions = {
                    zoom: 4,
                    center: new google.maps.LatLng(15.782361, 111.201000),
                    mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var mapMain = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    
    var digit = 0;
    for (var key in branches) {
    /*for (var key in branches) {*/
                    marker[digit] = new google.maps.Marker({
                                    position: new google.maps.LatLng(branches[key].lat, branches[key].lng),
                                    map: mapMain,
                                    title: key,
                                    //animation: google.maps.Animation.DROP,
                                    icon: 'http://i.imgur.com/HJv1WJe.png' 
                                    /*'http://i.imgur.com/uC2AUOh.png'*/
                    });
                      /*****POPULATE SEARCH RESULTS********/
                     $('#result-list').append( 
                          '<div id="'+
                          [key]+
                          '" class="'+
                          [key]+
                          ' result">'+
                          branches[key].branchNameFull+
                          ', '+
                          branches[key].countryName+
                          '</div>' 
                                );

                    digit++;
    };
   
    for (var i=0; i<marker.length; i++) {
        // Loop through and add click event to each marker
        google.maps.event.addListener(marker[i],'click',function(){           
            $this = $(this);
            branchClicked = this.getTitle();
            showBranch(branchClicked);    
            //$('#'+markerClicked).addClass('hilit');
            //$('#'+markerClicked+'-info').addClass('show');   
        })
       
        // Loop through and add mouseover/out events to each marker
        google.maps.event.addListener(marker[i], 'mouseover',function(){
            var markerHover = this.getTitle();
            $('#'+markerHover).addClass('hilit');
        });
        google.maps.event.addListener(marker[i], 'mouseout',function(){
            var markerHover = this.getTitle();
            $('#'+markerHover).removeClass('hilit');
        });
    };
   
    

      /***SEARCH RESULT EVENTS***/
      //clicked search result
      $('.result').on('click', function(){
        var branchClicked = $(this).attr('id');
        //if nothing is selected, show it 
        if ( $('.result.hilit').length == 0) {
                        showBranch(branchClicked); 
        //if something is hilit and you click it
        } else if ($('.result.hilit.'+branchClicked).length > 0) {
                        hideBranch(branchClicked);              
        //if you select another branch than the visible one, hide the first then show the clicked one
        } else {
                        //clear results
                        $('.result.hilit').removeClass('hilit');
                        $('.info-box').removeClass('show');
                        //show clicked
                        showBranch(branchClicked);
        }
      });

      function showBranch(branchClicked){
          $('#'+branchClicked).addClass('hilit');
          $('#info-canvas').html( 
              '<div id="'+
              branchClicked+
              '-info" class="info-box hide '+
              branchClicked+
              '"><div class="close">x</div><div class="clear"></div><h1>'+
              branches[branchClicked].branchNameFull+
              '</h1><h2>'+
              branches[branchClicked].countryName+
              '</h2><p>'+
              branches[branchClicked].businessUnits+'</p><img src="'+branches[branchClicked].pic+
              '"></div>');
      $('#'+branchClicked+'-info').addClass('show');
    };

      function hideBranch(branchClicked){
          $('#'+branchClicked).removeClass('hilit');
          $('#'+branchClicked+'-info').removeClass('show');
      };
      
      $('#info-canvas').on('click', '.close', function(){
                      $(this).closest('.info-box').removeClass('show');
                      $('.result.hilit').removeClass('hilit');
      });

      //select country from dropdown
      $('#country-dropdown').change(function(){
        $('.result.hilit').removeClass('hilit');
        $('.info-box').removeClass('show');
        var selectedCountryOption = $('#country-dropdown option:selected').text();
        selectedCountryCode = selectedCountryOption.slice(-2);
        var newLat = countryMaps[selectedCountryCode].lat;
        var newLng = countryMaps[selectedCountryCode].lng;
        var newCenter = new google.maps.LatLng(newLat, newLng);
        var newZoom = countryMaps[selectedCountryCode].zoom;
        mapMain.setCenter(newCenter);
        mapMain.setZoom(newZoom);
      });
    
    /*$(function() {
      var availableTags = [
        "Hong Kong HK",
        "Vietnam VN",
        "HK",
        "VN"
      ];
    $( "#tags" ).autocomplete({
      source: availableTags,
      messages: {
      noResults: '',
      results: function() {}
    },
      autofocus:true
    });
  });*/


});