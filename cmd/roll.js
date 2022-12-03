let roll = document.createElement("style");
roll.innerHTML = '@keyframes roll { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }';
document.head.append(roll);

with (content) {
    style.animation = ''; offsetHeight;
    style.animation = 'roll 2s';
}

setTimeout(() => {
    Line('READY.'); blocked = false;
}, 1500);
setTimeout(() => {
    content.style.animation = ''; roll.remove();
}, 2000);