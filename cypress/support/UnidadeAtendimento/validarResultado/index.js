const el = require('./elements').ELEMENTS;

class ValidarResultado {
  //Valida se resultado unidade de atendimento é maior que zero 
  unidadeFiltrada() {
    cy.get(el.unidadeFiltrada).then(unidades => {
      expect(unidades.length).above(0);
    });
  }
}

export default new ValidarResultado();