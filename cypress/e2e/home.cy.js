// cypress/e2e/home.cy.js
describe('Página Inicial', () => {
  it('Deve carregar a página inicial', () => {
    cy.visit('/')
    cy.contains('Bem-vindo ao Conecta Lutas')
  })
})
