import allOthersPageObjects from "../objects/allOthersPageObjects.cy"

const allOthersPage = new allOthersPageObjects()

describe('Macdosoft Home Page', () => {

  const baseUrl = 'https://macdosoft.com/'

  it('header test', () => {

    cy.visit(baseUrl)
    cy.wait(2000)

    // Technology Page
    allOthersPage.clickTechnologies()
    allOthersPage.clickTechCenter()
    allOthersPage.clickAboutUs()
    allOthersPage.clickContactUs()


  })

})