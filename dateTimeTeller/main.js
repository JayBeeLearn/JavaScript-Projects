var yName = prompt('What is your name?');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var desc;

var d = new Date();
var day = d.getDay()

var t = d.getHours()

var m = d.getMinutes()

if (t < 12){
    desc = 'am';
} else (t >= 12); {
   desc = 'pm';
};
 

alert (`Welcome ${yName}, the time is ${t}: ${m} ${desc} and the today  is ${days[day]}`);