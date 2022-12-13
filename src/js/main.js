import ProductData from "./productData.js";
import ProductList from "./productlist";

const dataSource = new ProductData("tents");

const listEle = document.querySelector(".product-list");

const listItems = new ProductList("tents", dataSource, listEle);

listItems.init();
