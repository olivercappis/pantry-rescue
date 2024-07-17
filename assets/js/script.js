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