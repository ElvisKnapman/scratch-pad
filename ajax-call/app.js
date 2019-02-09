'use strict';

document.getElementById('button').addEventListener('click', (e) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'dataFile.txt', true);
    
    xhr.onload = function() {
        if(this.status == 200) {
            document.getElementById('response').innerHTML = xhr.responseText;
            console.log(xhr.response);
        } else if (this.status == 404) {
            document.getElementById('response').innerHTML = 'Document not found.';
        }
    }
    
    xhr.send();
});
