describe('Username visible', () => {
    it('Validate that the username field (txtUsername) is visible', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('[placeholder="Username"]')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('txtUsername')
    })
  })