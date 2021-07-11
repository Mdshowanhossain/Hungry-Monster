const searchBtn = () => {
    const Arrabiata = document.getElementById("searchInput").value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${Arrabiata}`
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(responseData => {
            const data = responseData.meals[0];
            foodSearchByName(data)
        })
}
const foodSearchByName = (showFood) => {
    // console.log(showFood)
    const show = document.getElementById("catagories");

    const createFoodItem = `
                <p class="p">${showFood.strMeal}</p>
                <p class="p">${showFood.strIngredient4}</p>
                <p class="p">${showFood.strIngredient5}</p>
                <p class="p">${showFood.strIngredient10}</p>
                <p class="p">${showFood.strIngredient11}</p>
                <p class="p">${showFood.strIngredient12}</p>
                <p class="p">${showFood.strIngredient15}</p>
                <p class="p">${showFood.strIngredient13}</p>
                <p class="p">${showFood.strIngredient17}</p>
    `
    show.innerHTML = createFoodItem;
}

const loadMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            const foodData = data.categories
            showMeals(foodData)
        })
}

loadMeal();

const showMeals = (foodData) => {
    // console.log(foodData)
    const catagoriesId = document.getElementById("catagories");

    foodData.forEach(food => {
        const foodsDiv = document.createElement("div");
        foodsDiv.className = "foods"
        const elementCrate = `
                <img onclick="getDetailsFoods('${food.strCategory}')" class="foodImg" src=${food.strCategoryThumb} alt="" />
                <h2 class="foodTitle">${food.strCategory}</h2>
            `
        foodsDiv.innerHTML = elementCrate;
        catagoriesId.appendChild(foodsDiv)
    })
}

const getDetailsFoods = (Arrabiata) => {
    const detailParent = document.getElementById("detail");

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${Arrabiata}`
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(responseData => {
            displayDetailsFood(responseData.meals[0])
        })
}
const displayDetailsFood = (food) => {
    // console.log(food)
    const detailPage = document.getElementById('catagories');
    detailPage.innerHTML = `
        <div class="foodDetails">
                <img class="detailImage" src="${food.strMealThumb}" alt=""/>
                <h1 class="detailTitle">${food.strMeal}</h1>
                <h2 class="incredient">Ingredient</h2>
                <p><i class="fas fa-check-square"></i>${food.strIngredient1}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient2}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient3}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient4}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient5}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient6}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient7}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient8}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient9}</p>
                <p><i class="fas fa-check-square"></i>${food.strIngredient10}</p>
        </div>
    `
}






