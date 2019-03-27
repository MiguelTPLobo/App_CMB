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

function Calcular(){
  var SX = getRadioValor('optradioSX');
  var TA = parseFloat(getRadioValor('optradioTA'));
  var P = parseInt(document.getElementById('peso').value);
  var A = parseInt(document.getElementById('altura').value);
  var I = parseInt(document.getElementById('idade').value);

  
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