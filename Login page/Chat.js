class Chat{
    $container
    $btnLogout
    $a
constructor(){
this.$container=document.createElement('div')
this.$container.innerHTML = 'chat room'

this.$btnLogout = document.createElement('button')
this.$btnLogout.innerHTML='Log out'
this.$btnLogout.addEventListener('click',this.handleLogout)

this.$a=document.createElement('a')
this.$a.setAttribute('href', "../funproject/index.html");
this.$a.innerHTML = 'Go To home page'
}
handleLogout=()=>{
    firebase.auth().signOut()
}
render(){
    this.$container.appendChild(this.$btnLogout)
    this.$container.appendChild(this.$a)
    return this.$container
}
}
export {Chat}