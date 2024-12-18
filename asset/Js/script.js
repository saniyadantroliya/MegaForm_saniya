/* NAME VALIDATION */
var nameInput = document.getElementById('nameinput');
var nameSpan = document.getElementById('namespan');

/* EMAIL VALIDATION */
var emailInput = document.getElementById('emailinput');
var emailSpan = document.getElementById('emailspan');

/* PASSWORD VALIDATION */
var passwordInput = document.getElementById('passwordinput');
var passwordSpan = document.getElementById('passwordspan');

/* ADDRESS VALIDATION */
var addressInput = document.getElementById('addressinput');
var addressSpan = document.getElementById('addressspan');

/* CHECKBOX VALIDATION */

var sportInput = document.querySelectorAll('input[name="chk"]');
var sportSpan = document.getElementById('checkspan');

/* RADIO VALIDATION */
var genderInput = document.querySelectorAll('input[name=radio]');
var genderSpan = document.getElementById('radiospan');

/* SELECT VALIDATION */
var countryInput = document.getElementById('select');
var countrySpan = document.getElementById('selectspan');


function handelValidation() {

    // NAME VALIDATION

    if (!nameInput.value) {

        nameSpan.style.display = 'block';
        nameInput.style.borderColor = 'red';
    }
    else {
        nameSpan.style.display = 'none';
    }


    // EMAIL VALIDATION

    if (!emailInput.value) {

        emailSpan.style.display = 'block';
        emailInput.style.borderColor = 'red';
    }
    else {
        emailSpan.style.display = 'none';
    }

    // PASSWORD VALIDATION

    if (!passwordInput.value) {

        passwordSpan.innerHTML = 'Please enter your password!';
        passwordSpan.style.display = 'block';
        passwordInput.style.borderColor = 'red';
    }
    else if (passwordInput.value.length < 4 || passwordInput.value.length > 12) {
        passwordSpan.innerHTML = ' your password char must be in between 4 to 12 !';
        passwordSpan.style.display = 'block';
        passwordInput.style.borderColor = 'red';

    }
    else {
        passwordSpan.style.display = 'none';
        passwordSpan.innerHTML = '';

    }


    // ADDRESS VALIDATION

    if (!addressInput.value) {

        addressSpan.style.display = 'block';
        addressInput.style.borderColor = 'red';
    }
    else {
        addressSpan.style.display = 'none';

    }

    // SPORT VALIDATION

    let checkedSport = [];

    for (let i = 0; i < sportInput.length; i++) {

        if (sportInput[i].checked) {
            checkedSport.push(sportInput[i].value);
        }
    }
    if (checkedSport.length == 0) {
        sportSpan.style.display = 'block';

    }
    else {
        sportSpan.style.display = 'none';
    }


    // GENDER VALIDATION

    let checkedGender = "";

    for (let i = 0; i < genderInput.length; i++) {

        if (genderInput[i].checked) {
            checkedGender = genderInput[i].value;
        }
    }
    if (checkedGender.length == 0) {
        genderSpan.style.display = 'block';

    }
    else {
        genderSpan.style.display = 'none';
    }


    // COUNTRY VALIDATION

    if (!countryInput.value) {
        countrySpan.style.display = 'block';
        countryInput.style.borderColor = 'red';


    }
    else {


        countrySpan.style.display = 'none';
    }



    // ** Check is form valid or not
    if (
        nameInput.value &&
        emailInput.value &&
        addressInput.value &&
        countryInput.value &&
        passwordInput.value &&
        passwordInput.value.length > 4 &&
        passwordInput.value.length < 12 &&
        checkedSport.length != 0 &&
        checkedGender
    ) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            address: addressInput.value,
            password: passwordInput.value,
            sport: checkedSport,
            gender: checkedGender,
            country: countryInput.value,
        };
        handleTableData(formData);
        resetForm();
    }
}
function handleTableData(formData) {
    const tr = document.createElement("tr");
    console.log(tr);
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const addressTd = document.createElement("td");
    const sportTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const countryTd = document.createElement("td");
    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    addressTd.innerHTML = formData.address;
    passwordTd.innerHTML = formData.password;
    sportTd.innerHTML = formData.sport;
    genderTd.innerHTML = formData.gender;
    countryTd.innerHTML = formData.country;
    tr.append(
        nameTd,
        emailTd,
        passwordTd,
        addressTd,
        sportTd,
        genderTd,
        countryTd
    );
    console.log(tr);
    tBody.appendChild(tr);
}
function resetForm() {
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    countryInput.value = "";
    passwordInput.value = "";
}













