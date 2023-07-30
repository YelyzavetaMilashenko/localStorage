const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const education = document.getElementById('education');
const desired_position = document.getElementById('desired_position');

class Database {
    constructor(firstname, lastname, age, education, desired_position) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.education = education;
        this.desired_position = desired_position;
    }
}

firstname.addEventListener('input', setLocalStorage);
lastname.addEventListener('input', setLocalStorage);
age.addEventListener('input', setLocalStorage);
education.addEventListener('input', setLocalStorage);
desired_position.addEventListener('input', setLocalStorage);


function createUserData() {
    const userData = new Database(
        firstname.value,
        lastname.value,
        age.value,
        education.value,
        desired_position.value
    );
    return userData;
}


function setLocalStorage() {
    const user = createUserData();

    localStorage.setItem('userInfo', JSON.stringify(user));
}

function getLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem('userInfo'));
    if (savedData) {
        firstname.value = savedData.firstname;
        lastname.value = savedData.lastname;
        age.value = savedData.age;
        education.value = savedData.education;
        desired_position.value = savedData.desired_position;
        localStorage.removeItem('userInfo');
    }
}
getLocalStorage();

