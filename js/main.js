var slider = document.querySelector("input");

var pgv = document.querySelector(".person-touched");
const str_pgv = pgv.innerText;

var price = document.querySelector(".price strong");
const str_price = price.innerText;

var discount = document.querySelector("#discount");
const str_discount = discount.innerText;

var swt = document.querySelector(".switch input");



var pair;

slider.addEventListener("mousedown", function(event){
    slider.addEventListener("mousemove", update, false);
},false);


slider.addEventListener("mouseup", function(event){
    slider.removeEventListener("mousemove", update, false);
},false);  

swt.addEventListener("click",prc,false);

window.addEventListener("resize",reportWindowSize,false);

prc()

function prc(){
    if (swt.checked){
       pair = {"10k" : 8*0.75, "50k" : 12*0.75, "100k" : 16*0.75, "500k" : 24*0.75, "1m" : 36*0.75};
    }else{
       pair = {"10k" : 8, "50k" : 12, "100k" : 16, "500k" : 24, "1m" : 36};
    }
    update();
}

function update(){
    pgv.innerText = Object.keys(pair)[slider.value-1].concat(" ",str_pgv);
    price.innerText = str_price + Object.values(pair)[slider.value-1].toFixed(2).toString();
}
    
function reportWindowSize(){
    if (window.innerWidth < 700)
        discount.innerText = "-25%"
    else
        discount.innerText = str_discount
}