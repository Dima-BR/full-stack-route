// CRUD system
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const productDescriptionInput = document.getElementById("productDescription");
const productImageInput = document.getElementById("productImage");
// const  = document.getElementById("");

// Create 
// 1. let's check the button 
var productList = [];

// console.log('ttt', JSON.parse(localStorage.getItem("productContainer")));
if(localStorage.getItem("productContainer") !== null){
  productList = JSON.parse(localStorage.getItem("productContainer"));
displayData();

}


function addProduct() {
    console.log('productName', productName.value);
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
        // image: productImageInput.value,
        image: 'images/portfolio-4.jpg',
    }
    console.log('product', product);
    productList.push(product);

    localStorage.setItem("productContainer", JSON.stringify(productList) )
    displayData();
    
    clearInputs();

}

function clearInputs() {
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productDescriptionInput.value = null;
    productImageInput.value = null;
}

function displayData() {
    var cartona = '';

    for (let i = 0; i < productList?.length; i++) {
        cartona += `
            <div class="col-md-6 col-lg-4 pb-4">
          <div class="product-card">
            <!-- Product Image -->
            <div class="product-image">
              <img
                src="${productList[i].image}"
                alt="${productList[i].name}"
              />
            </div>
            <!-- Product Details -->
            <div class="product-details text-center">
              <h5>${productList[i].name}</h5>
              <p><strong>Price:</strong> ${productList[i].price}</p>
              <p><strong>Category:</strong> ${productList[i].category}</p>
              <p>
                <strong>Description:</strong> ${productList[i].description}
              </p>
            </div>
            <!-- Card Footer -->
            <div class="card-footer">
              <button class="icon-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="icon-btn" id="delete-btn" onclick="deleteItem(${i})">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        
        `
    }

    document.getElementById("rowData").innerHTML = cartona;
}


function deleteItem(index){
  productList.splice(index, 1 );
  localStorage.setItem("productContainer", JSON.stringify(productList) )
  displayData();
}

