(function () {
    'use strict';

    let boxElem = document.body;
    let pointerElem = document.querySelector('.cursor');

    function onMouseMove(event) {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        let crd = boxElem.getBoundingClientRect();

        if (crd) {
            if (pointerElem.classList.contains('pointer-hidden')) {
                pointerElem.classList.remove('pointer-hidden');
            }

            pointerElem.style.transform = 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0px)';

        } else {
            pointerElem.classList.add('pointer-hidden');
        }
    }

    function disablePointer() {
        requestAnimationFrame(function hidePointer() {
            pointerElem.classList.add('pointer-hidden');
        });
    }

    boxElem.addEventListener('mousemove', onMouseMove, false);
    boxElem.addEventListener('mouseleave', disablePointer, false);

})();