
(function(w){

	 function Calculadora(){

	    var self = this;

	    self.getRandom = function (min, max) {
	      return +(Math.random() * ( ( max ) - min) + min).toFixed(0);
	    }
	    
	 }

	w.Calculadora = new Calculadora();

}(window));
