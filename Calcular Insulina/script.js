var sensetxt = window.document.getElementById("paragrafo");
var sensibilidade = 30
sensetxt.innerHTML = `Sensibilidade: ${sensibilidade}`;

function somar() {
  var glitxt = window.document.getElementById("txtn1");
  var carbtxt = window.document.querySelector("input#txtn2");
  var res = window.document.querySelector("div#res");
  var glicemia = Number(glitxt.value);
  var carboidrato = Number(carbtxt.value);
  var insulina = (glicemia - 130) / sensibilidade + carboidrato / 15;

  console.log(carboidrato)

  if (glicemia == "" || carboidrato == "") {
    res.innerHTML = `Preencha os campos corretamente`;
  } else {
    res.innerHTML = `Precisa tomar <strong>${insulina.toFixed(
    )}ml</strong> de insulina`;
  }
}
