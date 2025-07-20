import formValidationHomeObjects from "../objects/formValidationHomeObjects.cy";

const formValidationHome = new formValidationHomeObjects()

const nameTestCases= [
        // {input:"12345",expectederror}
         { input: '123456', expectedError: 'Name cannot contain emojis or special characters' }
    ];

describe('Name Field Validation', () => {
  nameTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://macdosoft.com/')

    formValidationHome.submitForm(testCase)

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError)
      } else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});
