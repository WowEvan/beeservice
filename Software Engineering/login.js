document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        validateLogin();
    });

    document.getElementById('register-form').addEventListener('submit', function (event) {
        event.preventDefault();
        validateRegister();
    });
});

function showLogin(){
    document.querySelector('.login-container').style.display = 'flex';
    document.querySelector('.register-container').style.display = 'none';
}

function showRegister(){
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'flex';
}

function validateLogin() {
    document.getElementById('login-error').textContent = '';

    var username = document.getElementById('login-username').value.trim();
    var password = document.getElementById('login-password').value.trim();

    var isValid = true;

    if (username === '' || password === '') {
        document.getElementById('login-error').textContent = 'Nama Pengguna atau Password tidak cocok';
        isValid = false;
    }

    if (isValid) {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        fetch('login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.trim() === '') {
                window.location.href = "beranda.html";
            } else {
                document.getElementById('login-error').textContent = data;
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

function validateRegister() {
    document.querySelectorAll('.error').forEach(function (element) {
        element.textContent = '';
    });

    var username = document.getElementById('register-username').value.trim();
    var phone = document.getElementById('register-phone').value.trim();
    var email = document.getElementById('register-email').value.trim();
    var password = document.getElementById('register-password').value.trim();
    var checkbox = document.getElementById('register-check').checked;

    var isValid = true;

    if (username === '') {
        document.getElementById('username-error').textContent = 'Nama pengguna harus diisi';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phone-error').textContent = 'Nomor telepon harus diisi';
        isValid = false;
    } else if (!phone.startsWith('+62')) {
        document.getElementById('phone-error').textContent = 'Nomor telepon harus dimulai dengan +62';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('email-error').textContent = 'Email harus diisi';
        isValid = false;
    } else if (!email.includes('@')) {
        document.getElementById('email-error').textContent = 'Email harus mengandung karakter @';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('password-error').textContent = 'Password harus diisi';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password harus terdiri dari minimal 8 karakter';
        isValid = false;
    }

    if (!checkbox) {
        document.getElementById('checkbox-error').textContent = 'Anda harus menyetujui syarat & ketentuan';
        isValid = false;
    } else {
        document.getElementById('checkbox-error').textContent = '';
    }

    if (isValid) {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('password', password);

        fetch('register.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.trim() === 'New record created successfully') {
                showLogin();
            } else if (data.trim() === 'Nama pengguna sudah ada') {
                document.getElementById('username-error').textContent = data;
            } else {
                alert(data);
            }
        })
        .catch(error => console.error('Error:', error));
    }
}