const fetchData = async () => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTYzYTRiY2RlMTAwMTc2MTZhYjgiLCJpYXQiOjE2MDUxMDExMTUsImV4cCI6MTYwNjMxMDcxNX0.fu7TBFIAbkpfobv_to0qZ3-tTppUKVwU2FSje2aOtBk",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let row = document.querySelector(".row");
      row.innerHTML = data.map(
        (e) => `<div class="card" style="width: 14rem; margin:5px">
      <img src="${e.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">${e.name}</h4>
        <h5 class="card-title">${e.brand}</h5>
        <p class="card-text">${e.description}</p>
        <h5 class="card-title">${e.price}€</h5>
        <a href="#" class="btn btn-danger">Buy</a>
      </div>
    </div>`
      );
    }
  } catch (error) {
    console.error(`API ERROR : ${error.message}`);
  }
};

const pushData = async (event) => {
  event.preventDefault();

  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    brand: document.querySelector("#product-brand").value,
    imageUrl: document.querySelector("#product-img").value,

    price: parseInt(document.querySelector("#product-price").value),
  };
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/`,
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTYzYTRiY2RlMTAwMTc2MTZhYjgiLCJpYXQiOjE2MDUxMDExMTUsImV4cCI6MTYwNjMxMDcxNX0.fu7TBFIAbkpfobv_to0qZ3-tTppUKVwU2FSje2aOtBk",
          "Content-Type": "application/json",
        }),
      }
    );

    console.log(response);
    if (response.ok === true) {
      location.assign("home.html");
    } else {
      alert("something went wrong");
    }
    const data = await response.json();

    console.log(data);
    //return data;
  } catch (error) {
    console.error(`API ERROR : ${error.message}`);
  }
};