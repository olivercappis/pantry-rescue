// const id = '1cfb17aa'
// const key = '97193b8d5c08b46f411c22a1161a615e'

// const url = `https://api.edamam.com/api/recipes/v2?type=any&app_id=${id}&app_key=${key}&q=${query}`
// console.log('changed')

// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })

// GAMEPLAN
// FUNCTION create url
//      retreive local storage ingredients
//      use string methods/loop to make const query =  `${ingredient}+${ingredient}...`
//      url = url + query
//      return url

//FUNCTION call recipeapi(url)
//      call it (use commented call from top)
//      in second .then
//          *BACK AT TOP* select recipe container element
//  FOR LOOP
//          create variables from data we want to display
//          create html elements
//          assign elements values from variables
//          append elements into DOM

// add ingredients to "pantry" *via local storage
// add delete functionality *deletes dom element and from local storage

// repeat call recipe api funcion structure for spotify api






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
