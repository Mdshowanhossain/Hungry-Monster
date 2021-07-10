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
                <img class="foodImg" src=${food.strCategoryThumb} alt="" />
                <h2 class="foodTitle">${food.strCategory}</h2>
                
            `
        foodsDiv.innerHTML = elementCrate;
        catagoriesId.appendChild(foodsDiv)
    })


}







searchBtn.addEventListener("click", () => { })

// <small>${food.strCategoryDescription}</small>








    // const foodImage = document.createElement("IMG");
    // foodImage.className = "foodImage";
    // foodImage.src = food.strCategoryThumb;
    // catagoriesId.appendChild(foodImage)

    // const foodTitle = document.createElement("h2");
    // foodTitle.className = "foodTitle";
    // foodTitle.innerText = food.strCategory;
    // catagoriesId.appendChild(foodTitle);

    // const foodDescription = document.createElement("p");
    // foodDescription.className = "foodDescription";
    // foodDescription.innerText = food.strCategoryDescription;
    // catagoriesId.appendChild(foodDescription)