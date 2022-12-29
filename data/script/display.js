var screen = new Uint8Array(1000).fill(0),
    update = new Int8Array(1000).fill(1),
    ctx, caret = {
        pos: -1, blink: 0, timer: null
    },
    back = '#3F33A0', front = '#7B6FD9';

window.addEventListener('load', () => {
    ctx = frame.getContext('2d');
});

function Render() {
    for (let i = 0; i < 1000; i++)
        if (update[i] != 0) {
            let char = (i == caret.pos && caret.blink) ? 2 : (chars[screen[i]] || chars[0]),
                ox = i % 40 * 8, oy = Math.floor(i / 40) * 8;
            for (let j = 0; j < 64; j++) {
                let fill = char[j] == 0 ? back : front;
                if (fill) {
                    ctx.fillStyle = fill;
                    ctx.fillRect(ox + j % 8, oy + Math.floor(j / 8), 1, 1);
                }
                else {
                    ctx.clearRect(ox + j % 8, oy + Math.floor(j / 8), 1, 1);
                }
            }
            update[i] = 0;
        }
}

function Print(text, offset) {
    for (let i = 0; i < text.length; i++) {
        let index = offset + i;
        if (index >= 0 && index < 1000) {
            let char = charmap.indexOf(text[i]);
            screen[index] = char; update[index] = 1;
        }
    }
}

function Move(offset) {
    offset = Math.max(0, Math.min(999, offset));
    with (caret) {
        clearInterval(timer);

        update[pos] = 1; pos = offset;
        update[pos] = 1; blink = 1;
        Render();

        timer = setInterval(() => {
            update[pos] = 1; blink ^= 1;
            Render();
        }, 500);
    }
}

function Line(...lines) {
    for (let i = 0; i < lines.length; i++) {
        let offset = Math.floor(caret.pos / 40) * 40;
        Print(lines[i], offset);
        if (offset == 960) {
            Scroll(); Move(offset);
        }
        else Move(offset + 40);
    }
}

function Scroll() {
    for (let i = 0; i < 960; i++) screen[i] = screen[i + 40];
    for (let i = 960; i < 1000; i++) screen[i] = 0;
    update.fill(1);
}