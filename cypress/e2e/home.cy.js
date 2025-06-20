describe('Página Inicial', () => {
  it('Deve carregar as informações de um campeonato', () => {
    cy.visit('/')
    cy.contains('Bem-vindo ao Conecta Lutas')
    cy.get('div.champ-card__content').click()
    cy.contains('SOBRE O EVENTO')
  })

  it('Deve cadastrar e inscrever o atleta com sucesso', () => {
    const randomNumber = Date.now();
    const randomEmail = `testeCypress_${randomNumber}@gmail.com`;
    const randomName = `TESTE CYPRESS ATLETA ${randomNumber}`;

    cy.visit('/register')
    cy.contains('Cadastro de Atleta')
    cy.get('input#name').type(randomName) 
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
    cy.contains('Login')
    cy.get('input#email').type(randomEmail)
    cy.get('input#password').type('senhaSegura123@')
    cy.get('button[type="submit"]').click().wait(10000);
  
    cy.contains('a', 'Início').click()
    cy.get('div.champ-card__content').click()
    cy.contains('button', 'Inscrever-se').click()
    cy.contains('Atleta inscrito com sucesso')
  })
})