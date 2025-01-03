
const form = document.getElementById('quizForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();  //the form won't reload the page
    let errors = false;

    const errorElements = document.querySelectorAll('.error');
    for (let element of errorElements) {
    element.textContent = ''; //Clears the previous errors
}


    // Validate first name
    const firstName = document.getElementById('firstName').value;
    if (!/^[!/^[A-Za-zåäöÅÄÖ]+$/.test(firstName)) { //also swedish letters
        document.getElementById('firstNameError').textContent = 'First name must contain only letters.';
        errors = true;
    }


    // Validate last name
    const lastName = document.getElementById('lastName').value;
    if (!/^[!/^[A-Za-zåäöÅÄÖ]+$/.test(lastName)) { ////also swedish letters
        document.getElementById('lastNameError').textContent = 'Last name must contain only letters.';
        errors = true;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // @ required
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        errors = true;
    }



    // Validate required questions
    if (!document.querySelector('input[name="q1"]:checked')) {
        document.getElementById('question1Error').textContent = 'Please select an answer for question 1.';
        errors = true;
    }

    if (!document.querySelector('input[name="q4"]:checked')) {
        document.getElementById('question4Error').textContent = 'Please select an answer for question 4.';
        errors = true;
    }

  
   const question3answer = document.querySelector('input[name="q3"]').value;
   if (!question3answer) {
       document.getElementById('question3Error').textContent = 'Please provide an answer for question 3.';
       errors = true;
   }
   

 //Showing the green succesful text when there are no errors
    if (!errors) {
        document.getElementById('result').textContent = 'Quiz submitted successfully! Thank you for participating.';
    }
});