import ExternalServices from "./externalServices.js";
import ProductList from "./productList.js";
import { getParams, loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const category =getParams('category');

const dataSource = new ExternalServices();
console.log(dataSource);

const listEle = document.querySelector(".product-list");

const listItems = new ProductList(category, dataSource, listEle);

listItems.init();