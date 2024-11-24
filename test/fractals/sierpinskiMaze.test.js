const { SierpinskiMaze } = require('../../src/fractals/sierpinskiMaze');
const { Utils } = require('../../src/utils');

describe('SierpinskiMaze Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '__',
        ];

        let result = new SierpinskiMaze().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            ' ╱  ',
            '__ ╲',
        ];

        let result = new SierpinskiMaze().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '   ╱    ',
            '  __ ╲  ',
            ' ╱   ╱  ',
            '__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '       ╱        ',
            '      __ ╲      ',
            '     ╱   ╱      ',
            '    __ ╲__ ╲    ',
            '   ╱       ╱    ',
            '  __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '               ╱                ',
            '              __ ╲              ',
            '             ╱   ╱              ',
            '            __ ╲__ ╲            ',
            '           ╱       ╱            ',
            '          __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱        ',
            '      __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5', () => {
        let expected = [
            '                               ╱                                ',
            '                              __ ╲                              ',
            '                             ╱   ╱                              ',
            '                            __ ╲__ ╲                            ',
            '                           ╱       ╱                            ',
            '                          __ ╲    __ ╲                          ',
            '                         ╱   ╱   ╱   ╱                          ',
            '                        __ ╲__ ╲__ ╲__ ╲                        ',
            '                       ╱               ╱                        ',
            '                      __ ╲            __ ╲                      ',
            '                     ╱   ╱           ╱   ╱                      ',
            '                    __ ╲__ ╲        __ ╲__ ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  __ ╲    __ ╲    __ ╲    __ ╲                  ',
            '                 ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱                  ',
            '                __ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲                ',
            '               ╱                               ╱                ',
            '              __ ╲                            __ ╲              ',
            '             ╱   ╱                           ╱   ╱              ',
            '            __ ╲__ ╲                        __ ╲__ ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          __ ╲    __ ╲                    __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱                   ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲                __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      __ ╲            __ ╲            __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱           ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(5, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=0', () => {
        let expected = [
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '________________________________________________________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱                                               ',
            '                                                ╲               ',
            '                                                 ╲              ',
            '                                                  ╲             ',
            '                                                   ╲            ',
            '                                                    ╲           ',
            '                                                     ╲          ',
            '                                                      ╲         ',
            '                                                       ╲        ',
            '                                                        ╲       ',
            '                                                         ╲      ',
            '                                                          ╲     ',
            '                                                           ╲    ',
            '                                                            ╲   ',
            '                                                             ╲  ',
            '                                                              ╲ ',
            '________________________________                               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                ________________               ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '             ╱                               ╱                  ',
            '            ╱                               ╱                   ',
            '           ╱                               ╱                    ',
            '          ╱                               ╱                     ',
            '         ╱                               ╱                      ',
            '        ╱                               ╱                       ',
            '                        ╲                               ╲       ',
            '                         ╲                               ╲      ',
            '                          ╲                               ╲     ',
            '                           ╲                               ╲    ',
            '                            ╲                               ╲   ',
            '                             ╲                               ╲  ',
            '                              ╲                               ╲ ',
            '________________               ╲________________               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                        ________       ╲                        ',
            '                       ╱               ╱                        ',
            '                      ╱               ╱                         ',
            '                     ╱               ╱                          ',
            '                    ╱               ╱                           ',
            '                            ╲               ╲                   ',
            '                             ╲               ╲                  ',
            '                              ╲               ╲                 ',
            '                ________       ╲________       ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '             ╱                               ╱                  ',
            '            ╱                               ╱                   ',
            '                    ╲                               ╲           ',
            '                     ╲                               ╲          ',
            '                      ╲                               ╲         ',
            '        ________       ╲                ________       ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      ╱               ╱               ╱               ╱         ',
            '     ╱               ╱               ╱               ╱          ',
            '    ╱               ╱               ╱               ╱           ',
            '            ╲               ╲               ╲               ╲   ',
            '             ╲               ╲               ╲               ╲  ',
            '              ╲               ╲               ╲               ╲ ',
            '________       ╲________       ╲________       ╲________       ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                                  ╲                             ',
            '                            ____   ╲                            ',
            '                           ╱       ╱                            ',
            '                          ╱       ╱                             ',
            '                              ╲       ╲                         ',
            '                        ____   ╲____   ╲                        ',
            '                       ╱               ╱                        ',
            '                      ╱               ╱                         ',
            '                          ╲               ╲                     ',
            '                    ____   ╲        ____   ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  ╱       ╱       ╱       ╱                     ',
            '                      ╲       ╲       ╲       ╲                 ',
            '                ____   ╲____   ╲____   ╲____   ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '                  ╲                               ╲             ',
            '            ____   ╲                        ____   ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          ╱       ╱                       ╱       ╱             ',
            '              ╲       ╲                       ╲       ╲         ',
            '        ____   ╲____   ╲                ____   ╲____   ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      ╱               ╱               ╱               ╱         ',
            '          ╲               ╲               ╲               ╲     ',
            '    ____   ╲        ____   ╲        ____   ╲        ____   ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱     ',
            '      ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲ ',
            '____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5', () => {
        let expected = [
            '                               ╱                                ',
            '                              __ ╲                              ',
            '                             ╱   ╱                              ',
            '                            __ ╲__ ╲                            ',
            '                           ╱       ╱                            ',
            '                          __ ╲    __ ╲                          ',
            '                         ╱   ╱   ╱   ╱                          ',
            '                        __ ╲__ ╲__ ╲__ ╲                        ',
            '                       ╱               ╱                        ',
            '                      __ ╲            __ ╲                      ',
            '                     ╱   ╱           ╱   ╱                      ',
            '                    __ ╲__ ╲        __ ╲__ ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  __ ╲    __ ╲    __ ╲    __ ╲                  ',
            '                 ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱                  ',
            '                __ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲                ',
            '               ╱                               ╱                ',
            '              __ ╲                            __ ╲              ',
            '             ╱   ╱                           ╱   ╱              ',
            '            __ ╲__ ╲                        __ ╲__ ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          __ ╲    __ ╲                    __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱                   ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲                __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      __ ╲            __ ╲            __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱           ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 5 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true', () => {
        let expected = [
            '__',
        ];

        let result = new SierpinskiMaze().create(0, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true', () => {
        let expected = [
            '  ╲ ',
            '╱ __',
        ];

        let result = new SierpinskiMaze().create(1, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true', () => {
        let expected = [
            '    ╲   ',
            '  ╱ __  ',
            '  ╲   ╲ ',
            '╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(2, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true', () => {
        let expected = [
            '        ╲       ',
            '      ╱ __      ',
            '      ╲   ╲     ',
            '    ╱ __╱ __    ',
            '    ╲       ╲   ',
            '  ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(3, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true', () => {
        let expected = [
            '                ╲               ',
            '              ╱ __              ',
            '              ╲   ╲             ',
            '            ╱ __╱ __            ',
            '            ╲       ╲           ',
            '          ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲       ',
            '      ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(4, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true', () => {
        let expected = [
            '                                ╲                               ',
            '                              ╱ __                              ',
            '                              ╲   ╲                             ',
            '                            ╱ __╱ __                            ',
            '                            ╲       ╲                           ',
            '                          ╱ __    ╱ __                          ',
            '                          ╲   ╲   ╲   ╲                         ',
            '                        ╱ __╱ __╱ __╱ __                        ',
            '                        ╲               ╲                       ',
            '                      ╱ __            ╱ __                      ',
            '                      ╲   ╲           ╲   ╲                     ',
            '                    ╱ __╱ __        ╱ __╱ __                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                  ╱ __    ╱ __    ╱ __    ╱ __                  ',
            '                  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲                 ',
            '                ╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __                ',
            '                ╲                               ╲               ',
            '              ╱ __                            ╱ __              ',
            '              ╲   ╲                           ╲   ╲             ',
            '            ╱ __╱ __                        ╱ __╱ __            ',
            '            ╲       ╲                       ╲       ╲           ',
            '          ╱ __    ╱ __                    ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲                   ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __                ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲               ╲               ╲       ',
            '      ╱ __            ╱ __            ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲           ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __        ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(5, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=0 inverse=true', () => {
        let expected = [
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '________________________________________________________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 0, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1 inverse=true', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                                               ╲                ',
            '               ╱                                                ',
            '              ╱                                                 ',
            '             ╱                                                  ',
            '            ╱                                                   ',
            '           ╱                                                    ',
            '          ╱                                                     ',
            '         ╱                                                      ',
            '        ╱                                                       ',
            '       ╱                                                        ',
            '      ╱                                                         ',
            '     ╱                                                          ',
            '    ╱                                                           ',
            '   ╱                                                            ',
            '  ╱                                                             ',
            ' ╱                                                              ',
            '╱                               ________________________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 1, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2 inverse=true', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱               ________________                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '                  ╲                               ╲             ',
            '                   ╲                               ╲            ',
            '                    ╲                               ╲           ',
            '                     ╲                               ╲          ',
            '                      ╲                               ╲         ',
            '                       ╲                               ╲        ',
            '       ╱                               ╱                        ',
            '      ╱                               ╱                         ',
            '     ╱                               ╱                          ',
            '    ╱                               ╱                           ',
            '   ╱                               ╱                            ',
            '  ╱                               ╱                             ',
            ' ╱                               ╱                              ',
            '╱               ________________╱               ________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 2, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3 inverse=true', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱       ________                        ',
            '                        ╲               ╲                       ',
            '                         ╲               ╲                      ',
            '                          ╲               ╲                     ',
            '                           ╲               ╲                    ',
            '                   ╱               ╱                            ',
            '                  ╱               ╱                             ',
            '                 ╱               ╱                              ',
            '                ╱       ________╱       ________                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '                  ╲                               ╲             ',
            '                   ╲                               ╲            ',
            '           ╱                               ╱                    ',
            '          ╱                               ╱                     ',
            '         ╱                               ╱                      ',
            '        ╱       ________                ╱       ________        ',
            '        ╲               ╲               ╲               ╲       ',
            '         ╲               ╲               ╲               ╲      ',
            '          ╲               ╲               ╲               ╲     ',
            '           ╲               ╲               ╲               ╲    ',
            '   ╱               ╱               ╱               ╱            ',
            '  ╱               ╱               ╱               ╱             ',
            ' ╱               ╱               ╱               ╱              ',
            '╱       ________╱       ________╱       ________╱       ________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 3, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4 inverse=true', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                             ╱                                  ',
            '                            ╱   ____                            ',
            '                            ╲       ╲                           ',
            '                             ╲       ╲                          ',
            '                         ╱       ╱                              ',
            '                        ╱   ____╱   ____                        ',
            '                        ╲               ╲                       ',
            '                         ╲               ╲                      ',
            '                     ╱               ╱                          ',
            '                    ╱   ____        ╱   ____                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                     ╲       ╲       ╲       ╲                  ',
            '                 ╱       ╱       ╱       ╱                      ',
            '                ╱   ____╱   ____╱   ____╱   ____                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '             ╱                               ╱                  ',
            '            ╱   ____                        ╱   ____            ',
            '            ╲       ╲                       ╲       ╲           ',
            '             ╲       ╲                       ╲       ╲          ',
            '         ╱       ╱                       ╱       ╱              ',
            '        ╱   ____╱   ____                ╱   ____╱   ____        ',
            '        ╲               ╲               ╲               ╲       ',
            '         ╲               ╲               ╲               ╲      ',
            '     ╱               ╱               ╱               ╱          ',
            '    ╱   ____        ╱   ____        ╱   ____        ╱   ____    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '     ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲  ',
            ' ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱      ',
            '╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____',
        ];

        let result = new SierpinskiMaze().create(5, { step: 4, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5 inverse=true', () => {
        let expected = [
            '                                ╲                               ',
            '                              ╱ __                              ',
            '                              ╲   ╲                             ',
            '                            ╱ __╱ __                            ',
            '                            ╲       ╲                           ',
            '                          ╱ __    ╱ __                          ',
            '                          ╲   ╲   ╲   ╲                         ',
            '                        ╱ __╱ __╱ __╱ __                        ',
            '                        ╲               ╲                       ',
            '                      ╱ __            ╱ __                      ',
            '                      ╲   ╲           ╲   ╲                     ',
            '                    ╱ __╱ __        ╱ __╱ __                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                  ╱ __    ╱ __    ╱ __    ╱ __                  ',
            '                  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲                 ',
            '                ╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __                ',
            '                ╲                               ╲               ',
            '              ╱ __                            ╱ __              ',
            '              ╲   ╲                           ╲   ╲             ',
            '            ╱ __╱ __                        ╱ __╱ __            ',
            '            ╲       ╲                       ╲       ╲           ',
            '          ╱ __    ╱ __                    ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲                   ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __                ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲               ╲               ╲       ',
            '      ╱ __            ╱ __            ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲           ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __        ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(5, { step: 5, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=left', () => {
        let expected = [
            ' ╲',
        ];

        let result = new SierpinskiMaze().create(0, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=left', () => {
        let expected = [
            ' ╱  ',
            '__ ╲',
        ];

        let result = new SierpinskiMaze().create(1, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=left', () => {
        let expected = [
            '   ╱    ',
            '  __ ╲  ',
            ' ╱   ╱  ',
            '__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(2, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=left', () => {
        let expected = [
            '       ╱        ',
            '      __ ╲      ',
            '     ╱   ╱      ',
            '    __ ╲__ ╲    ',
            '   ╱       ╱    ',
            '  __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(3, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=left', () => {
        let expected = [
            '               ╱                ',
            '              __ ╲              ',
            '             ╱   ╱              ',
            '            __ ╲__ ╲            ',
            '           ╱       ╱            ',
            '          __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱        ',
            '      __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(4, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                              __ ╲                              ',
            '                             ╱   ╱                              ',
            '                            __ ╲__ ╲                            ',
            '                           ╱       ╱                            ',
            '                          __ ╲    __ ╲                          ',
            '                         ╱   ╱   ╱   ╱                          ',
            '                        __ ╲__ ╲__ ╲__ ╲                        ',
            '                       ╱               ╱                        ',
            '                      __ ╲            __ ╲                      ',
            '                     ╱   ╱           ╱   ╱                      ',
            '                    __ ╲__ ╲        __ ╲__ ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  __ ╲    __ ╲    __ ╲    __ ╲                  ',
            '                 ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱                  ',
            '                __ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲                ',
            '               ╱                               ╱                ',
            '              __ ╲                            __ ╲              ',
            '             ╱   ╱                           ╱   ╱              ',
            '            __ ╲__ ╲                        __ ╲__ ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          __ ╲    __ ╲                    __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱                   ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲                __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      __ ╲            __ ╲            __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱           ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(5, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=0 rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                                               ╲                ',
            '                                                ╲               ',
            '                                                 ╲              ',
            '                                                  ╲             ',
            '                                                   ╲            ',
            '                                                    ╲           ',
            '                                                     ╲          ',
            '                                                      ╲         ',
            '                                                       ╲        ',
            '                                                        ╲       ',
            '                                                         ╲      ',
            '                                                          ╲     ',
            '                                                           ╲    ',
            '                                                            ╲   ',
            '                                                             ╲  ',
            '                                                              ╲ ',
            '                                                               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 0, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱                                               ',
            '                                                ╲               ',
            '                                                 ╲              ',
            '                                                  ╲             ',
            '                                                   ╲            ',
            '                                                    ╲           ',
            '                                                     ╲          ',
            '                                                      ╲         ',
            '                                                       ╲        ',
            '                                                        ╲       ',
            '                                                         ╲      ',
            '                                                          ╲     ',
            '                                                           ╲    ',
            '                                                            ╲   ',
            '                                                             ╲  ',
            '                                                              ╲ ',
            '________________________________                               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 1, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                ________________               ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '             ╱                               ╱                  ',
            '            ╱                               ╱                   ',
            '           ╱                               ╱                    ',
            '          ╱                               ╱                     ',
            '         ╱                               ╱                      ',
            '        ╱                               ╱                       ',
            '                        ╲                               ╲       ',
            '                         ╲                               ╲      ',
            '                          ╲                               ╲     ',
            '                           ╲                               ╲    ',
            '                            ╲                               ╲   ',
            '                             ╲                               ╲  ',
            '                              ╲                               ╲ ',
            '________________               ╲________________               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 2, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                        ________       ╲                        ',
            '                       ╱               ╱                        ',
            '                      ╱               ╱                         ',
            '                     ╱               ╱                          ',
            '                    ╱               ╱                           ',
            '                            ╲               ╲                   ',
            '                             ╲               ╲                  ',
            '                              ╲               ╲                 ',
            '                ________       ╲________       ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '             ╱                               ╱                  ',
            '            ╱                               ╱                   ',
            '                    ╲                               ╲           ',
            '                     ╲                               ╲          ',
            '                      ╲                               ╲         ',
            '        ________       ╲                ________       ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      ╱               ╱               ╱               ╱         ',
            '     ╱               ╱               ╱               ╱          ',
            '    ╱               ╱               ╱               ╱           ',
            '            ╲               ╲               ╲               ╲   ',
            '             ╲               ╲               ╲               ╲  ',
            '              ╲               ╲               ╲               ╲ ',
            '________       ╲________       ╲________       ╲________       ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 3, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                                  ╲                             ',
            '                            ____   ╲                            ',
            '                           ╱       ╱                            ',
            '                          ╱       ╱                             ',
            '                              ╲       ╲                         ',
            '                        ____   ╲____   ╲                        ',
            '                       ╱               ╱                        ',
            '                      ╱               ╱                         ',
            '                          ╲               ╲                     ',
            '                    ____   ╲        ____   ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  ╱       ╱       ╱       ╱                     ',
            '                      ╲       ╲       ╲       ╲                 ',
            '                ____   ╲____   ╲____   ╲____   ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '                  ╲                               ╲             ',
            '            ____   ╲                        ____   ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          ╱       ╱                       ╱       ╱             ',
            '              ╲       ╲                       ╲       ╲         ',
            '        ____   ╲____   ╲                ____   ╲____   ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      ╱               ╱               ╱               ╱         ',
            '          ╲               ╲               ╲               ╲     ',
            '    ____   ╲        ____   ╲        ____   ╲        ____   ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱     ',
            '      ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲ ',
            '____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 4, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                              __ ╲                              ',
            '                             ╱   ╱                              ',
            '                            __ ╲__ ╲                            ',
            '                           ╱       ╱                            ',
            '                          __ ╲    __ ╲                          ',
            '                         ╱   ╱   ╱   ╱                          ',
            '                        __ ╲__ ╲__ ╲__ ╲                        ',
            '                       ╱               ╱                        ',
            '                      __ ╲            __ ╲                      ',
            '                     ╱   ╱           ╱   ╱                      ',
            '                    __ ╲__ ╲        __ ╲__ ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  __ ╲    __ ╲    __ ╲    __ ╲                  ',
            '                 ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱                  ',
            '                __ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲                ',
            '               ╱                               ╱                ',
            '              __ ╲                            __ ╲              ',
            '             ╱   ╱                           ╱   ╱              ',
            '            __ ╲__ ╲                        __ ╲__ ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          __ ╲    __ ╲                    __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱                   ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲                __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      __ ╲            __ ╲            __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱           ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 5, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true rotation=left', () => {
        let expected = [
            ' ╲',
        ];

        let result = new SierpinskiMaze().create(0, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=left', () => {
        let expected = [
            '  ╲ ',
            '╱ __',
        ];

        let result = new SierpinskiMaze().create(1, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=left', () => {
        let expected = [
            '    ╲   ',
            '  ╱ __  ',
            '  ╲   ╲ ',
            '╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(2, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=left', () => {
        let expected = [
            '        ╲       ',
            '      ╱ __      ',
            '      ╲   ╲     ',
            '    ╱ __╱ __    ',
            '    ╲       ╲   ',
            '  ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(3, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=left', () => {
        let expected = [
            '                ╲               ',
            '              ╱ __              ',
            '              ╲   ╲             ',
            '            ╱ __╱ __            ',
            '            ╲       ╲           ',
            '          ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲       ',
            '      ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(4, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                              ╱ __                              ',
            '                              ╲   ╲                             ',
            '                            ╱ __╱ __                            ',
            '                            ╲       ╲                           ',
            '                          ╱ __    ╱ __                          ',
            '                          ╲   ╲   ╲   ╲                         ',
            '                        ╱ __╱ __╱ __╱ __                        ',
            '                        ╲               ╲                       ',
            '                      ╱ __            ╱ __                      ',
            '                      ╲   ╲           ╲   ╲                     ',
            '                    ╱ __╱ __        ╱ __╱ __                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                  ╱ __    ╱ __    ╱ __    ╱ __                  ',
            '                  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲                 ',
            '                ╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __                ',
            '                ╲                               ╲               ',
            '              ╱ __                            ╱ __              ',
            '              ╲   ╲                           ╲   ╲             ',
            '            ╱ __╱ __                        ╱ __╱ __            ',
            '            ╲       ╲                       ╲       ╲           ',
            '          ╱ __    ╱ __                    ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲                   ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __                ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲               ╲               ╲       ',
            '      ╱ __            ╱ __            ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲           ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __        ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(5, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=0 inverse=true rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                                               ╲                ',
            '                                                ╲               ',
            '                                                 ╲              ',
            '                                                  ╲             ',
            '                                                   ╲            ',
            '                                                    ╲           ',
            '                                                     ╲          ',
            '                                                      ╲         ',
            '                                                       ╲        ',
            '                                                        ╲       ',
            '                                                         ╲      ',
            '                                                          ╲     ',
            '                                                           ╲    ',
            '                                                            ╲   ',
            '                                                             ╲  ',
            '                                                              ╲ ',
            '                                                               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 0, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1 inverse=true rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                                               ╲                ',
            '               ╱                                                ',
            '              ╱                                                 ',
            '             ╱                                                  ',
            '            ╱                                                   ',
            '           ╱                                                    ',
            '          ╱                                                     ',
            '         ╱                                                      ',
            '        ╱                                                       ',
            '       ╱                                                        ',
            '      ╱                                                         ',
            '     ╱                                                          ',
            '    ╱                                                           ',
            '   ╱                                                            ',
            '  ╱                                                             ',
            ' ╱                                                              ',
            '╱                               ________________________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 1, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2 inverse=true rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱               ________________                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '                  ╲                               ╲             ',
            '                   ╲                               ╲            ',
            '                    ╲                               ╲           ',
            '                     ╲                               ╲          ',
            '                      ╲                               ╲         ',
            '                       ╲                               ╲        ',
            '       ╱                               ╱                        ',
            '      ╱                               ╱                         ',
            '     ╱                               ╱                          ',
            '    ╱                               ╱                           ',
            '   ╱                               ╱                            ',
            '  ╱                               ╱                             ',
            ' ╱                               ╱                              ',
            '╱               ________________╱               ________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 2, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3 inverse=true rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱       ________                        ',
            '                        ╲               ╲                       ',
            '                         ╲               ╲                      ',
            '                          ╲               ╲                     ',
            '                           ╲               ╲                    ',
            '                   ╱               ╱                            ',
            '                  ╱               ╱                             ',
            '                 ╱               ╱                              ',
            '                ╱       ________╱       ________                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '                  ╲                               ╲             ',
            '                   ╲                               ╲            ',
            '           ╱                               ╱                    ',
            '          ╱                               ╱                     ',
            '         ╱                               ╱                      ',
            '        ╱       ________                ╱       ________        ',
            '        ╲               ╲               ╲               ╲       ',
            '         ╲               ╲               ╲               ╲      ',
            '          ╲               ╲               ╲               ╲     ',
            '           ╲               ╲               ╲               ╲    ',
            '   ╱               ╱               ╱               ╱            ',
            '  ╱               ╱               ╱               ╱             ',
            ' ╱               ╱               ╱               ╱              ',
            '╱       ________╱       ________╱       ________╱       ________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 3, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4 inverse=true rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                             ╱                                  ',
            '                            ╱   ____                            ',
            '                            ╲       ╲                           ',
            '                             ╲       ╲                          ',
            '                         ╱       ╱                              ',
            '                        ╱   ____╱   ____                        ',
            '                        ╲               ╲                       ',
            '                         ╲               ╲                      ',
            '                     ╱               ╱                          ',
            '                    ╱   ____        ╱   ____                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                     ╲       ╲       ╲       ╲                  ',
            '                 ╱       ╱       ╱       ╱                      ',
            '                ╱   ____╱   ____╱   ____╱   ____                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '             ╱                               ╱                  ',
            '            ╱   ____                        ╱   ____            ',
            '            ╲       ╲                       ╲       ╲           ',
            '             ╲       ╲                       ╲       ╲          ',
            '         ╱       ╱                       ╱       ╱              ',
            '        ╱   ____╱   ____                ╱   ____╱   ____        ',
            '        ╲               ╲               ╲               ╲       ',
            '         ╲               ╲               ╲               ╲      ',
            '     ╱               ╱               ╱               ╱          ',
            '    ╱   ____        ╱   ____        ╱   ____        ╱   ____    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '     ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲  ',
            ' ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱      ',
            '╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____',
        ];

        let result = new SierpinskiMaze().create(5, { step: 4, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5 inverse=true rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                              ╱ __                              ',
            '                              ╲   ╲                             ',
            '                            ╱ __╱ __                            ',
            '                            ╲       ╲                           ',
            '                          ╱ __    ╱ __                          ',
            '                          ╲   ╲   ╲   ╲                         ',
            '                        ╱ __╱ __╱ __╱ __                        ',
            '                        ╲               ╲                       ',
            '                      ╱ __            ╱ __                      ',
            '                      ╲   ╲           ╲   ╲                     ',
            '                    ╱ __╱ __        ╱ __╱ __                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                  ╱ __    ╱ __    ╱ __    ╱ __                  ',
            '                  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲                 ',
            '                ╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __                ',
            '                ╲                               ╲               ',
            '              ╱ __                            ╱ __              ',
            '              ╲   ╲                           ╲   ╲             ',
            '            ╱ __╱ __                        ╱ __╱ __            ',
            '            ╲       ╲                       ╲       ╲           ',
            '          ╱ __    ╱ __                    ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲                   ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __                ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲               ╲               ╲       ',
            '      ╱ __            ╱ __            ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲           ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __        ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(5, { step: 5, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=right', () => {
        let expected = [
            '╱ ',
        ];

        let result = new SierpinskiMaze().create(0, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=right', () => {
        let expected = [
            ' ╱  ',
            '__ ╲',
        ];

        let result = new SierpinskiMaze().create(1, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=right', () => {
        let expected = [
            '   ╱    ',
            '  __ ╲  ',
            ' ╱   ╱  ',
            '__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(2, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=right', () => {
        let expected = [
            '       ╱        ',
            '      __ ╲      ',
            '     ╱   ╱      ',
            '    __ ╲__ ╲    ',
            '   ╱       ╱    ',
            '  __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(3, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=right', () => {
        let expected = [
            '               ╱                ',
            '              __ ╲              ',
            '             ╱   ╱              ',
            '            __ ╲__ ╲            ',
            '           ╱       ╱            ',
            '          __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱        ',
            '      __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(4, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              __ ╲                              ',
            '                             ╱   ╱                              ',
            '                            __ ╲__ ╲                            ',
            '                           ╱       ╱                            ',
            '                          __ ╲    __ ╲                          ',
            '                         ╱   ╱   ╱   ╱                          ',
            '                        __ ╲__ ╲__ ╲__ ╲                        ',
            '                       ╱               ╱                        ',
            '                      __ ╲            __ ╲                      ',
            '                     ╱   ╱           ╱   ╱                      ',
            '                    __ ╲__ ╲        __ ╲__ ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  __ ╲    __ ╲    __ ╲    __ ╲                  ',
            '                 ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱                  ',
            '                __ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲                ',
            '               ╱                               ╱                ',
            '              __ ╲                            __ ╲              ',
            '             ╱   ╱                           ╱   ╱              ',
            '            __ ╲__ ╲                        __ ╲__ ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          __ ╲    __ ╲                    __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱                   ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲                __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      __ ╲            __ ╲            __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱           ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(5, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=0 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱                                               ',
            '               ╱                                                ',
            '              ╱                                                 ',
            '             ╱                                                  ',
            '            ╱                                                   ',
            '           ╱                                                    ',
            '          ╱                                                     ',
            '         ╱                                                      ',
            '        ╱                                                       ',
            '       ╱                                                        ',
            '      ╱                                                         ',
            '     ╱                                                          ',
            '    ╱                                                           ',
            '   ╱                                                            ',
            '  ╱                                                             ',
            ' ╱                                                              ',
            '╱                                                               ',
        ];

        let result = new SierpinskiMaze().create(5, { step: 0, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱                                               ',
            '                                                ╲               ',
            '                                                 ╲              ',
            '                                                  ╲             ',
            '                                                   ╲            ',
            '                                                    ╲           ',
            '                                                     ╲          ',
            '                                                      ╲         ',
            '                                                       ╲        ',
            '                                                        ╲       ',
            '                                                         ╲      ',
            '                                                          ╲     ',
            '                                                           ╲    ',
            '                                                            ╲   ',
            '                                                             ╲  ',
            '                                                              ╲ ',
            '________________________________                               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 1, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                ________________               ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '             ╱                               ╱                  ',
            '            ╱                               ╱                   ',
            '           ╱                               ╱                    ',
            '          ╱                               ╱                     ',
            '         ╱                               ╱                      ',
            '        ╱                               ╱                       ',
            '                        ╲                               ╲       ',
            '                         ╲                               ╲      ',
            '                          ╲                               ╲     ',
            '                           ╲                               ╲    ',
            '                            ╲                               ╲   ',
            '                             ╲                               ╲  ',
            '                              ╲                               ╲ ',
            '________________               ╲________________               ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 2, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                        ________       ╲                        ',
            '                       ╱               ╱                        ',
            '                      ╱               ╱                         ',
            '                     ╱               ╱                          ',
            '                    ╱               ╱                           ',
            '                            ╲               ╲                   ',
            '                             ╲               ╲                  ',
            '                              ╲               ╲                 ',
            '                ________       ╲________       ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '             ╱                               ╱                  ',
            '            ╱                               ╱                   ',
            '                    ╲                               ╲           ',
            '                     ╲                               ╲          ',
            '                      ╲                               ╲         ',
            '        ________       ╲                ________       ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      ╱               ╱               ╱               ╱         ',
            '     ╱               ╱               ╱               ╱          ',
            '    ╱               ╱               ╱               ╱           ',
            '            ╲               ╲               ╲               ╲   ',
            '             ╲               ╲               ╲               ╲  ',
            '              ╲               ╲               ╲               ╲ ',
            '________       ╲________       ╲________       ╲________       ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 3, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                                  ╲                             ',
            '                            ____   ╲                            ',
            '                           ╱       ╱                            ',
            '                          ╱       ╱                             ',
            '                              ╲       ╲                         ',
            '                        ____   ╲____   ╲                        ',
            '                       ╱               ╱                        ',
            '                      ╱               ╱                         ',
            '                          ╲               ╲                     ',
            '                    ____   ╲        ____   ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  ╱       ╱       ╱       ╱                     ',
            '                      ╲       ╲       ╲       ╲                 ',
            '                ____   ╲____   ╲____   ╲____   ╲                ',
            '               ╱                               ╱                ',
            '              ╱                               ╱                 ',
            '                  ╲                               ╲             ',
            '            ____   ╲                        ____   ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          ╱       ╱                       ╱       ╱             ',
            '              ╲       ╲                       ╲       ╲         ',
            '        ____   ╲____   ╲                ____   ╲____   ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      ╱               ╱               ╱               ╱         ',
            '          ╲               ╲               ╲               ╲     ',
            '    ____   ╲        ____   ╲        ____   ╲        ____   ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱     ',
            '      ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲ ',
            '____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲____   ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 4, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              __ ╲                              ',
            '                             ╱   ╱                              ',
            '                            __ ╲__ ╲                            ',
            '                           ╱       ╱                            ',
            '                          __ ╲    __ ╲                          ',
            '                         ╱   ╱   ╱   ╱                          ',
            '                        __ ╲__ ╲__ ╲__ ╲                        ',
            '                       ╱               ╱                        ',
            '                      __ ╲            __ ╲                      ',
            '                     ╱   ╱           ╱   ╱                      ',
            '                    __ ╲__ ╲        __ ╲__ ╲                    ',
            '                   ╱       ╱       ╱       ╱                    ',
            '                  __ ╲    __ ╲    __ ╲    __ ╲                  ',
            '                 ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱                  ',
            '                __ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲                ',
            '               ╱                               ╱                ',
            '              __ ╲                            __ ╲              ',
            '             ╱   ╱                           ╱   ╱              ',
            '            __ ╲__ ╲                        __ ╲__ ╲            ',
            '           ╱       ╱                       ╱       ╱            ',
            '          __ ╲    __ ╲                    __ ╲    __ ╲          ',
            '         ╱   ╱   ╱   ╱                   ╱   ╱   ╱   ╱          ',
            '        __ ╲__ ╲__ ╲__ ╲                __ ╲__ ╲__ ╲__ ╲        ',
            '       ╱               ╱               ╱               ╱        ',
            '      __ ╲            __ ╲            __ ╲            __ ╲      ',
            '     ╱   ╱           ╱   ╱           ╱   ╱           ╱   ╱      ',
            '    __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲        __ ╲__ ╲    ',
            '   ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱    ',
            '  __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲    __ ╲  ',
            ' ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱   ╱  ',
            '__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲__ ╲',
        ];

        let result = new SierpinskiMaze().create(5, { step: 5, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true rotation=right', () => {
        let expected = [
            '╱ ',
        ];

        let result = new SierpinskiMaze().create(0, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=right', () => {
        let expected = [
            '  ╲ ',
            '╱ __',
        ];

        let result = new SierpinskiMaze().create(1, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=right', () => {
        let expected = [
            '    ╲   ',
            '  ╱ __  ',
            '  ╲   ╲ ',
            '╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(2, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=right', () => {
        let expected = [
            '        ╲       ',
            '      ╱ __      ',
            '      ╲   ╲     ',
            '    ╱ __╱ __    ',
            '    ╲       ╲   ',
            '  ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(3, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=right', () => {
        let expected = [
            '                ╲               ',
            '              ╱ __              ',
            '              ╲   ╲             ',
            '            ╱ __╱ __            ',
            '            ╲       ╲           ',
            '          ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲       ',
            '      ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(4, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                              ╱ __                              ',
            '                              ╲   ╲                             ',
            '                            ╱ __╱ __                            ',
            '                            ╲       ╲                           ',
            '                          ╱ __    ╱ __                          ',
            '                          ╲   ╲   ╲   ╲                         ',
            '                        ╱ __╱ __╱ __╱ __                        ',
            '                        ╲               ╲                       ',
            '                      ╱ __            ╱ __                      ',
            '                      ╲   ╲           ╲   ╲                     ',
            '                    ╱ __╱ __        ╱ __╱ __                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                  ╱ __    ╱ __    ╱ __    ╱ __                  ',
            '                  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲                 ',
            '                ╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __                ',
            '                ╲                               ╲               ',
            '              ╱ __                            ╱ __              ',
            '              ╲   ╲                           ╲   ╲             ',
            '            ╱ __╱ __                        ╱ __╱ __            ',
            '            ╲       ╲                       ╲       ╲           ',
            '          ╱ __    ╱ __                    ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲                   ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __                ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲               ╲               ╲       ',
            '      ╱ __            ╱ __            ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲           ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __        ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(5, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=0 inverse=true rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱                                       ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱                                               ',
            '               ╱                                                ',
            '              ╱                                                 ',
            '             ╱                                                  ',
            '            ╱                                                   ',
            '           ╱                                                    ',
            '          ╱                                                     ',
            '         ╱                                                      ',
            '        ╱                                                       ',
            '       ╱                                                        ',
            '      ╱                                                         ',
            '     ╱                                                          ',
            '    ╱                                                           ',
            '   ╱                                                            ',
            '  ╱                                                             ',
            ' ╱                                                              ',
            '╱                                                               ',
        ];

        let result = new SierpinskiMaze().create(5, { step: 0, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1 inverse=true rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                                           ╲                    ',
            '                                            ╲                   ',
            '                                             ╲                  ',
            '                                              ╲                 ',
            '                                               ╲                ',
            '               ╱                                                ',
            '              ╱                                                 ',
            '             ╱                                                  ',
            '            ╱                                                   ',
            '           ╱                                                    ',
            '          ╱                                                     ',
            '         ╱                                                      ',
            '        ╱                                                       ',
            '       ╱                                                        ',
            '      ╱                                                         ',
            '     ╱                                                          ',
            '    ╱                                                           ',
            '   ╱                                                            ',
            '  ╱                                                             ',
            ' ╱                                                              ',
            '╱                               ________________________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 1, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2 inverse=true rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱                                           ',
            '                   ╱                                            ',
            '                  ╱                                             ',
            '                 ╱                                              ',
            '                ╱               ________________                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '                  ╲                               ╲             ',
            '                   ╲                               ╲            ',
            '                    ╲                               ╲           ',
            '                     ╲                               ╲          ',
            '                      ╲                               ╲         ',
            '                       ╲                               ╲        ',
            '       ╱                               ╱                        ',
            '      ╱                               ╱                         ',
            '     ╱                               ╱                          ',
            '    ╱                               ╱                           ',
            '   ╱                               ╱                            ',
            '  ╱                               ╱                             ',
            ' ╱                               ╱                              ',
            '╱               ________________╱               ________________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 2, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3 inverse=true rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                           ╱                                    ',
            '                          ╱                                     ',
            '                         ╱                                      ',
            '                        ╱       ________                        ',
            '                        ╲               ╲                       ',
            '                         ╲               ╲                      ',
            '                          ╲               ╲                     ',
            '                           ╲               ╲                    ',
            '                   ╱               ╱                            ',
            '                  ╱               ╱                             ',
            '                 ╱               ╱                              ',
            '                ╱       ________╱       ________                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '                  ╲                               ╲             ',
            '                   ╲                               ╲            ',
            '           ╱                               ╱                    ',
            '          ╱                               ╱                     ',
            '         ╱                               ╱                      ',
            '        ╱       ________                ╱       ________        ',
            '        ╲               ╲               ╲               ╲       ',
            '         ╲               ╲               ╲               ╲      ',
            '          ╲               ╲               ╲               ╲     ',
            '           ╲               ╲               ╲               ╲    ',
            '   ╱               ╱               ╱               ╱            ',
            '  ╱               ╱               ╱               ╱             ',
            ' ╱               ╱               ╱               ╱              ',
            '╱       ________╱       ________╱       ________╱       ________',
        ];

        let result = new SierpinskiMaze().create(5, { step: 3, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4 inverse=true rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                             ╱                                  ',
            '                            ╱   ____                            ',
            '                            ╲       ╲                           ',
            '                             ╲       ╲                          ',
            '                         ╱       ╱                              ',
            '                        ╱   ____╱   ____                        ',
            '                        ╲               ╲                       ',
            '                         ╲               ╲                      ',
            '                     ╱               ╱                          ',
            '                    ╱   ____        ╱   ____                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                     ╲       ╲       ╲       ╲                  ',
            '                 ╱       ╱       ╱       ╱                      ',
            '                ╱   ____╱   ____╱   ____╱   ____                ',
            '                ╲                               ╲               ',
            '                 ╲                               ╲              ',
            '             ╱                               ╱                  ',
            '            ╱   ____                        ╱   ____            ',
            '            ╲       ╲                       ╲       ╲           ',
            '             ╲       ╲                       ╲       ╲          ',
            '         ╱       ╱                       ╱       ╱              ',
            '        ╱   ____╱   ____                ╱   ____╱   ____        ',
            '        ╲               ╲               ╲               ╲       ',
            '         ╲               ╲               ╲               ╲      ',
            '     ╱               ╱               ╱               ╱          ',
            '    ╱   ____        ╱   ____        ╱   ____        ╱   ____    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '     ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲  ',
            ' ╱       ╱       ╱       ╱       ╱       ╱       ╱       ╱      ',
            '╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____╱   ____',
        ];

        let result = new SierpinskiMaze().create(5, { step: 4, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5 inverse=true rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                              ╱ __                              ',
            '                              ╲   ╲                             ',
            '                            ╱ __╱ __                            ',
            '                            ╲       ╲                           ',
            '                          ╱ __    ╱ __                          ',
            '                          ╲   ╲   ╲   ╲                         ',
            '                        ╱ __╱ __╱ __╱ __                        ',
            '                        ╲               ╲                       ',
            '                      ╱ __            ╱ __                      ',
            '                      ╲   ╲           ╲   ╲                     ',
            '                    ╱ __╱ __        ╱ __╱ __                    ',
            '                    ╲       ╲       ╲       ╲                   ',
            '                  ╱ __    ╱ __    ╱ __    ╱ __                  ',
            '                  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲                 ',
            '                ╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __                ',
            '                ╲                               ╲               ',
            '              ╱ __                            ╱ __              ',
            '              ╲   ╲                           ╲   ╲             ',
            '            ╱ __╱ __                        ╱ __╱ __            ',
            '            ╲       ╲                       ╲       ╲           ',
            '          ╱ __    ╱ __                    ╱ __    ╱ __          ',
            '          ╲   ╲   ╲   ╲                   ╲   ╲   ╲   ╲         ',
            '        ╱ __╱ __╱ __╱ __                ╱ __╱ __╱ __╱ __        ',
            '        ╲               ╲               ╲               ╲       ',
            '      ╱ __            ╱ __            ╱ __            ╱ __      ',
            '      ╲   ╲           ╲   ╲           ╲   ╲           ╲   ╲     ',
            '    ╱ __╱ __        ╱ __╱ __        ╱ __╱ __        ╱ __╱ __    ',
            '    ╲       ╲       ╲       ╲       ╲       ╲       ╲       ╲   ',
            '  ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __    ╱ __  ',
            '  ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲   ╲ ',
            '╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __╱ __',
        ];

        let result = new SierpinskiMaze().create(5, { step: 5, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});