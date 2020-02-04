console.log("Hello World");
function onEnterPressed(event)
{
    if(event.key !== "Enter")
    {
     return;
    }
    addRow();
    cleanEntry();
} 
function addRow()
{
    console.log("You pressed enter");
    var name =  document.getElementById("name").value;
       var abcd=`
    <tr>
    <td>${name}</td>
    </tr>
    `;
    document.getElementById("entries").innerHTML += abcd;
}
function cleanEntry()
{
    document.getElementById("name").value = ""
}
