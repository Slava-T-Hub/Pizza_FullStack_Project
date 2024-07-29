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
  document.querySelectorAll('.orderDeleteBtn').forEach(button => {
            button.addEventListener('click', async () => {
                const orderCard = button.closest('.orderCard');
                const orderId = orderCard.querySelector('.orderId').value;
        
                if (orderId) {
                    try {
                        const response = await fetch(`/api/order?id=${orderId}`, {
                            method: 'DELETE',
                        });
        
                        if (response.ok) {
                            alert('Order deleted successfully');
                            // Удаление карточки заказа из DOM
                            orderCard.remove();
                        } else {
                            throw new Error('Failed to delete order');
                        }
                    } catch (error) {
                        console.error('Error deleting order:', error);
                        alert('Failed to delete order');
                    }
                } else {
                    alert('Order ID is missing');
                }
            });
        });

  
    }
  
loadOrders()

  //===================================================FETCH_DETAILS_ORDERS  
  async function fetchOrderData() {
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
    htmlContentStr += `<h1>Customer Orders</h1><br>`;
    htmlContentStr += `<div class="customerName"><strong>Name: </strong>${dataObj[0].customerName}<br>
    <strong>Phone: </strong>${dataObj[0].phoneNo}<br>
    <strong>Address: </strong>${dataObj[0].adress}<br>
    </div>
    <br>
    <hr>`;
    
    for(let i = 0; i < dataObj.length; i++) {
      htmlContentStr += `<div class="orderCard">
      <strong>OrderId: </strong>${dataObj[i].OrderId}  <strong>Order Date: </strong>${dataObj[i].orderDate}
      <table>
      <tr>
      <th>Pizza size</th>
      <th>Pizza price</th>
          <th>Drink</th>
          <th>Drink price</th>
          <th>Extra</th>
          <th>Extra price</th>
          <th>Total price</th>
          </tr>                                             
          <tr>
          <td><strong>${dataObj[i].sizeName}</strong></td>    
          <td><strong>${dataObj[i].PizzaPrice}</strong></td>    
          <td><strong>${dataObj[i].drinkName}</strong></td>    
          <td><strong>${dataObj[i].drinkPrice}</strong></td>    
          <td><strong>${dataObj[i].eName}</strong></td>    
          <td><strong>${dataObj[i].ePrice}</strong></td>    
          <td><strong>${dataObj[i].PizzaPrice + dataObj[i].drinkPrice + dataObj[i].ePrice}</strong></td>        
          </tr>
          </table>
          <input type="hidden" class="orderId" value="${dataObj[i].OrderId}">
          <input type="button" value="DELETE ORDER" class="orderDeleteBtn">
          <input type="button" value="PRINT ORDER" class="orderPrintBtn">
          </div>
          <br>`;
        }
        
        document.querySelector('#costumerEdit').innerHTML = htmlContentStr;
        
        //===================================================FETCH_DELETE_ORDERS_IN_TO_THIS_FUNCTION
        
        document.querySelectorAll('.orderDeleteBtn').forEach(button => {
          button.addEventListener('click', async () => {
            const orderCard = button.closest('.orderCard');
            const orderId = orderCard.querySelector('.orderId').value;
            
            if (orderId) {
              try {
                const response = await fetch(`/api/order?id=${orderId}`, {
                  method: 'DELETE',
                });
                
                if (response.ok) {
                  alert('Order deleted successfully');
                  orderCard.remove();
                } else {
                  throw new Error('Failed to delete order');
                }
              } catch (error) {
                console.error('Error deleting order:', error);
                alert('Failed to delete order');
              }
            } else {
              alert('Order ID is missing');
            }
          });
      });
      
    } catch (error) {
      console.error('Error fetching customer data:', error);
      document.querySelector('#costumerEdit').innerHTML = `<p>Error fetching customer details. Please try again later.</p>`;
    }
  }
  
  fetchOrderData();
  
  //===================================================FETCH_DELETE_ORDERS_IN_TO_THIS_FUNCTION
  