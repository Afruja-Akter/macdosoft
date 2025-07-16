import serviceObjects from "../objects/serviceObjects.cy"

 const service = new serviceObjects()

describe('Macdosoft Service Page', () => {

  const baseUrl = 'https://macdosoft.com/'

    // 1) Custom Software Development submenu actions
  const customSoftwareActions = [
    'ClickCustomSoftwareSolutions',
    'ClickWebDevelopment',
    'ClickSoftwareTesting',
    'ClickMachineLearning',
    'ClickAIChatbots',
    'ClickPredictiveAnalytics',
    'ClickCRMDevelopment',
    'ClickCRMIntegration',
    'ClickCRMSystemCustomization'
  ]

   // define the sequence of submenu actions
  const webDevActions = [
    'ClickFrontendDevelopment',
    'ClickBackendDevelopment',
    'ClickEcommerceDevelopment',
    'ClickWebAppTestingQA',
    'ClickCMSDevelopment',
    'ClickWebHostingMaintenance',
    'ClickProgressiveWebApps',
    'ClickFullStackDevelopment'
  ]

  it('Service test', () => {

    cy.visit(baseUrl)
    cy.wait(1000)

    // service.HoverOverServices()
    // service.HoverOverCustomSoftwareDevelopment()
    // service.ClickCustomSoftwareSolutions()
    // service.ClickWebDevelopment()
    // service.ClickSoftwareTesting()
    // service.ClickMachineLearning()
    // service.ClickAIChatbots()
    // service.ClickPredictiveAnalytics()
    // service.ClickCRMDevelopment()
    // service.ClickCRMSystemCustomization()


    // Loop through Custom Software Development items
    customSoftwareActions.forEach(action => {
      service.HoverOverServices()
      service.HoverOverCustomSoftwareDevelopment()
      service[action]()
    })

    
    webDevActions.forEach(action => {
      service.HoverOverServices()
      service.HoverOverWebDevelopment()
      service[action]()

    })

   
    



    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickFrontendDevelopment()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickBackendDevelopment()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickEcommerceDevelopment()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickWebAppTestingQA()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickCMSDevelopment()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickWebHostingMaintenance()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickProgressiveWebApps()
    // service.HoverOverServices()
    // service.HoverOverWebDevelopment()
    // service.ClickFullStackDevelopment()
    
    
      cy.contains('E-commerce Development').click( { force: true })
  })

})