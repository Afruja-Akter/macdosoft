export default class serviceObjects{

    //Customer Software Development start
    HoverOverServices() {
        cy.get(".nav-link")
          .eq(1)
          .contains('Services')
          .trigger('mouseover', { force: true })
          .wait(1000);
    }


    HoverOverCustomSoftwareDevelopment() {
        cy.contains('Custom Software Development')
        .trigger('mouseover', { force: true })
        .wait(1000)
    }


    ClickCustomSoftwareSolutions() {
        cy.contains('Custom Software Solutions').click( { force: true })
    }


    ClickWebDevelopment(){
        cy.contains('Web Development').click( { force: true })
        cy.wait(1000)
    }


    ClickSoftwareTesting(){
        cy.contains('Software Testing & QA').click( { force: true })
        cy.wait(1000)
    }


    ClickMachineLearning(){
        cy.contains('Machine Learning Solutions').click( { force: true })
        cy.wait(1000)
    }



    ClickAIChatbots(){
        cy.contains('AI Chatbots').click( { force: true })
        cy.wait(1000)
    }


    ClickPredictiveAnalytics(){
        cy.contains('Predictive Analytics').click( { force: true })
        cy.wait(1000)
    }


    ClickCRMDevelopment(){
        cy.contains('Custom CRM Solutions').click( { force: true })
        cy.wait(1000)
    }

    ClickCRMIntegration(){
        cy.contains('CRM Integration').click( { force: true })
        cy.wait(1000)
    }

    ClickCRMSystemCustomization(){
        cy.contains('CRM System Customization').click( { force: true })
        cy.wait(1000)
    }
    //Customer Software Development end

    //Web Development start

    HoverOverWebDevelopment(){
         cy.contains('Web Development')
           .trigger('mouseover', { force: true })
           .wait(2000)
    }



    ClickFrontendDevelopment(){
        // cy.contains('Frontend Development').click( { force: true })
        cy.xpath("//div[normalize-space()='Frontend Development']").click( { force: true })
        cy.wait(1000)
    }


     ClickBackendDevelopment(){
        // cy.contains('Backend Development').click( { force: true })
        cy.xpath("//div[normalize-space()='Backend Development']").click( { force: true })
        cy.wait(2000)
    }


    ClickEcommerceDevelopment(){
        // cy.contains('E-commerce Development').click( { force: true })
        cy.xpath("//div[normalize-space()='E-commerce Development']").click( { force: true })
        cy.wait(2000)
    }

    ClickWebAppTestingQA(){
        cy.xpath("//div[normalize-space()='Web App Testing & QA']").click( { force: true })
        cy.wait(2000)
    }


    ClickWebHostingMaintenance(){
        cy.contains('Web Hosting & Maintenance').click( { force: true })
        cy.wait(1000)
    }
    
    ClickProgressiveWebApps(){
        cy.contains('Progressive Web Apps').click( { force: true })
        cy.wait(2000)
    }
    ClickFullStackDevelopment(){
        cy.contains('Full-Stack Development').click( { force: true })
        cy.wait(2000)
    }
    ClickCMSDevelopment(){
        cy.contains('CMS Development').click( { force: true })
        cy.wait(2000)
    }
    /*Click(){
        cy.contains('').click( { force: true })
    }
    Click(){
        cy.contains('').click( { force: true })
    }*/
    
}
//Click(){}
/*ClickCustomSoftwareSolutions(){
        cy.contains('').click( { force: true })
    }*/