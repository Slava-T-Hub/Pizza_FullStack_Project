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
          <option style="color: black"value="${pizzaDataObj[i].pizzaDescription}">${pizzaDataObj[i].pizzaDescription} ${pizzaDataObj[i].pizzaPrice} ₪</option>`          
        }
        htmDataStr += `</select>`
         
                 
          document.querySelector('#pizzaChoise').innerHTML = htmDataStr;
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
            <option style="color: black" value="${extraDataObj[i].ExtraDescription}">${extraDataObj[i].ExtraDescription} ${extraDataObj[i].ExtraPrice} ₪</option>
            `
          }
          htmDataStr += `</select>`
          
          document.querySelector('#extraChoise').innerHTML = htmDataStr;
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
            <option style="color: black" value="${drinkDataObj[i].drinkDescription}">${drinkDataObj[i].drinkDescription} ${drinkDataObj[i].drinkPrice} ₪</option>
            `
          }
          htmDataStr += `</select>`
          
          document.querySelector('#drinkChoise').innerHTML = htmDataStr;
      })
  //=====================================================================
  function submitOrder() {
    fetch("/postOrder", {
        method: 'Post',
        body: JSON.stringify({
            selectPizza: document.querySelector("#selectSizePizza").value,
            selectExtras: document.querySelector("#selectExtra").value,
            selectDrinks: document.querySelector("#selectDrinks").value,
            customerName: document.querySelector("#customerName").value,
            phoneNo: document.querySelector("#phoneNo").value,
            adress: document.querySelector("#adress").value,
        }),
        headers: {
            "Content-Type": "application/json",
            "myHeader" : "myCode",
        },
    })
    }

    
    