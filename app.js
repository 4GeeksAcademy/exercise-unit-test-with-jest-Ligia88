const sum = (a,b)=>{
    return a + b;
}

console.log(sum(7,3))

//conversor de moneda.

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(amount_dollars){
return amount_dollars * 144.36;
}

function fromEuroToDollar(amount_Euros){
return amount_Euros * oneEuroIs.USD;
}

function fromYenToPound(amount_yens){
return amount_yens * 3.76;
}


module.exports={sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};