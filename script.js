const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
for(mes = 0; mes < meses.length; mes++) {
console.log(meses[mes]);  
var diassemana = '';
for(dia = 0; dia < dias.length; dia++) {
  diassemana += dias[dia] + " "
}
console.log(diassemana);
var numerodias = mes === 1 ? 28 : (mes === 3 || mes === 5 || mes === 8 || mes === 10 ? 30 : 31);
var numerosdias = '';

for(var i = 1; i <= numerodias; i++ ) {
  numerosdias += i + " ";
  if(i % 7 === 0) { 
    numerosdias += "\n"
  }
  
}
console.log(numerosdias + "\n");
}


