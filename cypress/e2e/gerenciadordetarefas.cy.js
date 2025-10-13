describe('Gerenciador de Tarefas', () => {
  it('Adiciona uma nova tarefa', () => {
    cy.visit('http://127.0.0.1:5500/lista-de-tarefas/index.html'); // Substitua pela URL da aplicação

    cy.get('#nome-tarefa').type('Aprender Cypress');
    cy.get('#btn-tarefa').click();
    //cy.get('#btn-tarefa', { timeout: 8000 }).click();
    cy.get('.tabela').should('contain', 'Aprender Cypress');
  });
});

