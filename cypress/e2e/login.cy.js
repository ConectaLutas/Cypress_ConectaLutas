describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.visit('/login')
    cy.contains('Login')
    cy.get('input#email').type('testenovo2@gmail.com')
    cy.get('input#password').type('senhaSegura123@')
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/perfil')
  })
})
