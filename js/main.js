
alert('Ти готовий до пригод?Тож розпочнемо гру!');
window.onload = function () {
	document.getElementById("first").onclick = function () {
        var e = document.getElementById("rect");
        var color = 0;
        setInterval(function () {
            color = color + 1 % 360;
            e.style.backgroundColor = "hsl(" + color + ", 100%, 50%)"; // hsl(0, 100%, 50%)
        }, 50);
     }
     document.getElementById("first1").onclick = function () {
        var e = document.getElementById("rect");
        var a = document.getElementById("menu");
            e.style.backgroundColor = "yellow";
            a.style.backgroundColor = "yellow";
        }
             document.getElementById("first2").onclick = function () {
        var e = document.getElementById("rect");
        var a = document.getElementById("menu");
            e.style.backgroundColor = "blue";
            a.style.backgroundColor = "blue";
        }
        document.getElementById("first3").onclick = function () 
{
 var x = document.getElementById("myColor").value;
    var e = document.getElementById("rect");
    var a = document.getElementById("menu");
    e.style.backgroundColor = x;
    a.style.backgroundColor = x;
}
}
     
