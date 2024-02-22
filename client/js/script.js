console.log('working')
//Landing Page

//Categories
document.addEventListener('DOMContentLoaded', async () => {
    const baseURL = 'http://localhost:3001/'

    const responseCategories = await axios.get(`${baseURL}categories`)
    const categoryData = responseCategories.data
    console.log(responseCategories.data)

    const categoriesContainer = document.querySelector('#categories-container')

    categoryData.forEach(category => {
        const categorySection = document.createElement('section')
        categorySection.classList.add('category-container')

        const imgContainer = document.createElement('div') 
        imgContainer.classList.add('img-container')

        const categoryImage = document.createElement('img')
        categoryImage.classList.add('category-image')
        categoryImage.alt = 'Category Image'
        categoryImage.src = category.img_path

        const categoryName = document.createElement('h2')
        categoryName.classList.add('category-name')
        categoryName.innerText = category.name.charAt(0).toUpperCase() + category.name.slice(1)

        imgContainer.appendChild(categoryImage)
        categorySection.appendChild(imgContainer) 

        categorySection.appendChild(categoryName)

        categoriesContainer.appendChild(categorySection)

        categorySection.addEventListener('click', () => {
            const categoryURL = `${baseURL}recipes/meal/${category.name.toLowerCase()}`
            window.location.href = `meal.html?category=${categoryURL}`
            
        })

    })
})