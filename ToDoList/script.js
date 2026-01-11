const username = document.getElementById("username")
const password = document.getElementById("pass")
const submit = document.getElementById("submit")
const message = document.getElementById("message")

var data = []

function isvalid(pass){
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/
  return regex.test(pass)
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault();
   const user = username.value.trim()
   const pass = password.value.trim()

   if(user == "" || pass == ""){
     message.textContent = "Please fill all fields";
     message.style.color = "white";
     return;
    }

   if(!isvalid(pass)){
     message.textContent ="Password must contain numbers and special characters";
     message.style.color = "white"
     password.value=""
     password.focus()
     return;
   }
      message.textContent = ""
   data.push({
    username:user,
    password:pass
   })
   const messageBox = document.getElementById("success");
    messageBox.classList.add("show");
   
    document.getElementById("gobtn").addEventListener("click" , ()=>{
        window.location.href = "main.html"
    })
})