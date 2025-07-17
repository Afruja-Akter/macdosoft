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

  // Mobile App Development submenu actions
  const mobileAppActions = [
    'ClickiOSDevelopment',
    'ClickAndroidDevelopment',
    'ClickCrossPlatformDevelopment',
    'ClickAppDesignPrototyping',
    'ClickAppTestingQA'
  ]

  // UI/UX Design submenu actions
  const uiuxDesignActions = [
    'ClickResearchDevelopment',
    'ClickWireframingPrototyping',
    'ClickUserTestingFeedback',
    'ClickDesignSystems'
  ]

  // Cloud Application Development submenu actions
  const cloudAppActions = [
    'ClickCloudArchitectureDesign',
    'ClickCloudAppIntegration',
    'ClickCloudMigrationServices',
    'ClickMicroservicesArchitecture',
    'ClickDevOpsContinuousIntegration'
  ]

  // DevOps Services submenu actions
  const devOpsActions = [
    'ClickCICDPipelineImplementation',
    'ClickInfrastructureCode',
    'ClickContainerization',
    'ClickCloudAutomation',
    'ClickMonitoringLogging'
  ]

  // Consulting Services submenu actions
  const consultingServicesActions = [
    'ClickSoftwareConsulting',
    'ClickTechnologyConsulting',
    'ClickSystemIntegration',
    'ClickProjectManagement',
    'Click247Support',
    'ClickOngoingMaintenance',
    'ClickPerformanceMonitoring'
  ]

  it('Service test', () => {

    cy.visit(baseUrl)
    cy.wait(1000)


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

     mobileAppActions.forEach(action => {
      service.HoverOverServices()
      service.HoverOverMobileAppDevelopment()
      service[action]()
    })

    // Loop through UI/UX Design items
    uiuxDesignActions.forEach(action => {
      service.HoverOverServices()
      service.HoverOverUIUXDesign()
      service[action]()
    })

    // Loop through Cloud Application Development items
    cloudAppActions.forEach(action => {
      service.HoverOverServices()
      service.HoverOverCloudApplicationDevelopment()
      service[action]()
    })

    // Loop through DevOps Services items
    devOpsActions.forEach(action => {
      service.HoverOverServices()
      service.HoverOverDevOpsServices()
      service[action]()
    })

    // Loop through Consulting Services items
    consultingServicesActions.forEach(action => {
      service.HoverOverServices()
      service.HoverOverConsultingServicesServices()
      service[action]()
    })


  //  service.HoverOverServices()
  //  service.HoverOverConsultingServicesServices()
  //  service.ClickSoftwareConsulting()
  //  service.ClickTechnologyConsulting()
  //  service.ClickSystemIntegration()
  //  service.ClickProjectManagement()
  //  service.Click247Support()
  //  service.ClickOngoingMaintenance()
  //  service.ClickPerformanceMonitoring()

  //  service.HoverOverDevOpsServices()
  //  service.ClickCICDPipelineImplementation()
  //  service.ClickInfrastructureCode()
  //  service.ClickContainerization()
  //  service.ClickCloudAutomation()
  //  service.ClickMonitoringLogging()

  //  service.HoverOverCloudApplicationDevelopment()
  //  service.ClickCloudArchitectureDesign()
  //  service.ClickCloudAppIntegration()
  //  service.ClickCloudMigrationServices()
  //  service.ClickMicroservicesArchitecture()
  //  service.ClickDevOpsContinuousIntegration()


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

    // service.HoverOverServices()
    // service.HoverOverMobileAppDevelopment()
    // service.ClickiOSDevelopment()
    // service.ClickAndroidDevelopment()
    // service.ClickCrossPlatformDevelopment()
    // service.ClickAppDesignPrototyping()
    // service.ClickAppTestingQA()

    // service.HoverOverServices()
    // service.HoverOverUIUXDesign()
    // service.ClickResearchDevelopment()
    // service.ClickWireframingPrototyping()
    // service.ClickUserTestingFeedback()
    // service.ClickDesignSystems()
    
    
  })

})
