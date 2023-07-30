const btnSubmit = document.getElementById('btn-sunmit-form')
const success = document.querySelector('.success')

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {
        showSuccessMessage();
    }
});

function validateForm() {
    if (!firstname.value || !lastname.value || !age.value || !education.value || !desired_position.value) {
        alert('Будь ласка, заповніть всі поля');
        return false;
    }

    if (isNaN(age.value)) {
        alert('Будь ласка, введіть коректний вік');
        return false;
    }

    return true;
}

function showSuccessMessage() {
    const userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value,
        education: education.value,
        desired_position: desired_position.value
    }
    console.log(userData)
    const isConfirmed = confirm(`Ви впевнені, що хочете відправити дані з форми?\nІм'я: ${userData.firstname}\nПрізвище: ${userData.lastname}\nВік: ${userData.age}\nОсвіта: ${userData.education}\nБажана посада: ${userData.desired_position}`);

    if (isConfirmed) {
        window.location.assign("/success.html");
    }
}
