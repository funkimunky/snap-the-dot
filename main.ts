input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        game.addScore(1)
    }
    if (sprite.get(LedSpriteProperty.X) != 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let etu = game.createSprite(2, 1)
etu = game.createSprite(2, 3)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(200)
    if (input.buttonIsPressed(Button.A) && sprite.get(LedSpriteProperty.X) == 2) {
        sprite.move(1)
        basic.pause(100)
    }
})
