const id = '1cfb17aa'
const key = '97193b8d5c08b46f411c22a1161a615e'

const url = `https://api.edamam.com/api/recipes/v2?type=any&app_id=${id}&app_key=${key}`

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })





// get the input for ingredients X

//store ingredients to local storage X

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




function handleSubmit(event){
    event.preventDefault();
    const ingredientsArr = JSON.parse(localStorage.getItem("ingredientsArr")) || [];

    const variableEl = document.getElementById('#ingredientsInput').value;

    if (!ingredientsInput) {
        alert("Please enter an ingredient");
        return;
    }
    const ingredient = {
        ingredient: ingredientsInput,
    }

    ingredientsArr.push(ingredient);
    localStorage.setItem("ingredientsArr", JSON.stringify(ingredientsArr));

    location.href= "./index.html";

    variableEl.addEventListener("submit", handleSubmit);
}