let letCount = document.querySelector("#counter");
const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');



let counterValue = 0;

addBtn.addEventListener('click', () => {
    counterValue += 1;
    console.log(counterValue);
    document.getElementById('value').innerHTML = counterValue;
})
removeBtn.addEventListener('click', () => {
    counterValue -= 1;
    console.log(counterValue);
    document.getElementById('value').innerHTML = counterValue;
});

