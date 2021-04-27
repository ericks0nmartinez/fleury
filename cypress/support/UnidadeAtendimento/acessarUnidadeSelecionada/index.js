const el = require('./elements').ELEMENTS;

class AcessarUnidadeSelecionada {
  verDetalhes() {
    //de acordo com o resultado aleatoriamente é possivel acessar uma unidade que resuta de acordo com os filtros de facilidade
  cy.get(el.tituloUnidades).then(nomes => {
    const unidadeAleatoria = Cypress._.random(0, nomes.hength -1);
    cy.wrap(nomes[unidadeAleatoria]).click();
    cy.setCookie('UnidadeAtendimento', nomes[unidadeAleatoria].textContent);
  })
  }
}

export default new AcessarUnidadeSelecionada();
