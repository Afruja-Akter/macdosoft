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
        cy.wait(1000)
    }


    ClickWebDevelopment(){
        cy.xpath("//div[contains(text(),'Web Development')]").scrollIntoView().click( { force: true })
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
    //Web Development end

    // Mobile App Development start
    HoverOverMobileAppDevelopment(){
         cy.contains('Mobile App Development')
           .trigger('mouseover', { force: true })
           .wait(2000)
    }

    ClickiOSDevelopment(){
        cy.contains('iOS Development').click( { force: true })
        cy.wait(1000)
    }

    ClickAndroidDevelopment(){
        cy.contains('Android Development').click( { force: true })
        cy.wait(1000)
    }

    ClickCrossPlatformDevelopment(){
        cy.contains('Cross-Platform Development').click( { force: true })
        cy.wait(1000)
    }
    
    ClickAppDesignPrototyping(){
        cy.contains('App Design & Prototyping').click( { force: true })
        cy.wait(1000)
    }
    ClickAppTestingQA(){
        cy.contains('App Testing & QA').click( { force: true })
        cy.wait(1000)
    }
    // Mobile App Development End
    
     // UI/UX Design start
    HoverOverUIUXDesign(){
         cy.contains('UI/UX Design')
           .trigger('mouseover', { force: true })
           .wait(2000)
    }
    ClickResearchDevelopment(){
        cy.contains('Research & Development').click( { force: true })
        cy.wait(1000)
    }
    ClickWireframingPrototyping(){
        cy.contains('Wireframing & Prototyping').click( { force: true })
        cy.wait(1000)
    }
    
    ClickUserTestingFeedback(){
        cy.contains('User Testing & Feedback').click( { force: true })
        cy.wait(1000)
    }
    ClickDesignSystems(){
        cy.contains('Design Systems').click( { force: true })
        cy.wait(1000)
    }
    // UI/UX Design End

    //Cloud Application Development Start
    HoverOverCloudApplicationDevelopment(){
         cy.contains('Cloud Application Development')
           .trigger('mouseover', { force: true })
           .wait(2000)
    }
    ClickCloudArchitectureDesign(){
        cy.contains('Cloud Architecture & Design').click( { force: true })
        cy.wait(1000)
    }
    
    ClickCloudAppIntegration(){
        cy.contains('Cloud App Integration').click( { force: true })
        cy.wait(1000)
    }

     ClickCloudMigrationServices(){
        cy.contains('Cloud Migration Services').click( { force: true })
        cy.wait(1000)
    }
    
    ClickMicroservicesArchitecture(){
        cy.contains('Microservices Architecture').click( { force: true })
        cy.wait(1000)
    }

    ClickDevOpsContinuousIntegration(){
        cy.contains('DevOps & Continuous Integration').click( { force: true })
        cy.wait(1000)
    }
    //Cloud Application Development End

    // DevOps Services Start
    HoverOverDevOpsServices(){
        cy.contains('DevOps Services')
          .trigger('mouseover', { force: true })
          .wait(2000)
    }

    ClickCICDPipelineImplementation(){
        cy.contains('CI/CD Pipeline Implementation').click( { force: true })
        cy.wait(1000)
    }
    
    ClickInfrastructureCode(){
        cy.contains('Infrastructure as Code').click( { force: true })
        cy.wait(1000)
    }
    
    ClickContainerization(){
        cy.contains('Containerization').click( { force: true })
        cy.wait(1000)
    }

    ClickCloudAutomation(){
        cy.contains('Cloud Automation').click( { force: true })
        cy.wait(1000)
    }
    
    ClickMonitoringLogging(){
        cy.contains('Monitoring & Logging').click( { force: true })
        cy.wait(1000)
    }
    // DevOps Services End
    
    //Consulting Services Start
    HoverOverConsultingServicesServices(){
        cy.contains('Consulting Services')
          .trigger('mouseover', { force: true })
          .wait(2000)
    }
    ClickSoftwareConsulting(){
        cy.contains('Software Consulting').click( { force: true })
        cy.wait(1000)
    }

    ClickTechnologyConsulting(){
        cy.contains('Technology Consulting').click( { force: true })
        cy.wait(1000)
    }
    
    ClickSystemIntegration(){
        cy.contains('System Integration').click( { force: true })
        cy.wait(1000)
    }

    ClickProjectManagement(){
        cy.contains('Project Management').click( { force: true })
        cy.wait(1000)
    }

    Click247Support(){
        cy.contains('24/7 Support').click( { force: true })
        cy.wait(1000)
    }
    
    ClickOngoingMaintenance(){
        cy.contains('Ongoing Maintenance').click( { force: true })
        cy.wait(1000)
    }

    ClickPerformanceMonitoring(){
        cy.contains('Performance Monitoring').click( { force: true })
        cy.wait(1000)
    }
    //Consulting Services End
    
}
//Click(){}
/*ClickCustomSoftwareSolutions(){
        cy.contains('').click( { force: true })
    }*/