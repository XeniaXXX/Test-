// №2.5
// №2.6
const form = document.querySelector('form'),
      dataDiv = document.querySelector('.form_data'),
      urlAPI = 'server.php';

//XMLHttpRequest
form.addEventListener('submit', function(event) {   
    event.preventDefault();
    let formData = new FormData(form),
    url = `${urlAPI}?${new URLSearchParams(formData).toString()}`,
    values = Object.fromEntries(formData.entries()),
    json = JSON.stringify(values);
    dataDiv.textContent = json;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
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

// fecth 
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let formData = new FormData(form),
//     url = `${urlAPI}?${new URLSearchParams(formData).toString()}`,
//     values = Object.fromEntries(formData.entries()),
//     json = JSON.stringify(values);
//     dataDiv.textContent = json;

//     fetch(url)
//     .then(data => data.text())
//     .then(data => {
//         alert(data);
//     });
// });

// ajax
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let formData = new FormData(form),
//     url = `${urlAPI}?${new URLSearchParams(formData).toString()}`,
//     values = Object.fromEntries(formData.entries()),
//     json = JSON.stringify(values);
//     dataDiv.textContent = json;

//     $.ajax({
//         url: url, 
//         method: 'GET', 
//         success: function(data) {
//             alert(data);
//         }
//     });
// });