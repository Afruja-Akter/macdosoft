class formValidationHomeObjects{

    name="input[placeholder='Your name']"
    email="input[placeholder='your.email@example.com']"
    description="textarea[placeholder='Tell us about your project or question']"
    submit = "button[type='submit']"


    submitForm(testCase){
        cy.get(this.name).type(testCase.input)
        cy.get(this.email).type("afruja.cse20@gmail.com")
        cy.get(this.description).type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get(this.submit).click()
    }

    emailField(testCase){
        cy.get(this.name).type("Test Nmae")
        cy.get(this.email).type(testCase.input)
        cy.get(this.description).type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get(this.submit).click()
    }

    // descriptionFeild(testcase){
    //     cy.get(this.nmae).type("Test Nmae")
    //     cy.get(this.email).type(test@gmail.com)
    //     cy.get(this.description).type(testCase.input)
    //     cy.get(this.submit).click()
    // }


}
export default formValidationHomeObjects;