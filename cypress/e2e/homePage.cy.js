describe ('Macdosoft Home Page', () =>{
 
    const baseUrl='https://macdosoft.com/'
 
    function scheduleCall() {
    cy.contains('Home').click().wait(500)
    cy.contains('Schedule a Call').
    trigger('mouseover')
  }
 
 
    it ('home test', () => {
 
        cy.visit(baseUrl)
        cy.wait(2000)
 
        cy.get('.hero-content').find('.btn_primary').click()
        cy.contains('Home').click()
        cy.wait(500)
 
        cy.get('.hero-buttons').find('.border_btn').click()
        cy.contains('Home').click()
        cy.wait(500)
 
        /*cy.get('[class="relative h-80 rounded-3xl overflow-hidden transition-all duration-300"]').eq(0).trigger('mouseover')
        //cy.contains('Home').click()
        //cy.wait(1000)
        cy.get('[class="relative h-80 rounded-3xl overflow-hidden transition-all duration-300"]').eq(1).trigger('mouseover')
        cy.get('[class="relative h-80 rounded-3xl overflow-hidden transition-all duration-300"]').eq(2).trigger('mouseover')
        cy.get('[class="relative h-80 rounded-3xl overflow-hidden transition-all duration-300"]').eq(3).trigger('mouseover')
 
 
        //cy.get('')*/
        for (let i = 0; i < 4; i++) {
      cy.get('[class="relative h-80 rounded-3xl overflow-hidden transition-all duration-300"]').eq(i)
        .trigger('mouseover')
        .wait(500)
        .trigger('mouseout') // removes hover
    }
 
        for (let i = 0; i < 4; i++) {
      cy.get('.relative.rounded-3xl.overflow-hidden.shadow-lg.h-80.md\\:h-80.flex.flex-col.items-center.justify-center.bg-white.transition-all.duration-300')
        .find('.relative.rounded-2xl.overflow-hidden')
        .eq(i)
        .trigger('mouseover', { force: true })
        .wait(500)
        .trigger('mouseout', { force: true })
    }
 
       cy.get('[class="flex items-center w-full justify-center lg:w-auto mt-8 lg:mt-12"]').find('[class="nav_btn"]').click().wait(500)
       cy.contains('Home').click()
 
       cy.get('[class="features-section-button-container"]').find('[class="btn_primary"]').click().wait(500)
       cy.contains('Home').click()
 
       cy.get('[class="features-section-button-container"]').find('[class="border_btn"]').click().wait(500)
       cy.contains('Home').click()
 
       cy.get('[class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-teal-600"]').find('[class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"]').click().wait(500)
       //cy.contains('Home').click()
       cy.get('[class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-300"]').find('[class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"]').click().wait(500)
 
       cy.get('[class="flex flex-col md:flex-row justify-center gap-4 items-center"]').find('[class="bg-secndaryPrimary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transition duration-300"]').click().wait(500)
       cy.contains('Home').click()
 
       cy.get('[class="features-section-button-container"]').find('[class="btn_primary"]').click().wait(500)
       scheduleCall()
 
       //cy.reload()
       /*cy.get('[[class="features-section-button-container"]').find('[class="btn_primary"]')
        .scrollIntoView({ block: 'center' })
        .should('be.visible');*/
 
       
 
    })
 
 
})
 
 