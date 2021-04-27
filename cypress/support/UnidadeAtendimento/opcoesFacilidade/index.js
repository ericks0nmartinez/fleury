const el = require('./elements').ELEMENTS;

class OpcoesFacilidade {
  mostrarOpcoes() {
    cy.get(el.espandeFacilidades).click();
  }

  marcaFacilidade() {
    cy.get(el.opcoesSelect).then(checks => {
      //É gerado index aleatorio baseado na quantidade de opções "checks.length-1"
      const rand = Cypress._.random(0, checks.length-1);
      if(rand > 0 && rand < 5){
        cy.wrap(checks[rand]).check({force: true});
        cy.wrap(checks[rand -1]).check({force: true});
      } else {
        cy.wrap(checks[rand]).check({force: true});
      }
    })
  }
}

export default new OpcoesFacilidade();
