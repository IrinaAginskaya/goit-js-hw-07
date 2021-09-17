const categorieEl = document.querySelectorAll(".item");
console.log(`В списке ${categorieEl.length} категории`);

categorieEl.forEach(element => {
    console.log(`Категория: ${ element.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${ element.querySelectorAll('li').length }`)
});

