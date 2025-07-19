describe ('Macdosoft About Us Page', () =>{
 
    const baseUrl='https://macdosoft.com/'
 
//     function scheduleCall() {
//     cy.contains('Home').click().wait(500)
//     cy.contains('Schedule a Call').
//     trigger('mouseover')
//   }
 
 
    it ('home test', () => {
 
        cy.visit(baseUrl)
        cy.wait(2000)

        cy.contains('About Us').click()
 
        // cy.get("").find('text-xl font-bold mb-3').click()
        // cy.contains('Home').click()
        cy.get("div[class='bg-white py-6 flex justify-center'] img[alt='Agile Methodology']").click({force: true})
        //   .trigger('mouseover', { force: true })
        //   .wait(2000)
        //   .trigger('mouseout', { force: true })
        cy.wait(500)
 
        // cy.get('.hero-buttons').find('.border_btn').click()
        cy.contains('Schedule a Call').click()
        cy.contains('About Us').click()
        cy.wait(500)
 
       
 
    })
 
 
})
 
 