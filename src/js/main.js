import ExternalServices from "./productData.js";
import ProductList from "./productlist";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const dataSource = new ExternalServices("tents");

const listEle = document.querySelector(".product-list");

const listItems = new ProductList("tents", dataSource, listEle);

listItems.init();
