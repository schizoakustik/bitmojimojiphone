radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    if (emoji > 1) {
        emoji += -1
    } else {
        emoji = 3
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
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(emoji)
})
input.onButtonPressed(Button.B, function () {
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
