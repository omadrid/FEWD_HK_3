var images = [
  "http://dummyimage.com/300/09f/fff.png",
  "http://dummyimage.com/400/09f/fff.png",
  "http://dummyimage.com/200/09f/fff.png",
  "http://lorempixel.com/400/400/animals/4",
  "http://lorempixel.com/400/400/animals/5"
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
 // Get voteValue
  var voteValue = $('#your-vote option:selected').text();
  alert(voteValue);
  votes[position] = voteValue;   // Set the value of the correct element
  if (position != images.length) {
    // Go to the next picture
    goToNextImg();
  } else {
    // Calculate average rating and display (do not pass go or collect $200)
   //loop through array to get sum total voteValues
    votes.forEach(function(e) {
      sumVotes += parseInt($(this).val()) || 0 ;
      alert(sumVotes);
    };
      //loop through array - if not null, add to count
  votesFilter = $.grep(votes, function( voteValue, i ) {
  return ( voteValue > 1 );
});
countVotes = votesFilter.length;
alert(countVotes);
                  

      
      //divide total by count
      alert(sumVotes + ' divided by ' + countVotes);
      var average = sumVotes / countVotes;
      alert(average);
  }
};
*/