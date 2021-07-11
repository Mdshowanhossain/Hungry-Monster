const searchBtn = document.getElementById("searchBtn");

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

    // const url = `https://www.themealdb.com/api/json/v1/1/categories.php/${food}`
    const detailParent = document.getElementById("detail");

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${Arrabiata}`
    // console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(responseData => {
            displayDetailsFood(responseData.meals[0])
            // displayDetailsFood((responseData.meals))

        })
}

const displayDetailsFood = (food) => {
    console.log(food)

    const detailPage = document.getElementById('catagories');

    // const createItemDiv = document.createElement('div');

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





searchBtn.addEventListener("click", () => { })


