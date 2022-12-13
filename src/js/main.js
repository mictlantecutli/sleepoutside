import ProductData from "./productData.js";
import ProductList from "./productlist";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const dataSource = new ProductData("tents");

const listEle = document.querySelector(".product-list");

const listItems = new ProductList("tents", dataSource, listEle);

listItems.init();
