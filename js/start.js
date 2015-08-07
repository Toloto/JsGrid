
var elementoTermometro = document.querySelector(".termometro");
var termometro = new Termometro();

termometro.getValor(15,20);
termometro.elemento = elementoTermometro;
termometro.init();



/*
 *
 * Criando a tabela de comodos 
 */


 var elementoTabela = document.querySelector("#tabela");

 var comodos = {

 	// Primeiro item
 	sala : 
 	[
 		{
 			lampada : 25
 		},
 		{
			televisao: 125
		},
		{
			ventilador: 35
		}
 	],


 	// Segundo item
 	quarto : 
 	[
 		{
 			lampada : 25
 		},
 		{
			televisao: 125
		},
		{
			ventilador: 35
		}
 	]
};

 var casa = new Casa(elementoTabela, comodos);

 /*
  * comodos
  */

  // aqui eu adiciono os comodos no select

  var elementoComodo = document.querySelector("#comodos");
  
  for (var prop in comodos) {

  	var option = document.createElement("option");  
  	
  	option.value = prop;
  	option.innerText = prop;	

  	elementoComodo.appendChild(option);

  }


elementoComodo.addEventListener('change', function(){

	var valor = this.value;

	if(!valor) return;

	casa.init(valor);	
	calcularTotal();


});

var _elementosRadios = [].slice.call(document.querySelectorAll('.consumidor'));

_elementosRadios.forEach(function(item){

	item.addEventListener('change', function(){
		calcularTotal();
	})

})


var _elementoSoma = document.querySelector("#soma");

function calcularTotal(){

	var total = +_elementoSoma.innerHTML;
	var _elementosRadios = [].slice.call(document.querySelectorAll('.consumidor'));

	console.log("Valor Anterior:", total);

	_elementosRadios.forEach(function(item){

		total += !!item.checked ? +item.value : 0;
console.log("Valor Total de Consumo:", item.checked);
	});

	_elementoSoma.innerHTML = total;

	console.log("Valor Total de Consumo:", total);
}

window.calcularTotal = calcularTotal;

function checaRadio(){
 
                radio = document.querySelectorAll(".consumidor");
 
                for(i=0; i<radio.length; i++)
                {
                        if (radio[i].getAttribute("type") == "radio" && radio[i].checked == true)
                        {
                                alert(radio[i].value);
                        }
                }
        }
