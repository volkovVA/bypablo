(function () {
    'use strict';

    let boxElem = document.body;
    let pointerElem = document.querySelector('.cursor');

    function onMouseMove(event) {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        let crd = boxElem.getBoundingClientRect();

        if (crd) {
            if (pointerElem.classList.contains('cursor-hidden')) {
                pointerElem.classList.remove('cursor-hidden');
            }

            pointerElem.style.transform = 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0px)';

        } else {
            pointerElem.classList.add('cursor-hidden');
        }
    }

    function disablePointer() {
        requestAnimationFrame(function hidePointer() {
            pointerElem.classList.add('cursor-hidden');
        });
    }

    boxElem.addEventListener('mousemove', onMouseMove, false);
    boxElem.addEventListener('mouseleave', disablePointer, false);

})();