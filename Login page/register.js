import { InputGroup } from './Inputgroup.js'
import {setscreen} from './app.js'
import { Login } from './Login.js';
class Register {

    $container;
    $title;

    $formRegister;

    $InputGroupEmail
    $InputGroupDisplayName
    $InputGroupPassword


    $InputGroupConfirmPassWord;

    $btnsubmit

    $feedbackMSG

    $LinkToLogin
    constructor() {
        this.$container = document.createElement('div')
        this.$container.classList.add('center','h-screen','flex-col')
        this.$title = document.createElement('h3')
        this.$title.innerHTML = 'Register'

        this.$formRegister = document.createElement('form')
        this.$formRegister.addEventListener('submit',this.handlesubmit)

        this.$InputGroupDisplayName = new InputGroup('text', 'Display name', 'displayname')
        this.$InputGroupEmail = new InputGroup('email', 'Email', 'email')

        this.$InputGroupPassword = new InputGroup('password', 'Password', 'password')

        this.$InputGroupConfirmPassWord = new InputGroup('pasword', 'Confirm Password', 'confirmPassword')
        this.$btnsubmit = document.createElement('button')
        this.$btnsubmit.type = 'submit'
        this.$btnsubmit.innerHTML = 'Register'

        this.$feedbackMSG=document.createElement('div')
        this.$feedbackMSG.classList.add('feedback')
 
        this.$LinkToLogin = document.createElement('div')
        this.$LinkToLogin.classList.add('btn-link')
        this.$LinkToLogin.innerHTML='Link to Login'
        this.$LinkToLogin.addEventListener('click',this.Tologin)
    }
  handlesubmit=(evt)=>{
      evt.preventDefault()
      const email =this.$InputGroupEmail.getinputvalue()
      const displayname=this.$InputGroupEmail.getinputvalue()
      const password=this.$InputGroupPassword.getinputvalue()
      const confirmpassword=this.$InputGroupConfirmPassWord.getinputvalue()
      
      this.$InputGroupEmail.SetError(null)
      this.$InputGroupPassword.SetError(null)
      this.$InputGroupDisplayName.SetError(null)
      this.$InputGroupConfirmPassWord.SetError(null)

      if(!email){
        this.$InputGroupEmail.SetError('cannot be emty')
    }
    if(!displayname){
        this.$InputGroupDisplayName.SetError('can not be empty')
    }
    if(password.length<6){
       this.$InputGroupPassword.SetError('more than 6 letters')
    }
    if(confirmpassword!== password){
    this.$InputGroupConfirmPassWord.SetError('not similar to password field ')
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
       //verify
       firebase.auth().currentUser.sendEmailVerification()
       
       this.$feedbackMSG.innerHTML='succeed Pls check your email'

    }).catch((err)=>{
        console.log(err)
        this.$feedbackMSG.innerHTML='Try again'
        this.$feedbackMSG.classList.add('error')
    })
   
    }
    Tologin=()=>{
        const login = new Login()
        setscreen(login)
    }
    render() {
        this.$formRegister.appendChild(this.$InputGroupEmail.render());
        this.$formRegister.appendChild(this.$InputGroupDisplayName.render())

        this.$formRegister.appendChild(this.$InputGroupPassword.render())
        this.$formRegister.appendChild(this.$InputGroupConfirmPassWord.render())

        this.$formRegister.appendChild(this.$btnsubmit)

        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$feedbackMSG)
        this.$container.appendChild(this.$formRegister)
        
        this.$container.appendChild(this.$LinkToLogin)
        return this.$container
    }
}
export { Register }