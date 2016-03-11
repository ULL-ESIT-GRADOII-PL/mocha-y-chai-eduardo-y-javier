(function(exports) {
    "use strict";

function Medida(valor,tipo)
{
  var _valor;
  var _tipo;
  var _measures = {};
  var valortipo = new XRegExp('(?<valor>  [0-9]+ ) -?  # valor  \n' +
             '(?<tipo> [a-z]+ ) -?  # tipo  ', 'ix');
  if(isNaN(valor)){
  var valmatch = XRegExp.exec(valor, valortipo);
  _valor = valmatch.valor;
  _tipo = valmatch.tipo;
  }
  return {
    valor: function()           { return _valor; },
    tipo:  function()           { return _tipo; }
  };
}
Medida.prototype.match = function(valor){
  regexp = new XRegExp('^(\\s*) \n' +
                '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
                '(\\s*)                                             \n' +
                '(?<tipo> [a-z])                                    \n' +
                '(\\s*)                                             \n' +
                '(to)?                                              \n' +
                '(\\s*)                                             \n' +
                '(?<destino> [a-z])                                      \n' +
                '(\\s*)$','ix');
                return XRegExp.exec(valor, regexp);
};
Medida.prototype.convertir = function(valor) {
  var measures = Medida.measures;

  var match = Medida.match(valor);
  if (match) {
    var numero = match.numero,
        tipo   = match.tipo,
        destino = match.destino;

    try {
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+target; // "0 Celsius"
    }
    catch(err) {
      return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
exports.Medida = Medida;
})(this);
