radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(emoji)
})
input.onButtonPressed(Button.B, function () {
    if (emoji < 3) {
        emoji += 1
    } else {
        emoji = 1
    }
    if (emoji < 3) {
        emoji += 1
    } else {
        emoji = 1
    }
    if (emoji == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (emoji == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let emoji = 0
radio.setGroup(1)
emoji = 1
