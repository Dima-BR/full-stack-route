function getProductPrice(price, taxes, ads) {
    var totalTaxes = price * taxes;
    var finalPrice = price + totalTaxes + ads;
    console.log(finalPrice);
    
}

// getProductPrice(1000, 0.1, 25);

var user = {
    name:"Ali",
    age: 25,
    isMarried:true,
    gender:"male",

    eat:function(meal){
        console.log(`Eat ${meal}`);
    },
    wife:{
        name:"Rima",
        age:20,
        gender:"Female"
    },
};
console.log(user.wife.name);
user.eat("Mansaf");

let arr = [30, 49, 60, 2]
arr.sort();
console.log();






