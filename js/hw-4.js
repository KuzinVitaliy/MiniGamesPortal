for (let i = 0; i < 40; i = Inc(i)) {
    console.log(i);
}


function Inc(i) {
    if (i < 4)
        return i = i + 1;
    return i = i + 3;
}
