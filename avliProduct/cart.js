let cartItem = JSON.parse(localStorage.getItem('cart'))
const cartContainer = document.querySelector('.cart-container')
console.log(cartItem)
const removebtn = document.querySelector('.remove')
let carttotal = document.querySelector('.total')
let total = 0
cartItem.forEach((carts)=>{
    total += carts.price
    cartContainer.innerHTML+=`
    <div class="cart-item ">
            <img src="${carts.image}" class="cart-img" alt="">
            <div class="cart-text">
                <h2 class="cart-name">Name :${carts.name}</h2>
                <h2 class="cart-price"> Price :${carts.price}</h2>
            </div>
            <div class="cart-info">
                <h3>${carts.description}</h3>
                <h3>available : ${carts.avialable}</h3>
                <h3>Categories : ${carts.categories}</h3>
                <h3> Technologies </h3>
                <h3> CPU : ${carts.cpu}</h3>
                <h3>Ram : ${carts.ram}</h3>
                <h3>harddrive : ${carts.harddrive}</h3>
                <h3> moniter :${carts.moniter}</h3>
                <h3> operatingsystem : ${carts.operatingsystem}</h3>
                <h3>realese : ${carts.realese} </h3>
            </div>
        </div>
    `
    carttotal.innerHTML = `Total : ${total}`
})
const cartsitems =document.querySelectorAll('.cart-item')
removebtn.addEventListener('click',()=>{
    cartsitems.classList.toggle('none')
})