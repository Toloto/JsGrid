
(function(w){

	function Casa(elemento, comodos){



		var self = this;

		self.comodos = comodos;

		self.elemento = elemento;

		self.init = function (comodo){
			draw(comodo);
		}

		function draw(comodo){

			var body = self.elemento.querySelector('tbody');
				body.innerHTML = "";

			var head = self.elemento.querySelector('thead');
				head.innerHTML = "";

			var comodos = self.comodos[comodo];		

			var trBody = document.createElement("tr");
			var trHead = document.createElement("tr");

			for( var j = 0; j < comodos.length; j++ ){

				var item = comodos[j];

				for (var prop in item) {

					trBody.innerHTML += "\
					<td>\
						<input type='radio' class='consumidor' value='"+item[prop]+"' name='"+prop+"' onchange="calcularTotal()">Ligar</input>\
			    			<input type='radio' value='0' name='"+prop+"' checked>Desligar</input>\
			    	</td>";	

			    	trHead.innerHTML += "\
						<th>"+prop+"</th>\
			    	";					
					
				}			
				

				head.appendChild(trHead);
				body.appendChild(trBody);
			};

		}
	}

	w.Casa = Casa;

}(window));
