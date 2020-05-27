input.onButtonPressed(Button.B, function () {
    if (!(button)) {
        button = Button.B
    }
    if (button == Button.A) {
        counter = counter + 1
        button = Button.B
    }
    if (counter == 0) {
        basic.showIcon(IconNames.Ghost)
    }
    if (counter == 1) {
        basic.showIcon(IconNames.Duck)
    }
    if (counter == 2) {
        basic.showIcon(IconNames.Angry)
    }
    if (counter < 3) {
        counter = 1 + counter
    }
})
input.onButtonPressed(Button.A, function () {
    if (!(button)) {
        button = Button.A
    }
    if (button == Button.B) {
        counter = counter - 2
        button = Button.A
    } else {
        if (counter > 0) {
            counter = counter - 1
        }
    }
    if (counter == 0) {
        basic.showIcon(IconNames.Ghost)
    }
    if (counter == 1) {
        basic.showIcon(IconNames.Duck)
    }
    if (counter == 2) {
        basic.showIcon(IconNames.Angry)
    }
    
    
})
let counter = 0
let button: Button
