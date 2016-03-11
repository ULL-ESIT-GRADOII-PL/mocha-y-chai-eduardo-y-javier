function Farenheit(valor)
{
  Temperatura.call(this, valor, 'F');
}
Farenheit.prototype = Object.create(Temperatura.prototype);
Farenheit.prototype.constructor = Farenheit;
Farenheit.prototype.toKelvin = function () {
  return new Kelvin((this.valor+459.67)*5/9);
};
