from player import Player
from pipe import Pipe
import pyglet

SPACE_BAR = 32
WINDOW_HEIGHT = 500
WINDOW_WIDTH = 500
PLAYER_RADIUS = 18
PLAYER_HEIGHT = 2 * PLAYER_RADIUS

def main():
    player = Player(200, 250)
    pipes = [Pipe(600, PLAYER_HEIGHT),
            Pipe(900, PLAYER_HEIGHT),
            Pipe(1200, PLAYER_HEIGHT)]
    window = pyglet.window.Window(height = WINDOW_HEIGHT, width = WINDOW_WIDTH)
    pass

    def update(self):
        window.clear()
        draw_floor()
        player.move()
        reset_game = False
        for pipe in pipes:
            pipe.move()

            if(pipe.position < -pipe.width):
                pipes.remove(pipe)
                pipes.append(Pipe(900, PLAYER_HEIGHT))

            if player.colliding(pipe):
                reset_game = True

        if reset_game:
            # Why is it preventing me from clearing pipes?
            player.reset()
            # print(pipes)
            # pipes = [Pipe(600, PLAYER_HEIGHT),
            #         Pipe(900, PLAYER_HEIGHT),
            #         Pipe(1200, PLAYER_HEIGHT)]
        pass

    def draw_floor():
        quad = (('v2f',(0,              0,
                        0,              30,
                        WINDOW_WIDTH,   30,
                        WINDOW_WIDTH,   0)))
        pyglet.graphics.draw(4, pyglet.gl.GL_QUADS, quad)
        pass

    @window.event
    def on_key_press(button, modifiers):
        if button is SPACE_BAR:
            # print("JUMP")
            player.vel_y = 12
        pass

    pyglet.clock.schedule_interval(update, 0.01)
    pyglet.app.run()

if __name__ == '__main__':
    main()
