const el = require('./elements').ELEMENTS;

class NavegarNoSite {
  //Acessa o menu de acordo com a opção passada para o metodo, possivel se reaproveitado para outro menu
  escolheMenu(menu) {
    cy.contains(menu).click();
  }
}

export default new NavegarNoSite();
