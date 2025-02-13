document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var projectDetails = document.getElementById('projectDetails').value;

    // Here you can add your form submission logic, such as making an API call to submit the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Project Details:', projectDetails);

    // For demonstration purposes, let's just clear the form
    document.getElementById('budgetForm').reset();
});