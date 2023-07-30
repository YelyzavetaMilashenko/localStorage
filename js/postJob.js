const company = document.querySelector('#company');
const about = document.querySelector('#about');
const vacancy = document.querySelector('#vacancy');
const salary = document.querySelector('#salary');
const vacancyBox = document.querySelector('.vacancyBox');
const form2 = document.getElementById('form-post');
const btn = document.getElementById('btn-puplic-job')


class Vacancy {
    constructor(company, about, vacancy, salary) {
        this.company = company;
        this.about = about;
        this.vacancy = vacancy;
        this.salary = salary;
    }
}

const jobForm = document.getElementById('form-post');

jobForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm1()) {
        showSuccessMessage1();

    }
});

function validateForm1() {
    if (!company.value || !about.value || !vacancy.value || !salary.value) {
        alert('Будь ласка, заповніть всі поля');
        return false;
    }

    if (isNaN(salary.value)) {
        alert('Будь ласка, введіть коректний вік');
        return false;
    }

    return true;
}

function showSuccessMessage1() {
    const userData = {
        company: company.value,
        position: vacancy.value,
        description: about.value,
        salary: salary.value
    }
    // return (userData)
    const isConfirmed = confirm(`Ви впевнені, що хочете відправити дані з форми?\nCompany: ${userData.company}`);

    if (isConfirmed) {
        window.location.assign("/success.html");
    }

}



