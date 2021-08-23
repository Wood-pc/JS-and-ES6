

/*  !!!

		[ todo: ]
		- prerobit na localStorage
		- spravit 'clean' verziu bez js a mozno css hover efektov?
			a bez .desaturate classu?

	*/

// najdeme vsetkych dvoch sexosov
// querySelectorAll() returns a  NodeList .
var dudes = document.querySelectorAll(".contact-form img"),
  dudes = Array.from(dudes); // zmeni Nodelist na Array

// aby sme mohli cyklom kazdemu pridat event listeners
// forEach() zavola funkciu pre kazdy prvok Array
// forEach() vytvori novu premennu dude
dudes.forEach(function (dude) {
  // po kliknuti zdviheme skore
  dude.addEventListener("click", function (event) {
    var scoreElement = this.nextElementSibling,
      score = Number(scoreElement.textContent);

    score = score + 1;
    scoreElement.textContent = score;
  });

  // // ked vojdem na jedneho, druhy zbledne
  // // -.without() Ti vyhodi pole s 1 prvkom a [0] Ti z toho pola urobi/vytiahne element
  // dude.addEventListener('mouseover', function (event) {
  // 	var otherDude = _.without(dudes, this)[0];
  // 	otherDude.classList.add('desaturate');
  // });

  // // ked vyjdem z jedneho, zmizne zblednutie
  // dude.addEventListener('mouseout', function (event) {
  // 	var otherDude = _.without(dudes, this)[0];
  // 	otherDude.classList.remove('desaturate');
  // });

  // -----------------------ZADANIE 04-------------------------------------

  // a) Zlúč viac eventov
  var tog = function (event) {
    var otherDude = _.without(dudes, this)[0];  // this = dude
    otherDude.classList.toggle("desaturate");
  };

  dude.addEventListener("mouseover", tog, false);
  dude.addEventListener("mouseout", tog, false);

});


//B
function money(num) {

	var eur = (num).toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, " ") + '€';

	 return eur;
	  
}
var result = money(15321.35);
console.log(result);


//C

function discount(total, discount) {    //   1000,20

	var disc = discount / 100;            //   20/100

	return total - (total*disc);          //   1000-(1000*0,2)   1000-200=800

}
result = discount(1000, 20);
console.log(result);
