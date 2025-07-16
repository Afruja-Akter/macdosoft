import headerObjects from "../objects/headerObjects.cy"

const header = new headerObjects()

describe('Macdosoft Home Page', () => {

  const baseUrl = 'https://macdosoft.com/'

  it('header test', () => {

    cy.visit(baseUrl)
    cy.wait(1000)

    header.clickContact()
    header.clickAbout()
    header.clickTechCenter()
    header.clickTechnologies()
    header.clickServices()
    header.clickHome()
    
  })

})
