    var cart = [];    

    var ractive = new Ractive({
      // The `el` option can be a node, an ID, or a CSS selector.
      el: '#container',

      // We could pass in a string, but for the sake of convenience
      // we're passing the ID of the <script> tag above.
      template: '#template',

      // Here, we're passing in some initial data
      data: {cart: cart} 
    });


    ractive.on('addMoto', function (ctx) {
        cart.push({item: "Moto X 360 Black", price: 1000})
    })

    ractive.on('addGalaxy', function (ctx) {
        cart.push({item: "Galaxy s7", price: 1000})
    })

    ractive.on('addIphone', function (ctx) {
        cart.push({item: "Apple iPhone 6p", price: 1000})
    })

    ractive.on('addAdidas', function (ctx) {
        cart.push({item: "Adidas Shoes", price: 1000})
    })
