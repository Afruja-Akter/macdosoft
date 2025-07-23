class formValidationAboutObjects{
    name=  "//input[@id='fullName']"
    email="#companyEmail"
    cName= "#companyName"
    phone= "#companyPhone"
    description= "#projectDetails"
    submit = "button[type='submit']"

    clickAbout(){
        cy.contains('About Us').click()
        cy.wait(1000)
    }

    formValidName(testCase){
        cy.xpath(this.name).type(testCase.input)
        // cy.xpath(this.name).click(
            
        // )
        // cy.get(this.email).type("afruja.cse20@gmail.com")
        // cy.get(this.cName).type('TestCompany')
        // cy.get(this.description).type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get(this.submit).click()
    }


}
export default formValidationAboutObjects;