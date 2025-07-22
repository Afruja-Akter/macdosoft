
import formValidationAboutObjects from "../objects/formValidationAboutObjects.cy"

const formValidationAbout = new formValidationAboutObjects()

const nameTestCases = [
    //  {input: '  ',expectedError:'Name is required'}
    { input: '123456', expectedError: 'Name cannot contain emojis or special characters' },
    { input: '@username', expectedError: 'Name can only contain letters, spaces, and dots' },
    { input: 'John_Doe', expectedError: 'Name can only contain letters, spaces, and dots' },
    { input: 'A', expectedError: 'Name must be at least 2 characters' },
    { input: 'John Doe 123', expectedError: 'Name cannot contain emojis or special characters' },
    { input: '"John Doe"', expectedError: 'Name cannot contain quotes' },
    //  {input: '** (spaces only) **',expectedError:'Name cannot contain emojis or special characters'},
    { input: 'John!@#Doe', expectedError: 'Name cannot contain emojis or special characters' },
    { input: 'John@Doe.com', expectedError: 'Name can only contain letters, spaces, and dots' },
    { input: '123 Main Street', expectedError: 'Name cannot contain emojis or special characters' },
    { input: 'Jane-Doe-', expectedError: 'Name can only contain letters, spaces, and dots' },
    { input: 'Mr. & Mrs. Smith', expectedError: 'Name can only contain letters, spaces, and dots' },
    { input: 'O’Connor!', expectedError: 'Name can only contain letters, spaces, and dots' },
    //  {input: 'John Doe',expectedError:''},
    { input: '👨‍💻🚀🎉', expectedError: 'Name cannot contain emojis or special characters' },
    //  {input: "\nJohn Doe",expectedError:'Name can only contain letters, spaces, and dots'},
    { input: 'Doe, John', expectedError: 'Name can only contain letters, spaces, and dots' },
    //  {input: "John\tDoe",expectedError:'Name can only contain letters, spaces, and dots'},
    { input: 'Doe-John!', expectedError: 'Name can only contain letters, spaces, and dots' },
    { input: '__________', expectedError: 'Name can only contain letters, spaces, and dots' },
    { input: '(John Doe)', expectedError: 'Name can only contain letters, spaces, and dots' }
    // {input: '',expectedError:''}
];


describe('Name field Validation', () => {
    nameTestCases.forEach((testCase, index) => {
        it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
            cy.visit('https://macdosoft.com/')

            formValidationAbout.formValidName()


            if (testCase.expectedError) {
                cy.contains(testCase.expectedError)
            }
            else {

                cy.contains('Failed to submit your quote request. Please try again.').should('be.visible');
            }
        })

    })

}) 
