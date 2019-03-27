function Etapa1(){
  document.getElementById('SX').hidden = true;
  document.getElementById('TA').hidden = false;
}
function cancelsx(){
  document.getElementById('SX').hidden = !true;
  document.getElementById('TA').hidden = !false;
  document.getElementById('IM').hidden = !false;
}
function Etapa2(){
  document.getElementById('TA').hidden = true;
  document.getElementById('IM').hidden = false;
}
function cancelta(){
  document.getElementById('TA').hidden = !true;
  document.getElementById('IM').hidden = !false;
}

function Etapa3(){
  document.getElementById('SX').hidden = !false;
  document.getElementById('TA').hidden = !false;
  document.getElementById('IM').hidden = !false;
  document.getElementById('Res').hidden = !true;
}

function Calcular(){
  var SX = getRadioValor('optradioSX');
  var TA = parseFloat(getRadioValor('optradioTA'));
  var P = parseInt(document.getElementById('peso').value);
  var A = parseInt(document.getElementById('altura').value);
  var I = parseInt(document.getElementById('idade').value);

  if(SX == "Masculino"){
    var MB = TA * (66 + ((13,7 *P + ( 5 * A) -(6,8 * I))));
    document.getElementById('calorias').value = MB.toFixed(2);
  }
  else{
    var MB = TA * (655 + ((9,6 *P + ( 1,8 * A) -(4,7 * I))));
    document.getElementById('calorias').value = MB.toFixed(2)
  }

  
}

function Reload(){
  window.location.reload();
}

function getRadioValor(name){
  var rads = document.getElementsByName(name);
   
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   
  }
   
  return null;
 }