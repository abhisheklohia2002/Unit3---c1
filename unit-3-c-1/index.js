//store the products array in localstorage as "products"

var i = 0;
document.getElementById("add").addEventListener("click",runprogram);
function runprogram(){
    i++;
    document.getElementById("count").innerText = i;
    event.preventDefault();
    var name = document.getElementById("Type").value;
    var detail = document.getElementById("Description").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("image").value;




if(name != "" && detail != "" && price != "" && image !=""){
    var Info = JSON.parse(localStorage.getItem("Info")) || [];
    var obj = {
        type : name,
        desc : detail,
        price : price,
        image : image
    }
       
    Info.push(obj);
    localStorage.setItem("Info",JSON.stringify(Info));

}
else{
    alert("Incomplete");

}


}


document.querySelector("#Show_Products").addEventListener("click",jump);
function jump(){
    window.location.href = "inventory.html";

}