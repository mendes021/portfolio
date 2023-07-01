const localStorageKey = "localStorageMendes021"

function newTask(){
    let input = document.getElementById('input-new-task')

    if (!input.value){
        alert('Digite sua task!')
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]" )
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
    }
    input.value = ''
    showValues()
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]" )
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id="btn-ok" onclick="removeItem('${values[i]['name']}')">feito!</button></li>`
    }
}
showValues();

function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x=>x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}
showValues()
