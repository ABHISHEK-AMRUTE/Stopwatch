const minup = document.getElementById('minup');
const mindown = document.getElementById('mindown');
const secup = document.getElementById('secup');
const secdown = document.getElementById('secdown');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timeText = document.getElementById('timeText');
const buttonPanel = document.getElementsByClassName('buttonPanel');
var audio = new Audio('./ring.mp3');


var second = 0;
var interval;



function getCorrected(t) {
    if (t <= 9) return "0" + t;
    return t;
}

function updateTime() {
    timeText.innerHTML = getCorrected(parseInt((second/60)%60)) + ":" + getCorrected(parseInt(second%60));
}

minup.addEventListener('click', (event) => {
    second+=60;
    updateTime();

})
mindown.addEventListener('click', (event) => {

    if (second > 60) {
        second-=60;
        updateTime();
    }
})
secup.addEventListener('click', (event) => {

    second++;
    updateTime();
})
secdown.addEventListener('click', (event) => {

    if (second > 0) {
        second--;
        updateTime();
    }
})
start.addEventListener('click', (event) => {
console.log("start");
   if(interval === undefined)
   {
    interval = setInterval(() => {
        if(second === 13)audio.play();
        second--;
        updateTime();
        console.log('started')
   }, 1000);
   

  

   setTimeout(() => {
       clearInterval(interval);
       
       second = 0;
       updateTime();

   },second*1000);

   }


})
reset.addEventListener('click', (event) => {

    clearInterval(interval);
    audio.stop();
    second = 0;
    updateTime();
    
    interval = undefined;

})