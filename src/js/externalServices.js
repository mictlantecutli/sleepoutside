const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'

async function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor() {
    //this.category = category;
    //this.path = `../json/${this.category}.json`

  }

  getData(category) {
    return fetch(baseURL + `products/search/${category}`)
                .then(convertToJson).then((data) => data.Result);
    
  }

  async findProductById(id) {
    //const products = await this.getData();
    //return products.find(function (item) {
    //  return item.Id === id;
    //});
    return await fetch(baseURL + `product/${id}`).then(convertToJson).then((data)=>data.Result);
  }


  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }
}
