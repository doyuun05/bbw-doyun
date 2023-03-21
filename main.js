(() => {

    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');

    let currentItem = graphicElems[0];
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1;
        console.log(ioIndex);
    });

    for (let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        // stepElems[i].setAttribute('data-index', i);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activate() {
        currentItem.classList.add('visible');
    }

    function inactivate() {
         currentItem.classList.remove('visible');
    }

    window.addEventListener('scroll', () => {
        let step;
        let boundeingRect;

        for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
            step = stepElems[i];
            if (!step) continue;
            boundeingRect = step.getBoundingClientRect();
            

            if (boundeingRect.top > window.innerHeight * 0.1 &&
                boundeingRect.top < window.innerHeight * 0.8) {
                     
                inactivate();
                currentItem = graphicElems[step.dataset.index];
                activate();
                }
        }
    });

    activate();

})();
