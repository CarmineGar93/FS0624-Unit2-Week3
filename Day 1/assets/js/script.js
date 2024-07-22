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

let u1 = new User ('Carmine', 'Gargiulo', 31, 'Italy')
let u2 = new User ('Mario', 'Mario', 100, 'USA')

console.log(u1)
console.log(u2)

u1.compare(u2);
let o = {
    firstName: 'A',
    secondName: 'B',
    thirdName : 'C',
}



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
let form = document.forms[0]
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const petValue = document.getElementById('petName').value
    const petOwn = document.getElementById('ownerName').value
    const petSpecies = document.getElementById('species').value
    const petBreed = document.getElementById('breed').value

    const animal = new Pet (petValue, petOwn, petSpecies, petBreed)
    allPet.push(animal)
    createList()
    form.reset()
})