// const id = '1cfb17aa'
// const key = '97193b8d5c08b46f411c22a1161a615e'

// const url = `https://api.edamam.com/api/recipes/v2?type=any&app_id=${id}&app_key=${key}&q=${ingredients}`
// console.log('changed')

// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })





// get the input for ingredients

//store ingredients to local storage

// create/place HTML of ingredients on the page (with delete button)

//add event listner to handle deletion of ingredients (removing them from local storage)

// call the recipe api

//display the recipe api results

// add evvent listner to spotify prompt button

//call spotify api

//display the sportify api results


// function: get input of ingredients
//selecting the input element
//

//START OF DOC
let ingredientsArr = []

let x = JSON.parse(localStorage.getItem("ingredientsArr"))
if (x !== null) {
    ingredientsArr = x
}

const variableEl = document.getElementById('ingredientsInput')
const submitButton = document.getElementById('submitButton')
const formEl = document.getElementById('form')






function handleFormSubmit(event) {
    event.preventDefault();

    const ingredientInput = variableEl.value
    console.log(ingredientInput)

    variableEl.value = ''


    if (!ingredientInput) {
        alert("Please enter an ingredient");
        return;
    }

    ingredientsArr.push(ingredientInput);
    localStorage.setItem("ingredientsArr", JSON.stringify(ingredientsArr));

}


formEl.addEventListener('submit', handleFormSubmit);
submitButton.addEventListener('click', handleFormSubmit)