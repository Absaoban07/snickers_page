let price = 12500;
let count = 1;

function updateItemPrice() {
    document.querySelector(".item-price").innerHTML = `$${price * count}`;
}

document.querySelector('.plusbtn').onclick = function(add){
    if (count < 5){
        count += 1;
    }
    else{
       ` ${alert("Note: we only have 5 in store for now")}`
    }
    document.querySelector(".countitem").innerHTML= count;
    updateItemPrice();
}
document.querySelector('.minusbtn').onclick = function(minus){
    if (count != 0){
        count -= 1; 
    }
    document.querySelector(".countitem").innerHTML= count;
    updateItemPrice()
}



