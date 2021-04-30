class AdicionaItem {
  acessarSite() {
    cy.visit('/index.php');
  }

  pesquisarProduto() {
    return cy.get('#search_query_top');
  }

  buscarProduto() {
    cy.get('#searchbox > .btn').click();
  }

  validaResultado() {
    return cy.get('.right-block > h5 > .product-name');
  }

  AddProdutoCarrinhoCompra() {      
    cy.get('.product-container').then( result =>{
      const random = Cypress._.random(0, result.length -1);
      cy.wrap(result[random])
        .trigger('mouseover');
        cy.get('.button-container > .ajax_add_to_cart_button').then( produto =>{
          cy.wrap(produto[random]).click();
        });
    }); 
    cy.get('.layer_cart_product > h2').should('contain', 'Product successfully added to your shopping cart')
    cy.get('.button-container > .button-medium > span').click();
}
}

export default new AdicionaItem();