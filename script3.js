const btn = document.getElementById('btn')

btn.addEventListener("click",function(e){
e.preventDefault()
let valor = document.getElementById("valor");
let numero = Number(valor.value);

console.log(Math.cos(numero))

})