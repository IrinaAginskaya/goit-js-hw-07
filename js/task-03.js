const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector("#gallery");

images.map(element => {
  gallery.insertAdjacentHTML('beforeEnd', `<li><img src="${element.url}" alt="${element.alt}" width="320"></li>`);
});




// for (let element of images)  
//   gallery.insertAdjacentHTML('beforeEnd', `<li><img src="${element.url}" alt="${element.alt}" width="320"></li>`);


// const elements = images.map(element => {
//   const pictures = document.createElement('img');
//   pictures.src = element.url;
//   pictures.alt = element.alt;
//   pictures.width = 640;
//   const listOfPisture = document.createElement('li');
//   return listOfPisture.appendChild(pictures);
   
// })
// console.log(elements)
// gallery.append(...elements)


