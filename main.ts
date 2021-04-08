input.onButtonPressed(Button.AB, function () {
    led.toggle(x, x)
    while (true) {
        x += 1
        led.toggle(x, x)
        y += 1
        led.toggle(0, 0)
    }
})
let x = 0
x = 0
let y = 0
