
const container = document.querySelector('.container')
const URL = 'https://5f9e30f26ee5fa00168a509f.mockapi.io/sinhdeptrai'
function getproduct(url){
    fetch(url).then(respones=>respones.json()).then(data=>{
        console.log(data)
        showproduct(data)
        
    })
}
getproduct(URL)

function showproduct(data){
 container.innerHTML=''
 data.forEach(product=>{
     const{name,image}=product
     const card=document.createElement('div')
     card.classList.add('card')
     card.innerHTML=`
     <div class="n-circle"></div>
     <img src="${image}" alt="image" width="150px" height="150px" class="image" />
     <h2>${name}</h2>
     <div class="colors">
         <span class="text" style="font-weight:bold">Colors</span>
         <span style="background-color:#22d029"></span>
         <span style="background-color:#ff9800"></span>
         <span style="background-color:#03a9f4"></span>
         <span style="background-color:#ff0062"></span>
     </div>
     <button title="buy now">Realese Soon</button>`
     container.appendChild(card)
 })
}

class ReviewCard extends HTMLElement{
    constructor(){
        super()
        this.innerHTML=` <div class="reviewcard">
        <div class="propicbox"><img src="${this.getAttribute('avatar')}" class="propic"></div>
        
        <div class="reviewerbox">
        <h1><a href="https://www.facebook.com/checchiadesign/" class="reviewername" target="_blank">${this.getAttribute('name')}</a> <img src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png" width="20px"> recommends <a href="https://www.checchiadesign.com/" target="_blank">checchiadesign</a></h1>
        </div>
        
      <p class="review">${this.getAttribute('review')}</p>
      
      <p class="bottomText">Show the <a href="#" target="_blank">review on Facebook</a></p>
        </div>
        
    </div>`
    }
}
window.customElements.define('review-card',ReviewCard)