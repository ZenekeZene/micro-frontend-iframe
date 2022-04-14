const eventBus = new EventBus()

new Vue({
  el: "#main",
  data() {
    return {
      products: {
        apple: 0,
        banana: 0,
      }
    }
  },
  methods: {
    add: function (product) {
      this.products[product]++;
    }
  },
  beforeMount() {
    eventBus.subscribe("productToCart", this.add);
  },
  beforeDestroy() {
    eventBus.unsubscribe("productToCart", this.add);
  }
})
