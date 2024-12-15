// we will go three stpes:  1.element    2.event    3.action

// ? =============> Global ===============>
const inputs = document.querySelectorAll('input');
const btnRegister = document.getElementById('btnRegister');
// ! =============> When Start ===============>
console.log('btnRegister', btnRegister);

// * =============> Events ===============>
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('hello');


})


// ! =============> Functions ===============>
function setForm() {
    const user = {
        "first_name": inputs[0],
        "last_name": inputs[1],
        "email": inputs[2],
        "password":  inputs[3],
        "age":  inputs[4]
    }
    console.log('user', user);
    
}

setForm();

 
// "first_name": "test1",
//         "last_name": "testlast1",
//         "email": "ahmed@ahmed123.com",
//         "password": "Ahmed@123",
//         "age": 40
//  =============> Validation ===============>

