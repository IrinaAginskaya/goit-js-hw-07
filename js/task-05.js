const input = document.querySelector("#name-input");
const nameNew = document.querySelector("#name-output");

input.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    nameNew.textContent = event.currentTarget.value;
})

