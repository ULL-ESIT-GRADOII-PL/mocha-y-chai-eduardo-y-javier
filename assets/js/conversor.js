(function(exports) {
  "use strict";
  var XRegExp = require('xregexp');

  exports.convertir = function() {
    var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
          elemento.innerHTML = Medida.convertir(valor);
  };
})(this);
