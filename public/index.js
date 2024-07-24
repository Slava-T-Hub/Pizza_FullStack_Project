fetch("/getAllOrders")
  .then((response) => {
    return response.json();
  })
  .then((dataObj) => {
    let htmlStr = "";
    htmlStr += `<tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>ADRESS</th>
          <th>ORDERS</th>
          <th>PRICE</th>
        </tr>`;
    for (let i = 0; i < dataObj.length; i++) {
      htmlStr += `
            <tr>
              <td>${dataObj[i].id}</td>
              <td>${dataObj[i].name}</td>
              <td>${dataObj[i].phone}</td>
              <td>${dataObj[i].adress}</td>
              <td>${dataObj[i].orders}</td>
              <td>${dataObj[i].totalOrderAmount}</td>
            </tr>`;
    }
    document.querySelector("#ordersInfo").innerHTML = htmlStr;
  });
