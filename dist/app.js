(function () {
    var Cart = /** @class */ (function () {
        function Cart() {
            this.items = [];
        }
        Cart.prototype.addToCart = function (productId) {
            this.items.push({
                id: this.items.length + 1,
                productId: productId,
                quantity: 1
            });
            this.renderCartBox();
        };
        Cart.prototype.getCartItems = function () {
        };
        Cart.prototype.getTotalNumberOfItems = function () {
        };
        Cart.prototype.renderCartBox = function () {
            var minicont = document.querySelector('.mini-cart');
            minicont.textContent = "you have " + this.items.length;
        };
        return Cart;
    }());
    var ProductList = /** @class */ (function () {
        function ProductList(list, cartlist) {
            this.list = list;
            this.cartlist = cartlist;
        }
        ProductList.prototype.renderList = function () {
            var _this = this;
            var productList = document.querySelector('.product-list');
            this.list.forEach(function (item) {
                var divapp = document.createElement('div');
                var imgurl = document.createElement('img');
                var title = document.createElement('h2');
                var btn = document.createElement('button');
                title.textContent = item.title;
                imgurl.src = item.imgUrl;
                btn.textContent = item.title;
                var pushedcarts = document.querySelector('.pushed-list');
                btn.addEventListener('click', function () {
                    _this.cartlist.addToCart(item.id);
                });
                divapp.appendChild(title);
                divapp.appendChild(imgurl);
                divapp.appendChild(btn);
                productList.appendChild(divapp);
            });
        };
        return ProductList;
    }());
    var products = [
        {
            id: 1,
            title: 'Malabar Biriyani',
            imgUrl: 'https://i.imgur.com/ULHbPTa.jpg',
            price: 100
        },
        {
            id: 2,
            title: 'Pasta',
            imgUrl: 'https://i.imgur.com/r7rQBCS.jpg',
            price: 200
        },
        {
            id: 3,
            title: 'Chicken Fried Rice',
            imgUrl: 'https://i.imgur.com/pYSgtB4.jpg',
            price: 250
        },
        {
            id: 4,
            title: 'Chicken Noodles',
            imgUrl: 'https://i.imgur.com/6VY0ci9.png',
            price: 250
        }
    ];
    var cart = new Cart();
    var productlist = new ProductList(products, cart);
    productlist.renderList();
    cart.renderCartBox();
})();
