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

    cy.get('[class="grid gap-6 justify-center place-items-center [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]"]')
      .eq(0)
      .find('[class="relative rounded-3xl overflow-hidden shadow-lg h-84 md:h-96 flex flex-col items-center justify-center bg-white transition-all duration-300"]')
      .then(($elements) => {
        for (let i = 0; i < $elements.length; i++) {
            cy.wrap($elements[i])
              .scrollIntoView({ ensureScrollable: false })
              .wait(500)
              .trigger('mouseover', { force: true })
              .wait(1000)
              .trigger('mouseout', { force: true })
              .wait(500)
            }
        })

        cy.contains('Schedule a Call').click()
        cy.wait(1000)
        cy.contains('About Us').click()

        // cy.get('[class="grid gap-6 justify-center place-items-center [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]"]').eq(0).find('[class="relative rounded-3xl overflow-hidden shadow-lg h-84 md:h-96 flex flex-col items-center justify-center bg-white transition-all duration-300"]')
        // .eq(0)
        // .scrollTo('center', { ensureScrollable: false })
        // .wait(2000)
        // .trigger('mouseover', { force: true })
        // .wait(2000)
        // .trigger('mouseout', { force: true })

        //cy.scrollTo('bottom')
    }

    clickContactUs(){
        cy.contains('Contact Us').click()
        cy.wait(2000)
        cy.scrollTo('bottom')
    }


}
export default allOthersPageObjects;