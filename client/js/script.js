console.log('working')
//Landing Page

//Categories
document.addEventListener('DOMContentLoaded', async () => {
    const baseURL = 'http://localhost:3001/'

    const responseCategories = await axios.get(`${baseURL}categories`)
    const categoryData = responseCategories.data.data

    const categoriesContainer = document.querySelector('#categories-container')

    categoryData.forEach(category => {
        const categorySection = document.createElement('section')
        categorySection.classList.add('category-container')

        const categoryImage = document.createElement('img')
        categoryImage.classList.add('category-image')
    })
})