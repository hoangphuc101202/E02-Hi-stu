"use strict";
exports.__esModule = true;
function demo1() {
    var input = document.getElementById("fullname");
    var name = input.value;
    var result = "Hi, " + name + "!";
    var p = document.getElementById("result");
    p.innerHTML = result;
}
