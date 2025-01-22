(function () {
	let industryChoices = document.querySelectorAll('#filter-industry li');
	let geoChoices = document.querySelectorAll('#filter-geography-container li');
	let manualReviewRate = document.querySelector('#manual-review-rate');

	industryChoices.forEach(function (ic) {
		if (ic.getAttribute('value') === 'Buy now, pay later') {
			ic.addEventListener('click', function () {
				manualReviewRate.classList.add('hidden');
			});
		} else {
			ic.addEventListener('click', function () {
				manualReviewRate.classList.remove('hidden');
			});
		}
	});

	geoChoices.forEach(function (gc) {
		gc.addEventListener('click', function () {
			manualReviewRate.classList.remove('hidden');
		});
	});
})();
