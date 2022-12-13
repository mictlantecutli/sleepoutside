function convertToText(res){
  if (res.ok){
    return res.text();
  }else{
    throw new Error ('Bad Response');
  }

  }


// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

//set a function to get the parameter from the URL
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(template, parent, list, callback) {
  //const template = document.getElementById("product-card-template");
  list.forEach((product) => {
    const clone = template.content.cloneNode(true);
    const fillTemplate = callback(clone, product);
    parent.appendChild(fillTemplate);
  });
}


export function renderWithTemplate(template, parent, data, callback) {
  //const template = document.getElementById("product-card-template");
 
  let clone = template.content.cloneNode(true);
  if(callback){
    clone = callback(clone, data);
  }
  
  parent.appendChild(clone);
 
}

export async function loadTemplate(path){
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;

}

export async function loadHeaderFooter(){
  const header = await loadTemplate('../partials/header.html');
  const footer = await loadTemplate('../partials/footer.html');
  const headerElement = document.getElementById('head');
  const footerElement = document.getElementById('foot');
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);



}