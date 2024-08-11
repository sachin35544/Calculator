function parsent(val) {
    let currentValue = parseFloat(document.getElementById("textbox2").value);
        document.getElementById("textbox2").value = (currentValue / 100).toString();
}
function dig(val) {
    document.getElementById("textbox2").value += val;
}
function clr(val) {
    document.getElementById("textbox2").value = " ";
}
function solve() {
    var x = document.getElementById("textbox2").value;
    var y = eval(x);
    document.getElementById("textbox2").value = y;
}