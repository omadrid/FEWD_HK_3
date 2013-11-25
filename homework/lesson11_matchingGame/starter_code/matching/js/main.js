//change class events for secret to attr(id, secret)
var clickCount = 0;
var pairCount = 0;
var firstUpId;
var firstUp;
var secondUp;
var secondUpId;
var completePairSet = $('.card').length / 2;
var clickedCard;

//CLICK NEW GAME BUTTON
$('button').on('click', function () {
clickCount = 0;
pairCount = 0;
faceUpCount = 0;
$('.card').removeClass('faceUp hidden', 800);
$('#winning').addClass('hidden-message');
//clear firstUp & firstUpId?
// rearrange cards;
	//var cardSet = [ace, one, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king];
  //$('div').each(function(index){$(this).attr("id", "div" + index);});
});

//CLICK CARD
$('.card').on('click', function () { 
  clickCount++;
  $this = $(this);
  clickedCard = $this;
  //if clickedCard is already showing, hide it
  if ($(clickedCard).hasClass('faceUp')) {

	  //alert('clicked is faceUp, turn it over. END OF TURN');  
	  	  $(clickedCard).removeClass('faceUp').delay(1000).fadeIn('slow');
  } else {
  //if clickedCard isn't showing yet, turn it over
  	  $(clickedCard).switchClass('', 'faceUp', 1000);
  	  //alert('card is now faceUp. Check if others are faceUp too.');
  	  othersFaceUpCheck(clickedCard);
  };
});
  	  
function othersFaceUpCheck(clickedCard) { 	  
	//if clickedCard is the firstUp--> make it = faceUp
  	if ( $('.faceUp').length < 2 ) {
  	  	firstUp = clickedCard;
  	  	firstUpId = $(clickedCard).attr('id').substring(2);
  	  	//alert('this '+firstUpId+' card is the firstUp. END OF TURN.');
  	} else {
  	//if clickedCard is not the firstUp --> make it = secondUp, then check for pair
  	  	secondUp = clickedCard;
  	  	secondUpId = $(clickedCard).attr('id').substring(2);
  	  	alert('This '+secondUpId+' is the secondUp. Now check for pair.');
  	  	pairCheck(secondUpId, secondUp, firstUpId);
  	};
};  	

function pairCheck(secondUpId, secondUp, firstUpId) {
	//if secondUp does not match firstUp, turn secondUp over
	if (secondUpId != firstUpId) {
		$(firstUp).removeClass('faceUp').delay(1000);
		//alert('this is not a pair. END OF TURN');
	} else {
	//if the cards match, hide them both and check for victory 
		//alert('this is a pair! Hide them and check if youve won the game.');
		pairCount++;
		$(firstUp).addClass('matched').removeClass('faceUp').delay(1000);
		$(secondUp).addClass('matched').removeClass('faceUp').fadeIn('slow');
		victoryCheck(secondUp, secondUpId, firstUpId);
		firstUp;

	};
};

function victoryCheck(secondUp, secondUpId, firstUpId) {	
	if (pairCount == completePairSet) {
		alert('you won the game! wahooooo');
		$('#winning').removeClass('hidden-message');
		$('#score').text(clickCount);
	} else {
		//alert('Nice work, but you havent won yet. END OF TURN');
	};
};