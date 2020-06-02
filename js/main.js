window.onload = function(){
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }
      
      function playSound(e) {
        let keyCode;
        if (e.type === 'click') {
          keyCode = e.currentTarget.dataset.key;
        } else {
          keyCode = e.keyCode;
        }
      
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`div[data-key="${keyCode}"]`);
        if (!audio) return;
      
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
      }
      
      const keys = Array.from(document.querySelectorAll('.key'));
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
      window.addEventListener('keydown', playSound);
      keys.forEach(key => key.addEventListener('click', playSound))

      const imgDefer = document.getElementsByTagName('img');
			for (let i = 0; i < imgDefer.length; i++) {
				if (imgDefer[i].getAttribute('data-src')) {
					imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
				}
			}
        
      
};