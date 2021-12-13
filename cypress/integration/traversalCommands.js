describe('Traversal Commands', function() {



    it('Gets, types and assert', function () {
        cy.visit('https://example.cypress.io')


        cy.contains('children').click()

        cy.url().should('include', '/commands/traversal')

    })

    it('Gets a children of DOM elements', function() {
        cy.get('.traversal-breadcrumb')
          .children('.active')
          .should('contain', 'Data')
          .wait(2000)
    })


    it('Gets the closest ancestor DOM element', function() {

        cy.get('.traversal-badge')
        .closest('ul')
        .should('have.class', 'list-group')

    })


    it('Gets a DOM element at a specific index', function(){
        cy.get('.traversal-list>li')
          .eq(1).should('contain', 'siamese')
    })


    it('Gets a DOM element that match a specific selector', function() {
        cy.get('.traversal-nav>li ')
        .filter('.active').should('contain', 'About')
        
    })




















})
