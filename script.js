const calorieForm = document.getElementById('calorie-form')
const dropdown = document.getElementById('dropdown')
const calculate = document.getElementById('calculate')
const clearButton = document.getElementById('clear-entry')
const deleteEntry = document.getElementById('delete-entry')
const output = document.getElementById('output')
let isError = false;

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

function calorieCalculation (e) {
    e.preventDefault();
    isError=false;

}

const earlyMorningInputs = document.querySelectorAll('#early-morning [type=number]')
const morningInputs = document.querySelectorAll('#morning [type=number]')
const earlyAfternoonInputs = document.querySelectorAll('#early-afternoon [type=number]')
const afternoonInputs = document.querySelectorAll('#afternoon [type=number]')
const earlyEveningInputs = document.querySelectorAll('early-evening [type=number]')
const eveningInputs = document.querySelectorAll('#evening [type=number]')
const nightInputs = document.querySelectorAll('#night [type=number]')

const earlyMorningCalories = getCalorieInputs(earlyMorningInputs)
const morningCalories = getCalorieInputs(morningInputs)
const earlyAfternoonCalories = getCalorieInputs(earlyAfternoonInputs)
const afternoonCalories = getCalorieInputs(afternoonInputs)
const earlyEveningCalories = getCalorieInputs(earlyEveningCalories)
const eveningCalories = getCalorieInputs(eveningCalories)
const nightCalories = getCalorieInputs(nightInputs)
const recommendedCalories = getCalorieInputs(recommended)

if (isError) {
    return;
}

const totalCalories = earlyMorningCalories + morningCalories + earlyAfternoonCalories + afternoonCalories + earlyEveningCalories + eveningCalories + nightCalories
const consumedVersusRecommended = totalCalories - recommendedCalories
output.innerHTML = `
    <span class="${}


    output.classList.remove('hide');
`




function getCalorieInputs (list) {
    let calories = 0;
}

for (const item of lists) {
    const currVal = cleanInputString(item.value)
    const invalidInputMatch = isInvalidInput(currVal)
}



