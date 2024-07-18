
// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })

// GAMEPLAN

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
const id = '1cfb17aa';
const key = '97193b8d5c08b46f411c22a1161a615e';
let ingredientsArr = []

let x = JSON.parse(localStorage.getItem("ingredientsArr"))
if (x !== null) {
    ingredientsArr = x
}

const variableEl = document.getElementById('ingredientsInput')
const submitButton = document.getElementById('submitButton')
const formEl = document.getElementById('form')
const callButton = $('#find-ingredients')
const recipeContainer = $('.recipe-drawer')






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

function call(event) {
    event.preventDefault()
    const currentIngredients = JSON.parse(localStorage.getItem('ingredientsArr'));
    const query = currentIngredients.join('+');
    console.log(query);
    const URL = `https://api.edamam.com/api/recipes/v2?type=any&app_id=${id}&app_key=${key}&q=${query}`;

    fetch(URL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            const recipes = data.hits
            console.log(recipes)

            for (let x of recipes) {
                const link = x.recipe.url
                const title = x.recipe.label
                const recipe_ingredients = x.recipe.ingredientLines

                const anchorEl = $('<a>')
                const titleEl = $('<h5>')
                const ingredientsListEl = $('<ul>')

                titleEl.text(title)
                anchorEl.attr('href', link)
                anchorEl.attr('target', '__blank')

                anchorEl.append(titleEl)

                recipeContainer.append(anchorEl)
                for (let y of recipe_ingredients) {
                    const food = y
                    console.log(food)
                    const foodEl = $('<li>')
                    foodEl.text(food)
                    ingredientsListEl.append(foodEl)
                }




            }


        })

}



submitButton.addEventListener('click', handleFormSubmit)
callButton.on('click', call)

