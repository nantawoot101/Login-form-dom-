const loginForm = document.querySelector('.login-form');
const Uname = document.querySelector('.Uname');
const Password1 = document.querySelector('.password');


const hdlLogin = e => {
    e.preventDefault();
    let allInput = loginForm.elements
    const usernameInput = document.querySelector('#username');
    const validate_Uname = usernameInput.value.trim();
    if (
        validate_Uname.length > 3 &&
        !/^\d/.test(validate_Uname) &&
        !/\s/.test(validate_Uname)
    ) {
        Uname.textContent = '';
        usernameInput.style.borderColor = "initial";
    } else {
        usernameInput.style.borderColor = 'red';
        Uname.textContent = 'Username ความยาวต้องมากกว่า 3 ตัวอักษร'
        Uname.style.color = 'red'
        return;
    }
   
    const passwordInput = document.querySelector('#password');
    const validate_Password = passwordInput.value.trim();
    if (validate_Password.length > 4 && 
        /\d/.test(validate_Password) &&
        /[a-zA-Z]/.test(validate_Password)) {
        Password1.textContent = '';
        passwordInput.style.borderColor = 'initial';
    } else {
        passwordInput.style.borderColor = 'red';
        Password1.textContent = 'Password ความยาวต้องมากกว่า 4 ตัวอักษร และ ต้องมีทั้งตัวเลขและตัวอักษร'
        Password1.style.color = 'red'
        return;
    }
    

        const selectInput = document.querySelector('#role');
        if (selectInput.value !== '') {
            selectInput.style.borderColor = "initial";
        } else {
            selectInput.style.borderColor = 'red';
            return;
        }
        alert('Login successful');
        window.location.href = "https://www.example.com";
    
};


loginForm.addEventListener('submit', hdlLogin);