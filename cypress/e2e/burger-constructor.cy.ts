describe('service is available', function() {
  beforeEach(function () {
    cy.intercept("GET", "api/ingredients", { fixture: "ingredients.json" });
    cy.intercept("POST", "api/orders", { fixture: "orders.json" });
    cy.viewport(1450, 1100)
    cy.visit('http://localhost:3000');
    cy.wait(1000);
  })

  
  it('should be available on localhost:3000', function() {
    cy.get('[data-cy="item-ingredient"]').contains('Краторная булка N-200i').click();
    cy.get('[data-cy="modal"]').contains("Детали ингредиента");
    cy.wait(2000);
    cy.get('[data-cy="modal-close"]').click();
    
    cy.get('[data-cy="item-ingredient"]').contains("Флюоресцентная булка R2-D3").trigger('dragstart');
    cy.get('[data-cy="constructor-form"]').trigger('drop');
    cy.wait(1000);
    cy.get('[data-cy="item-ingredient"]').contains("Плоды Фалленианского дерева").trigger('dragstart');
    cy.get('[data-cy="constructor-form"]').trigger('drop');
    cy.wait(1000);
    cy.get('[data-cy="item-ingredient"]').contains("Соус традиционный галактический").trigger('dragstart');
    cy.get('[data-cy="constructor-form"]').trigger('drop');
    cy.wait(1000);
    cy.get('[data-cy="item-ingredient"]').contains("Филе Люминесцентного тетраодонтимформа").trigger('dragstart');
    cy.get('[data-cy="constructor-form"]').trigger('drop');
    cy.wait(1000);
    cy.get("button").contains("Оформить заказ").click();

    cy.get('[data-cy="login-form"]').contains('Вход');
    cy.get('input[name=email]').click().type('tavakay@mail.ru');
    cy.get('input[name=password]').click().type('123456');
    cy.wait(1000);
    cy.contains('button', 'Войти').click();
    cy.location('pathname', { timeout: 1000 }).should('eq', '/');
    cy.wait(2000);

    cy.get("button").contains("Оформить заказ").click();
    cy.get('[data-cy="modal-close"]').click();
    cy.wait(2000);
  })
  
  
}); 

