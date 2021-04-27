const el = require('./elements').ELEMENTS;

class ConfirmaUnidade {
  validaNome() {
    // validar o Nome da unidade que é exibida na tela
    cy.get(el.nomeUnidadeAtendimento).then(nome => {
      cy.getCookie('UnidadeAtendimento').then(nomeUnidade => {
        cy.wrap(nome[0].textContent).should('contain', nomeUnidade['value']);
      });
    });
  }
}

export default new ConfirmaUnidade();
