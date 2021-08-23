'use strict';

class ProgressBar {

	constructor() {
		this.progressBar = document.querySelector('progress');
		
	}

	recalculate() {
		this.progressBar.max = this.calculateMax();
		this.progressBar.value = this.calculateValue();
		this.debounce();
	}

	calculateMax() {
		return document.body.scrollHeight - window.innerHeight;
	}

	calculateValue() {
		return Math.abs(document.body.getBoundingClientRect().y);
	}

	debounce() {
		clearTimeout(this.debounceTimer);
		this.debounceTimer = setTimeout(() => 
			console.log( 'Som tu na sekundu' )
		,1000);
	}
}

let bar = new ProgressBar();

addEventListener('scroll', () => { bar.recalculate() } );
addEventListener('resize', () => { bar.calculateMax() } );
