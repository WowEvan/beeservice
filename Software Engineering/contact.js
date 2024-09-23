document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    let isValid = true;
    if(nameInput.value.trim() === ""){
        nameInput.style.borderColor = "red";
        isValid = false;
    } else {
        nameInput.style.borderColor = "";
    }

    if(emailInput.value.trim() === ""){
        emailInput.style.borderColor = "red";
        isValid = false;
    } else {
        emailInput.style.borderColor = "";
    }

    if(messageInput.value.trim() === ""){
        messageInput.style.borderColor = "red";
        isValid = false;
    } else {
        messageInput.style.borderColor = "";
    }

    if(!isValid){
        return;
    } else {
        openPopup();
        sendDataToServer();
    }
});

function openPopup(){
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function resetForm(){
    document.getElementById("contactForm").reset();
}

function closePopup(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    resetForm();
}

function sendDataToServer(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    fetch('save_message.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`,
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function (){
    sidebar.classList.toggle('active');
};