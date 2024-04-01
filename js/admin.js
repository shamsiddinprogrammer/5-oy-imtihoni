let isLogin = localStorage.getItem("token")

function checkAdmin (){
  if(!isLogin){
    window.location.replace("/pages/login.html")
  }
}
checkAdmin()


//==================== B U R G E R    M E N U =======================//
const menuBurger =  document.getElementById("menu-burger")

const header = document.querySelector("header")
menuBurger.addEventListener("click", ()=>{
  header.classList.toggle("open")
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



