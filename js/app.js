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

Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

    ractive.on('checkout', function (){
        
        openWindow({token: '8ee38c2f77079e557a34c47d7476cbc8b65fa371b22a909881f195376bb5d89e',
            amount: cart.sum("price"),
            lang: 'ar'
        })
        
    })
    
        var openWindow = function(params) {

        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "https://api.zaincash.iq/pay");
        form.setAttribute("target", "NewFile");
        for (var i in params) {
            if (params.hasOwnProperty(i)) {
                var input = document.createElement('input');
                input.type = 'hidden';
                input.name = i;
                input.value = params[i];
                form.appendChild(input);
            }
        }


        document.body.appendChild(form);
        //note I am using a post.htm page since I did not want to make double request to the page
        //it might have some Page_Load call which might screw things up.
        window.open("post.htm", "NewFile", "width=1000, height=600, modal=yes, left=100, top=100, resizable=yes, scrollbars=yes");
        form.submit();

        document.body.removeChild(form);

        


    }
