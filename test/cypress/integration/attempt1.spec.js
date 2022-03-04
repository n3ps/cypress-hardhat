const addressPattern = /^0x[a-fA-F0-9]{40}$/i

describe('Attempt #1', () => {
  before(() => {
    cy.login()
  })

  it('able to request account', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="btn"]').click()

    cy.get('[data-testid="result"]').contains(addressPattern)
  })
})
