const number = document.querySelector('.number');
const dice = document.getElementById('dice');
const adviceText = document.querySelector('.advice-text')



// adding eventlistener to the button

dice.addEventListener('click', showquote);


// the callback function with its api

function showquote(){
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceText.textContent = data.advice;
        number.textContent = data.id;
    })
    .catch((err) => {
        alert('cant get the request!');
    })
}