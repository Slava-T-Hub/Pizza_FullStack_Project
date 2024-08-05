fetch("/getAllOrders")
.then((response) => response.json())
.then((dataObj) => {
  console.log(dataObj);
  let htmlStr = '';
  htmlStr += `<tr>
    <th>ID</th>
    <th>NAME</th>
    <th>PHONE</th>
    <th>ADRESS</th>
    <th>ORDERS</th>
    <th>TOTAL SUM</th>
    <th>EDIT</th>
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
      <td><a class="button" href="costumerEdit.html?id=${dataObj[i].id}">EDIT</a></td>
    </tr>`;
  }
  document.querySelector('#ordersInfo').innerHTML = htmlStr;
})