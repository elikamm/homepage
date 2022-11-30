var blocked = false;

window.addEventListener('load', () => {
    Print('**** ELIAS KAMM - @elikamm  ****', 44);
    Print('type "HELP" and press return to start!', 121);
    Print('READY.', 200); Move(240); Render();
});

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