from random import randrange
import pyglet

WINDOW_FLOOR = 0
WINDOW_CEILING = 500
PIPE_FLOOR = 35
PIPE_CEILING = 445
# Height of safe point from bottom to top is 2.5h of player

class Pipe:
    def __init__(self, position, player_height):
        self.velocity = 2
        self.position = position
        self.width = 1.5 * player_height
        self.safe_point_bottom = randrange(35, 445)
        self.safe_point_top = self.safe_point_bottom + (4 * player_height)
        self.past_window = False
        pass

    def draw(self):
        pos = self.position
        width = self.width
        bottom = self.safe_point_bottom
        top = self.safe_point_top
        quad_bottom = (('v2f', (pos, WINDOW_FLOOR,
                                pos + width, WINDOW_FLOOR,
                                pos + width, bottom,
                                pos, bottom)))

        quad_top = (('v2f', (pos, top,
                            pos + width, top,
                            pos + width, WINDOW_CEILING,
                            pos, WINDOW_CEILING)))

        pyglet.graphics.draw(4, pyglet.gl.GL_QUADS, quad_bottom)
        pyglet.graphics.draw(4, pyglet.gl.GL_QUADS, quad_top)
        pass

    def move(self):
        self.position += -self.velocity
        self.draw()
        pass
