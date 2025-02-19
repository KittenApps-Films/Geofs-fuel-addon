'use strict';
console.log("Geofs fuel running");
let fuelvariable = 100;
let engine = true;
const between = (x, min, max) => {
    return x >= min && x <= max;
}

const variableHandler = {
    set(target, property, value) {
        let bar = document.getElementById("fuel-bar");
        bar.value = value;
        let text = document.getElementById("fuel-text");
        text.innerHTML = "Fuel " + Math.trunc(value) + "%";
        if (value < 0 || value == 0) {
            engine = false;
        } else {
            engine = true;
        }
        target[property] = value;
        return true;
    },
};

const fuel = new Proxy({ value: fuelvariable }, variableHandler);

if (!localStorage.getItem("fuel")) {
    fuel.value = 100 
} else {
    fuel.value = localStorage.getItem("fuel");  
}

let set = false;

    function fuelAdd() {
        fuel.value = 100;
    }
    //make_the_bar
    //get autopilot bar
    let a = document.getElementsByClassName("geofs-autopilot-bar");
    let b = a[0];
    //make the div
    let bt = document.createElement("div");
    bt.onclick = () => {
        fuelAdd();
    }
    bt.className = "control-pad";
    bt.id = "test-bar";
    b.appendChild(bt);
    //second div
    let bt2 = document.createElement("div");
    bt2.className = "control-pad-label";
    bt2.id = "test-inner";
    bt2.style = "line-height: 27px;font-size: 12px !important;pointer-events: none;color: #FFF;text-align: center; padding-left: 10px; padding-right: 10px;";
    bt.appendChild(bt2);
    //percent bar
    let bt3 = document.createElement("progress");
    bt3.value = fuel.value;
    bt3.max = 100;
    bt3.id = "fuel-bar"
    bt2.appendChild(bt3);
    //percent text
    let bt4 = document.createElement("p");
    bt4.innerHTML = "Fuel " + Math.trunc(fuel.value) + "%";
    bt4.id = "fuel-text";
    bt2.insertBefore(bt4, bt2.children[0]);
    set = true;

setInterval(fuelReduce, 500);

function fuelReduce() {
    if (set === true && window.geofs.pause == false) {
        if (fuel.value > 0) {
            let rpm = window.geofs.aircraft.instance.engine.rpm;
            let minusFuel = 0
            if (rpm == 0) {
                minusFuel = 0
            } else if (between(rpm, 0, 1000)) {
                minusFuel = 0.001
            } else if (between(rpm, 1001, 2000)) {
                minusFuel = 0.002
            } else if (between(rpm, 2001, 3000)) {
                minusFuel = 0.003
            } else if (between(rpm, 3001, 4000)) {
                minusFuel = 0.004
            } else if (between(rpm, 4001, 5000)) {
                minusFuel = 0.005
            } else if (between(rpm, 5001, 6000)) {
                minusFuel = 0.006
            } else if (between(rpm, 6001, 7000)) {
                minusFuel = 0.007
            } else if (between(rpm, 7001, 8000)) {
                minusFuel = 0.008
            } else if (between(rpm, 8001, 9000)) {
                minusFuel = 0.009
            } else if (between(rpm, 9001, 10000)) {
                minusFuel = 0.01
            } else {
                minusFuel = 0.01
            }
            engine = true
            fuel.value -= minusFuel
        }
    }
    if (engine === false) {
            window.geofs.aircraft.instance.engine.on = false;
            window.geofs.aircraft.instance.engine.rpm = 0;
    }
    localStorage.setItem(fuel.value, "fuel");
}
