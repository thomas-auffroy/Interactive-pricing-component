/* Init variables */

var pgv = document.querySelector(".person-touched");
const str_pgv = pgv.innerText; 

var price = document.querySelector(".price strong");
const str_price = price.innerText;

var discount = document.querySelector("#discount");
const str_discount = discount.innerText;

var swt = document.querySelector(".switch input");

var slider = document.querySelector("input");

var pair, bgOn, timeoutId;

/* Add EventListener */
slider.addEventListener("input",update,false); // Trigerred on change value
swt.addEventListener("click",prc,false); // Trigerred on click
window.addEventListener("resize",reportWindowSize,false); // Trigerred on resizing

prc(); // Call once to check the state of the switch

function prc(){
    pair = {"10k" : 8, "50k" : 12, "100k" : 16, "500k" : 24, "1m" : 36};
    /* If the switch is toggled then the reduction is applied */
    if (swt.checked)
       pair = {"10k" : 8*0.75, "50k" : 12*0.75, "100k" : 16*0.75, "500k" : 24*0.75, "1m" : 36*0.75};
    update(); // Call update
}

function update(){
    /* Match the slider value with the number of views and price */
    pgv.innerText = Object.keys(pair)[slider.value-1].concat(" ",str_pgv);
    price.innerText = str_price + Object.values(pair)[slider.value-1].toFixed(2).toString();
    
    /* Update background color */
    bgOn = (slider.value - 1)* 25;
    bgOn = bgOn.toString()+"%";
    slider.style.background = "linear-gradient(to right, var(--strong-cyan) "+ bgOn +
    ",var(--light-grayish-blue-bar) "+ bgOn +")";
}
    
function reportWindowSize(){
    /* With mobile size, change the text of the discount box*/
    if (window.innerWidth < 700)
        discount.innerText = "-25%";
    else
        discount.innerText = str_discount;
}


