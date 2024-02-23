const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let uppass = [];
let inpass = [];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Adding and removing border
function upimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            uppass.splice(uppass.indexOf(element.id), 1);
        } else {
            Image.classList.add('clicked');
            uppass.push(element.id);
        }
    }
}

function inimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            inpass.splice(inpass.indexOf(element.id), 1);
        } else {
            Image.classList.add('clicked');
            inpass.push(element.id);
        }
    }
}

// Element image recognition
function signup() {
    sessionStorage.setItem('upname', document.getElementById('upmail').value);
    sessionStorage.setItem('uppass', JSON.stringify(uppass));
    var myText = 'Account Created Successfully';
    alert(myText);
}

// Image pattern authentication
function signin() {
    let str = document.getElementById('inmail').value;
    let array = sessionStorage.getItem('uppass');
    let check1 = array.localeCompare(JSON.stringify(inpass));
    
    if (!str.localeCompare(sessionStorage.getItem('upname')) && !check1) {
        var myText = 'Login is successful';
        alert(myText);
        NewTab();
    } else {
        var myText = 'Login Failed';
        alert(myText);
        sendMail3();
    }
}

function sendMail2() {
    emailjs
        .send('service_7q1sn6s', 'template_ogw30ms')
        .then(function (res) {
            console.log('Mail sent successfully:', res);
            alert('Mail sent successfully');
        })
        .catch(function (error) {
            console.error('Error sending mail:', error);
            alert('Error sending mail');
        });
}

function sendMail3() {
    emailjs
        .send('service_7q1sn6s', 'template_v7f98gs')
        .then(function (res) {
            console.log('Mail sent successfully:', res);
            alert('Mail sent successfully');
        })
        .catch(function (error) {
            console.error('Error sending mail:', error);
            alert('Error sending mail');
        });
}

function NewTab() {
    window.open(
        'https://www.linkedin.com/in/kowshik-emmadisetty-3a7874248/',
        '_blank'
    );
}
