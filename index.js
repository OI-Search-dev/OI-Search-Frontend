function g(c,f) {
    return `<span style='color: ${c}; font-family: Consolas;'>${f}</span>`;
}

let h = "", uh = "";
let s = false;

function f() {
    oO(document.getElementById('tit'), 50);
}

function oO(e,t) {
    e.innerHTML = e.innerHTML + g("rebeccapurple", "0");
    setTimeout(()=>{oi(e, t)}, t);
}

function oi(e,t) {
    e.innerHTML = e.innerHTML + g("white", "i");
    setTimeout(()=>{om(e, t)}, t);
}

function om(e,t) {
    e.innerHTML = e.innerHTML + g("red", "-");
    setTimeout(()=>{oS(e, t)}, t);
}

function oS(e,t) {
    e.innerHTML = e.innerHTML + g("orange", "S");
    setTimeout(()=>{oe(e, t)}, t);
}

function oe(e,t) {
    e.innerHTML = e.innerHTML + g("yellow", "e");
    setTimeout(()=>{oa(e, t)}, t);
}

function oa(e,t) {
    e.innerHTML = e.innerHTML + g("lime", "a");
    setTimeout(()=>{or(e, t)}, t);
}

function or(e,t) {
    e.innerHTML = e.innerHTML + g("blue", "r");
    setTimeout(()=>{oc(e, t)}, t);
}

function oc(e,t) {
    e.innerHTML = e.innerHTML + g("purple", "c");
    setTimeout(()=>{oh(e, t)}, t);
}

function oh(e,t) {
    e.innerHTML = e.innerHTML + g("saddlebrown", "h");
    h = e.innerHTML + "<span style='color: white; font-family: Consolas;'>_</span>";
    uh = e.innerHTML + "<span style='color: white; font-family: Consolas; visibility: hidden;'>_</span>";
    o_(e);
    setInterval(()=>{o_(e)}, t*20);
}

function o_(e) {
    if(s) e.innerHTML = uh;
    else e.innerHTML = h;
    s = !s;
}

f();