function check_position_of_sprite () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        music.play(music.tonePlayable(counter, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        counter += 1
        sprite_speed += -2
        score += 1
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
        is_game_over = 1
    }
    return 0
}
function restart_game () {
    is_game_over = 0
    initialize()
    return 0
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (is_game_over == 0) {
        check_position_of_sprite()
    } else {
        restart_game()
    }
})
function initialize () {
    music.setVolume(255)
    sprite = game.createSprite(2, 2)
    marker1 = game.createSprite(2, 1)
    marker2 = game.createSprite(2, 3)
    counter = 131
    sprite_speed = 250
    is_game_over = 0
    score = 0
    return 0
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (is_game_over == 0) {
        check_position_of_sprite()
    } else {
        restart_game()
    }
})
let high_score = 0
let marker2: game.LedSprite = null
let marker1: game.LedSprite = null
let is_game_over = 0
let score = 0
let sprite_speed = 0
let counter = 0
let sprite: game.LedSprite = null
initialize()
let high_text = "High"
basic.forever(function () {
    if (is_game_over == 0) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(sprite_speed)
    } else {
        sprite.delete()
        marker1.delete()
        marker2.delete()
        if (score > high_score) {
            high_score = score
        }
        basic.showString("" + (score))
        basic.showString("" + (high_score))
    }
})
control.inBackground(function () {
    if (input.buttonIsPressed(Button.A)) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN
        )
        if (input.buttonIsPressed(Button.B)) {
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_B,
            EventBusValue.MICROBIT_BUTTON_EVT_DOWN
            )
        }
    }
})
