// №2.5
// №2.6
let form = document.querySelector('form'),
    inputs = document.querySelectorAll('input'),
    formDataValues = document.querySelector('.form_data');

//XMLHttpRequest
form.addEventListener('submit', function(event) {   
    event.preventDefault();
    let formData = new FormData(form),
    json = JSON.stringify(Array.from(formData));
    formDataValues.textContent = json;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "server.php", true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
        else {
            console.error(xhr.statusText);
        }
    }
    xhr.send();
});

//fecth 
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(form),
    json = JSON.stringify(Array.from(formData));
    formDataValues.textContent = json;
    fetch("server.php")
    .then(data => data.text())
    .then(data => {
        alert(data);
    });
});

