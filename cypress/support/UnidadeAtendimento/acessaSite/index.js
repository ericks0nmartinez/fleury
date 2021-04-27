const el = require('./elements').ELEMENTS;

class AcessaSite {
  HomePage() {
    //Confirmação acesso ao site
    cy.get(el.confirmaLGPD).click();
  }
}

export default new AcessaSite();
