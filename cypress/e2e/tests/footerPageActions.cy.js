import footerPageObjects from "../objects/footerPageObjects.cy"


const footer = new footerPageObjects()

describe('Macdosoft Footer Section', () =>{
    it('Footer Section Visit', () =>{

        cy.visit('https://macdosoft.com/')
        cy.wait(1000)


        const footerMethods = [
            'clickCustomSoftwareSolutions',
            'clickWebDevelopment',
            'clickSoftwareTestingQA',
            'clickMachineLearningSolutions',
            'clickAIChatbots',
            'clickPredictiveAnalytics',
            'clickFrontendBackendDevelopment',
            'clickFullStackCMSSolutions',
            'clickEcommerceDevelopment',
            'clickProgressiveWebApps',
            'clickUIUX',
            'clickWireframingPrototyping',
            'clickUserTestingFeedback',
            'clickDesignSystems',
            'clickSoftwareConsulting',
            'clickTechnologyConsulting',
            'clickSystemIntegration',
            'clickProjectManagement',
            'clickCustomCRMSolutions',
            'clickCRMIntegration',
            'clickCRMSystemCustomization',
            'clickiOSAndroidDevelopment',
            'clickCrossPlatform',
            'clickAppDesignPrototyping',
            'clickCloudArchitectureDesign',
            'clickCloudAppIntegration',
            'clickCloudMigrationServices',
            'clickMicroservicesArchitecture',
            'clickCICDPipelineImplementation',
            'clickInfrastructureCode',
            'clickContainerization',
            'clickCloudAutomation',
            'click247Support',
            'clickOngoingMaintenance',
            'clickPerformanceMonitoring'
        ]

        footerMethods.forEach(method => {
            footer[method]()
            footer.clickHome()
        })

        footer.clickWhatWeDo()
        footer.clickTechnology()
        footer.clickTalkToUs()
        footer.clickPrivacyPolicy()
        footer.clickTermsConditions()
        footer.clickCookiePolicy()
        footer.clickSitemap()
        // footer.clickHome()



        // footer.
        // footer.clickHome()

        
    })

})