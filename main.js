function clearScreen()
{
document.getElementById("result").value="";
}
function dispaly(value){
document.getElementById("result").value+=value;
}
function calculate()
{
var p=document.getElementById("result").value;
var q=eval(p);
document.getElementById("result").value=q;
}