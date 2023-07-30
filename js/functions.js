// Вимоги:
// 1.Додати функцію, яка перевіряє наявність доступу до мережі.
// 2.Якщо функція повертає false - дані читаються та записуються в localStorage. 
//   Наприклад, нові дані користувача будуть спочатку записуватись в localStorage, а вже потім, 
//   при наявності мережі (інтернету) додаватись на сторінку. 
//   При першому відкриванні сторінки має перевірятись наявність даних в localStorageта виконуватися промальовування їх на сторінці.
// 3.Якщо функція повертає  true, то дані мають відправлятись на сервер і читатись з сервера. 
//   В цьому випадку дозволяється додати функцію, яка емулюватиме відправку даних на сервер та читання з сервера.
// 4.При відкриванні сторінки має реєструватись Event Listener, що слухатиме зміну статуса мережі. Якщо користувач виходить онлайн, то на зміну статуса має спрацювати функція, що витягне дані з LocalStorage та опублікує на сторінці.
// 5.Після публікації даних на сторінці вони видаляються із LocalStorage.

// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname');
// const age = document.getElementById('age');
// const education = document.getElementById('education');
// const desired_position = document.getElementById('desired_position');

// class Database {
//     constructor(firstname, lastname, age, education, desired_position) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.education = education;
//         this.desired_position = desired_position;
//     }
// }
// const userInfo = new Database(firstname.value, lastname.value, age.value, education.value, desired_position.value);


// function isOnline() {
//     // return navigator.onLine
//     return false
// }


// function setLocalStorage() {
//     localStorage.setItem('userInfo', JSON.stringify(userInfo));
// }


// function getLocalStorage() {
//     const data = JSON.parse(localStorage.getItem('userInfo'));
//     if (data) {
//       publishData(data);
//     }
// }


// function emulateServerRequest(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(data);
//         }, 2000);
//     });
// }

// function publishData(data) {
//     // Оновлюємо значення полів форми зі значень userInfo
//     firstname.value = data.firstname;
//     lastname.value = data.lastname;
//     age.value = data.age;
//     education.value = data.education;
//     desired_position.value = data.desired_position;

//     // Видаляємо дані із LocalStorage після публікації у відповідні інпути
//     for (const key in data) {
//         if (Object.hasOwnProperty.call(data, key)) {
//             localStorage.removeItem(key);
//         }
//     }
// }

// function fetchDataFromServer() {
//     emulateServerRequest(userInfo)
//         .then(function (dataFromServer) {
//             // Оновлюємо дані з сервера
//             userInfo.firstname = dataFromServer.firstname;
//             userInfo.lastname = dataFromServer.lastname;
//             userInfo.age = dataFromServer.age;
//             userInfo.education = dataFromServer.education;
//             userInfo.desired_position = dataFromServer.desired_position;

//             // Зберігаємо дані в LocalStorage
//             setLocalStorage();

//             // Виводимо дані на сторінку
//             publishData(userInfo);
//         })
//         .catch(function (error) {
//             console.log('Помилка: ', error);
//         });
// }

// function handleNetworkChange() {
//     if (isOnline()) {
//         console.log('Користувач став онлайн.');
//         // Зчитуємо дані з LocalStorage та публікуємо на сторінці
//         getLocalStorage();
//     } else {
//         console.log('Користувач став офлайн.');
//     }
// }

// window.addEventListener('load', function () {
//     // При відкритті сторінки перевіряємо наявність даних в LocalStorage
//     getLocalStorage()

//     // Реєструємо Event Listener для слідкування за зміною статусу мережі
//     window.addEventListener('online', handleNetworkChange);
//     window.addEventListener('offline', handleNetworkChange);
// });

// ____________________________________________________________________________
// class Database {
//     constructor(firstname, lastname, age, education, desired_position) {
//       this.firstname = firstname;
//       this.lastname = lastname;
//       this.age = age;
//       this.education = education;
//       this.desired_position = desired_position;
//     }
//   }
  
//   const firstname = document.getElementById('firstname');
//   const lastname = document.getElementById('lastname');
//   const age = document.getElementById('age');
//   const education = document.getElementById('education');
//   const desired_position = document.getElementById('desired_position');
//   const submitBtn = document.getElementById('submitBtn');
  
//   function isOnline() {
//     // return navigator.onLine
//     return true;
//   }
  
//   function setLocalStorage(data) {
//     localStorage.setItem('userInfo', JSON.stringify(data));
//   }
  
//   function getLocalStorage() {
//     const data = JSON.parse(localStorage.getItem('userInfo'));
//     if (data) {
//       publishData(data);
//     }
//   }
  
//   function emulateServerRequest(data) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(data);
//       }, 2000);
//     });
//   }
  
//   function publishData(data) {
//     // Оновлюємо значення полів форми зі значень userInfo
//     firstname.value = data.firstname;
//     lastname.value = data.lastname;
//     age.value = data.age;
//     education.value = data.education;
//     desired_position.value = data.desired_position;
//   }
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     const userInfo = new Database(
//       firstname.value,
//       lastname.value,
//       age.value,
//       education.value,
//       desired_position.value
//     );
  
//     if (isOnline()) {
//       console.log('Користувач онлайн. Відправляємо дані на сервер.');
//       emulateServerRequest(userInfo)
//         .then(function (dataFromServer) {
//           // Оновлюємо дані з сервера
//           userInfo.firstname = dataFromServer.firstname;
//           userInfo.lastname = dataFromServer.lastname;
//           userInfo.age = dataFromServer.age;
//           userInfo.education = dataFromServer.education;
//           userInfo.desired_position = dataFromServer.desired_position;
  
//           // Зберігаємо дані в LocalStorage
//           setLocalStorage(userInfo);
  
//           // Виводимо дані на сторінку
//           publishData(userInfo);
//         })
//         .catch(function (error) {
//           console.log('Помилка: ', error);
//         });
//     } else {
//       console.log('Користувач офлайн. Зберігаємо дані в LocalStorage.');
//       // Зберігаємо дані в LocalStorage
//       setLocalStorage(userInfo);
  
//       // Виводимо дані на сторінку
//       publishData(userInfo);
//     }
//   }
  
//   window.addEventListener('load', function () {
//     // При відкритті сторінки перевіряємо наявність даних в LocalStorage
//     getLocalStorage();
  
//     // Реєструємо Event Listener для слідкув
//     window.addEventListener('online', handleNetworkChange);
//   window.addEventListener('offline', handleNetworkChange);

//   // Реєструємо Event Listener для обробки відправки форми
//   submitBtn.addEventListener('click', handleSubmit);
// });

