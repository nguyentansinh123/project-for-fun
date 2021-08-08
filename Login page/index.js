import { Register } from "./register.js";
import { Login } from "./Login.js";
import { setscreen } from "./app.js";
import { Chat } from "./Chat.js";

const login = new Login
setscreen(login)

//remember me
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        let chat = new Chat()
        setscreen(chat)
    }else{
     const login = new Login()
     setscreen(login)
    }
      console.log(user)
})