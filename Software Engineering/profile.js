document.addEventListener('DOMContentLoaded', function () {
    var profileBtn = document.getElementById('profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function (event) {
            event.preventDefault();
            loadUserProfile();
        });
    } else {
        console.error("Profile button not found");
    }
});

function loadUserProfile() {
    fetch('get_profile.php', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch profile data');
        }
        return response.json();
    })
    .then(data => {
        displayUserProfile(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayUserProfile(profileData) {
    var popup = document.createElement('div');
    popup.classList.add('user-profile-popup');

    var popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    var title = document.createElement('h2');
    title.textContent = 'Profile Information';
    popupContent.appendChild(title);

    if (!profileData || Object.keys(profileData).length === 0) {
        popupContent.textContent = 'Profile data not found';
    } else {
        var dl = document.createElement('dl');
        dl.classList.add('profile-list');

        appendProfileItem(dl, "Username :", profileData.username);
        appendProfileItem(dl, "Phone :", profileData.phone);
        appendProfileItem(dl, "Email :", profileData.email);

        var resetPasswordContainer = document.createElement('div');
        resetPasswordContainer.classList.add('reset-password-container');

        var resetPasswordBtn = document.createElement('button');
        resetPasswordBtn.textContent = "Reset Password";

        resetPasswordContainer.appendChild(resetPasswordBtn);
        popupContent.appendChild(dl);
        popupContent.appendChild(resetPasswordContainer);

        resetPasswordBtn.addEventListener('click', function() {
            var resetPasswordTitle = document.createElement('h2');
            resetPasswordTitle.textContent = 'Reset Password';
            resetPasswordTitle.style.borderBottom = '1px solid black';
            resetPasswordTitle.style.marginBottom = '10px';

            var resetForm = document.createElement('form');
            resetForm.classList.add('reset-form');

            var currentPasswordInput = document.createElement('input');
            currentPasswordInput.type = 'password';
            currentPasswordInput.name = 'current_password';
            currentPasswordInput.placeholder = 'Current Password';
            resetForm.appendChild(currentPasswordInput);

            var newPasswordInput = document.createElement('input');
            newPasswordInput.type = 'password';
            newPasswordInput.name = 'new_password';
            newPasswordInput.placeholder = 'New Password';
            resetForm.appendChild(newPasswordInput);

            var confirmPasswordInput = document.createElement('input');
            confirmPasswordInput.type = 'password';
            confirmPasswordInput.name = 'confirm_password';
            confirmPasswordInput.placeholder = 'Confirm New Password';
            resetForm.appendChild(confirmPasswordInput);

            var passwordError = document.createElement('span');
            passwordError.classList.add('error-message');
            resetForm.appendChild(passwordError);

            var submitBtn = document.createElement('button');
            submitBtn.type = 'submit';
            submitBtn.textContent = 'Reset';
            submitBtn.classList.add('text-center');
            resetForm.appendChild(submitBtn);

            popupContent.innerHTML = '';
            popupContent.appendChild(resetPasswordTitle);
            popupContent.appendChild(resetForm);

            resetForm.addEventListener('submit', function(event) {
                event.preventDefault();

                var currentPassword = currentPasswordInput.value.trim();
                var newPassword = newPasswordInput.value.trim();
                var confirmPassword = confirmPasswordInput.value.trim();

                if (currentPassword === '') {
                    displayError(passwordError, 'Please enter your current password.');
                    return;
                }

                if (newPassword.length < 8) {
                    displayError(passwordError, 'Password must be at least 8 characters long.');
                    return;
                }

                if (newPassword === currentPassword) {
                    displayError(passwordError, 'New password must be different from current password.');
                    return;
                }

                if (newPassword !== confirmPassword) {
                    displayError(passwordError, 'Passwords do not match.');
                    return;
                }

                passwordError.textContent = '';

                fetch('reset_password.php', {
                    method: 'POST',
                    body: new FormData(resetForm)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to reset password');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        displayError(passwordError, data.error);
                    } else {
                        alert('Password reset successfully.');
                        popup.remove();
                    }
                })
                .catch(error => console.error('Error resetting password:', error));
            });

            function displayError(element, message) {
                element.textContent = message;
                element.style.color = 'red';
                element.style.textAlign = 'center';
            }
        });
    }

    popup.appendChild(popupContent);

    var closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    popup.appendChild(closeButton);

    closeButton.addEventListener('click', function() {
        document.body.removeChild(popup);
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            document.body.removeChild(popup);
        }
    });

    document.body.appendChild(popup);
}

function appendProfileItem(dl, term, description) {
    var dt = document.createElement('dt');
    dt.textContent = term;

    var dd = document.createElement('dd');
    dd.textContent = description;

    dl.appendChild(dt);
    dl.appendChild(dd);
}