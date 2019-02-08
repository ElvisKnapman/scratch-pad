'use strict';

document.getElementById('button').addEventListener('click', (e) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'dataFile.txt', true);
    
    xhr.onload = function() {
        if(this.status == 200) {
            console.log(xhr.responseText);
        }
    }
    
    xhr.send();
});
