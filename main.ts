let strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setBrightness(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 255))
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
})
