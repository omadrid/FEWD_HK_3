$(document).ready(function() {
 
                var branchClicked;
                var activeBranchCount = 0;
                var currentActiveBranch;
                var countryClicked;
                var countryChoice;
                var marker = [];
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
                                },
                                "VNHAN": {
                                  "value":"2",                                
                                  "countryCode": "VN",
                                  "countryName": "Vietnam",
                                  "branchName": "hanoi",
                                  "branchNameFull": "Hanoi",
                                  "lat":"21.033333",
                                  "lng":"105.850000",
                                  "businessUnits":"CR, CWM, CFA"
                                },
                                "VNHCM": {
                                  "value":"3",
                                  "countryCode": "VN",
                                  "countryName": "Vietnam",
                                  "branchName": "hcmc",
                                  "branchNameFull": "Ho Chi Minh City",
                                  "lat":"10.810583",
                                  "lng":"106.709142",
                                  "businessUnits":"CRM, CR"
                                }
                };
                var myOptions = {
                                zoom: 4,
                                center: new google.maps.LatLng(15.782361, 111.201000),
                                mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var mapMain = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
                
                var position = 0;
                for (var key in HKbranches) {
                                marker[position] = new google.maps.Marker({
                                                position: new google.maps.LatLng(HKbranches[key].lat, HKbranches[key].lng),
                                                map: mapMain,
                                                title: key,
                                                icon: 'http://i.imgur.com/p7wqU5t.png'
                                });
                                position++;
                };
   
    for (var i=0; i<marker.length; i++) {
        // Add click event
        google.maps.event.addListener(marker[i],'click',function(){           
            $this = $(this);
            markerClicked = this.getTitle();                                                                                                                                                      //get branch code of clicked marker  
            $('#'+markerClicked).addClass('hilit');                                                                                                                         //hilight that search result
            $('#'+markerClicked+'-info').addClass('show').removeClass('hide');                             //show that info box
            activeBranchCount = 1;
            currentActiveBranch = markerClicked;
        });
       
        // Add mouseover event
        google.maps.event.addListener(marker[i], 'mouseover',function(){
            var markerHover = this.getTitle();
            $('#'+markerHover).addClass('hilit');
        });
       
        // Add mouseover event
        google.maps.event.addListener(marker[i], 'mouseout',function(){
            var markerHover = this.getTitle();
            $('#'+markerHover).removeClass('hilit');
        });
    }
 
                /***SEARCH RESULT EVENTS***/
                //clicked search result
                $('.result').on('click', function(){
                  var resultClicked = $(this).attr('id');
        if ( $('.result.hilit').length == 0) {
                                  $(this).addClass('hilit');
                                  $('#'+resultClicked+'-info').addClass('show');
                  } else if ( $('.result.hilit').length > 0 && $('.result.hilit') == $(this) ) {
                                  $(this).removeClass('hilit');
                                  $('#'+resultClicked+'-info').removeClass('show');
                  } else {
                                  $('.result.hilit').removeClass('hilit');
                                  $(this).addClass('hilit');
          
                                  $('.info-box').removeClass('show');
                                  $('#'+resultClicked+'-info').addClass('show');
                  }
                });
 
                //close info box
                $('.close').on('click', function(){
                                $(this).closest('.info-box').removeClass('show');
                                $('.result.hilit').removeClass('hilit');
                });
 
                //select country
                $('#country-dropdown').change(function(){
                                countryChoice = $('#country-dropdown option:selected').text()+'branches';
                                HKselected();
                });

                function HKselected() {
                  mapMain.setCenter(new google.maps.LatLng(22.311014, 114.134045));
                  mapMain.setZoom(11);
                };
});