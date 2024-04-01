
//==================== B U R G E R    M E N U =======================//
const menuBurger =  document.getElementById("menu-burger")

const header = document.querySelector("header")
menuBurger.addEventListener("click", ()=>{
  header.classList.toggle("open")
})



//=====================    A P I    U  L A SH     ===================== //
const wrapper = document.querySelector(".products__wrapper")
const API_URL = "https://dummyjson.com/products"

async function fetchData(api){
  let products = await fetch(api)
  products
    .json()
    .then(res => createCard(res.products))
    .catch(err => (err))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API_URL)

function createCard(products) {
  let fragment = document.createDocumentFragment()
  products.slice(5, 13).forEach(post => {
    const card = document.createElement("div")
    card.classList.add("products__card")
    card.innerHTML = `
    <div data-id=${post.id}>
      <span class="products__card-layk"></span>
      <img class="products__card-koz" src="./icons/koz.svg" alt="">
      <img  name="product-image" class="products__card-img" src="${post.thumbnail}" alt="" width="250">
      <div  class="products__card-group">
        <h3 class="products__card-title" class = "products__card-title">${post.title}</h3>
        <p>${post.brand}</p>   
        <div class="products__card-group2">
          <p>${post.price}$</p>
          <img src="./icons/yulduz.svg" alt="">
          <p>(${post.stock})</p>
        </div>
        <button class="products__card-btn">
          Add To Cart
        </button>
      </div>
     
    </div>
    `  
    fragment.appendChild(card)
  })
  wrapper.appendChild(fragment)
}




const singliRoate = (id) =>{
  window.open(`/pages/product.html?id=${id}`, "_self")
}
const setWish = async(id) => {
  let getData = await fetch(`${API_URL}/${id}`)
  getData
      .json()
      .then(res => {
          console.log(res);
      })
      .catch(err => {
          console.log(err)
      })
}


wrapper.addEventListener("click", (e)=>{
  let {name} = e.target
  if(name === "product-image"){
     let id = e.target.closest("[data-id]").dataset.id
     singliRoate(id)
  }
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



wrapper.addEventListener("click", e=> {
  // if(e.target.className ===  "wrapper__card-layk"){
  //   e.target.className.classList.toggle("wrapper__card-layk-active")
  // }
  let layk = e.target.classList.toggle("wrapper__card-layk-active")
  setWish(layk)
})

// //=========================  A D M I N    P A N E L G A    O' T I SH ======================//

const adminLink = document.querySelector(".admin_link")
function checkAdmin(){
    let isLogin = localStorage.getItem("token")
    if(isLogin){
      adminLink.innerHTML = "Admin"
      adminLink.setAttribute("href", "./pages/admin.html")
    }else {
        adminLink.innerHTML = "Sign in"
        adminLink.setAttribute("href", "./pages/login.html")
    }
}
checkAdmin()




//==========================  L O A D I N G   ========================///
const loadingGroup = document.querySelector(".loading__group");
const loading = document.querySelector(".loading");
let arr = [];
for (let i = 0; i < 8; i++) {
  arr.push(i);
}
let fragment = document.createDocumentFragment();
arr.forEach((el, i) => {
  let div = document.createElement("div");
  div.classList.add("loading__card");
  div.innerHTML = `
  <div class="loading__img"></div>
  <div class="loading__full"></div>
  <div class="loading__content"></div>
  <div class="loading__bottom">
    <div class="loading__price"></div>
    <div class="loading__yulduz"></div>
    <div class="loading__circle"></div>
  </div>
  <div class="loading__btn"></div>
    `;
  fragment.append(div);
});
loadingGroup.append(fragment);

//=============================== L O A D I N G  ========================///




