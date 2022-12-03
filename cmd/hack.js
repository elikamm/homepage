front = "#33ff33"; back = "";
update.fill(1);

with (document.documentElement.style) {
    setProperty('--front', '#33ff33');
    setProperty('--back', '#000000');
}

document.body.style.backgroundImage = "url(data/asset/matrix.gif)";

Line('READY.');
blocked = false;