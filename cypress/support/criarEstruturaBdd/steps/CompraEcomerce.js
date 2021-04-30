import AdicionarItem from '../pageObjects/AdicionaItem';

Given(/^acessar site, E-commerce$/, () => {
  AdicionarItem.acessarSite();  
});


When(/^informar produto, "([^"]*)" no campo busca$/, (args1) => {
    AdicionarItem.pesquisarProduto().type(args1);
});


When(/^clicar em buscar,$/, () => {
	AdicionarItem.buscarProduto();
});

When(/^validar resultado, obtido do itens é compatível com "([^"]*)"$/, (args1) => {
	AdicionarItem.validaResultado().should('contain', args1);
});

Then(/^Adicionar ao carrinho, de compras$/, () => {
    AdicionarItem.AddProdutoCarrinhoCompra();
});
