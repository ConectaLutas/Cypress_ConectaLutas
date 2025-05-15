describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.visit('/login')
    cy.contains('Login')
    cy.get('input#email').type('JENI@GMAIL.COM')
    cy.get('input#password').type('senhaSegura123@')
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/perfil')
  })
})
