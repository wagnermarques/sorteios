document.addEventListener('DOMContentLoaded', function() {
    const csvFileInput = document.getElementById('csvFileInput');
    const nameTable = document.getElementById('nameTable').getElementsByTagName('tbody')[0];
    const btnSortear = document.getElementById('btnSortear');
    const selectedNamesList = document.querySelector('#selectedNames ul');

    let names = [];

    csvFileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                names = e.target.result.split('\n');
                displayNamesInTable(names);
            };

            reader.readAsText(file);
        }
    });

    btnSortear.addEventListener('click', function() {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length);
            const randomName = names[randomIndex].trim();
            names.splice(randomIndex, 1);

            displaySelectedName(randomName);
        } else {
            alert('Antes de Sortear, Carregue uma lista de nomes!');
        }
    });

    function displayNamesInTable(names) {
        nameTable.innerHTML = '';

        for (let i = 0; i < names.length; i++) {
            const name = names[i].trim();

            if (name !== '') {
                const row = nameTable.insertRow();
                const cell = row.insertCell();
                cell.textContent = name;
            }
        }
    }

    function displaySelectedName(name) {
        const listItem = document.createElement('li');
        
        // Add the "fs-1" class to the list item for increased font size
        listItem.classList.add('h5');

        
        listItem.textContent = name;
        selectedNamesList.appendChild(listItem);
    }
});
