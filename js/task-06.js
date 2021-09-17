const input = document.querySelector('#validation-input');
const lengthSrtict = input.getAttribute('data-length');
// const lengthNew = input.value.length;

input.onblur = function() {

  if (lengthSrtict == input.value.length) { 
     input.classList.remove('invalid');
      input.classList.add('valid');
  } else {
     input.classList.remove('valid');
    input.classList.add('invalid');
  }
};


