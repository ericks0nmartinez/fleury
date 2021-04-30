Feature: Adicionar Item Carrinho

    Como usuario desejo adicionar item no carrinho de compra no e-commerce  

Scenario: Pesquisar produto Faded Short Sleeve
  Given acessar site, E-commerce
  And informar produto, "Faded Short Sleeve" no campo busca
  When clicar em buscar,
  And validar resultado, obtido do itens é compatível com "Faded Short Sleeve"
  Then Adicionar ao carrinho, de compras