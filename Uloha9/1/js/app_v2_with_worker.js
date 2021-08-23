const list = document.querySelector('ol');
const getDataBtn = document.querySelector('.get-data');

getDataBtn.addEventListener('click', processData);

function processData() {
	getDataBtn.style.display = 'none';
	axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
		// let worker = new Worker('js/worker_v1.js');
		let worker = new Worker('js/worker_v2_with_map.js');

		worker.postMessage([
			'hi, bro',
			response.data
		]);

		worker.addEventListener('message', event => {
			list.innerHTML = event.data.join('');
		});

	
	});
}