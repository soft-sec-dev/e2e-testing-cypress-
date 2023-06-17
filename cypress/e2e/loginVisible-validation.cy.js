describe('Login Validation', () => {
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.contains('Login').click()
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
    })
    it('You must validate that the "login" button is visible', () => {
        cy.get('.oxd-button').click()
    })
  })