const hday = document.querySelector('.day');
const hhour =document.querySelector('.hour');
const hminute= document.querySelector('.minute');
const hsecond = document.querySelector('.second');
const countdown= () =>{

    const countDate = new Date('Jun 4, 2023 08:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap%day)/ hour);
    const textMinute = Math.floor((gap%hour)/ minute);
    const textSecond = Math.floor((gap%minute)/ second);

     hday.innerText = textDay;
     hhour.innerText  = textHour;
     hminute.innerText = textMinute;
     hsecond.innerText = textSecond;


};

countdown();
setInterval(() => {
    countdown();
}, 1000);
 
let loaded = false;
let vid = document.getElementById('vid');
vid.style.height="100vh"
vid.style.objectFit = "cover"

let source = document.getElementById('src');
window.addEventListener('resize', ()=>{
    
    loadVideo();
})

loadVideo();


function loadVideo  (){
    if(window.innerWidth <= 768){
        if(!loaded){
            source.setAttribute('src','b-land.mp4')
            vid.load();
            vid.play();
            loaded = true;
        }
    }else{
        loaded = false;
    }
}