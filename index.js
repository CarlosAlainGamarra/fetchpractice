let dog = document.getElementById('dog');
let cat = document.getElementById('cat');
let buttonDog = document.getElementById('bdog');
let buttonCat = document.getElementById('bcat');

const urlDog = 'https://random.dog/woof.json';
const urlCat = 'https://aws.random.cat/meow';

function getDog () {
    fetch(urlDog)
        .then(response => response.json())
        .then((data) => {
            dog.innerHTML = `<img src=${data.url} alt="dog" />`;
        })
        
}

function getCat () {
    fetch(urlCat)
		.then(response => response.json())
		.then((data) => {
			cat.innerHTML = `<img src=${data.file} alt="cat" />`})
}

buttonDog.addEventListener('click', getDog);
buttonCat.addEventListener('click', getCat);