/*
    1. send an AJAX request to https://remoteok.io/api
    2. Test that request to make sure it worked
    3. Use the data to create HTML
*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       let data = JSON.parse(xhttp.responseText);
       let container = document.getElementById('container');
       data.slice(1).forEach(function(row, i) {
        let rowDiv = document.createElement('div');
        rowDiv.innerHTML = `
            <h5 class="company">${row.company}</h5>
            <h3 class="position">${row.position}</h3>
            <p class="location">${row.location}</p>
        `;
        container.appendChild(rowDiv);
       })
    }
};
xhttp.open("GET", "https://remoteok.com/api?tag=css", true);
xhttp.send();