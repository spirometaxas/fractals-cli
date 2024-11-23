const { SierpinskiArrowhead } = require('../../src/fractals/sierpinskiArrowhead');
const { Utils } = require('../../src/utils');

describe('SierpinskiArrowhead Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '__',
        ];

        let result = new SierpinskiArrowhead().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            ' __ ',
            '╱  ╲',
        ];

        let result = new SierpinskiArrowhead().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '   __   ',
            '  ╱  ╲  ',
            '  ╲  ╱  ',
            '__╱  ╲__',
        ];

        let result = new SierpinskiArrowhead().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '       __       ',
            '      ╱  ╲      ',
            '      ╲  ╱      ',
            '    __╱  ╲__    ',
            '   ╱        ╲   ',
            '   ╲__    __╱   ',
            ' __   ╲  ╱   __ ',
            '╱  ╲__╱  ╲__╱  ╲',
        ];

        let result = new SierpinskiArrowhead().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '               __               ',
            '              ╱  ╲              ',
            '              ╲  ╱              ',
            '            __╱  ╲__            ',
            '           ╱        ╲           ',
            '           ╲__    __╱           ',
            '         __   ╲  ╱   __         ',
            '        ╱  ╲__╱  ╲__╱  ╲        ',
            '        ╲              ╱        ',
            '      __╱              ╲__      ',
            '     ╱   __          __   ╲     ',
            '     ╲__╱  ╲        ╱  ╲__╱     ',
            '   __      ╱        ╲      __   ',
            '  ╱  ╲     ╲__    __╱     ╱  ╲  ',
            '  ╲  ╱   __   ╲  ╱   __   ╲  ╱  ',
            '__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__',
        ];

        let result = new SierpinskiArrowhead().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5', () => {
        let expected = [
            '                               __                               ',
            '                              ╱  ╲                              ',
            '                              ╲  ╱                              ',
            '                            __╱  ╲__                            ',
            '                           ╱        ╲                           ',
            '                           ╲__    __╱                           ',
            '                         __   ╲  ╱   __                         ',
            '                        ╱  ╲__╱  ╲__╱  ╲                        ',
            '                        ╲              ╱                        ',
            '                      __╱              ╲__                      ',
            '                     ╱   __          __   ╲                     ',
            '                     ╲__╱  ╲        ╱  ╲__╱                     ',
            '                   __      ╱        ╲      __                   ',
            '                  ╱  ╲     ╲__    __╱     ╱  ╲                  ',
            '                  ╲  ╱   __   ╲  ╱   __   ╲  ╱                  ',
            '                __╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__                ',
            '               ╱                                ╲               ',
            '               ╲__                            __╱               ',
            '             __   ╲                          ╱   __             ',
            '            ╱  ╲__╱                          ╲__╱  ╲            ',
            '            ╲      __                      __      ╱            ',
            '          __╱     ╱  ╲                    ╱  ╲     ╲__          ',
            '         ╱   __   ╲  ╱                    ╲  ╱   __   ╲         ',
            '         ╲__╱  ╲__╱  ╲__                __╱  ╲__╱  ╲__╱         ',
            '       __               ╲              ╱               __       ',
            '      ╱  ╲            __╱              ╲__            ╱  ╲      ',
            '      ╲  ╱           ╱   __          __   ╲           ╲  ╱      ',
            '    __╱  ╲__         ╲__╱  ╲        ╱  ╲__╱         __╱  ╲__    ',
            '   ╱        ╲      __      ╱        ╲      __      ╱        ╲   ',
            '   ╲__    __╱     ╱  ╲     ╲__    __╱     ╱  ╲     ╲__    __╱   ',
            ' __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __ ',
            '╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲',
        ];

        let result = new SierpinskiArrowhead().create(5, {});
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

        let result = new SierpinskiArrowhead().create(5, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1', () => {
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
            '                ________________________________                ',
            '               ╱                                ╲               ',
            '              ╱                                  ╲              ',
            '             ╱                                    ╲             ',
            '            ╱                                      ╲            ',
            '           ╱                                        ╲           ',
            '          ╱                                          ╲          ',
            '         ╱                                            ╲         ',
            '        ╱                                              ╲        ',
            '       ╱                                                ╲       ',
            '      ╱                                                  ╲      ',
            '     ╱                                                    ╲     ',
            '    ╱                                                      ╲    ',
            '   ╱                                                        ╲   ',
            '  ╱                                                          ╲  ',
            ' ╱                                                            ╲ ',
            '╱                                                              ╲',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2', () => {
        let expected = [
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                        ________________                        ',
            '                       ╱                ╲                       ',
            '                      ╱                  ╲                      ',
            '                     ╱                    ╲                     ',
            '                    ╱                      ╲                    ',
            '                   ╱                        ╲                   ',
            '                  ╱                          ╲                  ',
            '                 ╱                            ╲                 ',
            '                ╱                              ╲                ',
            '                ╲                              ╱                ',
            '                 ╲                            ╱                 ',
            '                  ╲                          ╱                  ',
            '                   ╲                        ╱                   ',
            '                    ╲                      ╱                    ',
            '                     ╲                    ╱                     ',
            '                      ╲                  ╱                      ',
            '                       ╲                ╱                       ',
            '                       ╱                ╲                       ',
            '                      ╱                  ╲                      ',
            '                     ╱                    ╲                     ',
            '                    ╱                      ╲                    ',
            '                   ╱                        ╲                   ',
            '                  ╱                          ╲                  ',
            '                 ╱                            ╲                 ',
            '________________╱                              ╲________________',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3', () => {
        let expected = [
            '                                                                ',
            '                                                                ',
            '                                                                ',
            '                            ________                            ',
            '                           ╱        ╲                           ',
            '                          ╱          ╲                          ',
            '                         ╱            ╲                         ',
            '                        ╱              ╲                        ',
            '                        ╲              ╱                        ',
            '                         ╲            ╱                         ',
            '                          ╲          ╱                          ',
            '                           ╲        ╱                           ',
            '                           ╱        ╲                           ',
            '                          ╱          ╲                          ',
            '                         ╱            ╲                         ',
            '                ________╱              ╲________                ',
            '               ╱                                ╲               ',
            '              ╱                                  ╲              ',
            '             ╱                                    ╲             ',
            '            ╱                                      ╲            ',
            '            ╲                                      ╱            ',
            '             ╲                                    ╱             ',
            '              ╲                                  ╱              ',
            '               ╲________                ________╱               ',
            '                        ╲              ╱                        ',
            '                         ╲            ╱                         ',
            '                          ╲          ╱                          ',
            '    ________               ╲        ╱               ________    ',
            '   ╱        ╲              ╱        ╲              ╱        ╲   ',
            '  ╱          ╲            ╱          ╲            ╱          ╲  ',
            ' ╱            ╲          ╱            ╲          ╱            ╲ ',
            '╱              ╲________╱              ╲________╱              ╲',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4', () => {
        let expected = [
            '                                                                ',
            '                              ____                              ',
            '                             ╱    ╲                             ',
            '                            ╱      ╲                            ',
            '                            ╲      ╱                            ',
            '                             ╲    ╱                             ',
            '                             ╱    ╲                             ',
            '                        ____╱      ╲____                        ',
            '                       ╱                ╲                       ',
            '                      ╱                  ╲                      ',
            '                      ╲                  ╱                      ',
            '                       ╲____        ____╱                       ',
            '                            ╲      ╱                            ',
            '                  ____       ╲    ╱       ____                  ',
            '                 ╱    ╲      ╱    ╲      ╱    ╲                 ',
            '                ╱      ╲____╱      ╲____╱      ╲                ',
            '                ╲                              ╱                ',
            '                 ╲                            ╱                 ',
            '                 ╱                            ╲                 ',
            '            ____╱                              ╲____            ',
            '           ╱                                        ╲           ',
            '          ╱       ____                    ____       ╲          ',
            '          ╲      ╱    ╲                  ╱    ╲      ╱          ',
            '           ╲____╱      ╲                ╱      ╲____╱           ',
            '                       ╱                ╲                       ',
            '      ____            ╱                  ╲            ____      ',
            '     ╱    ╲           ╲                  ╱           ╱    ╲     ',
            '    ╱      ╲           ╲____        ____╱           ╱      ╲    ',
            '    ╲      ╱                ╲      ╱                ╲      ╱    ',
            '     ╲    ╱       ____       ╲    ╱       ____       ╲    ╱     ',
            '     ╱    ╲      ╱    ╲      ╱    ╲      ╱    ╲      ╱    ╲     ',
            '____╱      ╲____╱      ╲____╱      ╲____╱      ╲____╱      ╲____',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5', () => {
        let expected = [
            '                               __                               ',
            '                              ╱  ╲                              ',
            '                              ╲  ╱                              ',
            '                            __╱  ╲__                            ',
            '                           ╱        ╲                           ',
            '                           ╲__    __╱                           ',
            '                         __   ╲  ╱   __                         ',
            '                        ╱  ╲__╱  ╲__╱  ╲                        ',
            '                        ╲              ╱                        ',
            '                      __╱              ╲__                      ',
            '                     ╱   __          __   ╲                     ',
            '                     ╲__╱  ╲        ╱  ╲__╱                     ',
            '                   __      ╱        ╲      __                   ',
            '                  ╱  ╲     ╲__    __╱     ╱  ╲                  ',
            '                  ╲  ╱   __   ╲  ╱   __   ╲  ╱                  ',
            '                __╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__                ',
            '               ╱                                ╲               ',
            '               ╲__                            __╱               ',
            '             __   ╲                          ╱   __             ',
            '            ╱  ╲__╱                          ╲__╱  ╲            ',
            '            ╲      __                      __      ╱            ',
            '          __╱     ╱  ╲                    ╱  ╲     ╲__          ',
            '         ╱   __   ╲  ╱                    ╲  ╱   __   ╲         ',
            '         ╲__╱  ╲__╱  ╲__                __╱  ╲__╱  ╲__╱         ',
            '       __               ╲              ╱               __       ',
            '      ╱  ╲            __╱              ╲__            ╱  ╲      ',
            '      ╲  ╱           ╱   __          __   ╲           ╲  ╱      ',
            '    __╱  ╲__         ╲__╱  ╲        ╱  ╲__╱         __╱  ╲__    ',
            '   ╱        ╲      __      ╱        ╲      __      ╱        ╲   ',
            '   ╲__    __╱     ╱  ╲     ╲__    __╱     ╱  ╲     ╲__    __╱   ',
            ' __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __ ',
            '╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 5 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=left', () => {
        let expected = [
            ' ╲',
        ];

        let result = new SierpinskiArrowhead().create(0, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=left', () => {
        let expected = [
            ' ╱  ',
            ' ╲__',
        ];

        let result = new SierpinskiArrowhead().create(1, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=left', () => {
        let expected = [
            '    ╲   ',
            '  __╱   ',
            ' ╱   __ ',
            ' ╲__╱  ╲',
        ];

        let result = new SierpinskiArrowhead().create(2, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=left', () => {
        let expected = [
            '       ╱        ',
            '       ╲__      ',
            '     __   ╲     ',
            '    ╱  ╲__╱     ',
            '    ╲      __   ',
            '  __╱     ╱  ╲  ',
            ' ╱   __   ╲  ╱  ',
            ' ╲__╱  ╲__╱  ╲__',
        ];

        let result = new SierpinskiArrowhead().create(3, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=left', () => {
        let expected = [
            '                ╲               ',
            '              __╱               ',
            '             ╱   __             ',
            '             ╲__╱  ╲            ',
            '           __      ╱            ',
            '          ╱  ╲     ╲__          ',
            '          ╲  ╱   __   ╲         ',
            '        __╱  ╲__╱  ╲__╱         ',
            '       ╱               __       ',
            '       ╲__            ╱  ╲      ',
            '     __   ╲           ╲  ╱      ',
            '    ╱  ╲__╱         __╱  ╲__    ',
            '    ╲      __      ╱        ╲   ',
            '  __╱     ╱  ╲     ╲__    __╱   ',
            ' ╱   __   ╲  ╱   __   ╲  ╱   __ ',
            ' ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲',
        ];

        let result = new SierpinskiArrowhead().create(4, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                               ╲__                              ',
            '                             __   ╲                             ',
            '                            ╱  ╲__╱                             ',
            '                            ╲      __                           ',
            '                          __╱     ╱  ╲                          ',
            '                         ╱   __   ╲  ╱                          ',
            '                         ╲__╱  ╲__╱  ╲__                        ',
            '                       __               ╲                       ',
            '                      ╱  ╲            __╱                       ',
            '                      ╲  ╱           ╱   __                     ',
            '                    __╱  ╲__         ╲__╱  ╲                    ',
            '                   ╱        ╲      __      ╱                    ',
            '                   ╲__    __╱     ╱  ╲     ╲__                  ',
            '                 __   ╲  ╱   __   ╲  ╱   __   ╲                 ',
            '                ╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱                 ',
            '                ╲                              __               ',
            '              __╱                             ╱  ╲              ',
            '             ╱   __                           ╲  ╱              ',
            '             ╲__╱  ╲                        __╱  ╲__            ',
            '           __      ╱                       ╱        ╲           ',
            '          ╱  ╲     ╲__                     ╲__    __╱           ',
            '          ╲  ╱   __   ╲                  __   ╲  ╱   __         ',
            '        __╱  ╲__╱  ╲__╱                 ╱  ╲__╱  ╲__╱  ╲        ',
            '       ╱               __               ╲              ╱        ',
            '       ╲__            ╱  ╲            __╱              ╲__      ',
            '     __   ╲           ╲  ╱           ╱   __          __   ╲     ',
            '    ╱  ╲__╱         __╱  ╲__         ╲__╱  ╲        ╱  ╲__╱     ',
            '    ╲      __      ╱        ╲      __      ╱        ╲      __   ',
            '  __╱     ╱  ╲     ╲__    __╱     ╱  ╲     ╲__    __╱     ╱  ╲  ',
            ' ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱  ',
            ' ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__',
        ];

        let result = new SierpinskiArrowhead().create(5, { rotation: 'left' });
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

        let result = new SierpinskiArrowhead().create(5, { step: 0, rotation: 'left' });
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
            '                ╲                                               ',
            '                 ╲                                              ',
            '                  ╲                                             ',
            '                   ╲                                            ',
            '                    ╲                                           ',
            '                     ╲                                          ',
            '                      ╲                                         ',
            '                       ╲                                        ',
            '                        ╲                                       ',
            '                         ╲                                      ',
            '                          ╲                                     ',
            '                           ╲                                    ',
            '                            ╲                                   ',
            '                             ╲                                  ',
            '                              ╲                                 ',
            '                               ╲________________________________',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 1, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=2 rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                    ╲                           ',
            '                                     ╲                          ',
            '                                      ╲                         ',
            '                                       ╲                        ',
            '                                       ╱                        ',
            '                                      ╱                         ',
            '                                     ╱                          ',
            '                                    ╱                           ',
            '                                   ╱                            ',
            '                                  ╱                             ',
            '                                 ╱                              ',
            '                ________________╱                               ',
            '               ╱                                                ',
            '              ╱                                                 ',
            '             ╱                                                  ',
            '            ╱                                                   ',
            '           ╱                                                    ',
            '          ╱                                                     ',
            '         ╱                                                      ',
            '        ╱                               ________________        ',
            '        ╲                              ╱                ╲       ',
            '         ╲                            ╱                  ╲      ',
            '          ╲                          ╱                    ╲     ',
            '           ╲                        ╱                      ╲    ',
            '            ╲                      ╱                        ╲   ',
            '             ╲                    ╱                          ╲  ',
            '              ╲                  ╱                            ╲ ',
            '               ╲________________╱                              ╲',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 2, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                             ╱                                  ',
            '                            ╱                                   ',
            '                            ╲                                   ',
            '                             ╲                                  ',
            '                              ╲                                 ',
            '                               ╲________                        ',
            '                                        ╲                       ',
            '                                         ╲                      ',
            '                                          ╲                     ',
            '                    ________               ╲                    ',
            '                   ╱        ╲              ╱                    ',
            '                  ╱          ╲            ╱                     ',
            '                 ╱            ╲          ╱                      ',
            '                ╱              ╲________╱                       ',
            '                ╲                                               ',
            '                 ╲                                              ',
            '                  ╲                                             ',
            '                   ╲                        ________            ',
            '                   ╱                       ╱        ╲           ',
            '                  ╱                       ╱          ╲          ',
            '                 ╱                       ╱            ╲         ',
            '        ________╱                       ╱              ╲        ',
            '       ╱                                ╲              ╱        ',
            '      ╱                                  ╲            ╱         ',
            '     ╱                                    ╲          ╱          ',
            '    ╱               ________               ╲        ╱           ',
            '    ╲              ╱        ╲              ╱        ╲           ',
            '     ╲            ╱          ╲            ╱          ╲          ',
            '      ╲          ╱            ╲          ╱            ╲         ',
            '       ╲________╱              ╲________╱              ╲________',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 3, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4 rotation=left', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                 ╱                              ',
            '                            ____╱                               ',
            '                           ╱                                    ',
            '                          ╱       ____                          ',
            '                          ╲      ╱    ╲                         ',
            '                           ╲____╱      ╲                        ',
            '                                       ╱                        ',
            '                      ____            ╱                         ',
            '                     ╱    ╲           ╲                         ',
            '                    ╱      ╲           ╲____                    ',
            '                    ╲      ╱                ╲                   ',
            '                     ╲    ╱       ____       ╲                  ',
            '                     ╱    ╲      ╱    ╲      ╱                  ',
            '                ____╱      ╲____╱      ╲____╱                   ',
            '               ╱                                                ',
            '              ╱                               ____              ',
            '              ╲                              ╱    ╲             ',
            '               ╲____                        ╱      ╲            ',
            '                    ╲                       ╲      ╱            ',
            '          ____       ╲                       ╲    ╱             ',
            '         ╱    ╲      ╱                       ╱    ╲             ',
            '        ╱      ╲____╱                   ____╱      ╲____        ',
            '        ╲                              ╱                ╲       ',
            '         ╲            ____            ╱                  ╲      ',
            '         ╱           ╱    ╲           ╲                  ╱      ',
            '    ____╱           ╱      ╲           ╲____        ____╱       ',
            '   ╱                ╲      ╱                ╲      ╱            ',
            '  ╱       ____       ╲    ╱       ____       ╲    ╱       ____  ',
            '  ╲      ╱    ╲      ╱    ╲      ╱    ╲      ╱    ╲      ╱    ╲ ',
            '   ╲____╱      ╲____╱      ╲____╱      ╲____╱      ╲____╱      ╲',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 4, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5 rotation=left', () => {
        let expected = [
            '                               ╱                                ',
            '                               ╲__                              ',
            '                             __   ╲                             ',
            '                            ╱  ╲__╱                             ',
            '                            ╲      __                           ',
            '                          __╱     ╱  ╲                          ',
            '                         ╱   __   ╲  ╱                          ',
            '                         ╲__╱  ╲__╱  ╲__                        ',
            '                       __               ╲                       ',
            '                      ╱  ╲            __╱                       ',
            '                      ╲  ╱           ╱   __                     ',
            '                    __╱  ╲__         ╲__╱  ╲                    ',
            '                   ╱        ╲      __      ╱                    ',
            '                   ╲__    __╱     ╱  ╲     ╲__                  ',
            '                 __   ╲  ╱   __   ╲  ╱   __   ╲                 ',
            '                ╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱                 ',
            '                ╲                              __               ',
            '              __╱                             ╱  ╲              ',
            '             ╱   __                           ╲  ╱              ',
            '             ╲__╱  ╲                        __╱  ╲__            ',
            '           __      ╱                       ╱        ╲           ',
            '          ╱  ╲     ╲__                     ╲__    __╱           ',
            '          ╲  ╱   __   ╲                  __   ╲  ╱   __         ',
            '        __╱  ╲__╱  ╲__╱                 ╱  ╲__╱  ╲__╱  ╲        ',
            '       ╱               __               ╲              ╱        ',
            '       ╲__            ╱  ╲            __╱              ╲__      ',
            '     __   ╲           ╲  ╱           ╱   __          __   ╲     ',
            '    ╱  ╲__╱         __╱  ╲__         ╲__╱  ╲        ╱  ╲__╱     ',
            '    ╲      __      ╱        ╲      __      ╱        ╲      __   ',
            '  __╱     ╱  ╲     ╲__    __╱     ╱  ╲     ╲__    __╱     ╱  ╲  ',
            ' ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱  ',
            ' ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 5, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=right', () => {
        let expected = [
            '╱ ',
        ];

        let result = new SierpinskiArrowhead().create(0, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=right', () => {
        let expected = [
            '  ╲ ',
            '__╱ ',
        ];

        let result = new SierpinskiArrowhead().create(1, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=right', () => {
        let expected = [
            '   ╱    ',
            '   ╲__  ',
            ' __   ╲ ',
            '╱  ╲__╱ ',
        ];

        let result = new SierpinskiArrowhead().create(2, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=right', () => {
        let expected = [
            '        ╲       ',
            '      __╱       ',
            '     ╱   __     ',
            '     ╲__╱  ╲    ',
            '   __      ╱    ',
            '  ╱  ╲     ╲__  ',
            '  ╲  ╱   __   ╲ ',
            '__╱  ╲__╱  ╲__╱ ',
        ];

        let result = new SierpinskiArrowhead().create(3, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=right', () => {
        let expected = [
            '               ╱                ',
            '               ╲__              ',
            '             __   ╲             ',
            '            ╱  ╲__╱             ',
            '            ╲      __           ',
            '          __╱     ╱  ╲          ',
            '         ╱   __   ╲  ╱          ',
            '         ╲__╱  ╲__╱  ╲__        ',
            '       __               ╲       ',
            '      ╱  ╲            __╱       ',
            '      ╲  ╱           ╱   __     ',
            '    __╱  ╲__         ╲__╱  ╲    ',
            '   ╱        ╲      __      ╱    ',
            '   ╲__    __╱     ╱  ╲     ╲__  ',
            ' __   ╲  ╱   __   ╲  ╱   __   ╲ ',
            '╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱ ',
        ];

        let result = new SierpinskiArrowhead().create(4, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                              __╱                               ',
            '                             ╱   __                             ',
            '                             ╲__╱  ╲                            ',
            '                           __      ╱                            ',
            '                          ╱  ╲     ╲__                          ',
            '                          ╲  ╱   __   ╲                         ',
            '                        __╱  ╲__╱  ╲__╱                         ',
            '                       ╱               __                       ',
            '                       ╲__            ╱  ╲                      ',
            '                     __   ╲           ╲  ╱                      ',
            '                    ╱  ╲__╱         __╱  ╲__                    ',
            '                    ╲      __      ╱        ╲                   ',
            '                  __╱     ╱  ╲     ╲__    __╱                   ',
            '                 ╱   __   ╲  ╱   __   ╲  ╱   __                 ',
            '                 ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲                ',
            '               __                              ╱                ',
            '              ╱  ╲                             ╲__              ',
            '              ╲  ╱                           __   ╲             ',
            '            __╱  ╲__                        ╱  ╲__╱             ',
            '           ╱        ╲                       ╲      __           ',
            '           ╲__    __╱                     __╱     ╱  ╲          ',
            '         __   ╲  ╱   __                  ╱   __   ╲  ╱          ',
            '        ╱  ╲__╱  ╲__╱  ╲                 ╲__╱  ╲__╱  ╲__        ',
            '        ╲              ╱               __               ╲       ',
            '      __╱              ╲__            ╱  ╲            __╱       ',
            '     ╱   __          __   ╲           ╲  ╱           ╱   __     ',
            '     ╲__╱  ╲        ╱  ╲__╱         __╱  ╲__         ╲__╱  ╲    ',
            '   __      ╱        ╲      __      ╱        ╲      __      ╱    ',
            '  ╱  ╲     ╲__    __╱     ╱  ╲     ╲__    __╱     ╱  ╲     ╲__  ',
            '  ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲ ',
            '__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱ ',
        ];

        let result = new SierpinskiArrowhead().create(5, { rotation: 'right' });
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

        let result = new SierpinskiArrowhead().create(5, { step: 0, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=1 rotation=right', () => {
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
            '                                               ╱                ',
            '                                              ╱                 ',
            '                                             ╱                  ',
            '                                            ╱                   ',
            '                                           ╱                    ',
            '                                          ╱                     ',
            '                                         ╱                      ',
            '                                        ╱                       ',
            '                                       ╱                        ',
            '                                      ╱                         ',
            '                                     ╱                          ',
            '                                    ╱                           ',
            '                                   ╱                            ',
            '                                  ╱                             ',
            '                                 ╱                              ',
            '________________________________╱                               ',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 1, rotation: 'right' });
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
            '                        ╲                                       ',
            '                         ╲                                      ',
            '                          ╲                                     ',
            '                           ╲                                    ',
            '                            ╲                                   ',
            '                             ╲                                  ',
            '                              ╲                                 ',
            '                               ╲________________                ',
            '                                                ╲               ',
            '                                                 ╲              ',
            '                                                  ╲             ',
            '                                                   ╲            ',
            '                                                    ╲           ',
            '                                                     ╲          ',
            '                                                      ╲         ',
            '        ________________                               ╲        ',
            '       ╱                ╲                              ╱        ',
            '      ╱                  ╲                            ╱         ',
            '     ╱                    ╲                          ╱          ',
            '    ╱                      ╲                        ╱           ',
            '   ╱                        ╲                      ╱            ',
            '  ╱                          ╲                    ╱             ',
            ' ╱                            ╲                  ╱              ',
            '╱                              ╲________________╱               ',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 2, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=3 rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                                 ╲                              ',
            '                                  ╲                             ',
            '                                   ╲                            ',
            '                                   ╱                            ',
            '                                  ╱                             ',
            '                                 ╱                              ',
            '                        ________╱                               ',
            '                       ╱                                        ',
            '                      ╱                                         ',
            '                     ╱                                          ',
            '                    ╱               ________                    ',
            '                    ╲              ╱        ╲                   ',
            '                     ╲            ╱          ╲                  ',
            '                      ╲          ╱            ╲                 ',
            '                       ╲________╱              ╲                ',
            '                                               ╱                ',
            '                                              ╱                 ',
            '                                             ╱                  ',
            '            ________                        ╱                   ',
            '           ╱        ╲                       ╲                   ',
            '          ╱          ╲                       ╲                  ',
            '         ╱            ╲                       ╲                 ',
            '        ╱              ╲                       ╲________        ',
            '        ╲              ╱                                ╲       ',
            '         ╲            ╱                                  ╲      ',
            '          ╲          ╱                                    ╲     ',
            '           ╲        ╱               ________               ╲    ',
            '           ╱        ╲              ╱        ╲              ╱    ',
            '          ╱          ╲            ╱          ╲            ╱     ',
            '         ╱            ╲          ╱            ╲          ╱      ',
            '________╱              ╲________╱              ╲________╱       ',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 3, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=4 rotation=right', () => {
        let expected = [
            '                               ╱                                ',
            '                              ╱                                 ',
            '                              ╲                                 ',
            '                               ╲____                            ',
            '                                    ╲                           ',
            '                          ____       ╲                          ',
            '                         ╱    ╲      ╱                          ',
            '                        ╱      ╲____╱                           ',
            '                        ╲                                       ',
            '                         ╲            ____                      ',
            '                         ╱           ╱    ╲                     ',
            '                    ____╱           ╱      ╲                    ',
            '                   ╱                ╲      ╱                    ',
            '                  ╱       ____       ╲    ╱                     ',
            '                  ╲      ╱    ╲      ╱    ╲                     ',
            '                   ╲____╱      ╲____╱      ╲____                ',
            '                                                ╲               ',
            '              ____                               ╲              ',
            '             ╱    ╲                              ╱              ',
            '            ╱      ╲                        ____╱               ',
            '            ╲      ╱                       ╱                    ',
            '             ╲    ╱                       ╱       ____          ',
            '             ╱    ╲                       ╲      ╱    ╲         ',
            '        ____╱      ╲____                   ╲____╱      ╲        ',
            '       ╱                ╲                              ╱        ',
            '      ╱                  ╲            ____            ╱         ',
            '      ╲                  ╱           ╱    ╲           ╲         ',
            '       ╲____        ____╱           ╱      ╲           ╲____    ',
            '            ╲      ╱                ╲      ╱                ╲   ',
            '  ____       ╲    ╱       ____       ╲    ╱       ____       ╲  ',
            ' ╱    ╲      ╱    ╲      ╱    ╲      ╱    ╲      ╱    ╲      ╱  ',
            '╱      ╲____╱      ╲____╱      ╲____╱      ╲____╱      ╲____╱   ',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 4, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 step=5 rotation=right', () => {
        let expected = [
            '                                ╲                               ',
            '                              __╱                               ',
            '                             ╱   __                             ',
            '                             ╲__╱  ╲                            ',
            '                           __      ╱                            ',
            '                          ╱  ╲     ╲__                          ',
            '                          ╲  ╱   __   ╲                         ',
            '                        __╱  ╲__╱  ╲__╱                         ',
            '                       ╱               __                       ',
            '                       ╲__            ╱  ╲                      ',
            '                     __   ╲           ╲  ╱                      ',
            '                    ╱  ╲__╱         __╱  ╲__                    ',
            '                    ╲      __      ╱        ╲                   ',
            '                  __╱     ╱  ╲     ╲__    __╱                   ',
            '                 ╱   __   ╲  ╱   __   ╲  ╱   __                 ',
            '                 ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲                ',
            '               __                              ╱                ',
            '              ╱  ╲                             ╲__              ',
            '              ╲  ╱                           __   ╲             ',
            '            __╱  ╲__                        ╱  ╲__╱             ',
            '           ╱        ╲                       ╲      __           ',
            '           ╲__    __╱                     __╱     ╱  ╲          ',
            '         __   ╲  ╱   __                  ╱   __   ╲  ╱          ',
            '        ╱  ╲__╱  ╲__╱  ╲                 ╲__╱  ╲__╱  ╲__        ',
            '        ╲              ╱               __               ╲       ',
            '      __╱              ╲__            ╱  ╲            __╱       ',
            '     ╱   __          __   ╲           ╲  ╱           ╱   __     ',
            '     ╲__╱  ╲        ╱  ╲__╱         __╱  ╲__         ╲__╱  ╲    ',
            '   __      ╱        ╲      __      ╱        ╲      __      ╱    ',
            '  ╱  ╲     ╲__    __╱     ╱  ╲     ╲__    __╱     ╱  ╲     ╲__  ',
            '  ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲  ╱   __   ╲ ',
            '__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱  ╲__╱ ',
        ];

        let result = new SierpinskiArrowhead().create(5, { step: 5, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});