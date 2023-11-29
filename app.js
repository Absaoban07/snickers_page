let count = 0;

document.querySelector('.plusbtn').onclick = function(){
    
    count += 1;
    document.querySelector(".countitem").innerHTML= count;
}
document.querySelector('.minusbtn').onclick = function(){
    if (count != 1){
        count -= 1; 
    }


    document.querySelector(".countitem").innerHTML= count;

}

