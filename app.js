const addNameToLs = () => {
    const field = document.getElementById('name-filed');
    const fieldValue = field.value;

    localStorage.setItem('name', fieldValue)
}

const removeNameFromLs = () => {
    localStorage.removeItem('name')
}
const removeAgeFromLs = () => {
    localStorage.removeItem('age')
}

const addAgeToLs = () => {
    const field = document.getElementById('age-filed');
    const fieldValue = field.value;

    localStorage.setItem('age', fieldValue)
}

const clearStorage = () => {
    localStorage.clear()
}