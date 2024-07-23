//puntatori
const userName = document.getElementById('user')
const btnSave = document.getElementById('save')
const btnDelete = document.getElementById('delete')
const divResult = document.getElementById('savedName')
const titleTime = document.getElementById('time')

//variabile per il local e session storage
const result = localStorage.getItem('result')
const timePassed = sessionStorage.getItem('index')
let i
if (timePassed) {
    i = timePassed
    titleTime.innerText = `${i} secondi`
} else {
    i = 0
}

if (result) {
    divResult.innerText = `Il tuo username è: ${result}`
}


//eventi al click dei due bottoni
btnSave.addEventListener('click', function () {
    divResult.innerText = `Il tuo username è: ${userName.value}`
    localStorage.setItem('result', userName.value)
    userName.value = ''
})

btnDelete.addEventListener('click', function(){
    localStorage.removeItem('result')
    divResult.innerHTML = ''
    userName.value = ''
})

//funzione intervallo
const interval = setInterval(function(){
    titleTime.innerText = ''
    i++
    sessionStorage.setItem('index', i)
    if (i !== 1) {
        titleTime.innerText = `${i} secondi`
    } else {
        titleTime.innerText = `${i} secondo`
    }
    
}, 1000)