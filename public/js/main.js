// Exo 1
let input1 = document.querySelectorAll('input')[0]
console.log(input1);

input1.addEventListener('focus', () => {
    input1.setAttribute('style', 'background-color : blue')
})

// Exo 2
let input2 = document.querySelectorAll('input')[1]
console.log(input2);

input2.addEventListener('focus', () => {
    input2.setAttribute('style', 'background-color : blue')
})
input2.addEventListener('focusout', () => {
    input2.removeAttribute('style')
})

// Exo 3
let para1 = document.getElementsByClassName('premierParagraphe')[0]
console.log(para1);
let para2 = document.getElementsByClassName('secondParagraphe')[0]
console.log(para2);
let para3 = document.getElementsByClassName('dernierParagraphe')[0]
console.log(para3);
let btn1 = document.getElementsByClassName('buttonExo')[0]
console.log(btn1);

para1.innerHTML= para2.innerHTML
console.log(para1);
para3.innerText = para2.innerText
console.log(para3);

// Exo 4
let nico = document.querySelector('#exo4')
console.log(nico);

let exo4 = document.querySelectorAll('.buttonExo')[1]
console.log(exo4);

let inputExo4 = document.querySelectorAll('#coucou')[0]
console.log(inputExo4);

exo4.addEventListener('click', () => {
    nico.innerText = inputExo4.value
})

// Exo 5
let exo5 = document.querySelectorAll('.box-body')[4]
let btn5 = exo5.querySelector('button')
console.log(btn5);

let chemin = exo5.querySelector('p').textContent.substr(9)
console.log(chemin);

let image = document.querySelectorAll('.img-responsive')[0]
console.log(image);

btn5.addEventListener('click', () => {
    image.setAttribute('src', chemin)
})

// Exo 6
let exo6 = document.querySelectorAll('.box-body')[5]
let imgTartinou = exo6.querySelectorAll('img')[0]
let imgTartini = exo6.querySelectorAll('img')[1]

imgTartinou.addEventListener('click', ()=> {
    console.log(imgTartinou.getAttribute('src'));
})

imgTartini.addEventListener('click', ()=> {
    imgTartini.setAttribute('src', imgTartinou.getAttribute('src'))
})

// Exo 7
let exo7 = document.querySelectorAll('.box-body')[6]
let texte01 = exo7.querySelectorAll('p')[0].innerText
let texte02 = exo7.querySelectorAll('p')[1].innerText
let btn7 = exo7.querySelectorAll('button')[0]
console.log(btn7);

let texteMagiqueHihi = ""
btn7.addEventListener('click', ()=>{
    texte01.innerText = texte02.innerText
    texteMagiqueHihi.innerText = texte01.innerText
})