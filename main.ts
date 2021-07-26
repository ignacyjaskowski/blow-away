input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.TShirt)
})
let cor = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.pause(1000)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() == 128) {
            row = randint(0, 4)
            cor = randint(0, 4)
        }
        if (led.point(cor, row)) {
            led.unplot(cor, row)
            led.plot(cor + 1, row)
        }
    }
})
