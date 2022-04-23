describe('Accepted Challenges Page flow', () => {

     it('should display a header and form', () => {
         cy.visit('http://localhost:3000/')
          .get('.form').get('.catagory').select('music')
          .get('.submit').click()
          .get('.primaryCard').get('.addChallenge').click()
          .get('.accepted-challenges').click()
          .get('.remove-idea-btn').should('exist')
          .get('.complete-idea-btn').should('exist')
     })

     it('should be able to complete an idea', () => {
           cy.visit('http://localhost:3000/')
          .get('.form').get('.catagory').select('music')
          .get('.submit').click()
          .get('.primaryCard').get('.addChallenge').click()
          .get('.accepted-challenges').click()
          .get('.remove-idea-btn').click()
          .get('.card').should('not.exist')
          .get('.completed-challenges').click()
          .get('.card').should('not.exist')
     })

     it('should be able to complete an idea', () => {
           cy.visit('http://localhost:3000/')
          .get('.form').get('.catagory').select('music')
          .get('.submit').click()
          .get('.primaryCard').get('.addChallenge').click()
          .get('.accepted-challenges').click()
          .get('.complete-idea-btn').click()
          .get('.card').should('not.exist')
          .get('.completed-challenges').click()
          .get('.card').should('exist')
     })

     it('should be able to click on the logo to go home', () => {
          cy.visit('http://localhost:3000/completedIdeas')
          .get('.logo').click()
          .get('.form').should('exist')
     })
     
})