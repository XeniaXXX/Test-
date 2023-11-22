// №2.5
// №2.6
const form = document.querySelector('form'),
    dataDiv = document.querySelector('.form_data');

//XMLHttpRequest
form.addEventListener('submit', function(event) {   
    event.preventDefault();
    let formData = new FormData(form),
    values = Object.fromEntries(formData.entries()),
    json = JSON.stringify(values);
    dataDiv.textContent = json;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `server.php?${new URLSearchParams(formData).toString()}`, true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
        else {
            console.error(xhr.statusText);
        }
    };
    xhr.send();
});

//fecth 
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let formData = new FormData(form),
//     values = Object.fromEntries(formData.entries()),
//     json = JSON.stringify(values);
//     dataDiv.textContent = json;

//     fetch(`server.php?${new URLSearchParams(formData)}`)
//     .then(data => data.text())
//     .then(data => {
//         alert(data);
//     });
// });

// ajax
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let formData = new FormData(form),
//     values = Object.fromEntries(formData.entries()),
//     json = JSON.stringify(values);
//     dataDiv.textContent = json;

//     $.ajax({
//         url: `server.php?${new URLSearchParams(formData)}`, 
//         method: 'GET', 
//         success: function(data) {
//             alert(data);
//         }
//     });
// });