Line(' +------------------------------------+');
    
if (runtime['helped']) {
    Line(
        ' IHello again!                        I',
        ' I                                    I',
        ' Icheck out some more commands..      I',
        ` I  "INFO", "LIST", "RAND" or "HACK"  I`,
        ' I                                    I',
        ' I        (type "RESET" to start over)I'
    );
}
else {
    Line(
        ' IHello, this is the "HELP" command!  I',
        ' I                                    I',
        ' Ithere are many other commands that  I',
        ' Ican do many fancy things..          I',
        ' I                                    I',
        ' I       try: "INFO", "LIST" or "HACK"I'
    );
}

Line (
    ' +------------------------------------+',
    '', 'READY.'
);

runtime['helped'] = true;
blocked = false;