// This is a JavaScript file
/*$(document).on('click','#btn7',function(){
  var valor;
  valor = $("#display").val();
  valor += "7";
  $("#display").val(valor);
});*/
var pegar, operacao = "", texto = "", texto1 = "", virgula = "";
// botoes 1 ao 9
$(document).on('click','.botao',function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
  if($("#display").val().length == 1 || virgula == "a"){
    $("#vir").attr("disabled", false);
    virgula = null;
  }
});

//btn apagar
$(document).on('click','#ce',function(){
  $("#vir").attr("disabled", true);
  $("#display").val("");
  operacao = "";
  pegar = null;
  texto = "";
});

//btn virgula
$(document).on('click','#vir',function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
  $("#vir").attr("disabled", true);
});
// operadores
$(document).on('click','#operadores',function(){
  //verifica para não aparecer o operador duas vezes
  if($("#display").val()== "" || $("#display").val().slice($("#display").val().length-1,$("#display").val().length ) == "+" || $("#display").val().slice($("#display").val().length-1,$("#display").val().length ) == "-" 
  || $("#display").val().slice($("#display").val().length-1,$("#display").val().length ) == "*"
  || $("#display").val().slice($("#display").val().length-1,$("#display").val().length ) == "/"){
    if(($("#display").val()== "" ||  $(this).val() == "-")){
      if($("#display").val().slice($("#display").val().length-1,$("#display").val().length ) == "-"){

      }else{
        $("#display").val($("#display").val()+$(this).val());
      }
    }

  }else{
      var valor;
      $("#vir").attr("disabled", true);
      if(pegar == null){
        valor = parseFloat($("#display").val());
        texto = $("#display").val() + $(this).val();
        $("#display").val(texto);
      }else{
        texto1 = $("#display").val();
        valor = parseFloat($("#display").val().slice(texto.length,texto1.length));
        texto = $("#display").val() + $(this).val();
        $("#display").val(texto);
      } 
      if(operacao == "+"){
        pegar += valor;
      }else if(operacao == "-"){
        pegar -= valor;
      }else if(operacao == "*"){
        pegar *= valor;
      }else if(operacao == "/"){
        pegar /= valor;
      }else{
        pegar = valor;
      }
      // verificar qual é o operador
      operacao = $(this).val();
      virgula = "a";
  }
});

// btn igual
$(document).on('click','#igual',function(){
  texto1 = $("#display").val();
  valor = parseFloat($("#display").val().slice(texto.length,texto1.length));
  if(operacao == "+"){
    pegar += valor;
  }else if(operacao == "-"){
    pegar -= valor;
  }else if(operacao == "*"){
    pegar *= valor;
  }else if(operacao == "/"){
    pegar /= valor;
  }else{
    pegar = valor;
  }
  $("#display").val(pegar);
  operacao = "";
  pegar = null;
  texto = "";
});