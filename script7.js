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

    Names.push(name); //here we push values to array

    document.getElementById('notification').innerHTML = 'Entry Successful of "'+name+'"'; //entry notification


    nextId++
}



function refreshTable() //execute by press on Refresh Button
{
    document.getElementById('entries').innerHTML = '';
    var code = '';
    
    for (let index = 0; index < Names.length; index++) {
        const name = Names[index];
        
        var snippet = `
            <tr id="${nextId}">
                <td onclick="removeEntry(${nextId},${index})"" ><img src="images/delete.png"></td>
                <td>${name}</td>
            </tr>
        `;
        document.getElementById('entries').innerHTML += snippet;
        nextId++


    }
    
}


function removeEntry(Id,index) 
{
    Names.splice(index, 1);  //to Names value from array
    document.getElementById(Id).remove()

    document.getElementById('notification').innerHTML = 'Entry Removed Successfully...';


}

function cleanEntry() {
    document.getElementById('name').value = ""
}




