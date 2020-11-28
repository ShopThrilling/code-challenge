describe('Main Title Screen', () => {
  it('Displays the title correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('[cy-data="title"]')
      .invoke('text')
      .then(title => {
        expect(title).to.eq('Thrilling Times Magazine')
      })
  })
})