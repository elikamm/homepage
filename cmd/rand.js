let lines = [' ', ' ', ' '], text = [],
    chars = 'bcdfghjklmnpqrstvwxyz', vocals = 'aeiou',
    faces = [
        ['   ', '  *', '  *', '* *', '* *', '* *'],
        [' * ', '   ', ' * ', '   ', ' * ', '* *'],
        ['   ', '*  ', '*  ', '* *', '* *', '* *'],
    ];

for (let i = 0; i < 5; i++) {
    let roll = Math.round(Math.random() * 5);

    for (let j = 0; j < 3; j++) {
        lines[j] += `I${faces[j][roll]}I`;
    }
}

let start = Math.round(Math.random());
for (let i = start; i < 3+start + Math.random() * 5; i++) {
    let vocal = i % 2 == 0;
    text += (vocal?vocals:chars)[Math.round(Math.random() * (vocal?4:20))]
}

Line(
    ` ${'+---+'.repeat(5)} ${Math.random() < .5 ? 'HEAD' : 'TAILS'}`,
    lines[0],
    `${lines[1]} ${Math.round(Math.random() * 100)}/100`,
    lines[2],
    ` ${'+---+'.repeat(5)} @${text}`,
    '', 'READY.'
);
blocked = false;