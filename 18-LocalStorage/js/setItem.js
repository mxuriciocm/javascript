localStorage.setItem('nombre', 'Mauricio');

const product = {
    name: 'Monitor 24 Pulgadas',
    price: 300
}

const productString = JSON.stringify(product)
localStorage.setItem('product', productString) // add elements to LocalStorage

const months = ['January', 'February', 'March']
const monthsString = JSON.stringify(months)
localStorage.setItem('months', monthsString)

