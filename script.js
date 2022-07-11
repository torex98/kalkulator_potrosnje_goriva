function fuelCalculator() {
	let	l = document.querySelector('#litar');
	let km = document.querySelector('#kilometar');
	
	

	l = parseFloat(l.value);
	km = parseFloat(km.value);

	// Formula za izracunavanje koliko auto trosio na 100km
	let potrosnja = (l / km) * 100;
	
	
// Da skratimo rezultat na dve decimale
potrosnja = potrosnja.toFixed(2);

	let newElement = document.createElement('div');
	newElement.style.fontSize = '30px';
	newElement.style.fontWeight = 'bold';

	newElement.className = 'rezultat';
	newElement.innerText = `Vaša potrošnja je ${potrosnja} litara na 100 kilometara?`

document.querySelector('.container').appendChild(newElement);

}