class headerObjects{

    //contact = "//a[contains(@class,'nav-link')][normalize-space()='Contact Us']"

    clickContact(){
        cy.contains('Contact Us').click()
        cy.wait(1000)
    }

    clickAbout(){
        cy.contains('About Us').click()
        cy.wait(1000)
    }

    clickTechCenter(){
        cy.contains('Tech Center').click()
        cy.wait(1000)
    }

    clickTechnologies(){
        cy.contains('Technologies').click()
        cy.wait(1000)
    }

    clickServices(){
        cy.contains('Services').click()
        cy.wait(1000)
    }

    clickHome(){
        cy.contains('Home').click()
        cy.wait(1000)

    }
}

export default headerObjects;