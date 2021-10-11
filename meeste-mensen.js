const btnLandenMeesteMensen = document.getElementById('meeste-mensen');

const getDubbeleLanden =  () => {
    let landenList = [];
    randomPersonData.forEach(land => {
        landenList.push(land.region);
    });
    return landenList;
}

const getEnkeleLanden =  () => {
    let landenListSingle = [];
    randomPersonData.forEach(land => {
        landenListSingle.push(land.region);
    });
    return landenListSingle = [...new Set(landenListSingle)];
}

console.log(getEnkeleLanden())

const createArrayOfObjectsFromLandenList = (array) => {
    let landenListUnique = [];
    array.forEach(land => {
        let objectLand = {region: `${land}`, aantal: 0}
        console.log(objectLand);
        landenListUnique.push(objectLand);
    });
    return landenListUnique;
}

let enkeleLanden = createArrayOfObjectsFromLandenList(getEnkeleLanden())
console.log(enkeleLanden)
const dubbeleLanden = getDubbeleLanden()
console.log(dubbeleLanden)

const telDubbeleLanden = async() => {
    try {
        enkeleLanden.forEach(enkelLand => {
            dubbeleLanden.forEach(dubbelLand => {
                if (dubbelLand === enkelLand.region) {
                    enkelLand.aantal++
                }
            })
        })
        return enkeleLanden.sort((a, b) => b.aantal > a.aantal && 1 || -1)
    } catch(err){
        console.log(err)
    }
}

const resetLanden = async() => {
    try{
        enkeleLanden.forEach(land => {
            land.aantal = 0
        })
    } catch(err) {
        console.log(err)
    }
}

console.log(telDubbeleLanden())

const addMeesteMensenToDom = async(array) => {
    try {
        await removeList()
        lijst.classList.remove(...lijst.classList);
        lijst.classList.add('meeste-mensen-land');
        let meesteLanden = '';
        array.forEach(land => {
            meesteLanden += `
                <li>${land.region}: ${land.aantal} mensen vd lijst wonen in dit land</li>
            `
        })
        lijst.innerHTML = meesteLanden;
    } catch(err) {
        console.log(err)
    }
}

const meesteMensen = async() => {
    try{ 
        await resetLanden()
        let response = await telDubbeleLanden()     
        addMeesteMensenToDom(response);
    } catch(err) {
        console.log(err)
    }
}

btnLandenMeesteMensen.addEventListener('click', meesteMensen);