import criaArquivoIndex from '../support/configTestes/criaArquivoIndex';
import criarTeste from '../support/configTestes/criarTeste';
import criarArquivoElements from '../support/configTestes/criarArquivoElements';


describe('Criando Arquivos Teste', () => {
  it('ArquivoSpecJS, IndexJS e ElementsJS', () => {
    const nomePastaPrincipalPages = 'posVenda';
    const caminhoArqTesteNomeSpecJS = '6-Vendas/Venda/posVenda.spec.js';
    cy.fixture(`modelo.txt`).then(arqvivoModelo => {
      const linhas = arqvivoModelo.split('\n');
      const importArquivos = linhas.map(linha => {
        const object = linha.replaceAll(/,/g, '').split('.');
        let importArquivos = criaArquivoIndex.configurandoClasses(nomePastaPrincipalPages, object, caminhoArqTesteNomeSpecJS);
        criarArquivoElements.configElements(nomePastaPrincipalPages, object);
        return importArquivos;
      });

    criarTeste.nomeArquivoTest(caminhoArqTesteNomeSpecJS, importArquivos, arqvivoModelo);

    });
  });
});
