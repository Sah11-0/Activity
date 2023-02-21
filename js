document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

 if (day === "tuesday" || day === "thursday"){
  document.querySelector("#answer").innerText = 'Bowling'
 }else if( day === "saturday" || day === "sunday"){
  document.querySelector("#answer").innerText = 'Hiking'
 }else{
  document.querySelector("#answer").innerText = 'Swimming'
 }
} 
