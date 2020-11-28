describe('Search Bar', () => {
  it('Searches for and narrows down the magazine articles', () => {
    cy.visit('http://localhost:3000')
   // store total number of cards in a variable
    let cardCount = 0;
    cy.get('div[cy-data="card"]').then(cards => {
      cardCount = cards.length;
    });
    // select search bar & type
    cy.get('div[cy-data="searchBar"]')
      .type('health');
     // store total number of cards that match search in new variable
    let resultCardCount = 0;
    cy.get('div[cy-data="card"]').then(cards => {
      resultCardCount = cards.length;
    })
    // expect old count > new count 
    .then(() => {
      expect(cardCount).to.be.greaterThan(resultCardCount);
    })
  })
})