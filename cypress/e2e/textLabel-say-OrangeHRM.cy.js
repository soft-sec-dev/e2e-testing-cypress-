describe('Label button validation', () => {
    it('You must validate that at the bottom there is a label with a text that says the version of the page "OrangeHRM ".', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('have.text', 'OrangeHRM OS 5.4')
      })
  })