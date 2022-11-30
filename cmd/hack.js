front = "#33ff33";
back = "#000000"
update.fill(1);

with (document.documentElement.style) {
    setProperty('--front', '#33ff33');
    setProperty('--back', '#000000');
}


Line('READY.');
blocked = false;