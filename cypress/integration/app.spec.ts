
describe('Navigation', () => {
  it('should visit index page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Orihon');
  });
});
