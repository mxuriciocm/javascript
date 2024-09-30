localStorage.removeItem("product");

// Update item
const monthsArray = JSON.parse(localStorage.getItem('months'))
monthsArray.push('New month')
localStorage.setItem('months', JSON.stringify(monthsArray))