var x = 0;
var y = 0;
document.getElementById("count").innerText = x;
document.getElementById("count1").innerText = y;
//add to cart
function addtocart(value) {
    document.getElementById("count").innerHTML = value;
    x = x + 1;
    document.getElementById("count").innerText = x;
    //increament the value
    document.getElementById("count1").innerHTML = value;
    y = y + 10;
    document.getElementById("count1").innerText = y;
}

function removetocart(value) {
 
    if (x > 0) {
        document.getElementById("count").innerHTML = value;
        x = x - 1;
        document.getElementById("count").innerText = x;
    }
   
    if (y > 0) {
        document.getElementById("count1").innerHTML = value;
        y = y - 10;
        document.getElementById("count1").innerText = y;
    }
  
}