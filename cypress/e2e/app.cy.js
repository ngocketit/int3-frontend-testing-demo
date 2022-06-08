describe('App end-to-end testing', () => {
  it('search for a country', () => {
    cy.visit('localhost:3000')
    cy.get('input').type('Finland')
    cy.get('button[type="submit"]').click()
    cy.get('h5').should('have.text', 'Finland')
    cy.contains('button', 'View More').click()
    cy.url().should('include', '/countries/Finland')
  })

  it('should show error message', () => {
    cy.visit('localhost:3000')
    cy.get('button[type="submit"]').click()
    cy.contains('p', 'Keyword is required')
  })

  it('should show error when no countries are found', () => {
    cy.visit('localhost:3000')
    cy.get('input').type('Not-a-country-name')
    cy.get('button[type="submit"]').click()
    cy.contains('p', 'No countries found')
  })
})
