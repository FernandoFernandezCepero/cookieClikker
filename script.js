var currency        = 0

var clickCookie     = 1
var passiveCookie   = 1

var pointer         = 1
var grandma         = 0

var pricePointer    = 10
var priceGrandma    = 20

//Click cookie
document.getElementById('cookie').onclick = function(event){
    currency = currency + pointer
    console.log(`${currency} koekjes`);
};

//Upgrade pointer
document.getElementById('pointer').onclick = function(event){
    if(currency >= pricePointer){
        currency = currency - pricePointer
        pointer = pointer + 1
        pricePointer = pricePointer + (pricePointer * 1,5)
    } else {
        console.log("te weinig geld")
    }
    console.log(pointer)
};

//Upgrade Grandma
document.getElementById('grandma').onclick = function(event){
    if(currency >= priceGrandma){
    currency = currency - priceGrandma
    grandma = grandma + 1
    priceGrandma = priceGrandma + 20 
    } else {
        console.log("te weinig geld")
    }
    console.log(`Grandma level is ${grandma}`)
};

//Interval passive income
setInterval(function(tick){
    currency = currency + (grandma * 5) 
}, 1000);


//Update cookie amount
setInterval(function(show){
    document.getElementById("currency").innerHTML ="Koekjes: " + currency;
    document.getElementById("clickLvl").innerHTML ="Lvl. Click: " + pointer + " -- Next level: " + pricePointer + " cookies";
    document.getElementById("grandmaLvl").innerHTML ="Lvl. Grandma : " + grandma + " -- Next level: " + priceGrandma + " cookies";
}, 100);
