const load = document.getElementById('load')
const secondaryLoad = document.getElementById('secondaryLoad')
const btnHide = document.querySelectorAll('.btn-sm:last-child')
const cardsTitles = document.getElementsByClassName('card-title')
const imgs = document.getElementsByClassName('bd-placeholder-img')
const mins = document.getElementsByTagName('small')
btnHide.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonSelected = e.target
        console.log(buttonSelected)
        const col = buttonSelected.closest('.col-md-4')
        col.classList.add('d-none')
    })
})
load.addEventListener('click', function () {
    fetch("https://api.pexels.com/v1/search?query=frog", {
        headers: {
            Authorization: "JK1YGcps9FynYqDeXAvHZFYhbEpY5CZKIk0mSXoFHeIbTJ7ATEOknuN4"
        }
    })
    .then(response => {
        if (response) {
            return response.json()
        } else {
            throw new Error('Errore')
        }
    })
    .then((data) => {
        console.log(data)
        for (let i = 0; i < data.photos.length; i++) {
            imgs[i].setAttribute('src', data.photos[i].src.tiny)
            mins[i].innerText = data.photos[i].id
            cardsTitles[i].innerText = data.photos[i].alt
            cardsTitles[i].setAttribute('role', 'button')
            cardsTitles[i].addEventListener('click', function() {
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=frog`)
            })
            imgs[i].setAttribute('role', 'button')
            imgs[i].addEventListener('click', function() {
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=frog`)
            })

        }
    })
    .catch(err => {
        console.log(err)
    })
})
secondaryLoad.addEventListener('click', function () {
    fetch("https://api.pexels.com/v1/search?query=cat", {
        headers: {
            Authorization: "JK1YGcps9FynYqDeXAvHZFYhbEpY5CZKIk0mSXoFHeIbTJ7ATEOknuN4"
        }
    })
    .then(response => {
        if (response) {
            return response.json()
        } else {
            throw new Error('Errore')
        }
    })
    .then((data) => {
        console.log(data)
        for (let i = 0; i < data.photos.length; i++) {
            imgs[i].setAttribute('src', data.photos[i].src.tiny)
            mins[i].innerText = data.photos[i].id
            cardsTitles[i].innerText = data.photos[i].alt
            cardsTitles[i].setAttribute('role', 'button')
            cardsTitles[i].addEventListener('click', function() {
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=cat`)
            })
            imgs[i].setAttribute('role', 'button')
            imgs[i].addEventListener('click', function() {
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=cat`)
            })

        }
    })
    .catch(err => {
        console.log(err)
    })
})

const formSearch = document.getElementById('research')
formSearch.addEventListener('submit', function() {
    const inputValue = document.getElementById('search').value
    fetch("https://api.pexels.com/v1/search?query=" + inputValue, {
        headers: {
            Authorization: "JK1YGcps9FynYqDeXAvHZFYhbEpY5CZKIk0mSXoFHeIbTJ7ATEOknuN4"
        }
    })
    .then(response => {
        if (response) {
            return response.json()
        } else {
            throw new Error('Errore')
        }
    })
    .then((data) => {
        console.log(data)
        for (let i = 0; i < data.photos.length; i++) {
            imgs[i].setAttribute('src', data.photos[i].src.tiny)
            mins[i].innerText = data.photos[i].id
            cardsTitles[i].innerText = data.photos[i].alt
            cardsTitles[i].setAttribute('role', 'button')
            cardsTitles[i].addEventListener('click', function() {
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=${inputValue}`)
            })
            imgs[i].setAttribute('role', 'button')
            imgs[i].addEventListener('click', function() {
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=${inputValue}`)
            })

        }
    })
    .catch(err => {
        console.log(err)
    })
    formSearch.reset()
})




