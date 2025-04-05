input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        music.setVolume(255)
        music.play(music.tonePlayable(counter, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        counter += 1
        sprite_speed += -2
        edge_speed += -2
    }
    if (sprite.get(LedSpriteProperty.X) != 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
        game.gameOver()
    }
})
let counter = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let etu = game.createSprite(2, 1)
etu = game.createSprite(2, 3)
counter = 131
let edge_speed = 250
let sprite_speed = 100
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(edge_speed)
    if (input.buttonIsPressed(Button.A) && sprite.get(LedSpriteProperty.X) == 2) {
        sprite.move(1)
        basic.pause(100)
    }
})
