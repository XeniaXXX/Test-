// №2.5
// №2.6
let form = document.querySelector('form'),
    dataDiv = document.querySelector('.form_data');

//XMLHttpRequest
form.addEventListener('submit', function(event) {   
    event.preventDefault();
    let formData = new FormData(form),
    values = Object.fromEntries(formData.entries()),
    json = JSON.stringify(values);
    dataDiv.textContent = json;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `server.php?${json}`, true);
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


// ajax
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let formData = new FormData(form),
//     values = Object.fromEntries(formData.entries()),
//     json = JSON.stringify(values);
//     dataDiv.textContent = json;
//     $.ajax({
//         url: 'server.php', 
//         method: 'GET', 
//         data: json,
//         success: function(data) {
//             alert(data);
//         }
//     });
// });

//fecth 
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let formData = new FormData(form),
//     values = Object.fromEntries(formData.entries()),
//     json = JSON.stringify(values);
//     dataDiv.textContent = json;
//     fetch(`server.php?${json}`)
//     .then(data => data.text())
//     .then(data => {
//         alert(data);
//     });
// });

