const menutoggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
menutoggle.addEventListener('click',()=>{
    menutoggle.classList.toggle('active')
    showcase.classList.toggle('active')
})