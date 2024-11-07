function RandomColor() {
    const listEl = document.getElementById("colorRegion");
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const rntClr = `rgb(${r} ${g} ${b})`;
    listEl.style.backgroundColor = rntClr;
}


let r, g, b;
function RandomColor2() {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    setInterval(Transitions, 100);
}

function Transitions() {
    const listEl = document.getElementById("colorRegion");
    let a = Math.round(Math.random() * 2);
    switch (a) {
        case 0: r = DeltaColor(r);
            break;
        case 1: g = DeltaColor(g);
            break;
        case 2: b = DeltaColor(b);
            break;
    }
    const rntClr = `rgb(${r} ${g} ${b})`;
    listEl.style.backgroundColor = rntClr;
}


function DeltaColor(a) {
    const delSize = 20;
    let delta = Math.round(Math.random() * delSize * 2) - delSize;
    a += delta;
    if (a < 0) a = 0;
    if (a > 255) a = 255;
    return a;
}