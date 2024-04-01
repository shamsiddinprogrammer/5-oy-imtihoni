
//==================== B U R G E R    M E N U =======================//
const menuBurger =  document.getElementById("menu-burger")

const header = document.querySelector("header")
menuBurger.addEventListener("click", ()=>{
  header.classList.toggle("open")
})



const API_URL = "https://dummyjson.com/products"
const productSingle = document.querySelector(".products__single")
const notFaund = document.querySelector(".products__found")
async function fechtData(api){
  
  let path = new URLSearchParams(window.location.search)
  let id = path.get("id")
  let getData = await fetch(`${api}/${id}`)
  getData
    .json()
    .then(res => createSingle(res))
    .catch(err => {
      console.log(err)
      notFaund.style.display = "block"
    })
}
fechtData(API_URL)

function createSingle(data){
  productSingle.innerHTML= `
      <p class="products__single-text">
        <a class="products__single-link" href="../pages/login.html">Account / Gaming /</a>
        ${data.title}
      </p>
      <div class="products__singleImg">
        <div class="products__singleImg-card">
          <img src=${data.images[0]} alt="" width="100">
          <img src=${data.images[1]} alt="" width="100">
          <img src=${data.images[2]} alt="" width="100">
          <img src=${data.images[4]} alt="" width="100">
        </div>
        <img src=${data.thumbnail} alt="" width="400">
        <div class="products__singleImg-wrapper">
          <h2 class="products__singleImg-title">
          ${data.title}
          </h2>
          <div class="products__groupa">
            <img src="../icons/yulduz.svg" alt="">
            <p>(${data.stock})</p>
            <span>In Stock</span>
          </div>
          <p class="products__sena">$${data.price}.00</p>
          <p class="products__texts">
            ${data.description}
          </p>
          <div class="products__groupp">
            <p>Colours:</p>
            <span class="products__groupp-span1">

            </span>
            <span class="products__groupp-span2">

            </span>
          </div>
          <div class="products__size">
            <p>Size:</p>
            <span class="products__size-span">XS</span>
            <span class="products__size-span">S</span>
            <span class="products__size-span">M</span>
            <span class="products__size-span">L</span>
            <span class="products__size-span">XL</span>
          </div>
          <div class="products__cards">
            <div>
              <p class="products__cards-text">
                <span class="products__cards-span">-</span>
                  2
                <span class="products__cards-span">+</span></p>
            </div>
            <button class="products__cards-btn">
              Buy Now
            </button>
          </div>

          <div class="products-span">
            <div class="products__mashina">
              <img src="../icons/mashina.svg" alt="">
              <p>
                Free Delivery<br><br>
                <span>
                  Enter your postal code for Delivery Availability
                </span>
              </p>
            </div>
            <div  class="products__return">
              <img src="../icons/Icon-return.svg" alt="">
              <p>
                Return Delivery<br><br>
                <span>
                  Free 30 Days Delivery Returns. Details
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
  `
}










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
