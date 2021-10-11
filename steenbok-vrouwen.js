const btnSteenbokVrouwen = document.getElementById('steenbok-vrouwen');
console.log(btnSteenbokVrouwen);

const vrouwenOuderDan30 = () => {
    let list = [];
    randomPersonData.forEach(person => {
        if(person.gender === 'female' & person.age >= 30) {
            list.push(person)
        }
    })
    return list
}

console.log(vrouwenOuderDan30().sort(
    (a, b) => {
        if (a.name < b.name) {
            return -1
        } if (a.name > b.name) {
            return 1
        }
        return 0
    }  
))

const person1 = randomPersonData[0];
console.log(person1);

let birthday = new Date(person1.birthday.mdy);
console.log(birthday);
console.log(birthday.getMonth())
console.log(birthday.getDate())

const steenbokVrouwen30Plus = async(array) => {
    try {
        let list = [];
        array.forEach(person => {
            let birthDay = new Date(person.birthday.mdy);
            let birthMonth = birthDay.getMonth();
            let dayOfMonth = birthDay.getDate();
            console.log("Month: ", birthMonth);
            console.log("Day: ", dayOfMonth);
            if (birthMonth === 11 && dayOfMonth >= 22) {
                console.log('Wel steenbok')
                list.push(person)
            } else if (birthMonth === 0 && dayOfMonth <= 20) {
                console.log('Wel steenbok')
                list.push(person)
            } else {
                console.log('Geen steenbok')
            } 
        })
        console.log(list);
        return list.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            } if (a.name > b.name) {
                return 1
            }
            return 0
        });
    } catch(err) {
        console.log(err);
    }
}

steenbokVrouwen30Plus(vrouwenOuderDan30());

const addSteenbokVrouwenToDom = async(arraySteenBokVrouwen) => {
    try {
        await removeList();
        lijst.classList.remove(...lijst.classList);
        lijst.classList.add('steenbok-vrouwen');
        let vrouwen = '';
        arraySteenBokVrouwen.forEach(vrouw => {
            vrouwen += `

                <li>${vrouw.name} ${vrouw.surname}:</li>
                <div>
                    <img class='foto' src="${vrouw.photo}"></img>
                </div>
                
            `
        })
        lijst.innerHTML = vrouwen;
    } catch(err) {
        console.log(err)
    }
}

const SteenbokVrouwen = async() => {
    try {
        let response = await steenbokVrouwen30Plus(vrouwenOuderDan30());
        addSteenbokVrouwenToDom(response)
    } catch(err) {
        console.log(err)
    }
}
btnSteenbokVrouwen.addEventListener('click', SteenbokVrouwen);