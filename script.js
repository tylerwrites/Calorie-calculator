const calorieForm = document.getElementById('calorie-form')
const dropdown = document.getElementById('dropdown')
const calculate = document.getElementById('calculate')
const clearButton = document.getElementById('clear-entry')
const deleteEntry = document.getElementById('delete-entry')
const output = document.getElementById('output')

function cleanInputStr (str) {
    const regex = /[+-\s]/g
    return str.replace(regex, '')
}

function isInvalidInput (str) {
    const regex = /\d+e\d+/i
    return str.match(regex)
}

function calorieEntry () {
    const inputContainer = document.querySelector(`#${dropdown.value} .input`)
    const calorieEntry = inputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${dropdown.value}-${calorieEntry}-name">Entry ${calorieEntry} Name</label>
    <input type="text" id="${dropdown.value}-${calorieEntry}-name" placeholder="name">
    <label for="${dropdown.value}-${calorieEntry}-calories">Entry ${calorieEntry} Calories</label>
    <input type="number" min="0" id="${dropdown.value}-${calorieEntry}-calories" placeholder="Calories">
    `;
    inputContainer.insertAdjacentHTML('beforeend', HTMLString);


}


