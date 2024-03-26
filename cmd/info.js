let strings = [
    [200, 'Hi,', 41], [800, 'I am Elias Kamm', 45],
    [2000, 'this is my personal homepage,', 161], [3700, 'but', 191],
    [3900, 'I prefer to call it:', 201], [5100, 'playground', 222],
    [6000, '.', 281], [6400, '.', 282], [6800, 'why?', 283],
    [7700, 'I mean,', 361], [8400, 'look at it!', 369],
    [9500, 'this is not really usable..', 401],
    [11300, 'anyways,', 481], [12000, 'wanna see something cool?', 490],
    [13500, 'try the "HACK" command.', 521], [15200, 'have fun!', 641]
];

let playing = true, time = 0,
    exit = () => {
        Line('READY.                 ');
        window.removeEventListener('keydown', exit);
        blocked = false; playing = false;
        Render();
    };
    
window.addEventListener('keydown', exit);
for (let i = 0; i < strings.length; i++) {
    let string = strings[i],
        offset = string[0], text = string[1], position = string[2];

    for (let j = 0; j < text.length; j++) {
        let timeout = offset + j * 40;
        setTimeout(() => {
            if (playing) {
                Print(text[j], position + j);
                Render();
            }
        }, timeout);
        if (timeout > time) time = timeout;
    }
}

setTimeout(() => { if (playing) exit(); }, time + 500);
screen.fill(0); update.fill(1);
Print('----------------------------------------', 920);
Print('PRESS ANY KEY TO EXIT..', 960); Move(999);
Render();