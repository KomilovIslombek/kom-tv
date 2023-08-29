// Functions
function removeClass(els, className) {
    if(Array.isArray(els) || els.length > 1) {
        els.forEach(el => {
            el.classList.remove(className)
        });
    } else {
        els.classList.remove(className)
    }
}

function addClass(els, className) {
    if(Array.isArray(els) || els.length > 1) {
        els.forEach(el => {
            el.classList.add(className)
        });
    } else {
        els.classList.add(className)
    }
}