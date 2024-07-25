const load = document.getElementById('load')
const secondaryLoad = document.getElementById('secondaryLoad')
const btnHide = document.querySelectorAll('.btn-sm:last-child')
const btnView = document.querySelectorAll('.btn-sm:first-child')
const cardsTitles = document.getElementsByClassName('card-title')
const imgs = document.getElementsByClassName('bd-placeholder-img')
const mins = document.getElementsByTagName('small')
const mainfunction = function(search) {
    fetch("https://api.pexels.com/v1/search?query=" + search, {
        headers: {
            Authorization: "JK1YGcps9FynYqDeXAvHZFYhbEpY5CZKIk0mSXoFHeIbTJ7ATEOknuN4"
        }
    })
    .then(response => {
        if (response) {
            console.log(response)
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
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=${search}`)
            })
            imgs[i].setAttribute('role', 'button')
            imgs[i].addEventListener('click', function() {
                location.assign(`pexel-detail.html?imgId=${data.photos[i].id}&search=${search}`)
            })

        }
    })
    .catch(err => {
        console.log(err)
    })
}
btnHide.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonSelected = e.target
        const col = buttonSelected.closest('.col-md-4')
        col.classList.add('d-none')
    })
})

btnView.forEach(button => {
    button.setAttribute('data-bs-toggle', 'modal')
    button.setAttribute('data-bs-target', '#staticBackdrop')
    button.addEventListener('click', function(e) {
        const buttonSelected = e.target
        const imgDiv = buttonSelected.closest('.card')
        const img = imgDiv.firstElementChild
        const src = img.getAttribute('src')
        const modalimg = document.getElementById('imgmodal')
        modalimg.setAttribute('src', src)
        const modalTitle = document.getElementById('staticBackdropLabel')
        const imgTitle = buttonSelected.closest('.card-body').firstElementChild
        modalTitle.innerText = imgTitle.innerText


    })
})

load.addEventListener('click', function () {
    mainfunction('dogs')
})
secondaryLoad.addEventListener('click', function () {
    mainfunction('cats')
})

const formSearch = document.getElementById('research')
formSearch.addEventListener('submit', function(e) {
    e.preventDefault
    const inputValue = document.getElementById('search').value
    mainfunction(inputValue)
    formSearch.reset()
})




