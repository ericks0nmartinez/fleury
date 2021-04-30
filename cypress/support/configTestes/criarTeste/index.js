class CriarTeste {
  nomeArquivoTest(caminhoNomeSpec, importArquivos, arqvivoModelo) {
    const path = `cypress/integration/${caminhoNomeSpec}`;
    const describeCypress = `describe('Criando Arquivos Teste', () => {`;
    const beforeCypress = `beforeEach(() => { cy.visit('/'); });`;
    const itCypress = `  it('Troca Titulo', () => {\n${arqvivoModelo}\n`;
    const fimArquivo = `  });\n});`;

    cy.writeFile(path,
      `${importArquivos.toString().replaceAll(/,/g,'')}\n\n${describeCypress}\n  ${beforeCypress}\n${itCypress}${fimArquivo}`);
  }
}

export default new CriarTeste();
