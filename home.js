const main = document.querySelector('.main')
const homebtn = document.querySelector('.btn')
const footer = document.querySelector('.footer')
const nav = document.querySelector('#nav')
const mymain = document.querySelector('.mymain')
const sections = document.querySelectorAll('section')
const bubble= document.querySelector('.bubble')
const gadients=['linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)','linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)']
homebtn.addEventListener('click',()=>{
    mymain.classList.remove('hide')
    main.classList.add('none')
    nav.classList.remove('initial')
    footer.classList.remove('nolo')
    document.body.style.background='#fff'

})
 const options={
     threshold:0.7
 }
let observer = new IntersectionObserver(navCheck,options)
function navCheck(entries){
entries.forEach(entry=>{
   const className=entry.target.className
   const activeAnchor =document.querySelector(`[data-page=${className}]`)
   const coords = activeAnchor.getBoundingClientRect()
   const direction={
       height:coords.height,
       width:coords.width,
       top:coords.top,
       left:coords.left
   }
   if(entry.isIntersecting){
       bubble.style.setProperty('left',`${direction.left}px`)
       bubble.style.setProperty('top',`${direction.top}px`)
       bubble.style.setProperty('width',`${direction.width}px`)
       bubble.style.setProperty('height',`${direction.height}px`)
   }
})
}
sections.forEach(section=>{
    observer.observe(section)
})

let count = 1
setInterval(function(){
    document.getElementById("radio"+count).checked = true;
    count++
    if(count>4){
        count=1
    }
},3000)