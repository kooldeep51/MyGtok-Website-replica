const name = document.getElementById("name")
const mail = document.getElementById("email")
const phonenumber = document.getElementById("pnumber")
const message = document.getElementById("message")
const form = document.getElementById("gform")
const errorElement = document.getElementById("error")


form.addEventListener("submit", (e)=>{
    let messages = []
    if(name.value === "" || name.value == null){
        alert("please enter your name")
    }

    if(password.length<=6){
        alert("password is too short")
    }

    if(password.value === "password"){
        alert("password can not be password")
    }

    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join(",")
    }
})