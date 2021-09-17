const input = document.querySelector("#name-input");
const nameNew = document.querySelector("#name-output");


input.oninput = function (event) {
    if (input.value === '') {
       nameNew.innerHTML = 'незнакомец';
    } else{
    nameNew.textContent = event.currentTarget.value;
    }
}



// input.addEventListener('input', (event) => {

//     console.log(event.currentTarget.value);
//     nameNew.textContent = event.currentTarget.value;

// })