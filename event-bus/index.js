function EventBus () {
  this.listeners = {}

  this.emit = (type, data) => {
    window.parent.postMessage({ type, data }, '*')
  }

  this.subscribe = (type, callback) => {
    this.listeners[type]
      ? this.listeners[type].push(callback)
      : this.listeners[type] = [callback]
  }

  this.unsubscribe = (type, callback) => {
    this.listeners[type] = this.listeners[type].filter(listener => listener !== callback)
  }

  this.run = event => {
    const {
      data: { type, data }
    } = event
    if (!this.listeners[type]) return
    this.listeners[type].forEach(listener => listener(data))
  }

  window.addEventListener('message', this.run)
}
