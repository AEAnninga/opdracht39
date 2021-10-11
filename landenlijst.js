const btnLanden = document.getElementById('landen-lijst');

const getSortedLandenList =  async() => {
    try {
        let sortedLandenList = [];
        randomPersonData.forEach(land => {
            sortedLandenList.push(land.region);
        });
        return (sortedLandenList = [...new Set(sortedLandenList)]).sort();
        // return sortedLandenList.sort().filter(function(item, pos, ary) {
        //     return !pos || item != ary[pos -1];
        // });
    } catch(err) {
        console.log(err)
    }
}

const addLandenToDom = async(arraySortedLandenList) => {
    try {
        await removeList()
        lijst.classList.remove(...lijst.classList);
        lijst.classList.add('sorted-landen-lijst');
        let landen = '';
        arraySortedLandenList.forEach(land => {
            landen += `
                <li>${land}</>
            `
        })
        lijst.innerHTML = landen;
    } catch(err) {
        console.log(err)
    }
}

const btnLandenList = async() => {
    try{
        let response = await getSortedLandenList();
        console.log(response);      
        addLandenToDom(response);
    } catch(err) {
        console.log(err)
    }
}
btnLanden.addEventListener('click', btnLandenList);