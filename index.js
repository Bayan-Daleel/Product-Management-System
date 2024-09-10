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

createButton.ontouchstart= function(){
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
    createButton.innerHTML = i18next.t("Create");
  }

  localStorage.setItem("products", JSON.stringify(products));
  clearData();
  showDate();
};
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
    createButton.innerHTML = i18next.t("Create");
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
              <td><button onclick=updateData(${i}) id="update">${i18next.t(
      "Update"
    )}</button></td>
              <td><button onclick=deleteData(${i}) id="delete">${i18next.t(
      "Delete"
    )}</button></td></tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (products.lengtssh > 0) {
    btnDelete.innerHTML = `<button onclick=deleteAll()>${i18next.t(
      "deleteAll"
    )} ${products.length}</button>`;
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
  createButton.innerHTML = i18next.t("Update");
  temp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

let searchMode = "name";
function getSearchMode(id) {
  console.log(id);
  let search = document.getElementById("search");
  if (id === "searchName") {
    search.placeholder = "Search By Name";
    searchMode = "name"; // set search mode to 'name'
  } else if (id === "searchCategory") {
    search.placeholder = "Search By Category";
    searchMode = "category"; // set search mode to 'category'
  }
  search.focus();
}

function searchData(value) {
  let table = "";

  if (searchMode === "name") {
    for (let i = 0; i < products.length; i++) {
      if (products[i].title.toLowerCase().includes(value.toLowerCase())) {
        table += `<tr><td>${i + 1}</td>
                      <td>${products[i].title}</td>
                      <td>${products[i].price}</td>
                      <td>${products[i].taxes}</td>
                      <td>${products[i].ads}</td>
                      <td>${products[i].discount}</td>
                      <td>${products[i].total}</td>
                      <td>${products[i].count}</td>
                      <td>${products[i].category}</td>
                      <td><button onclick=updateData(${i}) id="update">${i18next.t(
          "Update"
        )}</button></td>
              <td><button onclick=deleteData(${i}) id="delete">${i18next.t(
          "Delete"
        )}</button></td></tr>`;
      }
    }
  } else if (searchMode === "category") {
    for (let i = 0; i < products.length; i++) {
      if (products[i].category.toLowerCase().includes(value.toLowerCase())) {
        table += `<tr><td>${i + 1}</td>
                      <td>${products[i].title}</td>
                      <td>${products[i].price}</td>
                      <td>${products[i].taxes}</td>
                      <td>${products[i].ads}</td>
                      <td>${products[i].discount}</td>
                      <td>${products[i].total}</td>
                      <td>${products[i].count}</td>
                      <td>${products[i].category}</td>
                     <td><button onclick=updateData(${i}) id="update">${i18next.t(
          "Update"
        )}</button></td>
              <td><button onclick=deleteData(${i}) id="delete">${i18next.t(
          "Delete"
        )}</button></td></tr>`;
      }
    }
  }

  document.getElementById("tbody").innerHTML = table;
}
