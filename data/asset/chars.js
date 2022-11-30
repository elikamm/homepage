const 
    charmap = '  0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.+-*/(),=@#?!":;',
    chars = [
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,1,1,1,0, 0,1,1,1,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,0,1,1,0,0, 0,0,1,1,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,1,1,1,0,0, 0,0,0,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0, 0,0,0,0,1,1,1,0, 0,0,0,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,1,1, 0,0,0,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,0,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,0,0,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0, 0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,0,0,0, 0,1,1,0,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,1,1,0,0, 0,1,1,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,0,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,0, 0,0,0,0,1,1,0,0, 0,0,0,0,1,1,0,0, 0,0,0,0,1,1,0,0, 0,0,0,0,1,1,0,0, 0,1,1,0,1,1,0,0, 0,0,1,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,1,1,0,0, 0,1,1,1,1,0,0,0, 0,1,1,1,0,0,0,0, 0,1,1,1,1,0,0,0, 0,1,1,0,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,1,1, 0,1,1,1,0,1,1,1, 0,1,1,1,1,1,1,1, 0,1,1,0,1,0,1,1, 0,1,1,0,0,0,1,1, 0,1,1,0,0,0,1,1, 0,1,1,0,0,0,1,1, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,1,0,1,1,0, 0,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,0, 0,1,1,0,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,0,0, 0,1,1,1,1,0,0,0, 0,1,1,0,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,1,1, 0,1,1,0,0,0,1,1, 0,1,1,0,0,0,1,1, 0,1,1,0,1,0,1,1, 0,1,1,1,1,1,1,1, 0,1,1,1,0,1,1,1, 0,1,1,0,0,0,1,1, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,0,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,1,0, 0,1,1,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,1,1,1,0, 0,0,0,1,1,0,0,0, 0,0,1,1,1,1,1,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,0,0,0,0,1,1,0, 0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,1,1,0,0, 0,1,1,1,1,0,0,0, 0,1,1,0,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,1,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,1,1, 0,1,1,1,1,1,1,1, 0,1,1,0,1,0,1,1, 0,1,1,0,0,0,1,1, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,1,1,1,1,1,0, 0,1,1,0,0,0,0,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,1,1,0, 0,1,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,0,0,0,1,1, 0,1,1,0,1,0,1,1, 0,1,1,1,1,1,1,1, 0,0,1,1,1,1,1,0, 0,0,1,1,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,1,0, 0,0,0,0,1,1,0,0, 0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,1,1,0,0,1,1,0, 0,0,1,1,1,1,0,0, 1,1,1,1,1,1,1,1, 0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1, 0,0,0,0,0,1,1,1, 0,0,0,0,1,1,1,0, 0,0,0,1,1,1,0,0, 0,0,1,1,1,0,0,0, 0,1,1,1,0,0,0,0, 1,1,1,0,0,0,0,0, 1,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,0,0,0,0, 0,0,1,1,0,0,0,0, 0,0,1,1,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,1,1,0,0, 0,0,0,0,1,1,0,0, 0,0,0,0,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0, 0,1,1,1,1,1,1,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,1,1,0,1,1,1,0, 0,1,1,0,1,1,1,0, 0,1,1,0,0,0,0,0, 0,1,1,0,0,0,1,0, 0,0,1,1,1,1,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 1,1,1,1,1,1,1,1, 0,1,1,0,0,1,1,0, 1,1,1,1,1,1,1,1, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,1,1,0, 0,0,0,0,1,1,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,1,1,0,0,1,1,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0, 0,0,0,1,1,0,0,0, 0,0,1,1,0,0,0,0]
    ]