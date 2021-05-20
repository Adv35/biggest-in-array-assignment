let Biggestnumber = 0
let numbervalues = [7, 23, 42, 43, 1, 20]
for (let index = 0; index <= numbervalues.length; index++) {
    if (numbervalues[index] > numbervalues[index + 1]) {
        Biggestnumber = numbervalues[index]
    } else if (numbervalues[index] < numbervalues[index + 1]) {
        Biggestnumber = numbervalues[index + 1]
    }
    serial.writeValue("Biggest Number", Biggestnumber)
}
basic.forever(function () {
	
})
