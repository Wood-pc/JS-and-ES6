//a
console.log('Ahoj, truľo');

//b/1
function pozdrav(){
    console.log('Ahoj, truľo');
}
pozdrav()

//b/2
function pozdraav(Vašo){
    console.log('Ahoj, Vašo ty truľo');
}
pozdraav("Vašo")

//c

var a = Math.round(prompt('Zadaj prvé číslo'));
var b = Math.round(prompt('Zadaj druhe číslo'));
var c =(a+b)

console.log(c)

//d

function soucet(a,b){
	console.log(a + b);
}

soucet(1,2);

//d/2

function soucet(a,b){
	console.log(a + b);
	return soucet;
}
soucet(4,2);

//e


var pocetProduktov = 5;
    cenaJedneho = 300;
    
    box=document.getElementById('box')
    item=document.createElement('p')

  
    function how_much(pocetProduktov, cenaJedneho) {
        return pocetProduktov * cenaJedneho;
    }
    
    suma = how_much(pocetProduktov, cenaJedneho);
    
    item.textContent= "Kupil si " + pocetProduktov +  " predmetov za " + suma + " € " +"  dokopy.";
   
    box.appendChild(item);
    how_much( pocetProduktov, cenaJedneho );