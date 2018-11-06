const logNextNumber = function number(i) {
    i = i || 0
    console.log(i)
    if (i < 10) number(++i)
}
logNextNumber()


const logNextNumber = function number(i) {
    i = i || 0
    console.log(10-i)
    if (i < 10) number(++i)
}
logNextNumber()