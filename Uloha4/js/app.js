
//.................................
//
//           ulohy
//
//.................................

// a)

var a = 0.1,
	b = 0.2;

function fixNumb(a, b) {
	return +(a + b).toFixed(10);

};
console.log(fixNumb(a, b));

// a.2 )

var numbers = [ 1, 2, 3, 4, 5 ];

function together( numbers ) {
	return numbers.reduce((a, b) => a + b);
}
console.log(together(numbers));


// b)

var text = "123px456em789dz";

function justNumb( text ) {
	var numb = text.match(/\d/g);
    numb = numb.join("");
	return numb;
};

console.log(justNumb(text));

// c)


	document.addEventListener('mouseup', function showSelectedText() {
		var selObj = document.getSelection();
		if ( selObj.toString() ) {
			console.log( ""+(selObj));
		}
	});

//.........................................................


var dudes = document.querySelectorAll('.choice img');
	dudes = Array.prototype.slice.call(dudes);  // Array.from( dudes );


dudes.forEach(function( dude ) {

	// show score form localStorage
	updateDude(dude);


	// on click, increase score
	dude.addEventListener('click', function() {
		increaseScore(dude);
	});


//..................................
//
//   One function to rule them all
//
//..................................

	var addRemove = function() {
		var otherDude = _.without( dudes, this )[0];
		otherDude.classList.toggle('desaturate');
	};


	// mouse enters, enemy hurts
	dude.addEventListener('mouseover', addRemove);


	// mouse leaves, enemy rises
	dude.addEventListener('mouseout', addRemove);

});

// ---------------


/**
 * vasho -> scoreVasho
 *
 * @param  {HTMLImageElement} dude
 * @return {string}      	  localStorage key
 */
function getKeyFrom( dude ) {
	return 'score' + _.capitalize( dude.alt );
}



/**
 * get scoreVasho from localStorage
 *
 * @param  {HTMLImageElement} dude
 * @return {number}
 */
function getScore( dude ) {
	return +localStorage.getItem( getKeyFrom(dude) ) || 0;
}


/**
 * set scoreVasho to localStorage
 *
 * @param {HTMLImageElement}  dude   dom element
 * @param {number} 			  score  score number
 */
function setScore( dude, score ) {
	localStorage.setItem( getKeyFrom(dude), score);
}


/**
 * update dudes DOM element
 *
 * @param  {HTMLImageElement} dude
 */
function updateDude( dude ) {
	var score = getScore(dude);
	dude.nextElementSibling.textContent = score;
}


/**
 * increase score for dude
 * both dom and localStorage
 *
 * @param  {HTMLImageElement}  dude
 */
function increaseScore( dude ) {
	var score = getScore(dude);
	score++;

	setScore(dude, score);
	updateDude(dude);
}
