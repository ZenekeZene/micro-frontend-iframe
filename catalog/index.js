// Vanilla micro-frontend:
const eventBus = new EventBus()

const addToCart = event => eventBus.emit('productToCart', event.target.value)
document
  .querySelectorAll('button')
  .forEach(button => button.addEventListener('click', addToCart))
