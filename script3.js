console.log("Hello World");
function onEnterPressed(event)
{
    if(event.key !== "Enter")
    {
     return;
    }
    console.log("You pressed enter");
} 
// document.getElementById("entries").innerHTML = "Data of entries id will be displayed instead of body";