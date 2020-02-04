// console.log("Hello World");

function onEnterPressed(event) {
    if(event.key !== "Enter") {
        return;
    }
    addRow();
}

function addRow() {
    console.log("You pressed enter!");

    var snippet = `
        <tr><td>John</td></tr>
    `;

    document.getElementById('entries').innerHTML += snippet;
}