console.log("Hello World");
function onEnterPressed(event)
{
    if(event.key !== "Enter")
    {
     return;
    }
    addRow();
} 
function addRow()
{
    console.log("You pressed enter");
    var abcd=`
    <tr>
    <td>John</td>
    </tr>
    `;
    document.getElementById("entries").innerHTML += abcd;
}