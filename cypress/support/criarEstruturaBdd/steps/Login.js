import Login from '../pageObjects/Login'; 
Given(/^ acessar site, E-commerce$/, () =>{
  Login.acessarSite();

})

When(/^ informar produto, "([^"]*)" no campo busca$/, (args1) =>{
  Login.informarProduto(args1);

})

When(/^ clicar em buscar,$/, () =>{
  Login.clicarEmBuscar();

})

When(/^ validar resultado, obtido do itens é compatível com "([^"]*)"$/, () =>{
  Login.validarResultado();

})

Then(/^ Adicionar ao carrinho, de compras$/, () =>{
  Login.AdicionarAoCarrinho();

})

