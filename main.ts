basic.clearScreen()
let x = 0
let y = 0
let index = 4
for (let index2 = 0; index2 < 5; index2++) {
    for (let y = 0; y <= index; y++) {
        led.plot(x, y)
    }
    basic.pause(100)
    index += -1
    x += 1
}
