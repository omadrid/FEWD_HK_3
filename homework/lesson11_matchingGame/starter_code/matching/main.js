// So the pseudo code you're probably looking for is something like this:

// Assumptions:
//
// 1. Use CSS classes to determine the rank of the class, and thereby the background position
// 2. Use classes to dertermine state between 'secret', and 'matched'
//	  'secret' simply means showing the back of the card. 
// 3. 4 cards are being used to play the memory game
// 4. Moves are considered to be the number of cards turned over divided by two.
// 5. There are a number of placeholder HTML elements equal to the number of cards in the game. 
// 6. Card names are stored in an array in JS.

// Flow :
// Click button to start the Game
	// 1. Shuffle card array as defined in assumption 6 (Tip: Google shuffling an array)
	// 2. For each class in card array, append class to HTML placeholder as defined by asumption 5.

// Click card to reveal the card for matching
	// 0. Register clicks on card which DO NOT have the 'matched' class.
	// 1. Remove the 'secret' class from the card so now it shows the card
	// 2. If there are now three cards without either 
	//	  'secret' or 'matched' classes, add 'secret' to the other two cards 
	// 3. If there are two cards without either 
	//    'secret' or 'matched' classes, then proceed to matching logic

// Match two cards 
	// 1. Check whether the two card without 'secret' or 'matched' classes,
	//    have the same rank.
	// 2. If cards are matched, add the 'matched' class.
	// 3. If there are no cards left with 'secret' classes, proceed to score the game.
	// 4. Increment the move counter by one.

// Score the game
	// 1. Display the game-over element, and add the score.

// Click button to reset the Game
	// reset all counter and start new game

// Checkbox to turn on cheat mode
	// After each initial card in a pair is clicked, 
	// highlight the other one in the pair by adding
	// the cheat class to it.

//DOCUMENT READY
$(document).ready(function(){

// indent everything below here, because it's wrapped by the document ready function:

var clickCount = 0;
var pairCount = 0;
// Remember, this will only be set once, and the next time you refer to it , it will just be a integer (number).
var visibleCount = $('.visible').length
var visibleCardClass;

// check out the syntax changes I made - just slight, but important!
$('.card').on('click', function (){ 
	clickCount++; //
	cardClicked; 
})

//CLICK NEW GAME BUTTON
clickCount = 0;
pairCount = 0;
visibleCount = 0;
// rearrange cards;
	//var cardSet = [king, queen, queen, king];


//CLICK CARD
// $('.card').on('click', function () {
  clickCount++;
// What are you trying to check here?
// if ($this card hasClass .visible) {
	turnDown;
};
else {
	othersVisibleCheck;
};

// yeah, you're going in the right direction here
function othersVisibleCheck () {
	if (visibleCount = 0) {
		turnUp;
	}
	else {
		 // dont forget that these have to be function calls,
		 // i.e. pairCheck(); to properly work.
		pairCheck;
	}
};

function pairCheck () {
//not a match
// if ($this card's class is != visibleCardClass {
	var numItems = $('.visible').length
	visible card --> turnDown;
	$this -->turnUp;
	) {
//  
// if (pairCount++;		

}




//function turnDown() {
//  removeClass .visible;
//	addClass .secret;
//	visibleCount--;
//}

//function turnUp() {
//	removeClass .secret;
//  visibleCount++;
//  visibleCardClass = $this card's class
//}

})