const Orb = (function() {
    let textarea = null
    let progress = null
    let reader = null
    let counter = null

    let lastLength = 0

    const tweetLength = 40
    const warningZone = Math.floor( tweetLength * (1/2) )
    const dangerZone  = Math.floor( tweetLength * (3/4) )

    const getPathLength = function() {
		return textarea.value.length;
	}

    const updateProgress = function(pathLength, length) {
        if ( length <= tweetLength ) {
            const percentage = length / tweetLength;
            const newOffset = pathLength - (pathLength * percentage) + 'px';

            progress.style.strokeDashoffset = newOffset;
        } else if (length > tweetLength) {
            progress.style.strokeDashoffset = 0
        }
    }

    const updateCounter = function(length) {
		counter.textContent = tweetLength - length;
        counter.classList.toggle('danger', length >= tweetLength);
    
    }

	const updateColors = function(length) {
        const up = length > lastLength
        if ( length <= tweetLength ) {
            progress.classList.toggle('warn', length > warningZone && length < dangerZone);
            progress.classList.toggle('danger', length >= dangerZone);
            progress.classList.toggle('tragedy', length >= tweetLength);
        }
    }

    const updateHighlights = function() {
        const value = textarea.value
        reader.innerHTML = `${value.slice(0, tweetLength)}<mark>${value.slice(tweetLength)}</mark>`
    }

    const init = function(textareaElement, progressElement, readerElement, counterElement) {
        textarea = textareaElement
        progress = progressElement
        reader = readerElement
        counter = counterElement

        const pathLength = Math.PI * ( progress.getAttribute('r') * 2 )

        progress.style.strokeDashoffset = pathLength + 'px';
        progress.style.strokeDasharray  = pathLength + 'px';

        textarea.addEventListener('input', function( event ) {
            const length = getPathLength()
          
            updateProgress(pathLength, length)
            updateCounter(length)
            updateColors(length)
            updateHighlights()
        

            lastLength =  textarea.value.length
        });

       
    }

	return {
        init: init,
	}
}());
