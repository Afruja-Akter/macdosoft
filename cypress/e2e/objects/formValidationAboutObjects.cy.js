class formValidationAboutObjects{
    name=  "//input[@id='fullName']"
    email="#companyEmail"
    cName= "#companyName"
    phone= "#companyPhone"
    description= "#projectDetails"

    formValidName(testCase){
        // cy.get(this.name).type(testCase.input)
        cy.xpath(this.name).click()
        // cy.get(this.email).type("afruja.cse20@gmail.com")
        // cy.get(this.cName).type('TestCompany')
        // cy.get(this.description).type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // cy.get(this.submit).click()
    }


}
export default formValidationAboutObjects;