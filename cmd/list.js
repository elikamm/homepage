Line(
    'NAME     URL                   COMMAND',
    '----------------------------------------',
);
    
let lines = [
    'E-Mail   mail@eliaskamm.com    MAIL',
    'Twitter  twitter.com/eliaskamm TWEET',
    'PayPal   paypal.me/elikamm     PAY',
    'GitHub   github.com/elikamm    GIT'
];

for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
        Line(lines[i]);
    }, 150 + i * 50);
}

setTimeout(() => {
   Line('', 'READY.');
   blocked = false;
}, 250 + lines.length * 50);