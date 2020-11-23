const fetchData = async () => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkMzM4ZGFkOGMzODAwMTc1YTMwNjUiLCJpYXQiOjE2MDUxODY0NDUsImV4cCI6MTYwNjM5NjA0NX0.aQy-z_AwpGFuSJizNMkXSc3DH0ldpfq6DuiEPFx7hYg",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let row = document.querySelector(".row");
      row.innerHTML = data.map(
        (e) => `<div class="card" style="width: 14rem; margin:5px">
      <img src="${e.imageUrl}" class="card-img-top" style="width:220px; height:230px; margin-top:3px" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.name}</h5>
        <hr/>
        <h5 class="card-title">${e.brand}</h5>
        <hr/>
        <p class="card-text">${e.description}</p>
        <hr/>
        <h5 class="card-title">${e.price}€</h5>
        <a class="btn  btn-info" href="details.html?id=${e._id}">VIEW DETAILS</a>
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
    name: document.querySelector("#movie-name").value,
    description: document.querySelector("#movie-description").value,
    brand: document.querySelector("#movie-").value,
    imageUrl: document.querySelector("#movie-img").value,
  };
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/`,
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkMzM4ZGFkOGMzODAwMTc1YTMwNjUiLCJpYXQiOjE2MDUxODY0NDUsImV4cCI6MTYwNjM5NjA0NX0.aQy-z_AwpGFuSJizNMkXSc3DH0ldpfq6DuiEPFx7hYg",
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
