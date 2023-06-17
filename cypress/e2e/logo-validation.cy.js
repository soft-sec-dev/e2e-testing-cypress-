describe('Logo Validation', () => {
  it('Validate that the "Orange HRM" logo at the top is always visible.', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.orangehrm-login-branding > img')
  })
})