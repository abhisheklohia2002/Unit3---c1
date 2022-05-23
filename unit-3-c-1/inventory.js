var Info = JSON.parse(localStorage.getItem("Info")) ;


var append = document.getElementById("all_products");

i = 0;
displayData(Info);

function displayData(Info){
    Info.forEach(function(elem,index){
        var box = document.createElement("div");
        box.setAttribute("id","box");
i++;
console.log(i);
document.getElementById("count").innerText = i;
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
var img = document.createElement("img");
var btn = document.createElement("button");
btn.addEventListener("click",function(elem,index){
    deleteItem(elem,index);

})
btn.innerText = "Remove";
btn.setAttribute("id","remove_product")
img.setAttribute("src",elem.image);

p1.innerText = elem.type;
p2.innerText = elem.desc;
p3.innerText = elem.price;
box.append(img,p1,p2,p3,btn);
append.append(box);



    })
}
function deleteItem(elem,index){
    Info.splice(index,1);
    localStorage.setItem("Info",JSON.stringify(Info));
window.location.reload();

}

document.getElementById("add_more_product").addEventListener("click",jump);

function jump(){
    window.location.href = "index.html"
}