// const youTube = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCE6xW9qBgDCvS-FrnptkxF23-N0oV9Mn0&q=cooking+music'

// fetch(youTube)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)

//         const search = `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`
//         console.log(search)
//     })

// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })

// JS

// add delete functionality *deletes dom element and from local storage

// repeat call recipe api funcion structure for spotify api


//FRONTEND
//style ingredients
//style links (once therye done)






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
const pantryEl = $('#pantry');
const pantryList = $('#pantry-list')
const youTubeButton = $('#spotify-button')
const playlistsEl = $('#playlists')

if (JSON.parse(localStorage.getItem('ingredientsArr')) === null) {
    localStorage.setItem('ingredientsArr', JSON.stringify([]))
}





function handleFormSubmit(event) {
    event.preventDefault();

    ingredientsArr = JSON.parse(localStorage.getItem('ingredientsArr'))


    const ingredientInput = variableEl.value;
    const button = $('<button>');
    const ingredientEl = $('<li>');
    if (!ingredientInput) {
        return;
    }

    ingredientEl.text(ingredientInput);
    button.attr('class', 'delete');


    ingredientEl.append(button);

    pantryList.append(ingredientEl);



    variableEl.value = '';



    ingredientsArr.push(ingredientInput);
    localStorage.setItem("ingredientsArr", JSON.stringify(ingredientsArr));



}

function loadIngredient() {
    const displayIngredient = JSON.parse(localStorage.getItem("ingredientsArr"));
    if (displayIngredient !== null) {


        console.log(displayIngredient);

        for (let i of displayIngredient) {
            const button = $('<button>');
            const ingredientEl = $('<li>');

            ingredientEl.text(i);
            button.attr('class', 'delete')

            ingredientEl.append(button);

            pantryList.append(ingredientEl);

        }
    }

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
            }


        })


}


function callYouTube(event) {
    event.preventDefault()

    const youTube = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCETR0VJKfe5n_tS84y64sP36AWuf4Jyec&q=cooking+music'

    fetch(youTube)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const songs = data.items
            for (let song of songs) {
                const search = `https://www.youtube.com/watch?v=${song.id.videoId}`
                const video = $('<a>')

                video.attr('href', search)
                video.attr('target', '__blank')
                video.text(search)

                playlistsEl.append(video)


            }



        })

}

function deleteButton(event) {
    event.preventDefault()
    const storage = JSON.parse(localStorage.getItem('ingredientsArr'))
    console.log($(event.target).parent().text())

    $(event.target).parent().remove()

    const item = $(event.target).parent().text()
    const index = storage.indexOf(item)

    storage.splice(index, 1)

    localStorage.setItem('ingredientsArr', JSON.stringify(storage))


}


loadIngredient();
submitButton.addEventListener('click', handleFormSubmit);
pantryList.on('click', '.delete', deleteButton)
callButton.on('click', call);
youTubeButton.on('click', callYouTube)











