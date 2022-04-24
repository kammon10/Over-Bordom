describe('Main Page flow', () => {

     let interceptData;

     beforeEach(() => {
          interceptData = {
               "activity":"Pot some plants and put them around your house",
             "type":"relaxation",
             "participants":1,
             "price":0.4,
             "link":"",
             "key":"6613330",
             "accessibility":0.3}  
          })

     it('should display a header and form', () => {
          cy.visit('http://localhost:3000/')
          cy.intercept('GET', 'http://https://www.boredapi.com/api/activity/', interceptData).as('activity')
          .get('.header').contains('logo')
          .get('.form').contains('Choose your catagory!')
     })

     it('a user should be able to select and submit a catagory and card should pop up with an idea', () => {
          cy.visit('http://localhost:3000/')
          cy.intercept('GET', 'http://https://www.boredapi.com/api/activity/', interceptData).as('activity')
          .get('.catagory').select('all')
          .get('.submit').click()
          .get('.primaryCard').should('be.visible')
     })

     it('should only allow a user to select the challange once', () => {
          cy.visit('http://localhost:3000/')
          cy.intercept('GET', 'http://https://www.boredapi.com/api/activity/', interceptData).as('activity')
          .get('.catagory').select('all')
          .get('.submit').click()
          .get('.primaryCard').get('.addChallenge').click()
          .get('.primaryCard').get('.addChallenge').should('not.exist')
     })

     it('A user should be able to click on the Accepted Challenges button to see accepted challenges cards', () => {
          cy.visit('http://localhost:3000/')
          cy.intercept('GET', 'http://https://www.boredapi.com/api/activity/', interceptData).as('activity')
          .get('.form').get('.catagory').select('all')
          .get('.submit').click()
          .get('.primaryCard').get('.addChallenge').click()
          .get('.accepted-challenges').click()
          .get('.card').should('exist')
     })

     it('A user should be able to choose another challange', () => {
            cy.intercept('GET', 'http://https://www.boredapi.com/api/activity/', interceptData).as('activity')
           cy.visit('http://localhost:3000/')
          .get('.form').get('.catagory').select('all')
          .get('.submit').click()
          .get('.primaryCard').get('.newChallenge').click()
     })

     it('A user should be able to click on the Completed Challenges button to see all completed challenges', () => {
            cy.intercept('GET', 'http://https://www.boredapi.com/api/activity/', interceptData).as('activity')
           cy.visit('http://localhost:3000/')
           .get('.completed-challenges').click()
           .get('.cardbox-header').contains('your Completed Challenges')
     })
})