const mssql = require('mssql');
const connectToDB = require("./connectToDB");
const appPool = connectToDB.appPool;
//===============================================================
//===============================================================
const postOrderStoredProcedure = async (customerName, phoneNo, adress, selectPizza, pizzaPrice, selectExtras, extraPrice, selectDrinks, drinkPrice) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('customerName', mssql.VarChar, customerName)
                    .input('phoneNo', mssql.VarChar, phoneNo)
                    .input('adress', mssql.VarChar, adress)
                    .input('selectPizza', mssql.VarChar, selectPizza) 
                    .input('pizzaPrice', mssql.Int, pizzaPrice) 
                    .input('selectExtras', mssql.VarChar, selectExtras) 
                    .input('extraPrice', mssql.Int, extraPrice) 
                    .input('selectDrinks', mssql.VarChar, selectDrinks) 
                    .input('drinkPrice', mssql.Int, drinkPrice) 
                    .execute('postOrder');

                console.log(results);
                resolve(results);
            }
            catch (err) {
                console.log("There was an error while sending query to DB: ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('Error connecting to DB: ', err);
            reject(err);
        }
    });
};

module.exports.postOrderStoredProcedure = postOrderStoredProcedure;

//===============================================================
