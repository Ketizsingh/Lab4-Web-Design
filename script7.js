function onEnterPressed(event) {
    if(event.key !== "Enter") {
        return;
    }
    addRow();
    cleanEntry();
}

var nextId = 0;
// var Names = ['Gurpret','Mohit','Nikhil','Arshdeep','Sharine'];
var Names = [];


function addRow() {
    var name = document.getElementById('name').value;


 


    Names.push(name);

    alert('Entry Successful, Press Refresh')

    nextId++
}



function refreshTable(){


    document.getElementById('entries').innerHTML = '';

var code = '';

Names.forEach(name => {
    
    var snippet = `
    <tr id="${nextId}">
        <td onclick="removeEntry(${nextId})"><img src="images/delete.png"></td>
        <td>${name}</td>
    </tr>
`;

document.getElementById('entries').innerHTML += snippet;
   
    nextId++


});


}


function removeEntry(Id){


    document.getElementById(Id).remove()
}

function cleanEntry() {
    document.getElementById('name').value = ""
}

