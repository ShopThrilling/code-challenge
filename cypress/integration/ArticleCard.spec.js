describe('Article Card', () => {
  it('Contains NY Times url', () => {
    cy.visit('http://localhost:3000')
    // Testing that all cards have a link to the NY Times
    cy.get('div[cy-data="card"]').find('a')
      .should('have.attr', 'href').and('include', 'https://www.nytimes.com/')
  })
})