// const titleElm = document.getElementById("title");
// const priceElm = document.getElementById("price");
// const taxesElm = document.getElementById("taxes");
// const adsElm = document.getElementById("ads");
// const discountElm = document.getElementById("discount");
// const countElm = document.getElementById("count");
// const categoryElm = document.getElementById("category");
// const searchElm = document.getElementById("search");
// const createButton = document.getElementById("submit");
// const searchNameButton = document.getElementById("searchName");
// const searchCategoryButton = document.getElementById("searchCategory");
// const updateButton = document.getElementById("update");
// const deleteButton = document.getElementById("delete");
// const totalElm = document.getElementById("total");
// const toggleLanguageButton = document.getElementById("toggle-language");

let mode = "create";
let temp;
function getTotal() {
  if (priceElm.value.trim() != " ") {
    let result =
      +priceElm.value + +taxesElm.value + +adsElm.value - +discountElm.value;
    console.log(result);
    totalElm.innerHTML = result;
    totalElm.style.backgroundColor = "#004400";
  } else {
    totalElm.innerHTML = "";
    totalElm.style.backgroundColor = "#a00d02";
  }
  // console.log(totalElm);
}
let products;

if (localStorage.products != "") {
  products = JSON.parse(localStorage.products);
} else {
  products = [];
}
createButton.onclick = function () {
  let newPro = {
    title: ProductElm.value,
    price: priceElm.value,
    taxes: taxesElm.value,
    ads: adsElm.value,
    discount: discountElm.value,
    count: countElm.value,
    category: categoryElm.value,
    total: totalElm.innerHTML,
  };
  if (mode === "create" && title != "") {
    products.push(newPro);
  } else {
    products[temp] = newPro;
    mode = "create";
    createButton.innerHTML = "Create";
  }

  localStorage.setItem("products", JSON.stringify(products));
  clearData();
  showDate();
};

function clearData() {
  (ProductElm.value = " "),
    (priceElm.value = " "),
    (taxesElm.value = " "),
    (adsElm.value = " "),
    (discountElm.value = " "),
    (countElm.value = " "),
    (categoryElm.value = " "),
    (totalElm.innerHTML = " ");
}

showDate();
function showDate() {
  getTotal();
  let table = " ";
  for (let i = 0; i < products.length; i++) {
    table += `<tr><td>${i + 1}</td>
              <td>${products[i].title}</td>
              <td>${products[i].price}</td>
              <td>${products[i].taxes}</td>
              <td>${products[i].ads}</td>
              <td>${products[i].discount}</td>
              <td>${products[i].total}</td>
              <td>${products[i].count}</td>
              <td>${products[i].category}</td>
              <td><button onclick=updateData(${i}) id="update">Update</button></td>
              <td><button onclick=deleteData(${i}) id="delete">Delete</button></td></tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (products.length > 0) {
    btnDelete.innerHTML = `<button onclick=deleteAll()>Delete All ${products.length}</button>`;
  } else {
    btnDelete.innerHTML = "";
  }
}
function deleteData(id) {
  products.splice(id, 1);
  localStorage.products = JSON.stringify(products);
  showDate();
}

function deleteAll() {
  products.splice(0, products.length);
  localStorage.products = JSON.stringify(products);
  showDate();
}

function updateData(i) {
  (ProductElm.value = products[i].title),
    (priceElm.value = products[i].price),
    (taxesElm.value = products[i].taxes),
    (adsElm.value = products[i].ads),
    (countElm.value = products[i].count),
    (discountElm.value = products[i].discount),
    (categoryElm.value = products[i].category),
    getTotal();
  mode = "update";
  createButton.innerHTML = "Update";
  temp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

let searchMode = "title";
function getSearchMode(id) {
  let search = document.getElementById("search");
  if ((id = "searchName")) {
    search.Placeholder = "search By Name";
  } else {
    searchMode = "category";
    search.Placeholder = "search By Category";
  }
  search.focus();
}

function searchData(value) {
  if ((id = "searchName")) {
    for (let index = 0; index < products.length; index++) {
      if (products[0].title.toLowerCase().includes(value.toLowerCase())) {
        let table = " ";
        table += `<tr><td>${i + 1}</td>
                        <td>${products[i].title}</td>
                        <td>${products[i].price}</td>
                        <td>${products[i].taxes}</td>
                        <td>${products[i].ads}</td>
                        <td>${products[i].discount}</td>
                        <td>${products[i].total}</td>
                        <td>${products[i].count}</td>
                        <td>${products[i].category}</td>
                        <td><button onclick=updateData(${i}) id="update">Update</button></td>
                        <td><button onclick=deleteData(${i}) id="delete">Delete</button></td></tr>`;
      }
    }
  } else {
    for (let index = 0; index < products.length; index++) {
      if (products[0].category.toLowerCase().includes(value.toLowerCase())) {
        let table = " ";
        table += `<tr><td>${i + 1}</td>
                          <td>${products[i].title}</td>
                          <td>${products[i].price}</td>
                          <td>${products[i].taxes}</td>
                          <td>${products[i].ads}</td>
                          <td>${products[i].discount}</td>
                          <td>${products[i].total}</td>
                          <td>${products[i].count}</td>
                          <td>${products[i].category}</td>
                          <td><button onclick=updateData(${i}) id="update">Update</button></td>
                          <td><button onclick=deleteData(${i}) id="delete">Delete</button></td></tr>`;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
