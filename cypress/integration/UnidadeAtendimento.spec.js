import acessaSite from '../support/UnidadeAtendimento/acessaSite';
import navegarNoSite from '../support/UnidadeAtendimento/navegarNoSite';
import opcoesFacilidade from '../support/UnidadeAtendimento/opcoesFacilidade';
import validarResultado from '../support/UnidadeAtendimento/validarResultado';
import acessarUnidadeSelecionada from '../support/UnidadeAtendimento/acessarUnidadeSelecionada';
import confirmaUnidade from '../support/UnidadeAtendimento/confirmaUnidade';

describe('Criando Arquivos Teste', () => {
  before(() => {
    cy.viewport(1366, 768)
    cy.visit('https://www.fleury.com.br/')
  })
  it('Troca Titulo', () => {
    acessaSite.HomePage();
    navegarNoSite.escolheMenu('Unidades');
    opcoesFacilidade.mostrarOpcoes();
    opcoesFacilidade.marcaFacilidade();
    validarResultado.unidadeFiltrada();
    acessarUnidadeSelecionada.verDetalhes();
    confirmaUnidade.validaNome();
  });
});
