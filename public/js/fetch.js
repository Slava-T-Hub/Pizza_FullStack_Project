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
        }
    })
    }
    
    