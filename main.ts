function check_position () {
    if (is_game_over == 0) {
        if (sprite.get(LedSpriteProperty.X) == 2) {
            music.setVolume(255)
            music.play(music.tonePlayable(tone_hz, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            tone_hz += 1
            sprite_speed += -2
            score += 1
        }
        if (sprite.get(LedSpriteProperty.X) != 2) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
            is_game_over = 1
        }
    }
}
let is_game_over = 0
let tone_hz = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let etu = game.createSprite(2, 1)
etu = game.createSprite(2, 3)
tone_hz = 131
let sprite_speed = 250
is_game_over = 0
let score = 0
basic.forever(function () {
    if (is_game_over == 0) {
        if (input.buttonIsPressed(Button.A)) {
            check_position()
        } else {
            sprite.move(1)
            sprite.ifOnEdgeBounce()
            basic.pause(sprite_speed)
        }
    } else {
        while (is_game_over == 1) {
            basic.showString("" + (score))
            if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                is_game_over = 0
            }
        }
    }
})
