(function(exports){
    "use strict";
  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor, tipo);
  }
  Temperatura.prototype = Object.create(Medida.prototype);
  Temperatura.prototype.constructor = Temperatura;
})(this);
