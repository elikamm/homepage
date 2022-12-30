let reset = document.createElement("style");
reset.innerHTML =
    '@keyframes reset {' +
    '0% { top: 0%; left: 0%; width: 100%; height: 100%; }' +
    '50% { top: 49%; left: 0%; width: 100%; height: 2%; }' +
    '100% { top: 50%; left: 50%; width: 0%; height: 0%; }' +
    '}';
document.head.append(reset);

filter.style.animation = 'none';
source.style.animation = 'none';

flash.style.animation = 'reset .2s forwards';

setTimeout(() => {
    window.location.reload();
}, 500);