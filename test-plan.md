# Test Plan – UI E2E Test: Forum Registration with Public Email

## Objective

Verify that the Veeam R&D Forum registration form does not allow registration using public email domains such as Gmail.

## Test Scenario

The test covers the registration flow for a new user on the Veeam R&D Forum, attempting to register with a Gmail address. The system is expected to display an error message indicating that public email domains are not allowed.

## Test Steps

1. Navigate to https://www.veeam.com
2. Open the "Support" menu
3. Click on "R&D Forums"
4. Click the "Register" link on the forum page
5. Accept the forum terms and conditions
6. Fill in the registration form:
    - Username: InterviewUser
    - Password: InreviewUser
    - Email: inreviewuser@gmail.com
7. Submit the form

## Expected Result

The registration should fail, and an error message stating that public email domains are not allowed should be displayed on the screen.

## Tools and Environment

-   Framework: Playwright
-   Language: TypeScript
-   Browser: Chrom (default via Playwright test runner)
-   Platform: Cross-platform (runs locally or in CI/CD)

## Notes

-   This test validates frontend error handling for disallowed email domains during user registration.
-   The exact text expected in the error message is: "Public email are not allowed".
