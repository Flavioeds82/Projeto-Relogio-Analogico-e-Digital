let digital_elem = document.querySelector('.digital h3');
let segundo_elem = document.querySelector('.segundos');
let minuto_elem = document.querySelector('.minutos');
let hora_elem = document.querySelector('.horas');

function update(){
   let data = new Date();
   let horas = data.getHours();
   let minutos = data.getMinutes();
   let segundos = data.getSeconds();

   digital_elem.innerHTML =`${insertZero(horas)}:${insertZero(minutos)}:${insertZero(segundos)}`;

   let seg = ((360/60)*segundos)-90;
   let min = ((360/60)*minutos)-90;
   let hr = ((360/12)*horas)-90;

   segundo_elem.style.transform = `rotate(${seg}deg)`;
   minuto_elem.style.transform = `rotate(${min}deg)`;
   hora_elem.style.transform = `rotate(${hr}deg)`;

}

function insertZero(time){
   return time<10 ? `0${time}` : time;
}

setInterval(update, 1000)
update();