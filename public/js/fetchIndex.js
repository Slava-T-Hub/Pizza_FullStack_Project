//fetchIndex.html
//=====================================================================
      fetch("/api")
      .then((response) => response.json())
      .then((pizzaDataObj) => {
        console.log(pizzaDataObj);
        let htmDataStr = ""
        htmDataStr += `
        <select name="" id="selectSizePizza" >
          <option value="" style="color: black" disabled selected hidden  >Pizza size</option> 
          <datalist name="" hidden></datalist>`        
          for(let i = 0; i < pizzaDataObj.length; i++){
          htmDataStr += `
          <option style="color: black" value="${pizzaDataObj[i].pizzaDescription}" data-price="${pizzaDataObj[i].pizzaPrice}" >${pizzaDataObj[i].pizzaDescription} ${pizzaDataObj[i].pizzaPrice} ₪</option>`
        }
        htmDataStr += `</select>`                 
          document.querySelector('#pizzaChoise').innerHTML = htmDataStr;    
          document.querySelector('#selectSizePizza').addEventListener('change', (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];
            const pizzaPrice = selectedOption.getAttribute('data-price');
            document.querySelector('#pizzaPrice').textContent = `${pizzaPrice}`;
          });   
        })




        
  //=====================================================================
      fetch("/api1")
      .then((response) => response.json())
      .then((extraDataObj) => {
        console.log(extraDataObj);
        let htmDataStr = ""
        htmDataStr += `
        <select name="" id="selectExtra" >
          <option value="" style="color: black" disabled selected hidden  >Extras</option> 
          <datalist name="" hidden></datalist>`        
          
          for(let i = 0; i < extraDataObj.length; i++){
            htmDataStr += `
            <option style="color: black" value="${extraDataObj[i].ExtraDescription}" data-price="${extraDataObj[i].ExtraPrice}">${extraDataObj[i].ExtraDescription} ${extraDataObj[i].ExtraPrice} ₪</option>`
          }
          htmDataStr += `</select>`
          
          document.querySelector('#extraChoise').innerHTML = htmDataStr;
          document.querySelector('#selectExtra').addEventListener('change', (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];
            const extraPrice = selectedOption.getAttribute('data-price');
            document.querySelector('#extraPrice').textContent = `${extraPrice}`;
          });  
        })
  //=====================================================================
      fetch("/api2")
      .then((response) => response.json())
      .then((drinkDataObj) => {
        console.log(drinkDataObj);
        let htmDataStr = ""
        htmDataStr += `
        <select name="" id="selectDrinks" >
          <option value="" style="color: black" disabled selected hidden >Drinks</option> 
          <datalist name=""  hidden></datalist>`         
          for(let i = 0; i < drinkDataObj.length; i++){
            htmDataStr += `
            <option style="color: black" value="${drinkDataObj[i].drinkDescription}" data-price="${drinkDataObj[i].drinkPrice}">${drinkDataObj[i].drinkDescription} ${drinkDataObj[i].drinkPrice} ₪</option>`
          }
          htmDataStr += `</select>`
          
          document.querySelector('#drinkChoise').innerHTML = htmDataStr;
          document.querySelector('#selectDrinks').addEventListener('change', (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];
            const drinkPrice = selectedOption.getAttribute('data-price');
            document.querySelector('#drinkPrice').textContent = `${drinkPrice}`;
          }); 
      })
  //=====================================================================
  function submitOrder() {
    let sPizza = document.querySelector("#selectSizePizza").value;
    let pPrice = document.querySelector("#pizzaPrice").textContent.trim(); 
    let sExtras = document.querySelector("#selectExtra").value;
    let ePrice = document.querySelector("#extraPrice").textContent.trim(); 
    let sDrinks = document.querySelector("#selectDrinks").value;
    let dPrice = document.querySelector("#drinkPrice").textContent.trim(); 
    let cName = document.querySelector("#customerName").value;
    let pNo = document.querySelector("#phoneNo").value;
    let adr = document.querySelector("#adress").value;
    
    fetch("/postOrder", {
      method: 'POST',
      body: JSON.stringify({
        selectPizza: sPizza,
        pizzaPrice: pPrice,
        selectExtras: sExtras,
        extraPrice: ePrice,
        selectDrinks: sDrinks,
        drinkPrice: dPrice,
        customerName: cName,
        phoneNo: pNo,
        adress: adr,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((response) =>{
      console.log(response);     
      
      alert("Your order has been successfully sent! Enjoy your meal!");
      location.reload();
    })       
    .catch((error) => {
      console.error("Error sending order:", error);
      alert("There was an error sending your order. Please try again.");
    });
  }
  //=====================================================================
  
  