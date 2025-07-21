import formValidationHomeObjects from "../objects/formValidationHomeObjects.cy";

const formValidationHome = new formValidationHomeObjects()

const nameTestCases= [
        //  {input: '  ',expectedError:'Name is required'}
         {input: '123456', expectedError: 'Name cannot contain emojis or special characters' },
         {input: '@username',expectedError:'Name can only contain letters, spaces, and dots'},
         {input: 'John_Doe',expectedError:'Name can only contain letters, spaces, and dots'},
         {input: 'A',expectedError:'Name must be at least 2 characters'},
         {input: 'John Doe 123',expectedError:'Name cannot contain emojis or special characters'},
         {input: '"John Doe"',expectedError:'Name cannot contain quotes'},
        //  {input: '** (spaces only) **',expectedError:'Name cannot contain emojis or special characters'},
         {input: 'John!@#Doe',expectedError:'Name cannot contain emojis or special characters'},
         {input: 'John@Doe.com',expectedError:'Name can only contain letters, spaces, and dots'},
         {input: '123 Main Street',expectedError:'Name cannot contain emojis or special characters'},
         {input: 'Jane-Doe-',expectedError:'Name can only contain letters, spaces, and dots'},
         {input: 'Mr. & Mrs. Smith',expectedError:'Name can only contain letters, spaces, and dots'},
         {input: 'O’Connor!',expectedError:'Name can only contain letters, spaces, and dots'},
        //  {input: 'John Doe',expectedError:''},
         {input: '👨‍💻🚀🎉',expectedError:'Name cannot contain emojis or special characters'},
        //  {input: "\nJohn Doe",expectedError:'Name can only contain letters, spaces, and dots'},
         {input: 'Doe, John',expectedError:'Name can only contain letters, spaces, and dots'},
        //  {input: "John\tDoe",expectedError:'Name can only contain letters, spaces, and dots'},
         {input: 'Doe-John!',expectedError:'Name can only contain letters, spaces, and dots'},
         {input: '__________',expectedError:'Name can only contain letters, spaces, and dots'},
         {input: '(John Doe)',expectedError:'Name can only contain letters, spaces, and dots'}
          // {input: '',expectedError:''}
    ];

describe('Name Field Validation', () => {
  nameTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://macdosoft.com/')

    formValidationHome.submitForm(testCase)

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError)
      } 
      else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});




// For Email Validation
  const emailTestCases= [
  { input: 'plainaddress', expectedError: 'Please enter a valid email address' },
  { input: '@missinglocal.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain..com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain,com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain@another.com', expectedError: 'Email cannot contain multiple @ symbols' },
  { input: 'username@domain.c', expectedError: 'Please enter a valid email address'},
  { input: '.username@email.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@-domain.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain-.com', expectedError: 'Please enter a valid email address' },
  { input: 'username@domain..co.uk', expectedError: 'Please enter a valid email address' },
  { input: '"username"@domain.com', expectedError: 'Please enter a valid email address' },
  { input: 'user@name@domain.com', expectedError: 'Email cannot contain multiple @ symbols' },
  { input: 'username@.sub.domain.com', expectedError: 'Please enter a valid email address'},
  { input: 'user..name@domain.com', expectedError: 'Please enter a valid email address' },
  { input: 'user_name@domain..com', expectedError: 'Please enter a valid email address' },
  { input: 'user@domain#$.com', expectedError: 'Please enter a valid email address' },
  { input: 'user@[192.168.1.1]', expectedError: 'Please enter a valid email address' }

    ];

describe('Email Field Validation', () => {
  emailTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://macdosoft.com/')

    formValidationHome.emailField(testCase)

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError)
      } 
      else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});
