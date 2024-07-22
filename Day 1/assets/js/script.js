console.log('------------Esercizio 1---------------')
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    compare = function (y) {
        this.age > y.age ? console.log(`${this.firstName} è piu vecchio di ${y.firstName}`) : console.log(`${y.firstName} è piu vecchio di ${this.firstName}`)          
    }
}


const createDrop = function(list) {
    list.innerHTML = ''
    for (let i = 0; i < users.length; i++) {
        let option = document.createElement('option')
        option.innerText = users[i].firstName
        list.appendChild(option)
    }
}

let users = []
let form1 = document.forms[0]
let drop1 = document.getElementById('firstCompare')
console.log(drop1)
let drop2 = document.getElementById('secondCompare')
form1.addEventListener('submit', function(e) {
    e.preventDefault()
    const userName = document.getElementById('firstName').value
    const userLastName = document.getElementById('lastName').value
    const userAge = document.getElementById('age').value
    const userLocation = document.getElementById('location').value
    const userProfile = new User (userName, userLastName, userAge, userLocation)
    users.push(userProfile)
    createDrop(drop1)
    createDrop(drop2)
    form1.reset()
})

let buttonCompare = document.getElementById('compare')
buttonCompare.addEventListener('click', function () {
    let x
    let y
    let selected1 = drop1.selectedIndex
    let valore1 = drop1.options[selected1].text
    for (let i = 0; i < users.length; i++) {
        if (valore1 === users[i].firstName) {
            x = {...users[i]}
        }
    }
    let selected2 = drop2.selectedIndex
    let valore2 = drop2.options[selected2].text
    for (let j = 0; j < users.length; j++) {
        if (valore2 === users[j].firstName) {
            y = {...users[j]}
        }
    }
    x.compare(y)
})





console.log('------------Esercizio 2---------------')
class Pet {
    constructor (_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    sameOwner = function (y) {
        let verify = this.ownerName === y.ownerName ? true : false
        return verify
    }
}


const createList = function() {
    let list = document.getElementById('tableBody')
    list.innerHTML = ''
    for (let i = 0; i < allPet.length; i++) {
        let tRow = document.createElement ('tr')
        let cells = []
        for (let j = 0; j < 4; j++) {
            let cell = document.createElement('td')
            cells.push(cell)
        }
        cells[0].innerText = allPet[i].petName
        cells[1].innerText = allPet[i].ownerName
        cells[2].innerText = allPet[i].species
        cells[3].innerText = allPet[i].breed
        for (let j = 0; j < cells.length; j++) {
            tRow.appendChild(cells[j])
        }
        list.appendChild(tRow);
    }
}

let allPet = []
let form2 = document.forms[1]
form2.addEventListener('submit', function(e) {
    e.preventDefault()
    const petValue = document.getElementById('petName').value
    const petOwn = document.getElementById('ownerName').value
    const petSpecies = document.getElementById('species').value
    const petBreed = document.getElementById('breed').value
    const animal = new Pet (petValue, petOwn, petSpecies, petBreed)
    allPet.push(animal)
    createList()
    form2.reset()
})