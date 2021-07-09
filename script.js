const searchBtn = document.getElementById("searchBtn");

const loadMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            const foods = (data.categories);
            foods.map(food => showMeals(food));
        })
}
loadMeal();

const showMeals = (food) => {
    const catagoriesId = document.getElementById("catagories");

    const foodImage = document.createElement("IMG");
    foodImage.className = "foodImage";
    foodImage.src = food.strCategoryThumb;
    catagoriesId.appendChild(foodImage)

    const foodTitle = document.createElement("h2");
    foodTitle.className = "foodTitle";
    foodTitle.innerText = food.strCategory;
    catagoriesId.appendChild(foodTitle);

    const foodDescription = document.createElement("p");
    foodDescription.className = "foodDescription";
    foodDescription.innerText = food.strCategoryDescription;
    catagoriesId.appendChild(foodDescription)

}


searchBtn.addEventListener("click", () => { })












// const searchBtn = document.getElementById("searchBtn");

// const loadMeal = () => {
//     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//         .then(response => response.json())
//         .then(data => showMeals(data))
// }
// loadMeal()

// // <img src=${food.strCategoryThumb} alt="" />

// const showMeals = (data) => {

//     const catagoriesId = document.getElementById("catagories");

//     console.log(data)
//     const foods = data.categories;
//     foods.map(food => {

//         const foodsElements = `
//         <p>${food.strCategory}</p>
//         `
//         catagoriesId.append(foodsElements)
//     });

// const foodName = document.createElement("h2");
// foodName.innerText = food.strCategory;
// catagoriesId.appendChild(foodName);

// const foodDescription = document.createElement("p");
// foodDescription.innerText = food.strCategoryDescription;
// catagoriesId.appendChild(foodDescription)

// const foodImage = document.createElement("img");

// const foodImage = `
//         <img src="" alt="" />
// `

// catagoriesId.appendChild(foodImage)

// }

// searchBtn.addEventListener("click", () => { })















