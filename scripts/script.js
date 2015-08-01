window.onload = function () {
    var inputP1 = document.getElementById("p1"),
        inputP2 = document.getElementById("p2"),
        inputFlop = document.getElementById("flop"),
        inputTurn = document.getElementById("turn"),
        inputRiver = document.getElementById("river"),
        outputP1 = document.getElementById("output-p1"),
        outputP2 = document.getElementById("output-p2"),
        btnGO = document.getElementById("go"),
        formOut = document.getElementById("output");

    function showInputP1() {
        outputP1.innerHTML = inputP1.value;

        if(inputP1.innerHTML === '') {

        } else {
            formOut.appendChild(inputP1);
            input.value = '';
        }
    }

    function showInputP2() {
        outputP2.innerHTML = inputP2.value;

        if(inputP2.innerHTML === '') {

        } else {
            formOut.appendChild(inputP2);
            input.value = '';
        }
    }

    btnGO.addEventListener("click", showInputP1);
    btnGO.addEventListener("click", showInputP2);
};

