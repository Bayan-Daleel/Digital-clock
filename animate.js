const hoursElm=document.getElementById('hours');
const minutesElm=document.getElementById('minutes');
const secondsElm=document.getElementById('seconds');
const ampmElm=document.getElementById('ampm');



function updateDate(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="PM";
    console.log(h);
    if(h>12){
        h=h-12;
        ampm ="AM";
        console.log(ampm);
    }
    h= h <10 ? "0"+h : h;
    m= m <10 ? "0"+m : m;
    s= s <10 ? "0"+s : s;
    hoursElm.innerText = h;
    minutesElm.innerText = m;
    secondsElm.innerText = s;
    ampmElm.innerText =ampm;
    setTimeout(()=>{
        updateDate();
    }, 1000);

}
updateDate();
