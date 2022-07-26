import disArray from './info.json' assert { type: "json" };
console.log(disArray);


var value = document.getElementById('number');

const optFrom = '<option class="optionFrom">From</option';
const optTo = '<option class="optionTo">To</option';
const convFrom = document.getElementById('convertFrom');
const convTo =   document.getElementById('convertTo');



function addElementFrom() {
    convFrom.insertAdjacentHTML('beforeend',optFrom);
};

function addElementTo() {
    convTo.insertAdjacentHTML('beforeend',optTo);
};


for (let i=0; i < disArray.distances.length; i++){
 addElementFrom();
 addElementTo();
};
var allOptFrom = document.querySelectorAll("option.optionFrom");
console.log(allOptFrom);
var allOptTo = document.querySelectorAll("option.optionTo");
console.log(allOptTo);
for (let i=0; i < allOptFrom.length; i++){
    allOptFrom[i].innerHTML = disArray.distances[i].name;
    allOptFrom[i].setAttribute('id','from_'+i);
    allOptFrom[i].setAttribute('value', parseFloat(disArray.distances[i].value))
};
for (let i=0; i < allOptTo.length; i++){
    allOptTo[i].innerHTML = disArray.distances[i].name;
    allOptTo[i].setAttribute('id','to_'+i);
    allOptTo[i].setAttribute('value', parseFloat(disArray.distances[i].value))
};
var allOptFromArray = Array.from(allOptFrom);
var allOptToArray = Array.from(allOptTo);
console.log(allOptFromArray);
console.log(allOptToArray);

//var solve = a*b/c;
function solve() {
    value.addEventListener('click', function handleChange(){
        console.log(value.value)
        return(value.value);
        
    });
    convFrom.addEventListener('click', function handleChange(){
        console.log(convertFrom.value);
        return(convertFrom.value);
    }); 
    convTo.addEventListener('change', function handleChange(){
        console.log(convertTo.value);
        return(convertTo.value);
    }); 
    var a = parseFloat(convertFrom.value);
    var b = parseFloat(value.value);
    var c = parseFloat(convertTo.value);
    var result = a*b/c;
    result = result.toFixed(3);
    document.getElementById('result').innerHTML=result
    console.log(result)
}
const button = document.getElementById('button');
button.addEventListener('click', solve);
