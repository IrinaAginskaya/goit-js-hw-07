const fontNew = document.querySelector('#font-size-control');
const textNew = document.querySelector('#text');

fontNew.addEventListener('input', changeRange);
function changeRange(element) {
    textNew.style.fontSize = element.currentTarget.value + "px";
    }
