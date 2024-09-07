import i18next from "/node_modules/i18next/dist/esm/i18next.js";

const headerElm = document.querySelector("h1");
const ProductElm = document.getElementById("title");
const toggleLanguageButton = document.getElementById("toggle-language");

i18next.init(
  {
    lng: "en", // اللغة الافتراضية
    resources: {
      en: {
        translation: {
          EN: "EN",
          "Product Management System": "Product Management System",
          "Product Name": "Product Name",
        },
      },
      ar: {
        translation: {
          EN: "عربي",
          "Product Management System": "نظام ادارة المنتجات",
          "Product Name": "اسم المنتج",
        },
      },
    },
  },
  function (err, t) {
    headerElm.textContent = t("Product Management System");
    toggleLanguageButton.textContent = i18next.t("EN");
    ProductElm.placeholder = i18next.t("Product Name");
  }
);

// وظيفة لتغيير اللغة عند الضغط على زر التبديل
toggleLanguageButton.addEventListener("click", () => {
  const newLanguage = i18next.language === "en" ? "ar" : "en"; // التبديل بين الإنجليزية والعربية
  i18next.changeLanguage(newLanguage, (err, t) => {
    headerElm.textContent = t("Product Management System");
    toggleLanguageButton.textContent = i18next.t("EN");
    ProductElm.placeholder = i18next.t("Product Name");
  });
  document.body.setAttribute("dir", i18next.language === "ar" ? "rtl" : "ltr");
});
