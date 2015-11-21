function isEven(n) {
    while (n > 1)
        n-=2;
    if (n === 1 || n === -1)
        console.log("False");
    else
        console.log("True");
}
