let products = [
  {
    id: 1,
    name: "SUGAR",
    discription: "Matte As Hell Crayon Lipstick",
    prize: 300,
    quatity: 5,
    imgpath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlp5vVtUqUCrnhS-Iik1tgB5Z0AhauR04qaMJrNVX5XPC5eL-3ThtnkdZPwC_BoGN4e8&usqp=CAU",
  },
  {
    id: 2,
    name: "MAYBELLINE",
    discription: "Super Stay Matte",
    prize: 400,
    quatity: 10,
    imgpath:
      "https://images-static.nykaa.com/media/catalog/product/a/0/a0959c5MAYBE00000406-z_1.jpg?tr=w-344,h-344,cm-pad_resize",
  },
  {
    id: 3,
    name: "LAKME",
    discription: "Ultimate Glam 4 in 1 Lip Stack ",
    prize: 500,
    quatity: 12,
    imgpath:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTC0W6Jx1tMGJckoXyVU3CzMCLvDmLuvvsiAjq9l_arg_uRA8Rynqw512jRL7u7fAMqeKjlw7FJ22Yn6mGIgWgyrnu0hwP0mdZ25tzvzRlailxcnPji2qy9-ZjA0lkiO9BII-CbHgM&usqp=CAc",
  },
];
function saveToLocalStorage() {
  localStorage.setItem("Products", JSON.stringify(products));
}
saveToLocalStorage();



function renderproduct() {
  document.getElementById("productList").innerHTML = products
    .map(
      (product, index) =>
        `

            <div class=" d-flex justify-content-center text-center shadow">
            <div class="card " style="width: 18rem;">
                <img src=${product.imgpath} class="card-img-top" alt=${product.name} style="height:350px ;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.discription}</p>
                     <p class="card-text "><span class="me-5 pe-5 fs-5">Price ₹${product.prize} </span> <span class="pe-2 text-danger fw-semibold">${product.quatity} Left </span></p>
                      
                   
                   <p class=""> 
                                       <a href="#" class="btn btn-danger border-black text-center " onclick="deleteproduct(${index})" style="font-size:13px ">
                                    <i class="fa-solid fa-trash p-1"></i>
                                     DELETE</a>

                     <a href="#" class="btn btn-primary border-black text-center ms-4" style="font-size:13px" onclick="editproduct(${product.id})"><i class="fa-regular fa-clipboard p-1"></i>EDIT</a>
               
                <p>
                 </div>    
            </div>
            </div>`
    )
    .join("");
}
renderproduct();

function addproduct() {
  let newproduct = {
    id: products.length + 1,
    name: document.getElementById("nameIP").value,
    discription: document.getElementById("DiscriptionIP").value,
    prize: document.getElementById("PrizeIP").value,
    quatity: document.getElementById("quatityIP").value,
    imgpath: document.getElementById("Productpiclink").value,
  };

  products.push(newproduct);
  saveToLocalStorage();
  renderproduct();
  clearfiled();
}

function deleteproduct(i) {
  products.splice(i, 1);
  saveToLocalStorage();
  renderproduct();
}

function clearfiled() {
  document.getElementById("nameIP").value = "";

  document.getElementById("DiscriptionIP").value = "";
  document.getElementById("PrizeIP").value = "";
  document.getElementById("quatityIP").value = "";
  document.getElementById("Productpiclink").value = "";
}


function updateproduct(id) {
  const product = products.find((p) => p.id === id);

  if (product) {
    product.name = document.getElementById("nameIP").value;

    product.discription = document.getElementById("DiscriptionIP").value;
    product.prize = document.getElementById("PrizeIP").value;
    product.quatity = document.getElementById("quatityIP").value;
    product.imgpath = document.getElementById("Productpiclink").value;

    saveToLocalStorage();
    renderproduct();
    clearfiled();
  }
}


function editproduct(id) {
    const product = products.find((p) => p.id === id);
  
    if (product) {
      document.getElementById("nameIP").value = product.name;
  
      document.getElementById("DiscriptionIP").value = product.discription;
      document.getElementById("PrizeIP").value = product.prize;
      document.getElementById("quatityIP").value = product.quatity;
      document.getElementById("Productpiclink").value = product.imgpath;
  
      const addButton = document.querySelector(".addprobtn");
      addButton.innerHTML = "Save";
      addButton.onclick = function () {
        updateproduct(id);
    
      addButton.innerHTML = "Add Product";
      addButton.onclick = function () {
        addproduct();
      };
    };
    }
  }

  searchInput.addEventListener('input', ()=>{

    
    
    searchKey = event.target.value.toLowerCase();
    console.log(searchKey)
    products = products.filter((prod)=>prod.name.toLowerCase().includes(searchKey))
    console.log(products);
    renderproduct(products);
  })
  

  
//   searchInput.addEventListener('input',()=>{
    
//     searchKey=event.target.value.toLowerCase();
//     console.log(searchKey);
    
// fliternewproduct=products.filter((prod)=>prod.name.toLowerCase().includes(searchKey));
// renderproduct(fliternewproduct);
//   })