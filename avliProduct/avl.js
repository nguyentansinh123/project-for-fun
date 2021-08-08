import { ItemData } from "./data.js";

console.log(ItemData)
const productdata = document.querySelector('.productdata')
let cartindex = document.querySelector('.cart-index span')

let cartarr = []
let productpagearr=[]
ItemData.forEach((products)=>{
    productdata.innerHTML += `
    <div class="products-items" data-item = '${products.categories}'>
                   <a href="./productdetail.html" class='productpage' data-page='${products.secondid}'> <img src="${products.image}" class="products-items-image" alt=""></a>
                    <div class="products-items-text">
                        <h2>${products.name}</h2>
                        <h3>$${products.price}</h3>
                        <button class="addtocart cart-btn" data-product='${products.id}' >Add To Cart</button>
                    </div>
                </div>`
})
const addtocart = document.querySelectorAll('.addtocart')
for(let i=0;i<addtocart.length;i++){
    addtocart[i].addEventListener('click',(event)=>{
        console.log(event.target.dataset.product)
        const ItemToAdd = ItemData.find(item=>item.id===event.target.dataset.product)
        cartarr.push(ItemToAdd)
        console.log(cartarr)
        console.log(cartindex)
        cartindex.innerHTML = cartarr.length
        localStorage.setItem('cart',JSON.stringify(cartarr))
    })
}

const productsItem = document.querySelectorAll('.products-items')
let productsItemsarr = Array.from(productsItem)
const checkbox = document.querySelectorAll('.cate-input')

checkbox.forEach((e)=>{
    e.addEventListener('change',()=>{
        let name_filter =e.dataset.filter
        console.log(name_filter)
     for(let i = 0 ; i<productsItemsarr.length;i++){
         console.log(productsItemsarr[i])
         if(name_filter ===productsItemsarr[i].dataset.item||name_filter ==='all'){
            productsItemsarr[i].style.display='grid'
       }
       else{
        productsItemsarr[i].style.display='none'
       }
     }

    })
})
