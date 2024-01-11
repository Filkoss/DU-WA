var colorIndices = [0, 1, 2];
var redValue = Math.floor(Math.random() * 256);
var greenValue = Math.floor(Math.random() * 256);
var blueValue = Math.floor(Math.random() * 256);

document.getElementById("colorCode").innerHTML = "#" + componentToHex(redValue) + componentToHex(greenValue) + componentToHex(blueValue);

var correctIndex = Math.floor(Math.random() * 3);

document.getElementById("button" + correctIndex).style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";

colorIndices.splice(correctIndex, 1);

var r1 = Math.floor(Math.random() * 256);
var g1 = Math.floor(Math.random() * 256);
var b1 = Math.floor(Math.random() * 256);
document.getElementById("button" + colorIndices[0]).style.backgroundColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

var r2 = Math.floor(Math.random() * 256);
var g2 = Math.floor(Math.random() * 256);
var b2 = Math.floor(Math.random() * 256);
document.getElementById("button" + colorIndices[1]).style.backgroundColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

function makeGuess() {
    if (parseInt(document.activeElement.id.substring(6)) === correctIndex) {
        document.getElementById("colorCode").innerHTML = "Correct !!";
        document.getElementById("colorCode").style.color = "darkgreen";
    } else {
        document.getElementById("colorCode").innerHTML = "Wrong, try again !!";
        document.getElementById("colorCode").style.color = "red";
    }

    document.getElementsByClassName("colorButton")[0].removeAttribute("onclick");
    document.getElementsByClassName("colorButton")[1].removeAttribute("onclick");
    document.getElementsByClassName("colorButton")[2].removeAttribute("onclick");
}

function replayGame() {
    window.location.reload();
}

function componentToHex(c) {
    var hex = c.toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
}
