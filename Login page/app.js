
let currentScreen = null
const app = document.getElementById('app')
const setscreen=(screen)=>{
    if(currentScreen){
        app.removeChild(currentScreen)

    }
   currentScreen= app.appendChild(screen.render())
}

export{setscreen}