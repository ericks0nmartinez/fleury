const el = require('./elements').ELEMENTS;

class CriarArquivoElements {
  configElements(nomePastaPrincipal, classe) {
    const nomeClasse = 0;
    const elements = `export const ELEMENTS = {\n  exemplo: '#id .class'\n};`;
    cy.writeFile(`cypress/support/${nomePastaPrincipal}/${classe[nomeClasse]}/elements.js`,
      `${elements}`);
  }
}

export default new CriarArquivoElements();
