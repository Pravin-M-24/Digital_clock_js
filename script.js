let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm")

function updateTime(){

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    ampm.innerText = "AM"
    if(h > 12) {
        h = h - 12;
        ampm.innerText = "PM";
    }
   console.log(h);

   h = (h < 10)? "0"+h : h;
   m = (m < 10)? "0"+m: m;
   s = (s < 10)? "0"+s : s;

   hours.innerText = h;
   minutes.innerText = m;
   seconds.innerText = s;

   setTimeout(() =>{
      updateTime()
   },1000);

}

updateTime();