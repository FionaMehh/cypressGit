describe('My First Test', function() {
    //  it('Does not do much', function() {
    //     expect(true).to.equal(true)


it('Gets, types and assert', function () 

{

  
    cy.visit('https://example.cypress.io')

    //cy.pause()

    cy.contains('type').click()

    cy.url()
    .should('include', '/commands/actions')



    cy.get('.action-email', {timeout: 50000})
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
    .wait(2000)


    cy.get('.action-disabled')
      .type('disabled error checking',  { force: true })
      .should('have.value', 'disabled error checking')

})



it('Gets, focus, blur and clear', function () {

    cy.get('.action-focus').focus()  
      .should('have.class', 'focus' )
      .prev().should('have.attr', 'style', 'color: orange;') 

    

    cy.get('.action-blur').type('About to blur').blur()
      .should ('have.class', 'error')
      .prev().should('have.attr', 'style', 'color: red;')
    
    
    cy.get('.action-clear').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')


})

it('Submits a form', function () {
    cy.get('.action-form')
      .find('[type="text"]').type('HALFOFF')
    cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!')
      .wait(2000)

 })

 it('Double clicks and right clicks an element', function () {
   cy.get('.action-div').dblclick().should('not.be.visible')
   cy.get('.action-input-hidden').should('be.visible')
  })
    


   it('Checks a checkbox or a radio button', function() { 
     cy.get('.action-checkboxes [type ="checkbox"]').not('[disabled]')
       .check().should('be.checked')

     cy.get('.action-radios [type="radio"]').not('[disabled]')
       .check().should('be.checked')

     cy.get('.action-radios [type="radio"]')
       .check('radio1').should('be.checked')
      
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check(['checkbox1', 'checkbox2']).should('be.checked')

   })

   it('Selects an option from the dropdown menu', function(){
      cy.get('.action-select')
        .should('have.value', '--Select a fruit--')

      cy.get('.action-select').select('apples')
         .should('have.value', 'fr-apples')
      
      cy.get('.action-select-multiple')
        .select(['apples', 'oranges', 'bananas'])
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
        .wait(2000)

   })



it('Scrolls an element into view ', function() {



      cy.get('#scroll-horizontal button')
        .should('not.be.visible')

      cy.get('#scroll-horizontal button').scrollIntoView()
        .should('be.visible')

      cy.get('#scroll-vertical button')
        .should('not.be.visible')

      cy.get('#scroll-vertical button').scrollIntoView()
         .should('be.visible')
      
      cy.get('#scroll-both button')
         .should('not.be.visible')


      cy.get('#scroll-both button').scrollIntoView()
        .should('be.visible')


  })
      
      




   })







  
    

    


  //  cy.get('.action-div').rightclick().should('not.be.visible')
  //  cy.get('.action-input-hidden').should('be.visible')






 

 








