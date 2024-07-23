const adviceId = document.querySelector('.adviceId');
const adviceText = document.querySelector('.adviceText')
const button = document.querySelector('.btn')

button.addEventListener('click', getAdvice)

window.onload = () => {
    getAdvice()
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        const advice = data.slip

        adviceText.innerHTML = advice.advice
        adviceId.innerHTML = advice.id
    })
}


