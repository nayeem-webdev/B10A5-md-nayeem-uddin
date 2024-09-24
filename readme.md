# Welcome to Assignment 5

## Design  <!--! ALL COVERED-->

- **Navbar**: Create a visually appealing navbar with the following structure:
  - Logo positioned in the middle. <!--* DONE-->
  - "Blog" button on the left. <!--* DONE-->
  - Account balance with a coin icon on the right. <!--* DONE-->
  - "Donation" and "History" buttons in the center (as per Figma). <!--* DONE-->

- **Donation Cards**: Create 3 donation cards with the following details:
  - Image on the left. <!--* DONE-->
  - Donation title. <!--* DONE-->
  - Donation info. <!--* DONE-->
  - Current donation amount. <!--* DONE-->
  - Input field for donation amount. <!--* DONE-->
  - Button for submitting the donation. <!--* DONE-->
- **History Section**: Initially hidden and empty. <!--* DONE-->

## Functionalities <!--! ALL COVERED-->

- **Donation and History Button Functionality**:
  - Clicking the "History" button will hide the donation data and display the history. <!--* DONE-->
  - Clicking the "Donation" button will hide the history and display the donation data. <!--* DONE-->

- **Donation Functionality for Each Card**:
  - When the "Donate Now" button is clicked:
    - The donation input will be deducted from the total account balance, and the updated balance will be shown. <!--* DONE-->
    - The card’s current donation amount will increase. <!--* DONE-->
    - A meaningful notification will be added to the History section. <!--* DONE-->

- **Input Validation**:
  - Show an alert if invalid data is found and stop the transaction. <!--* DONE-->
  - Validate the donation amount:
    - If the donation amount is greater than the account balance. <!--* DONE-->
    - If the input field contains an invalid number. <!--* DONE-->
    - If the input field is empty. <!--* DONE-->

- **History Section**:
  - The history section will display transaction notifications, including:
    - Date and time of the transaction. <!--* DONE-->
    - Donation amount. <!--* DONE-->
    - Donation name. <!--* DONE-->

## Challenges

- **Sticky Navbar**: Make the navbar sticky to the top of the page. <!--* DONE-->

- **Blog Page**: Create a `blog.html` file and link it to the main page: <!--* DONE-->
  - The blog page should contain 4 questions and their answers: 
    1. What is the Document Object Model (DOM)?  <!--* DONE-->
    2. How do you select an element from the DOM? <!--* DONE-->
    3. What is event delegation in the context of the DOM, and why is it useful? <!--* DONE-->
    4. How do you manipulate an element's attributes and styles using the DOM? <!--* DONE-->

- **Toggle Active Status**: Toggle the active status of the "Donation" and "History" buttons:
  - Change the button color to indicate when it's active. <!--* DONE-->

- **Static Modal**: Display a static modal instead of an alert on a successful donation.  <!--* DONE-->

- **Reusable Functions**: Use at least 2 common functions. <!--* DONE-->

- **Responsive Design**: Ensure the application is responsive for different screen sizes.  <!--* DONE-->
