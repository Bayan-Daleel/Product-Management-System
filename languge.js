const headerElm = document.querySelector("h1");
const ProductElm = document.getElementById("title");
const priceElm = document.getElementById("price");
const taxesElm = document.getElementById("taxes");
const adsElm = document.getElementById("ads");
const discountElm = document.getElementById("discount");
const countElm = document.getElementById("count");
const categoryElm = document.getElementById("category");
const searchElm = document.getElementById("search");
const createButton = document.getElementById("submit");
const searchNameButton = document.getElementById("searchName");
const searchCategoryButton = document.getElementById("searchCategory");
const totalElm = document.getElementById("total");
const toggleLanguageButton = document.getElementById("toggle-language");
// الموارد والترجمات
const resources = {
  en: {
    translation: {
      EN: "EN",
      "Product Management System": "Product Management System",
      "Product Name": "Product Name",
      Price: "Price",
      Taxes: "Taxes",
      Ads: "Ads",
      Discount: "Discount",
      Count: "Count",
      Category: "Category",
      search: "search",
      Create: "Create",
      "Search by name": "Search by name",
      "Search by category": "Search by category",
      Update: "Update",
      Delete: "Delete",
      Total: "Total : ",
      id: "ID",
      title: "Title",
      price: "Price",
      taxes: "Taxes",
      ads: "Ads",
      discount: "Discount",
      total: "Total",
      category: "Category",
      delete: "Delete",
      update: "Update",
      "Delete All": "Delete All",
    },
  },
  ar: {
    translation: {
      EN: "عربي",
      "Product Management System": "نظام ادارة المنتجات",
      "Product Name": "اسم المنتج",
      Price: "السعر",
      Taxes: "الضريبة",
      Ads: "الإعلانات",
      Discount: "الخصم",
      Count: "العدد",
      Category: "الصنف",
      search: "بحث",
      Create: "أضف المنتج",
      "Search by name": "اليحث باسم المنتج",
      "Search by category": "البحث باسم الصنف",
      Update: "تعديل",
      Delete: "حذف",
      Total: "السعر النهائي : ",
      id: "الرقم",
      title: "العنوان",
      price: "السعر",
      taxes: "الضرائب",
      ads: "الإعلانات",
      discount: "الخصم",
      total: "المجموع",
      category: "الفئة",
      delete: "حذف",
      update: "تحديث",
      "Delete All": "حذف الكل",
    },
  },
};

// دالة لتحديث النصوص في الصفحة
function updateTextContent() {
  headerElm.textContent = i18next.t("Product Management System");
  toggleLanguageButton.textContent = i18next.t("EN");
  ProductElm.placeholder = i18next.t("Product Name");
  priceElm.placeholder = i18next.t("Price");
  taxesElm.placeholder = i18next.t("Taxes");
  adsElm.placeholder = i18next.t("Ads");
  discountElm.placeholder = i18next.t("Discount");
  countElm.placeholder = i18next.t("Count");
  categoryElm.placeholder = i18next.t("Category");
  searchElm.placeholder = i18next.t("search");
  createButton.textContent = i18next.t("Create");
  totalElm.setAttribute("data-content", i18next.t("Total"));
  searchNameButton.textContent = i18next.t("Search by name");
  searchCategoryButton.textContent = i18next.t("Search by category");
}

// دالة لتحديث رؤوس الجدول
function updateTableHeaders() {
  document.getElementById("id-header").textContent = i18next.t("id");
  document.getElementById("title-header").textContent = i18next.t("title");
  document.getElementById("price-header").textContent = i18next.t("price");
  document.getElementById("taxes-header").textContent = i18next.t("taxes");
  document.getElementById("ads-header").textContent = i18next.t("ads");
  document.getElementById("discount-header").textContent =
    i18next.t("discount");
  document.getElementById("total-header").textContent = i18next.t("total");
  document.getElementById("category-header").textContent =
    i18next.t("category");
  document.getElementById("delete-header").textContent = i18next.t("delete");
  document.getElementById("update-header").textContent = i18next.t("update");
}

// تهيئة i18next
i18next.init(
  {
    lng: localStorage.getItem("language") || "en", // استخدم اللغة المخزنة أو الإنجليزية كافتراضي
    resources,
  },
  function (err, t) {
    updateTextContent();
    updateTableHeaders();
    const dir = localStorage.getItem("dir") || "ltr";
    document.body.setAttribute("dir", dir);
  }
);

// وظيفة لتبديل اللغة عند الضغط على الزر
toggleLanguageButton.addEventListener("click", () => {
  const newLanguage = i18next.language === "en" ? "ar" : "en";
  const newDir = newLanguage === "ar" ? "rtl" : "ltr";
  i18next.changeLanguage(newLanguage, (err, t) => {
    updateTextContent();
    updateTableHeaders();
    localStorage.setItem("language", newLanguage);
    localStorage.setItem("dir", newDir); // حفظ اللغة الجديدة في localStorage
  });
  document.body.setAttribute("dir", newDir);
});
