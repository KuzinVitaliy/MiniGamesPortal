function userTextChange() {
    const user = document.getElementById("userTest");
    let resTxt = user.value;
    resTxt = resTxt.split("");
    resTxt = resTxt.reverse();
    resTxt = resTxt.join("");
    const res = document.getElementById("result");
    res.innerText = resTxt;
}