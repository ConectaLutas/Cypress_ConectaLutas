describe('Cadastro de atleta', () => {
  it('Deve Cadastrar com sucesso', () => {
    const randomEmail = `testeCypress_${Date.now()}@gmail.com`;
    cy.visit('/register')
    cy.contains('Cadastro de Atleta')
    cy.get('input#name').type('TESTE CYPRESS ATLETA')
    cy.get('input#email').type(randomEmail)
    cy.get('input#password').type('senhaSegura123@').blur()
    cy.get('input#confirmPassword').type('senhaSegura123@')
    cy.get('input#dataNascimento').type('2000-01-01')
    cy.get('input#cpf').type('10787886939')
    cy.get('select#sexo').select('Feminino')
    cy.get('select#graduacaoId').select('faixa branca')
    cy.get('select#academiaId').select('Team Medeiros')
    cy.get('select#professorId').select('medeiros')
    cy.get('select#esporteId').select('jiu-jitsu')
    cy.get('input#peso').type('70')
    cy.get('button[type="submit"]').click();
    cy.contains('Atleta cadastrado com sucesso!')
    cy.url().should('include', '/login')
   
  })
})
