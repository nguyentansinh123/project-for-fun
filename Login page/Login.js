import {InputGroup}from'./Inputgroup.js'
import {setscreen}from'./app.js'
import { Register } from './register.js'
class Login{
    $container;
    $title;
    $InputGroupEmail;
    $InputGroupPassword;
    $form;
    $buttonSubmit
    $feedbackmsg
    $LinkToRegister

    constructor(){
        this.$container=document.createElement('div')
        this.$container.classList.add('center','h-screen','flex-col')
        this.$title=document.createElement('h3')
        this.$title.innerHTML='Login'

        this.$InputGroupEmail=new InputGroup('email','Email','email')
        this.$InputGroupPassword=new InputGroup('password','Password','password')

        this.$form=document.createElement('form')
        this.$form.addEventListener('submit',this.handleSubmit)

        this.$buttonSubmit = document.createElement('button')
        this.$buttonSubmit.type='submit'
        this.$buttonSubmit.innerHTML='login'
        this.$feedbackmsg=document.createElement('div')

        this.$LinkToRegister = document.createElement('span')
        this.$LinkToRegister.innerHTML = 'Create new account'
        this.$LinkToRegister.classList.add('btn-link')
        this.$LinkToRegister.addEventListener('click',this.moveToRegister)
    }
    handleSubmit=(evt)=>{
        evt.preventDefault()
        const email = this.$InputGroupEmail.getinputvalue()
        const password = this.$InputGroupPassword.getinputvalue()
        //valid
        firebase.auth().signInWithEmailAndPassword(email, password).then((userInfo)=>{
           console.log(userInfo)
           this.$feedbackmsg.innerHTML='succeed'
           this.$feedbackmsg.classList.add('feedback')

        }).catch((err)=>{
            console.log(err)
            this.$feedbackmsg.innerHTML='Wrong emial or password'
            this.$feedbackmsg.classList.add('error')
        })
    }

    moveToRegister=()=>{
         const register = new Register()
         setscreen(register)
    }
    render(){
        this.$form.appendChild(this.$InputGroupEmail.render())
        this.$form.appendChild(this.$InputGroupPassword.render())
        this.$form.appendChild(this.$buttonSubmit)
        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$feedbackmsg)
        this.$container.appendChild(this.$form)
        this.$container.appendChild(this.$LinkToRegister)
        return this.$container
    }
}
export {Login}