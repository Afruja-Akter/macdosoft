class formValidationHomeObjects{

    nmae="input[placeholder='Your name']"
    email="input[placeholder='your.email@example.com']"
    description="textarea[placeholder='Tell us about your project or question']"
    submit = "button[type='submit']"


    submitForm(testCase){
        cy.get(this.nmae).type(testCase.input)
        cy.get(this.email).type("afruja.cse20@gmail.com")
        cy.get(this.description).type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get(this.submit).click()
    }

    emailField(testCase){
        cy.get(this.nmae).type("Test Nmae")
        cy.get(this.email).type(testCase.input)
        cy.get(this.description).type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get(this.submit).click()
    }





}
export default formValidationHomeObjects;