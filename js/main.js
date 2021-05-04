var slider = document.querySelector("input");

var pgv = document.querySelector(".person-touched");
const str_pgv = pgv.innerText;

var price = document.querySelector(".price strong");
const str_price = price.innerText;

var swt = document.querySelector(".switch input");

slider.addEventListener("mousedown", function(event){
    slider.addEventListener("mousemove", update, false);
},false);


slider.addEventListener("mouseup", function(event){
    slider.removeEventListener("mousemove", update, false);
},false);  

swt.addEventListener("click",prc,false);

prc()

function prc(){
    if (swt.checked){
        pair = {"10k" : 8*0.25, "50k" : 12*0.25, "100k" : 16*0.25, "500k" : 24*0.25, "1m" : 36*0.25};
    }else{
        pair = {"10k" : 8, "50k" : 12, "100k" : 16, "500k" : 24, "1m" : 36};
    }
    update();
}

function update(){
    pgv.innerText = Object.keys(pair)[slider.value-1].concat(" ",str_pgv);
    price.innerText = str_price + Object.values(pair)[slider.value-1].toFixed(2).toString();
}
    
