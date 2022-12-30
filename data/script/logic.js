var blocked = false, runtime = {};

window.addEventListener('load', () => {
    Print('**** ELIAS KAMM - @elikamm  ****', 44); Move(120);
    if (/mobi/i.test(window.navigator.userAgent))
        Line(
            '  +----------------------------------+',
            '  Ithis website works best on desktopI',
            '  +----------------------------------+', ''
            );
    Line(' type "HELP" and press return to start!');
    Line('', 'READY.'); Render();

    frame.addEventListener('mousedown', HandleMouse);
    frame.addEventListener('mousemove', HandleMouse);
});

function HandleMouse(event) {
    if (!blocked && event.which == 1) {
        let rect = frame.getBoundingClientRect(),
            x = Math.floor((event.clientX - rect.left) / rect.width * 40),
            y = Math.floor((event.clientY - rect.top) / rect.height * 25);

        Move(y * 40 + x);
    }
}

window.addEventListener('keydown', (event) => {
    let key = event.key;
    if (!event.metaKey && !event.ctrlKey && !blocked) {
        switch(key) {
            case 'ArrowUp': Move(caret.pos - 40); break;
            case 'ArrowDown': Move(caret.pos + 40); break;
            case 'ArrowLeft': Move(caret.pos - 1); break;
            case 'ArrowRight': Move(caret.pos + 1); break;
    
            case 'Backspace':
                Move(caret.pos - 1);
                Print(' ', caret.pos);
                break;

            case 'Enter':
                Run(); Line('', '');
                break;
        }
        
        key = key.toUpperCase();
        if (charmap.includes(key)) {
            Print(key, caret.pos);
            Move(caret.pos + 1);
        }
        Render();
    }
});

function Run() {
    blocked = true;

    let offset = Math.floor(caret.pos / 40) * 40, text = "";
    for (let i = offset; i < offset + 40; i++) {
        let char = charmap[screen[i]];
        if (char) text += char;
    }
    text = text.trim();

    let space = text.indexOf(" ");
    if (space < 0) space = text.length;

    let command = encodeURIComponent(text.toLowerCase().slice(0, space));
        args = text.slice(space + 1, text.length),
        request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4) {
            if (request.status == 200) {
                eval(request.responseText);
            }
            else {
                Line('?NOT FOUND', 'READY.');
                blocked = false;
            }
            Render();
        }
    });

    request.open('GET', `cmd/${command}.js`);
    request.send();
}