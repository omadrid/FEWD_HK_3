var images = [
  "http://dummyimage.com/100/09f/fff.png",
  "http://dummyimage.com/200/09f/fff.png",
  "http://dummyimage.com/300/09f/fff.png"
];

var votes;
var position = 0;

$(document).ready(function() {
  votes = new Array( images.length );
  $('#backButton').click(goToPrevImg);
  $('#skipButton').click(goToNextImg);
  $('#your-vote').change(votePlaced);
  checkPosition();
});

function checkPosition () {
  if (position == 0) {
    $('#backButton').hide();
  } else if (position == images.length) {
    $('#skipButton').hide();
  } else {
    $('#backButton, #skipButton').show();
  }
};
//  
function goToPrevImg () {
  position--;
  $('#image-to-vote-on').attr('src', images[position]);
  checkPosition ();
};
// 
function goToNextImg () {
  position++;
  $('#image-to-vote-on').attr('src', images[position]);
 checkPosition ();
};


function votePlaced () {
  //reset dropdown to default
  $('#your-vote').change(function(){
    $('#your-vote').prop('selectedIndex',0);
  });
  // Get voteValue
  var voteValue = $('#your-vote option:selected').text();
  // Set the value of the correct element
  votes[position] = voteValue;   
  // if there are more pics in the array, go to the next image
  if (position != images.length - 1) {
    goToNextImg();
  //at the final pic, calculate average rating and display (do not pass go or collect $200)
  } else { 
   //sum total all voteValues
      var sumVotes = 0;
      var countVotes = 0;
      votes.forEach(function(element, index) {
	      if ( element != null ) {
	      	countVotes++;
	      	sumVotes += parseInt(element);
	      }
      });
      //var average = parseFloat((sumVotes/countVotes).val().toFixed(2));
      $('footer').text("   Holla Back, you've reached the end of the array. Your average vote is " + average);
	}
};
