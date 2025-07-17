class allOthersPageObjects{

    clickTechnologies(){
        cy.contains('Technologies').click()
        cy.wait(2000)
        cy.scrollTo('bottom')
    }

    clickTechCenter(){
        cy.contains('Tech Center').click()
        cy.wait(2000)
        cy.scrollTo('bottom')
    }

    clickAboutUs(){
        cy.contains('About Us').click()
        cy.wait(2000)
        cy.scrollTo('bottom')
    }

    clickContactUs(){
        cy.contains('Contact Us').click()
        cy.wait(2000)
        cy.scrollTo('bottom')
    }





}
export default allOthersPageObjects;