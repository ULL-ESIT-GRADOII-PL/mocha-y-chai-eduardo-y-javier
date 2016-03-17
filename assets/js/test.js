var expect = chai.expect;

describe("Conversor", function() {
  describe("Medida", function() {
    it("Cambio de f a c", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });
    it("Prueba fallo", function() {
      expect(Medida.convertir("32")).to.equal("Introduzca una temperatura valida: 330e-1 F to C");
    });
    it("Prueba conversion no reconocida", function() {
      expect(Medida.convertir("32f to ")).to.equal('Desconozco como convertir desde "f" hasta "to"');
    });
  });
});
