(function(){
    interface IProduct{
        id: number;
        title: string;
        imgUrl: string;
        price: number;
    }
    interface ICartItem{
        id: number;
        productId: number;
        quantity: number;
    }

    class Cart{
       private items:Array<ICartItem>=[];
        addToCart(productId:number){
this.items.push({
    id:this.items.length+1,
    productId:productId,
    quantity:1

});
this.renderCartBox();
            

        }
        getCartItems(){

        }
        getTotalNumberOfItems(){

        }
        renderCartBox(){
            const minicont=document.querySelector('.mini-cart');
            minicont.textContent=`you have ${this.items.length}`;
  
          

        }
    }

    class ProductList{
        constructor(public list: Array<IProduct>,public cartlist: Cart){

        }
      
        renderList():void{
  const productList: HTMLDivElement= document.querySelector('.product-list') as HTMLDivElement;
   
this.list.forEach((item:IProduct)=>{
const divapp: HTMLDivElement= document.createElement('div');
  
    const imgurl:HTMLImageElement=document.createElement('img');
    const title:HTMLHeadingElement=document.createElement('h2');
    const btn:HTMLButtonElement=document.createElement('button');
    title.textContent=item.title;
    imgurl.src=item.imgUrl;
    btn.textContent=item.title;
     const pushedcarts: HTMLDivElement= document.querySelector('.pushed-list') as HTMLDivElement;
    btn.addEventListener('click',()=>{
      this.cartlist.addToCart(item.id);
 


    })
   divapp.appendChild(title);
    divapp.appendChild(imgurl);
    divapp.appendChild(btn);
    productList.appendChild(divapp);
});


        }
    }

    const products: Array<IProduct> = [
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
     const cart=new Cart();
    const productlist =new ProductList(products,cart);
    

productlist.renderList();
cart.renderCartBox();

})();