//==================== B U R G E R    M E N U =======================//
const menuBurger =  document.getElementById("menu-burger")

const header = document.querySelector("header")
menuBurger.addEventListener("click", ()=>{
  header.classList.toggle("open")
})



const form = document.querySelector(".login__form ")
const formUsername = document.querySelector(".login__form-inp")
const formPassword = document.querySelector(".login__form-inp-password")
const API_URL = "https://fakestoreapi.com/auth/login"

form.addEventListener("submit", async(e) => {
  e.preventDefault()
  let user = {
    username: formUsername.value,
    password: formPassword.value
  }
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(res => {
    console.log(res.token)
    localStorage.setItem("token", res.token)
    window.open("/pages/admin.html", "_self")
  })
  .catch(err => {
    console.log(err);
    alert("username or password is incoeerect")
  })
})





///==========================  DARK -- MODE ==========================//
const content = document.getElementsByTagName("body")[0]
const darkMode = document.querySelector(".dark-mode")
darkMode.addEventListener("click", function(){
  darkMode.classList.toggle("active")
  content.classList.toggle("dark")
  if (darkMode.innerHTML === "Mode"){
    darkMode.innerHTML = "Dark"
  }else {
    darkMode.innerHTML = "Mode"
  } 
  localStorage.setItem("darkMode", darkMode.innerHTML)
})

