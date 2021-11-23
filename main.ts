input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(0)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(2)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Pitchfork)
})
basic.forever(function () {
	
})
