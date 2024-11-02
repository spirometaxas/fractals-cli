const { SierpinskiHexagon } = require('../../src/fractals/sierpinskiHexagon');
const { Utils } = require('../../src/utils');

describe('SierpinskiHexagon Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '▲▼▲',
            '▼▲▼',
        ];

        let result = new SierpinskiHexagon().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            '  ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼  ',
            '▲▼▲     ▲▼▲',
            '▼▲▼     ▼▲▼',
            '  ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼  ',
        ];

        let result = new SierpinskiHexagon().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '      ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲      ',
            '      ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼      ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '  ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼  ',
            '▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲',
            '▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼',
            '  ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼  ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '      ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲      ',
            '      ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼      ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
        ];

        let result = new SierpinskiHexagon().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                  ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲                  ',
            '                  ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼                  ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '      ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                                                 ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲      ',
            '      ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                                                 ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼      ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '  ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                                         ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                                         ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼  ',
            '▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲                                     ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲',
            '▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼                                     ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼',
            '  ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                                         ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                                         ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼  ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '      ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                                                 ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲      ',
            '      ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                                                 ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼      ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                  ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲                  ',
            '                  ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼                  ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
        ];

        let result = new SierpinskiHexagon().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 step=0', () => {
        let expected = [
            '                          ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                          ',
            '                         ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                         ',
            '                        ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                        ',
            '                       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                       ',
            '                      ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                      ',
            '                     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                     ',
            '                    ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                    ',
            '                   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                   ',
            '                  ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                  ',
            '                 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                 ',
            '                ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                ',
            '               ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲               ',
            '              ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲              ',
            '             ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲             ',
            '            ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲            ',
            '           ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲           ',
            '          ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲          ',
            '         ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲         ',
            '        ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲        ',
            '       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲       ',
            '      ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲      ',
            '     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲     ',
            '    ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲    ',
            '   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲   ',
            '  ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲  ',
            ' ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ ',
            '▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲',
            '▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼',
            ' ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ ',
            '  ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼  ',
            '   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼   ',
            '    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼    ',
            '     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼     ',
            '      ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼      ',
            '       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼       ',
            '        ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼        ',
            '         ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼         ',
            '          ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼          ',
            '           ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼           ',
            '            ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼            ',
            '             ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼             ',
            '              ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼              ',
            '               ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼               ',
            '                ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                ',
            '                 ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                 ',
            '                  ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                  ',
            '                   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                   ',
            '                    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                    ',
            '                     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                     ',
            '                      ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                      ',
            '                       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                       ',
            '                        ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                        ',
            '                         ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                         ',
            '                          ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                          ',
        ];

        let result = new SierpinskiHexagon().create(3, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 step=1', () => {
        let expected = [
            '                          ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                          ',
            '                         ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                         ',
            '                        ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                        ',
            '                       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲           ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                       ',
            '                      ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲         ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                      ',
            '                     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                     ',
            '                    ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                    ',
            '                   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                   ',
            '                  ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                  ',
            '                  ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                  ',
            '                   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                   ',
            '                    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                    ',
            '                     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                     ',
            '                      ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼         ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                      ',
            '                       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼           ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                       ',
            '                        ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                        ',
            '                         ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                         ',
            '                          ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                          ',
            '        ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                                     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲        ',
            '       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                                   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲       ',
            '      ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                                 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲      ',
            '     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                               ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲     ',
            '    ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                             ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲    ',
            '   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                           ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲   ',
            '  ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                         ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲  ',
            ' ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ ',
            '▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                                     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲',
            '▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼',
            ' ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ ',
            '  ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                         ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼  ',
            '   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                           ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼   ',
            '    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                             ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼    ',
            '     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                               ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼     ',
            '      ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                                 ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼      ',
            '       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                                   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼       ',
            '        ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                                                     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼        ',
            '                          ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                          ',
            '                         ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                         ',
            '                        ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                        ',
            '                       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲           ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                       ',
            '                      ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲         ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                      ',
            '                     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲       ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                     ',
            '                    ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                    ',
            '                   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                   ',
            '                  ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲                  ',
            '                  ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                  ',
            '                   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                   ',
            '                    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                    ',
            '                     ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                     ',
            '                      ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼         ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                      ',
            '                       ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼           ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                       ',
            '                        ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                        ',
            '                         ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                         ',
            '                          ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼                          ',
        ];

        let result = new SierpinskiHexagon().create(3, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 step=2', () => {
        let expected = [
            '                          ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                          ',
            '                         ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲                         ',
            '                        ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲                        ',
            '                        ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼                        ',
            '                         ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼                         ',
            '                          ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                          ',
            '                    ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲                    ',
            '                   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲                   ',
            '                  ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲                  ',
            '                  ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼                  ',
            '                   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼                   ',
            '                    ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼                    ',
            '                          ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                          ',
            '                         ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲                         ',
            '                        ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲                        ',
            '                        ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼                        ',
            '                         ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼                         ',
            '                          ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                          ',
            '        ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                                                     ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲        ',
            '       ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲                                                   ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲       ',
            '      ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲                                                 ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲      ',
            '      ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼                                                 ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼      ',
            '       ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼                                                   ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼       ',
            '        ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                                                     ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼        ',
            '  ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲                                         ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲  ',
            ' ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲                                       ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲ ',
            '▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲                                     ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲',
            '▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼                                     ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼',
            ' ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼                                       ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼ ',
            '  ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼                                         ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼  ',
            '        ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                                                     ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲        ',
            '       ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲                                                   ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲       ',
            '      ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲                                                 ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲      ',
            '      ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼                                                 ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼      ',
            '       ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼                                                   ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼       ',
            '        ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                                                     ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼        ',
            '                          ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                          ',
            '                         ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲                         ',
            '                        ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲                        ',
            '                        ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼                        ',
            '                         ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼                         ',
            '                          ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                          ',
            '                    ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲                    ',
            '                   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲                   ',
            '                  ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲                  ',
            '                  ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼                  ',
            '                   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼                   ',
            '                    ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼                    ',
            '                          ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                 ▲▼▲▼▲▼▲     ▲▼▲▼▲▼▲                          ',
            '                         ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲               ▲▼▲▼▲▼▲▼▲   ▲▼▲▼▲▼▲▼▲                         ',
            '                        ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲             ▲▼▲▼▲▼▲▼▲▼▲ ▲▼▲▼▲▼▲▼▲▼▲                        ',
            '                        ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼             ▼▲▼▲▼▲▼▲▼▲▼ ▼▲▼▲▼▲▼▲▼▲▼                        ',
            '                         ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼               ▼▲▼▲▼▲▼▲▼   ▼▲▼▲▼▲▼▲▼                         ',
            '                          ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                 ▼▲▼▲▼▲▼     ▼▲▼▲▼▲▼                          ',
        ];

        let result = new SierpinskiHexagon().create(3, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 step=3', () => {
        let expected = [
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                  ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲                  ',
            '                  ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼                  ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '      ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                                                 ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲      ',
            '      ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                                                 ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼      ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '  ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                                         ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                                         ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼  ',
            '▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲                                     ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲',
            '▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼                                     ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼',
            '  ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                                         ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲  ',
            '  ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                                         ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼  ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '      ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                                                 ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲      ',
            '      ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                                                 ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼      ',
            '        ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                                                     ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲        ',
            '        ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                                                     ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                  ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲                  ',
            '                  ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼                  ',
            '                    ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲                    ',
            '                    ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼                    ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
            '                        ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲             ▲▼▲     ▲▼▲ ▲▼▲     ▲▼▲                        ',
            '                        ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼             ▼▲▼     ▼▲▼ ▼▲▼     ▼▲▼                        ',
            '                          ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                 ▲▼▲ ▲▼▲     ▲▼▲ ▲▼▲                          ',
            '                          ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                 ▼▲▼ ▼▲▼     ▼▲▼ ▼▲▼                          ',
        ];

        let result = new SierpinskiHexagon().create(3, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});