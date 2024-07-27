

//===================================================FETCH_GET_ALL_ORDERS
async function loadOrders() {
  fetch('/getAllOrders')
  .then((response) => {return response.json()})
  .then((dataObj) => {
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
  });
}
loadOrders()

  //===================================================FETCH_DETAILS_ORDERS

async function fetchCustomerData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = urlParams.get('id');

    const response = await fetch(`/api/order-details?id=${customerId}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const dataObj = await response.json();
    console.log(dataObj);

    let htmlContentStr = "";
    htmlContentStr += `<h1>Customer Orders</h1>`;
    htmlContentStr += `<div><strong>Name: </strong>${dataObj[0].customerName}
                            <strong>Phone: </strong>${dataObj[0].phoneNo}
                            <strong>Address: </strong></th><td>${dataObj[0].adress}
                       </div>`
    
    

    document.querySelector('#costumerEdit').innerHTML = htmlContentStr;
  } catch (error) {
    console.error('Error fetching customer data:', error);
    document.querySelector('#costumerEdit').innerHTML = `<p>Error fetching customer details. Please try again later.</p>`;
  }
}

fetchCustomerData()

    
   

