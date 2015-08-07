
(function(w){
 
	function Termometro(){

		var self = this;

		self.valor = {
			inicio:5,
			fim:10,
			atual: 0
		};

		self.elemento = "";

		self.init = function (){
			self.loop();
		}

		self.getValor = function (inicio, fim){
			self.valor.atual = Calculadora.getRandom(inicio,fim);
		}

		self.update = function (){
			self.draw();
		}

		self.loop = function () {
			self.update();
			setTimeout(self.loop, 3000);
		}

		self.draw = function (){			
			self.getValor(self.valor.inicio, self.valor.fim);
			self.renderElement();
		}

		self.renderElement = function () {
			self.elemento.innerText = "Temperatura Ambiente: " +  termometro.valor.atual  + "º";
		}		
	}

	w.Termometro = Termometro;

}(window));
