function onEnterPressed(event) {
    if(event.key !== "Enter") {
        return;
    }
    addRow();
    cleanEntry();
}

var nextId = 0;

function addRow() {
    var name = document.getElementById('name').value;

    var snippet = `
        <tr id="${nextId}">
            <td onclick="removeEntry(${nextId})"><img src="images/delete.png"></td>
            <td>${name}</td>
        </tr>
    `;

    document.getElementById('entries').innerHTML += snippet;

    nextId++
}


function removeEntry(Id){


    document.getElementById(Id).remove()
}

function cleanEntry() {
    document.getElementById('name').value = ""
}

