var test = document.querySelector("input");
var pgv = document.querySelector(".person-touched");
var pair = {"10k" : 8, "50k" : 12, "100k" : 16, "500k" : 24, "1m" : 36};


// En théorie faire une substr ou équivalent, pour par réécrire "Pageviews"
pgv.innerText = Object.keys(pair)[test.value-1] + " Pageviews";


test.addEventListener('click', function(event){alert('Element clicked through funciton!')});

test.value;

Object.keys(pair)[0]