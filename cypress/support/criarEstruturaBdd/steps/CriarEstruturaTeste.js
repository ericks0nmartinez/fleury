import CriarEstrutura from '../pageObjects/criarEstrutura'

Given(/^Leitura Arquivo Modelo, "([^"]*)"$/, (args) => {
	cy.visit('/index.php')
 CriarEstrutura.LeituraArquivoModelo(args);
});

Then(/^Criar Arquivo Step,$/, () => {
	cy.log('criado com sucesso');
});

When(/^Criar Page Objects,$/, () => {
	cy.log('criado com sucesso')
});

Then(/^Criar Arquivo Elements,$/, () => {
	return true;
});
