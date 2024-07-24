const getBooks = function() {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unexpected error')
        }
    })
    .then((books) => {
        console.log(books)
        compileLibrary(books)
    })
    .catch((err) => {
        console.log(err)
    })
}

let library = document.getElementById('library')
let cart = document.getElementById('cart')
let carrello = JSON.parse(localStorage.getItem('cart'))



const compileLibrary = function(array) {
    for(let i = 0; i < array.length; i++) {
        let col = document.createElement('div')
        let card = document.createElement('div')        
        col.classList.add('col')
        card.classList.add('card', 'h-100')
        let img = document.createElement('img')
        img.setAttribute('src', array[i].img)
        img.classList.add('card-img-top')
        img.style.maxHeight = '300px'
        img.style.minHeight = '300px'
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-start')
        let title = document.createElement('h6')
        title.classList.add('card-title')
        title.innerText = array[i].title
        let price = document.createElement('p')
        price.classList.add('card-text', 'flex-grow-1')
        price.innerText = `${array[i].price} $`
        let divBtn = document.createElement('div')
        divBtn.classList.add('d-flex', 'justify-content-between', 'w-100')
        let btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'btn-danger')
        btnDelete.innerText = 'Scarta'
        btnDelete.addEventListener('click', function() {
            array.splice(i, 1)
            library.innerHTML = ''
            compileLibrary(array)
        })
        let btnBuy = document.createElement('button')
        btnBuy.classList.add('btn', 'btn-success')
        btnBuy.setAttribute('data-bs-toggle', 'offcanvas')
        btnBuy.setAttribute('data-bs-target', '#staticBackdrop')
        btnBuy.innerText = 'Compra'
        btnBuy.addEventListener('click', function() {
            carrello.push(array[i])
            createCart(carrello)
            localStorage.setItem('cart', JSON.stringify(carrello))
        })
        divBtn.appendChild(btnDelete)
        divBtn.appendChild(btnBuy)
        cardBody.appendChild(title)
        cardBody.appendChild(price)
        cardBody.appendChild(divBtn)
        card.appendChild(img)
        card.appendChild(cardBody)
        col.appendChild(card)
        library.appendChild(col)
    }
}

const createCart = function(array) {
    cart.innerHTML = ''
    for (let j = 0; j < array.length; j++) {
        const divImg = document.createElement('div')
        divImg.classList.add('col-2')
        const img = document.createElement('img')
        img.setAttribute('src', array[j].img)
        img.classList.add('w-100')
        const divText = document.createElement('div')
        divText.classList.add('col-8')
        const title = document.createElement('h6')
        title.innerText = array[j].title
        const price = document.createElement('p')
        price.innerText = `${array[j].price} $`
        const divButton = document.createElement('div')
        divButton.classList.add('col-2')
        const btnErase = document.createElement('button')
        btnErase.classList.add('btn', 'btn-danger')
        btnErase.innerText = 'X'
        btnErase.addEventListener('click', function() {
            array.splice(j, 1)
            cart.innerHTML = ''
            createCart(array)
            localStorage.setItem('cart', JSON.stringify(array))
        })
        divButton.appendChild(btnErase)
        divText.appendChild(title)
        divText.appendChild(price)
        divImg.appendChild(img)
        cart.appendChild(divImg)
        cart.appendChild(divText)
        cart.appendChild(divButton)
    }    
    let total = array.reduce(function(acc, element) {
        return acc + element.price
    }, 0)
    const totalShow = document.createElement('h5')
    totalShow.innerText = `Il totale nel carrello è: ${total.toFixed(2)} $`
    cart.appendChild(totalShow)

    
    
}

if (carrello) {
    createCart(carrello)
} else {
    carrello = []
}

getBooks()