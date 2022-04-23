describe('Completed Page flow', () => {

     it('should display a header and card', () => {
         cy.visit('http://localhost:3000/')
          .get('.form').get('.catagory').select('music')
          .get('.submit').click()
          .get('.primaryCard').get('.addChallenge').click()
          .get('.accepted-challenges').click()
          .get('.complete-idea-btn').click()
          .get('.completed-challenges').click()
          .get('.cardbox-header').contains('your Completed Challenges')
          .get('.card').should('exist')
     })

     it('should not have buttons on the card', () => {
           cy.visit('http://localhost:3000/')
          .get('.form').get('.catagory').select('music')
          .get('.submit').click()
          .get('.primaryCard').get('.addChallenge').click()
          .get('.accepted-challenges').click()
          .get('.complete-idea-btn').click()
          .get('.completed-challenges').click()
          .get('.remove-idea-btn').should('not.exist')
          .get('.complete-idea-btn').should('not.exist')
     })

     it('should be able to click on the logo to go home', () => {
          cy.visit('http://localhost:3000/completedIdeas')
          .get('.logo').click()
          .get('.form').should('exist')
     })
     
})