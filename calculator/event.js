
// var user = document.getElementById('user');

// var username = document.getElementById('name');

// username.addEventListener('input', change);

// function change (){
//     var newName = username.value;

//     user.innerHTML = newName;
// }


var nName = document.getElementById('name');
var nUser = document.getElementById('user');


nName.addEventListener('input', loo);


function loo () {
    nUser.innerHTML =  nName.value;
}







// this code is for addition 

var numOne = document.getElementById("addOne");
var numTwo = document.getElementById("addTwo");
var answer = document.getElementById("answer");

numOne.addEventListener ('input', add);
numTwo.addEventListener ('input', add);

function add () {
    var one = +(numOne.value) || 0;
    var two = +(numTwo.value) || 0;
    answer.innerHTML = 'Your answer is:' + ' ' + (one + two);
}



// another code for subtraction


var sOne = document.getElementById("subOne");
var sTwo = document.getElementById('subTwo');
var sAnswer = document.getElementById("subAnswer")

sOne.addEventListener('input', sub);
sTwo.addEventListener('input', sub);


function sub(){
    var sone = parseFloat(sOne.value) || 0;
    var stwo = parseFloat(sTwo.value) || 0;

    sAnswer.innerHTML = 'The remainder is: ' + (sone - stwo);

}


// then finally lets look at how we can multiply some numbers in this our page 



var mOne = document.getElementById('mulOne');
var mTwo = document.getElementById('mulTwo');

var mAnswer = document.getElementById('mulAnswer');

mOne.addEventListener ('input', mul);
mTwo.addEventListener('input', mul);

function mul () {
    var muOne = parseFloat(mOne.value) || 0;
    var muTwo = parseFloat(mTwo.value) || 0;

    mAnswer.innerHTML = 'The product of your numbers is: ' + (muOne * muTwo);

}
