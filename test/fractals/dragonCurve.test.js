const { DragonCurve } = require('../../src/fractals/dragonCurve');
const { Utils } = require('../../src/utils');

describe('DragonCurve Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new DragonCurve().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            '  │',
            '──┘',
        ];

        let result = new DragonCurve().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '──┐ │',
            '  └─┘',
        ];

        let result = new DragonCurve().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '──┐  ',
            '┌─┘  ',
            '└─┐ │',
            '  └─┘',
        ];

        let result = new DragonCurve().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '    ──┐',
            '┌─┐ ┌─┘',
            '└─┼─┘  ',
            '┌─┘    ',
            '└─┐ │  ',
            '  └─┘  ',
        ];

        let result = new DragonCurve().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5', () => {
        let expected = [
            '    ┌─┐        ',
            '    └─┼─┐   ──┐',
            '┌─┐ ┌─┼─┼─┐ ┌─┘',
            '└─┼─┘ └─┘ └─┘  ',
            '┌─┘            ',
            '└─┐ │          ',
            '  └─┘          ',
        ];

        let result = new DragonCurve().create(5, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6', () => {
        let expected = [
            '    ┌─┐     ┌─┐        ',
            '    └─┼─┐   └─┼─┐      ',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┘      ',
            '└─┼─┘ └─┘ └─┼─┼─┐      ',
            '┌─┘       ┌─┼─┼─┘      ',
            '└─┐ │     └─┘ └─┐   ──┐',
            '  └─┘         ┌─┼─┐ ┌─┘',
            '              └─┘ └─┘  ',
        ];

        let result = new DragonCurve().create(6, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7', () => {
        let expected = [
            '    ┌─┐     ┌─┐          ',
            '    └─┼─┐   └─┼─┐        ',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┘        ',
            '└─┼─┘ └─┘ └─┼─┼─┐        ',
            '┌─┘       ┌─┼─┼─┘   ┌─┐  ',
            '└─┐ │     └─┘ └─┐   └─┼─┐',
            '  └─┘         ┌─┼─┐ ┌─┼─┘',
            '            ┌─┼─┼─┼─┼─┼─┐',
            '          ┌─┼─┼─┼─┼─┘ └─┘',
            '          └─┘ └─┼─┼─┐    ',
            '              ┌─┘ └─┘    ',
            '            ┌─┼─┐        ',
            '          ┌─┼─┼─┘        ',
            '          └─┘ └─┐   ──┐  ',
            '              ┌─┼─┐ ┌─┘  ',
            '              └─┘ └─┘    ',
        ];

        let result = new DragonCurve().create(7, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8', () => {
        let expected = [
            '          ┌─┐     ┌─┐          ',
            '          └─┼─┐   └─┼─┐        ',
            '      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘        ',
            '      └─┼─┘ └─┘ └─┼─┼─┐        ',
            '      ┌─┘       ┌─┼─┼─┘   ┌─┐  ',
            '      └─┐ │     └─┘ └─┐   └─┼─┐',
            '        └─┘         ┌─┼─┐ ┌─┼─┘',
            '                  ┌─┼─┼─┼─┼─┼─┐',
            '                ┌─┼─┼─┼─┼─┘ └─┘',
            '                └─┘ └─┼─┼─┐    ',
            '                    ┌─┘ └─┘    ',
            '          ┌─┐ ┌─┐ ┌─┼─┐        ',
            '        ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐  ',
            '        └─┘ └─┼─┼─┼─┼─┐   └─┼─┐',
            '            ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┘',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┘ └─┘',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┐    ',
            '    ┌─┘ └─┘     └─┘     └─┘    ',
            '  ┌─┼─┐                        ',
            '┌─┼─┼─┘                        ',
            '└─┘ └─┐   ──┐                  ',
            '    ┌─┼─┐ ┌─┘                  ',
            '    └─┘ └─┘                    ',
        ];

        let result = new DragonCurve().create(8, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9', () => {
        let expected = [
            '                                          ┌─┐     ┌─┐          ',
            '                                          └─┼─┐   └─┼─┐        ',
            '                                      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘        ',
            '                                      └─┼─┘ └─┘ └─┼─┼─┐        ',
            '                                      ┌─┘       ┌─┼─┼─┘   ┌─┐  ',
            '                                      └─┐ │     └─┘ └─┐   └─┼─┐',
            '                                        └─┘         ┌─┼─┐ ┌─┼─┘',
            '                                                  ┌─┼─┼─┼─┼─┼─┐',
            '                                                ┌─┼─┼─┼─┼─┘ └─┘',
            '                                                └─┘ └─┼─┼─┐    ',
            '                                                    ┌─┘ └─┘    ',
            '          ┌─┐ ┌─┐         ┌─┐ ┌─┐         ┌─┐ ┌─┐ ┌─┼─┐        ',
            '        ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐  ',
            '        └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┼─┼─┼─┐   └─┼─┐',
            '            ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┘',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┘ └─┘',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┐    ',
            '    ┌─┘ └─┘     └─┘   ┌─┼─┼─┼─┼─┼─┼─┼─┘ └─┘     └─┘     └─┘    ',
            '  ┌─┼─┐               └─┼─┼─┼─┼─┼─┼─┼─┐                        ',
            '┌─┼─┼─┘               ┌─┼─┘ └─┼─┼─┼─┼─┘   ┌─┐                  ',
            '└─┘ └─┐   ──┐         └─┼─┐   └─┼─┼─┼─┐   └─┼─┐                ',
            '    ┌─┼─┐ ┌─┘           └─┘   ┌─┼─┼─┼─┼─┐ ┌─┼─┘                ',
            '    └─┘ └─┘                   └─┼─┼─┼─┼─┼─┼─┼─┐                ',
            '                              ┌─┼─┘ └─┼─┼─┘ └─┘                ',
            '                              └─┼─┐   └─┼─┐                    ',
            '                                └─┘     └─┘                    ',
        ];

        let result = new DragonCurve().create(9, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                          │                    ',
            '                                          │                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                          │                    ',
            '                                        ──┘                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                      ──┐ │                    ',
            '                                        └─┘                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                      ──┐                      ',
            '                                      ┌─┘                      ',
            '                                      └─┐ │                    ',
            '                                        └─┘                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4', () => {
        let expected = [
            '                                                               ',
            '                                          ──┐                  ',
            '                                      ┌─┐ ┌─┘                  ',
            '                                      └─┼─┘                    ',
            '                                      ┌─┘                      ',
            '                                      └─┐ │                    ',
            '                                        └─┘                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5', () => {
        let expected = [
            '                                          ┌─┐                  ',
            '                                          └─┼─┐   ──┐          ',
            '                                      ┌─┐ ┌─┼─┼─┐ ┌─┘          ',
            '                                      └─┼─┘ └─┘ └─┘            ',
            '                                      ┌─┘                      ',
            '                                      └─┐ │                    ',
            '                                        └─┘                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 5 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6', () => {
        let expected = [
            '                                          ┌─┐     ┌─┐          ',
            '                                          └─┼─┐   └─┼─┐        ',
            '                                      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘        ',
            '                                      └─┼─┘ └─┘ └─┼─┼─┐        ',
            '                                      ┌─┘       ┌─┼─┼─┘        ',
            '                                      └─┐ │     └─┘ └─┐   ──┐  ',
            '                                        └─┘         ┌─┼─┐ ┌─┘  ',
            '                                                    └─┘ └─┘    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 6 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7', () => {
        let expected = [
            '                                          ┌─┐     ┌─┐          ',
            '                                          └─┼─┐   └─┼─┐        ',
            '                                      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘        ',
            '                                      └─┼─┘ └─┘ └─┼─┼─┐        ',
            '                                      ┌─┘       ┌─┼─┼─┘   ┌─┐  ',
            '                                      └─┐ │     └─┘ └─┐   └─┼─┐',
            '                                        └─┘         ┌─┼─┐ ┌─┼─┘',
            '                                                  ┌─┼─┼─┼─┼─┼─┐',
            '                                                ┌─┼─┼─┼─┼─┘ └─┘',
            '                                                └─┘ └─┼─┼─┐    ',
            '                                                    ┌─┘ └─┘    ',
            '                                                  ┌─┼─┐        ',
            '                                                ┌─┼─┼─┘        ',
            '                                                └─┘ └─┐   ──┐  ',
            '                                                    ┌─┼─┐ ┌─┘  ',
            '                                                    └─┘ └─┘    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 7 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8', () => {
        let expected = [
            '                                          ┌─┐     ┌─┐          ',
            '                                          └─┼─┐   └─┼─┐        ',
            '                                      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘        ',
            '                                      └─┼─┘ └─┘ └─┼─┼─┐        ',
            '                                      ┌─┘       ┌─┼─┼─┘   ┌─┐  ',
            '                                      └─┐ │     └─┘ └─┐   └─┼─┐',
            '                                        └─┘         ┌─┼─┐ ┌─┼─┘',
            '                                                  ┌─┼─┼─┼─┼─┼─┐',
            '                                                ┌─┼─┼─┼─┼─┘ └─┘',
            '                                                └─┘ └─┼─┼─┐    ',
            '                                                    ┌─┘ └─┘    ',
            '                                          ┌─┐ ┌─┐ ┌─┼─┐        ',
            '                                        ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐  ',
            '                                        └─┘ └─┼─┼─┼─┼─┐   └─┼─┐',
            '                                            ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┘',
            '                                  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐',
            '                                ┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┘ └─┘',
            '                                └─┘ └─┼─┼─┐   └─┼─┐   └─┼─┐    ',
            '                                    ┌─┘ └─┘     └─┘     └─┘    ',
            '                                  ┌─┼─┐                        ',
            '                                ┌─┼─┼─┘                        ',
            '                                └─┘ └─┐   ──┐                  ',
            '                                    ┌─┼─┐ ┌─┘                  ',
            '                                    └─┘ └─┘                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 8 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9', () => {
        let expected = [
            '                                          ┌─┐     ┌─┐          ',
            '                                          └─┼─┐   └─┼─┐        ',
            '                                      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘        ',
            '                                      └─┼─┘ └─┘ └─┼─┼─┐        ',
            '                                      ┌─┘       ┌─┼─┼─┘   ┌─┐  ',
            '                                      └─┐ │     └─┘ └─┐   └─┼─┐',
            '                                        └─┘         ┌─┼─┐ ┌─┼─┘',
            '                                                  ┌─┼─┼─┼─┼─┼─┐',
            '                                                ┌─┼─┼─┼─┼─┘ └─┘',
            '                                                └─┘ └─┼─┼─┐    ',
            '                                                    ┌─┘ └─┘    ',
            '          ┌─┐ ┌─┐         ┌─┐ ┌─┐         ┌─┐ ┌─┐ ┌─┼─┐        ',
            '        ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐  ',
            '        └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┼─┼─┼─┐   └─┼─┐',
            '            ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┘',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┘ └─┘',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┐    ',
            '    ┌─┘ └─┘     └─┘   ┌─┼─┼─┼─┼─┼─┼─┼─┘ └─┘     └─┘     └─┘    ',
            '  ┌─┼─┐               └─┼─┼─┼─┼─┼─┼─┼─┐                        ',
            '┌─┼─┼─┘               ┌─┼─┘ └─┼─┼─┼─┼─┘   ┌─┐                  ',
            '└─┘ └─┐   ──┐         └─┼─┐   └─┼─┼─┼─┐   └─┼─┐                ',
            '    ┌─┼─┐ ┌─┘           └─┘   ┌─┼─┼─┼─┼─┐ ┌─┼─┘                ',
            '    └─┘ └─┘                   └─┼─┼─┼─┼─┼─┼─┼─┐                ',
            '                              ┌─┼─┘ └─┼─┼─┘ └─┘                ',
            '                              └─┼─┐   └─┼─┐                    ',
            '                                └─┘     └─┘                    ',
        ];

        let result = new DragonCurve().create(9, { step: 9 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new DragonCurve().create(0, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true', () => {
        let expected = [
            '│  ',
            '└──',
        ];

        let result = new DragonCurve().create(1, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true', () => {
        let expected = [
            '│ ┌──',
            '└─┘  ',
        ];

        let result = new DragonCurve().create(2, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true', () => {
        let expected = [
            '  ┌──',
            '  └─┐',
            '│ ┌─┘',
            '└─┘  ',
        ];

        let result = new DragonCurve().create(3, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true', () => {
        let expected = [
            '┌──    ',
            '└─┐ ┌─┐',
            '  └─┼─┘',
            '    └─┐',
            '  │ ┌─┘',
            '  └─┘  ',
        ];

        let result = new DragonCurve().create(4, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true', () => {
        let expected = [
            '        ┌─┐    ',
            '┌──   ┌─┼─┘    ',
            '└─┐ ┌─┼─┼─┐ ┌─┐',
            '  └─┘ └─┘ └─┼─┘',
            '            └─┐',
            '          │ ┌─┘',
            '          └─┘  ',
        ];

        let result = new DragonCurve().create(5, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true', () => {
        let expected = [
            '        ┌─┐     ┌─┐    ',
            '      ┌─┼─┘   ┌─┼─┘    ',
            '      └─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '      ┌─┼─┼─┘ └─┘ └─┼─┘',
            '      └─┼─┼─┐       └─┐',
            '┌──   ┌─┘ └─┘     │ ┌─┘',
            '└─┐ ┌─┼─┐         └─┘  ',
            '  └─┘ └─┘              ',
        ];

        let result = new DragonCurve().create(6, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true', () => {
        let expected = [
            '          ┌─┐     ┌─┐    ',
            '        ┌─┼─┘   ┌─┼─┘    ',
            '        └─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '        ┌─┼─┼─┘ └─┘ └─┼─┘',
            '  ┌─┐   └─┼─┼─┐       └─┐',
            '┌─┼─┘   ┌─┘ └─┘     │ ┌─┘',
            '└─┼─┐ ┌─┼─┐         └─┘  ',
            '┌─┼─┼─┼─┼─┼─┐            ',
            '└─┘ └─┼─┼─┼─┼─┐          ',
            '    ┌─┼─┼─┘ └─┘          ',
            '    └─┘ └─┐              ',
            '        ┌─┼─┐            ',
            '        └─┼─┼─┐          ',
            '  ┌──   ┌─┘ └─┘          ',
            '  └─┐ ┌─┼─┐              ',
            '    └─┘ └─┘              ',
        ];

        let result = new DragonCurve().create(7, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true', () => {
        let expected = [
            '          ┌─┐     ┌─┐          ',
            '        ┌─┼─┘   ┌─┼─┘          ',
            '        └─┼─┐ ┌─┼─┼─┐ ┌─┐      ',
            '        ┌─┼─┼─┘ └─┘ └─┼─┘      ',
            '  ┌─┐   └─┼─┼─┐       └─┐      ',
            '┌─┼─┘   ┌─┘ └─┘     │ ┌─┘      ',
            '└─┼─┐ ┌─┼─┐         └─┘        ',
            '┌─┼─┼─┼─┼─┼─┐                  ',
            '└─┘ └─┼─┼─┼─┼─┐                ',
            '    ┌─┼─┼─┘ └─┘                ',
            '    └─┘ └─┐                    ',
            '        ┌─┼─┐ ┌─┐ ┌─┐          ',
            '  ┌─┐   └─┼─┼─┼─┼─┼─┼─┐        ',
            '┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘        ',
            '└─┼─┐ ┌─┼─┼─┼─┼─┼─┐            ',
            '┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '└─┘ └─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '    ┌─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '    └─┘     └─┘     └─┘ └─┐    ',
            '                        ┌─┼─┐  ',
            '                        └─┼─┼─┐',
            '                  ┌──   ┌─┘ └─┘',
            '                  └─┐ ┌─┼─┐    ',
            '                    └─┘ └─┘    ',
        ];

        let result = new DragonCurve().create(8, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true', () => {
        let expected = [
            '          ┌─┐     ┌─┐                                          ',
            '        ┌─┼─┘   ┌─┼─┘                                          ',
            '        └─┼─┐ ┌─┼─┼─┐ ┌─┐                                      ',
            '        ┌─┼─┼─┘ └─┘ └─┼─┘                                      ',
            '  ┌─┐   └─┼─┼─┐       └─┐                                      ',
            '┌─┼─┘   ┌─┘ └─┘     │ ┌─┘                                      ',
            '└─┼─┐ ┌─┼─┐         └─┘                                        ',
            '┌─┼─┼─┼─┼─┼─┐                                                  ',
            '└─┘ └─┼─┼─┼─┼─┐                                                ',
            '    ┌─┼─┼─┘ └─┘                                                ',
            '    └─┘ └─┐                                                    ',
            '        ┌─┼─┐ ┌─┐ ┌─┐         ┌─┐ ┌─┐         ┌─┐ ┌─┐          ',
            '  ┌─┐   └─┼─┼─┼─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┐        ',
            '┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘        ',
            '└─┼─┐ ┌─┼─┼─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┐            ',
            '┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '└─┘ └─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '    ┌─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '    └─┘     └─┘     └─┘ └─┼─┼─┼─┼─┼─┼─┼─┐   └─┘     └─┘ └─┐    ',
            '                        ┌─┼─┼─┼─┼─┼─┼─┼─┘               ┌─┼─┐  ',
            '                  ┌─┐   └─┼─┼─┼─┼─┘ └─┼─┐               └─┼─┼─┐',
            '                ┌─┼─┘   ┌─┼─┼─┼─┘   ┌─┼─┘         ┌──   ┌─┘ └─┘',
            '                └─┼─┐ ┌─┼─┼─┼─┼─┐   └─┘           └─┐ ┌─┼─┐    ',
            '                ┌─┼─┼─┼─┼─┼─┼─┼─┘                   └─┘ └─┘    ',
            '                └─┘ └─┼─┼─┘ └─┼─┐                              ',
            '                    ┌─┼─┘   ┌─┼─┘                              ',
            '                    └─┘     └─┘                                ',
        ];

        let result = new DragonCurve().create(9, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0 inverse=true', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    │                                          ',
            '                    │                                          ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 0, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1 inverse=true', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    │                                          ',
            '                    └──                                        ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 1, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2 inverse=true', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    │ ┌──                                      ',
            '                    └─┘                                        ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 2, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3 inverse=true', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                      ┌──                                      ',
            '                      └─┐                                      ',
            '                    │ ┌─┘                                      ',
            '                    └─┘                                        ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 3, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4 inverse=true', () => {
        let expected = [
            '                                                               ',
            '                  ┌──                                          ',
            '                  └─┐ ┌─┐                                      ',
            '                    └─┼─┘                                      ',
            '                      └─┐                                      ',
            '                    │ ┌─┘                                      ',
            '                    └─┘                                        ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 4, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5 inverse=true', () => {
        let expected = [
            '                  ┌─┐                                          ',
            '          ┌──   ┌─┼─┘                                          ',
            '          └─┐ ┌─┼─┼─┐ ┌─┐                                      ',
            '            └─┘ └─┘ └─┼─┘                                      ',
            '                      └─┐                                      ',
            '                    │ ┌─┘                                      ',
            '                    └─┘                                        ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 5, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6 inverse=true', () => {
        let expected = [
            '          ┌─┐     ┌─┐                                          ',
            '        ┌─┼─┘   ┌─┼─┘                                          ',
            '        └─┼─┐ ┌─┼─┼─┐ ┌─┐                                      ',
            '        ┌─┼─┼─┘ └─┘ └─┼─┘                                      ',
            '        └─┼─┼─┐       └─┐                                      ',
            '  ┌──   ┌─┘ └─┘     │ ┌─┘                                      ',
            '  └─┐ ┌─┼─┐         └─┘                                        ',
            '    └─┘ └─┘                                                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 6, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7 inverse=true', () => {
        let expected = [
            '          ┌─┐     ┌─┐                                          ',
            '        ┌─┼─┘   ┌─┼─┘                                          ',
            '        └─┼─┐ ┌─┼─┼─┐ ┌─┐                                      ',
            '        ┌─┼─┼─┘ └─┘ └─┼─┘                                      ',
            '  ┌─┐   └─┼─┼─┐       └─┐                                      ',
            '┌─┼─┘   ┌─┘ └─┘     │ ┌─┘                                      ',
            '└─┼─┐ ┌─┼─┐         └─┘                                        ',
            '┌─┼─┼─┼─┼─┼─┐                                                  ',
            '└─┘ └─┼─┼─┼─┼─┐                                                ',
            '    ┌─┼─┼─┘ └─┘                                                ',
            '    └─┘ └─┐                                                    ',
            '        ┌─┼─┐                                                  ',
            '        └─┼─┼─┐                                                ',
            '  ┌──   ┌─┘ └─┘                                                ',
            '  └─┐ ┌─┼─┐                                                    ',
            '    └─┘ └─┘                                                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 7, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8 inverse=true', () => {
        let expected = [
            '          ┌─┐     ┌─┐                                          ',
            '        ┌─┼─┘   ┌─┼─┘                                          ',
            '        └─┼─┐ ┌─┼─┼─┐ ┌─┐                                      ',
            '        ┌─┼─┼─┘ └─┘ └─┼─┘                                      ',
            '  ┌─┐   └─┼─┼─┐       └─┐                                      ',
            '┌─┼─┘   ┌─┘ └─┘     │ ┌─┘                                      ',
            '└─┼─┐ ┌─┼─┐         └─┘                                        ',
            '┌─┼─┼─┼─┼─┼─┐                                                  ',
            '└─┘ └─┼─┼─┼─┼─┐                                                ',
            '    ┌─┼─┼─┘ └─┘                                                ',
            '    └─┘ └─┐                                                    ',
            '        ┌─┼─┐ ┌─┐ ┌─┐                                          ',
            '  ┌─┐   └─┼─┼─┼─┼─┼─┼─┐                                        ',
            '┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘                                        ',
            '└─┼─┐ ┌─┼─┼─┼─┼─┼─┐                                            ',
            '┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐ ┌─┐                                  ',
            '└─┘ └─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐                                ',
            '    ┌─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘                                ',
            '    └─┘     └─┘     └─┘ └─┐                                    ',
            '                        ┌─┼─┐                                  ',
            '                        └─┼─┼─┐                                ',
            '                  ┌──   ┌─┘ └─┘                                ',
            '                  └─┐ ┌─┼─┐                                    ',
            '                    └─┘ └─┘                                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 8, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9 inverse=true', () => {
        let expected = [
            '          ┌─┐     ┌─┐                                          ',
            '        ┌─┼─┘   ┌─┼─┘                                          ',
            '        └─┼─┐ ┌─┼─┼─┐ ┌─┐                                      ',
            '        ┌─┼─┼─┘ └─┘ └─┼─┘                                      ',
            '  ┌─┐   └─┼─┼─┐       └─┐                                      ',
            '┌─┼─┘   ┌─┘ └─┘     │ ┌─┘                                      ',
            '└─┼─┐ ┌─┼─┐         └─┘                                        ',
            '┌─┼─┼─┼─┼─┼─┐                                                  ',
            '└─┘ └─┼─┼─┼─┼─┐                                                ',
            '    ┌─┼─┼─┘ └─┘                                                ',
            '    └─┘ └─┐                                                    ',
            '        ┌─┼─┐ ┌─┐ ┌─┐         ┌─┐ ┌─┐         ┌─┐ ┌─┐          ',
            '  ┌─┐   └─┼─┼─┼─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┐        ',
            '┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘        ',
            '└─┼─┐ ┌─┼─┼─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┐            ',
            '┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '└─┘ └─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '    ┌─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '    └─┘     └─┘     └─┘ └─┼─┼─┼─┼─┼─┼─┼─┐   └─┘     └─┘ └─┐    ',
            '                        ┌─┼─┼─┼─┼─┼─┼─┼─┘               ┌─┼─┐  ',
            '                  ┌─┐   └─┼─┼─┼─┼─┘ └─┼─┐               └─┼─┼─┐',
            '                ┌─┼─┘   ┌─┼─┼─┼─┘   ┌─┼─┘         ┌──   ┌─┘ └─┘',
            '                └─┼─┐ ┌─┼─┼─┼─┼─┐   └─┘           └─┐ ┌─┼─┐    ',
            '                ┌─┼─┼─┼─┼─┼─┼─┼─┘                   └─┘ └─┘    ',
            '                └─┘ └─┼─┼─┘ └─┼─┐                              ',
            '                    ┌─┼─┘   ┌─┼─┘                              ',
            '                    └─┘     └─┘                                ',
        ];

        let result = new DragonCurve().create(9, { step: 9, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=left', () => {
        let expected = [
            '───',
        ];

        let result = new DragonCurve().create(0, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=left', () => {
        let expected = [
            '──┐',
            '  │',
        ];

        let result = new DragonCurve().create(1, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=left', () => {
        let expected = [
            '──┐',
            '┌─┘',
            '│  ',
        ];

        let result = new DragonCurve().create(2, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=left', () => {
        let expected = [
            '    ──┐',
            '┌─┐ ┌─┘',
            '│ └─┘  ',
        ];

        let result = new DragonCurve().create(3, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=left', () => {
        let expected = [
            '┌─┐        ',
            '│ └─┐   ──┐',
            '  ┌─┼─┐ ┌─┘',
            '  └─┘ └─┘  ',
        ];

        let result = new DragonCurve().create(4, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=left', () => {
        let expected = [
            '  ┌─┐        ',
            '  │ └─┐      ',
            '    ┌─┘      ',
            '  ┌─┼─┐      ',
            '┌─┼─┼─┘      ',
            '└─┘ └─┐   ──┐',
            '    ┌─┼─┐ ┌─┘',
            '    └─┘ └─┘  ',
        ];

        let result = new DragonCurve().create(5, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 rotation=left', () => {
        let expected = [
            '          ┌─┐  ',
            '          │ └─┐',
            '            ┌─┘',
            '  ┌─┐ ┌─┐ ┌─┼─┐',
            '┌─┼─┼─┼─┼─┘ └─┘',
            '└─┘ └─┼─┼─┐    ',
            '    ┌─┘ └─┘    ',
            '  ┌─┼─┐        ',
            '┌─┼─┼─┘        ',
            '└─┘ └─┐   ──┐  ',
            '    ┌─┼─┐ ┌─┘  ',
            '    └─┘ └─┘    ',
        ];

        let result = new DragonCurve().create(6, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 rotation=left', () => {
        let expected = [
            '          ┌─┐ ┌─┐              ',
            '        ┌─┼─┼─┼─┘         ┌─┐  ',
            '        └─┘ └─┼─┐ ┌─┐     │ └─┐',
            '            ┌─┼─┼─┼─┘       ┌─┘',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┐',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┘ └─┘',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┐    ',
            '    ┌─┘ └─┘     └─┘     └─┘    ',
            '  ┌─┼─┐                        ',
            '┌─┼─┼─┘                        ',
            '└─┘ └─┐   ──┐                  ',
            '    ┌─┼─┐ ┌─┘                  ',
            '    └─┘ └─┘                    ',
        ];

        let result = new DragonCurve().create(7, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 rotation=left', () => {
        let expected = [
            '          ┌─┐ ┌─┐         ┌─┐ ┌─┐              ',
            '        ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘              ',
            '        └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐          ',
            '            ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘          ',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┘            ',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┘              ',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐          ',
            '    ┌─┘ └─┘     └─┘   ┌─┼─┼─┼─┼─┼─┼─┘          ',
            '  ┌─┼─┐               └─┼─┼─┼─┼─┼─┘            ',
            '┌─┼─┼─┘               ┌─┼─┘ └─┼─┘         ┌─┐  ',
            '└─┘ └─┐   ──┐         └─┼─┐   └─┐ ┌─┐     │ └─┐',
            '    ┌─┼─┐ ┌─┘           └─┘   ┌─┼─┼─┘       ┌─┘',
            '    └─┘ └─┘                   └─┼─┼─┐ ┌─┐ ┌─┼─┐',
            '                              ┌─┼─┘ └─┼─┼─┘ └─┘',
            '                              └─┼─┐   └─┼─┐    ',
            '                                └─┘     └─┘    ',
        ];

        let result = new DragonCurve().create(8, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 rotation=left', () => {
        let expected = [
            '          ┌─┐ ┌─┐         ┌─┐ ┌─┐                    ',
            '        ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘                    ',
            '        └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐                ',
            '            ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘                ',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┘                  ',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┘                    ',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐                ',
            '    ┌─┘ └─┘     └─┘   ┌─┼─┼─┼─┼─┼─┼─┘                ',
            '  ┌─┼─┐               └─┼─┼─┼─┼─┼─┘       ┌─┐ ┌─┐    ',
            '┌─┼─┼─┘               ┌─┼─┘ └─┼─┘       ┌─┼─┼─┼─┘    ',
            '└─┘ └─┐   ──┐         └─┼─┐   └─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐',
            '    ┌─┼─┐ ┌─┘           └─┘   ┌─┼─┼─┘       ┌─┼─┼─┼─┘',
            '    └─┘ └─┘                   └─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┘  ',
            '                          ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┘    ',
            '                          └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐',
            '                      ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘',
            '                      └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '                      ┌─┼─┘ └─┼─┼─┼─┼─┼─┘            ',
            '                      └─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐        ',
            '                        └─┘   ┌─┼─┼─┼─┼─┼─┼─┘        ',
            '                              └─┼─┘ └─┘ └─┘          ',
            '                          ┌─┐ ┌─┘                    ',
            '                          └─┼─┼─┐ ┌─┐                ',
            '                      ┌─┐ ┌─┼─┼─┼─┼─┘                ',
            '                      └─┼─┼─┼─┼─┼─┘                  ',
            '                      ┌─┼─┘ └─┼─┘         ┌─┐        ',
            '                      └─┼─┐   └─┐ ┌─┐     │ └─┐      ',
            '                        └─┘   ┌─┼─┼─┘       ┌─┘      ',
            '                              └─┼─┼─┐ ┌─┐ ┌─┼─┐      ',
            '                              ┌─┼─┘ └─┼─┼─┘ └─┘      ',
            '                              └─┼─┐   └─┼─┐          ',
            '                                └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(9, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0 rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '          ───                                        ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 0, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1 rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '          ──┐                                        ',
            '            │                                        ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 1, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2 rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '          ──┐                                        ',
            '          ┌─┘                                        ',
            '          │                                          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 2, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3 rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '          ──┐                                        ',
            '      ┌─┐ ┌─┘                                        ',
            '      │ └─┘                                          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 3, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4 rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '  ┌─┐                                                ',
            '  │ └─┐   ──┐                                        ',
            '    ┌─┼─┐ ┌─┘                                        ',
            '    └─┘ └─┘                                          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 4, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5 rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '  ┌─┐                                                ',
            '  │ └─┐                                              ',
            '    ┌─┘                                              ',
            '  ┌─┼─┐                                              ',
            '┌─┼─┼─┘                                              ',
            '└─┘ └─┐   ──┐                                        ',
            '    ┌─┼─┐ ┌─┘                                        ',
            '    └─┘ └─┘                                          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 5, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6 rotation=left', () => {
        let expected = [
            '                                                     ',
            '          ┌─┐                                        ',
            '          │ └─┐                                      ',
            '            ┌─┘                                      ',
            '  ┌─┐ ┌─┐ ┌─┼─┐                                      ',
            '┌─┼─┼─┼─┼─┘ └─┘                                      ',
            '└─┘ └─┼─┼─┐                                          ',
            '    ┌─┘ └─┘                                          ',
            '  ┌─┼─┐                                              ',
            '┌─┼─┼─┘                                              ',
            '└─┘ └─┐   ──┐                                        ',
            '    ┌─┼─┐ ┌─┘                                        ',
            '    └─┘ └─┘                                          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 6, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7 rotation=left', () => {
        let expected = [
            '          ┌─┐ ┌─┐                                    ',
            '        ┌─┼─┼─┼─┘         ┌─┐                        ',
            '        └─┘ └─┼─┐ ┌─┐     │ └─┐                      ',
            '            ┌─┼─┼─┼─┘       ┌─┘                      ',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┐                      ',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┘ └─┘                      ',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┐                          ',
            '    ┌─┘ └─┘     └─┘     └─┘                          ',
            '  ┌─┼─┐                                              ',
            '┌─┼─┼─┘                                              ',
            '└─┘ └─┐   ──┐                                        ',
            '    ┌─┼─┐ ┌─┘                                        ',
            '    └─┘ └─┘                                          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 7, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8 rotation=left', () => {
        let expected = [
            '          ┌─┐ ┌─┐         ┌─┐ ┌─┐                    ',
            '        ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘                    ',
            '        └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐                ',
            '            ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘                ',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┘                  ',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┘                    ',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐                ',
            '    ┌─┘ └─┘     └─┘   ┌─┼─┼─┼─┼─┼─┼─┘                ',
            '  ┌─┼─┐               └─┼─┼─┼─┼─┼─┘                  ',
            '┌─┼─┼─┘               ┌─┼─┘ └─┼─┘         ┌─┐        ',
            '└─┘ └─┐   ──┐         └─┼─┐   └─┐ ┌─┐     │ └─┐      ',
            '    ┌─┼─┐ ┌─┘           └─┘   ┌─┼─┼─┘       ┌─┘      ',
            '    └─┘ └─┘                   └─┼─┼─┐ ┌─┐ ┌─┼─┐      ',
            '                              ┌─┼─┘ └─┼─┼─┘ └─┘      ',
            '                              └─┼─┐   └─┼─┐          ',
            '                                └─┘     └─┘          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 8, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9 rotation=left', () => {
        let expected = [
            '          ┌─┐ ┌─┐         ┌─┐ ┌─┐                    ',
            '        ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘                    ',
            '        └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐                ',
            '            ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘                ',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┘                  ',
            '┌─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┼─┘                    ',
            '└─┘ └─┼─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐                ',
            '    ┌─┘ └─┘     └─┘   ┌─┼─┼─┼─┼─┼─┼─┘                ',
            '  ┌─┼─┐               └─┼─┼─┼─┼─┼─┘       ┌─┐ ┌─┐    ',
            '┌─┼─┼─┘               ┌─┼─┘ └─┼─┘       ┌─┼─┼─┼─┘    ',
            '└─┘ └─┐   ──┐         └─┼─┐   └─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐',
            '    ┌─┼─┐ ┌─┘           └─┘   ┌─┼─┼─┘       ┌─┼─┼─┼─┘',
            '    └─┘ └─┘                   └─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┘  ',
            '                          ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┘    ',
            '                          └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐',
            '                      ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘',
            '                      └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '                      ┌─┼─┘ └─┼─┼─┼─┼─┼─┘            ',
            '                      └─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐        ',
            '                        └─┘   ┌─┼─┼─┼─┼─┼─┼─┘        ',
            '                              └─┼─┘ └─┘ └─┘          ',
            '                          ┌─┐ ┌─┘                    ',
            '                          └─┼─┼─┐ ┌─┐                ',
            '                      ┌─┐ ┌─┼─┼─┼─┼─┘                ',
            '                      └─┼─┼─┼─┼─┼─┘                  ',
            '                      ┌─┼─┘ └─┼─┘         ┌─┐        ',
            '                      └─┼─┐   └─┐ ┌─┐     │ └─┐      ',
            '                        └─┘   ┌─┼─┼─┘       ┌─┘      ',
            '                              └─┼─┼─┐ ┌─┐ ┌─┼─┐      ',
            '                              ┌─┼─┘ └─┼─┼─┘ └─┘      ',
            '                              └─┼─┐   └─┼─┐          ',
            '                                └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 9, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true rotation=left', () => {
        let expected = [
            '───',
        ];

        let result = new DragonCurve().create(0, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=left', () => {
        let expected = [
            '  │',
            '──┘',
        ];

        let result = new DragonCurve().create(1, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=left', () => {
        let expected = [
            '│  ',
            '└─┐',
            '──┘',
        ];

        let result = new DragonCurve().create(2, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=left', () => {
        let expected = [
            '│ ┌─┐  ',
            '└─┘ └─┐',
            '    ──┘',
        ];

        let result = new DragonCurve().create(3, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=left', () => {
        let expected = [
            '  ┌─┐ ┌─┐  ',
            '  └─┼─┘ └─┐',
            '│ ┌─┘   ──┘',
            '└─┘        ',
        ];

        let result = new DragonCurve().create(4, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=left', () => {
        let expected = [
            '    ┌─┐ ┌─┐  ',
            '    └─┼─┘ └─┐',
            '┌─┐ ┌─┘   ──┘',
            '└─┼─┼─┐      ',
            '  └─┼─┘      ',
            '    └─┐      ',
            '  │ ┌─┘      ',
            '  └─┘        ',
        ];

        let result = new DragonCurve().create(5, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true rotation=left', () => {
        let expected = [
            '    ┌─┐ ┌─┐    ',
            '    └─┼─┘ └─┐  ',
            '┌─┐ ┌─┘   ──┘  ',
            '└─┼─┼─┐        ',
            '  └─┼─┘        ',
            '    └─┐ ┌─┐    ',
            '┌─┐ ┌─┼─┼─┘    ',
            '└─┼─┼─┼─┼─┐ ┌─┐',
            '  └─┘ └─┘ └─┼─┘',
            '            └─┐',
            '          │ ┌─┘',
            '          └─┘  ',
        ];

        let result = new DragonCurve().create(6, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true rotation=left', () => {
        let expected = [
            '    ┌─┐ ┌─┐                    ',
            '    └─┼─┘ └─┐                  ',
            '┌─┐ ┌─┘   ──┘                  ',
            '└─┼─┼─┐                        ',
            '  └─┼─┘                        ',
            '    └─┐ ┌─┐     ┌─┐     ┌─┐    ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┘    ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┘',
            '            └─┼─┼─┼─┐       └─┐',
            '        ┌─┐ ┌─┼─┘ └─┘     │ ┌─┘',
            '        └─┼─┼─┼─┐         └─┘  ',
            '          └─┘ └─┘              ',
        ];

        let result = new DragonCurve().create(7, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true rotation=left', () => {
        let expected = [
            '                                ┌─┐     ┌─┐    ',
            '                              ┌─┼─┘   ┌─┼─┘    ',
            '                              └─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '    ┌─┐ ┌─┐                   ┌─┼─┼─┘ └─┘ └─┼─┘',
            '    └─┼─┘ └─┐           ┌─┐   └─┼─┼─┐       └─┐',
            '┌─┐ ┌─┘   ──┘         ┌─┼─┘   ┌─┘ └─┘     │ ┌─┘',
            '└─┼─┼─┐               └─┼─┐ ┌─┼─┐         └─┘  ',
            '  └─┼─┘               ┌─┼─┼─┼─┼─┼─┐            ',
            '    └─┐ ┌─┐     ┌─┐   └─┼─┼─┼─┼─┼─┼─┐          ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘          ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┐              ',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┐            ',
            '            └─┼─┼─┼─┐       └─┼─┼─┼─┐          ',
            '        ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘          ',
            '        └─┼─┼─┼─┐       └─┼─┼─┼─┐              ',
            '          └─┘ └─┘         └─┘ └─┘              ',
        ];

        let result = new DragonCurve().create(8, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true rotation=left', () => {
        let expected = [
            '                                ┌─┐     ┌─┐          ',
            '                              ┌─┼─┘   ┌─┼─┘          ',
            '                              └─┼─┐ ┌─┼─┼─┐ ┌─┐      ',
            '                              ┌─┼─┼─┘ └─┘ └─┼─┘      ',
            '                        ┌─┐   └─┼─┼─┐       └─┐      ',
            '                      ┌─┼─┘   ┌─┘ └─┘     │ ┌─┘      ',
            '                      └─┼─┐ ┌─┼─┐         └─┘        ',
            '                      ┌─┼─┼─┼─┼─┼─┐                  ',
            '                      └─┘ └─┼─┼─┼─┼─┐                ',
            '                          ┌─┼─┼─┘ └─┘                ',
            '                          └─┘ └─┐                    ',
            '                              ┌─┼─┐ ┌─┐ ┌─┐          ',
            '                        ┌─┐   └─┼─┼─┼─┼─┼─┼─┐        ',
            '                      ┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘        ',
            '                      └─┼─┐ ┌─┼─┼─┼─┼─┼─┐            ',
            '                      ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '                      └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐',
            '                          ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘',
            '                          └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┐    ',
            '    ┌─┐ ┌─┐                   ┌─┼─┼─┘ └─┘ └─┼─┼─┼─┐  ',
            '    └─┼─┘ └─┐           ┌─┐   └─┼─┼─┐       └─┼─┼─┼─┐',
            '┌─┐ ┌─┘   ──┘         ┌─┼─┘   ┌─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘',
            '└─┼─┼─┐               └─┼─┐ ┌─┼─┐       └─┼─┼─┼─┐    ',
            '  └─┼─┘               ┌─┼─┼─┼─┼─┼─┐       └─┘ └─┘    ',
            '    └─┐ ┌─┐     ┌─┐   └─┼─┼─┼─┼─┼─┼─┐                ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘                ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┐                    ',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┐                  ',
            '            └─┼─┼─┼─┐       └─┼─┼─┼─┐                ',
            '        ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘                ',
            '        └─┼─┼─┼─┐       └─┼─┼─┼─┐                    ',
            '          └─┘ └─┘         └─┘ └─┘                    ',
        ];

        let result = new DragonCurve().create(9, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '          ───                                        ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 0, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '            │                                        ',
            '          ──┘                                        ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 1, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '          │                                          ',
            '          └─┐                                        ',
            '          ──┘                                        ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 2, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '      │ ┌─┐                                          ',
            '      └─┘ └─┐                                        ',
            '          ──┘                                        ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 3, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '    ┌─┐ ┌─┐                                          ',
            '    └─┼─┘ └─┐                                        ',
            '  │ ┌─┘   ──┘                                        ',
            '  └─┘                                                ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 4, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '    ┌─┐ ┌─┐                                          ',
            '    └─┼─┘ └─┐                                        ',
            '┌─┐ ┌─┘   ──┘                                        ',
            '└─┼─┼─┐                                              ',
            '  └─┼─┘                                              ',
            '    └─┐                                              ',
            '  │ ┌─┘                                              ',
            '  └─┘                                                ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 5, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '    ┌─┐ ┌─┐                                          ',
            '    └─┼─┘ └─┐                                        ',
            '┌─┐ ┌─┘   ──┘                                        ',
            '└─┼─┼─┐                                              ',
            '  └─┼─┘                                              ',
            '    └─┐ ┌─┐                                          ',
            '┌─┐ ┌─┼─┼─┘                                          ',
            '└─┼─┼─┼─┼─┐ ┌─┐                                      ',
            '  └─┘ └─┘ └─┼─┘                                      ',
            '            └─┐                                      ',
            '          │ ┌─┘                                      ',
            '          └─┘                                        ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 6, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '    ┌─┐ ┌─┐                                          ',
            '    └─┼─┘ └─┐                                        ',
            '┌─┐ ┌─┘   ──┘                                        ',
            '└─┼─┼─┐                                              ',
            '  └─┼─┘                                              ',
            '    └─┐ ┌─┐     ┌─┐     ┌─┐                          ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┘                          ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┐                      ',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┘                      ',
            '            └─┼─┼─┼─┐       └─┐                      ',
            '        ┌─┐ ┌─┼─┘ └─┘     │ ┌─┘                      ',
            '        └─┼─┼─┼─┐         └─┘                        ',
            '          └─┘ └─┘                                    ',
        ];

        let result = new DragonCurve().create(9, { step: 7, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8 inverse=true rotation=left', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                ┌─┐     ┌─┐          ',
            '                              ┌─┼─┘   ┌─┼─┘          ',
            '                              └─┼─┐ ┌─┼─┼─┐ ┌─┐      ',
            '    ┌─┐ ┌─┐                   ┌─┼─┼─┘ └─┘ └─┼─┘      ',
            '    └─┼─┘ └─┐           ┌─┐   └─┼─┼─┐       └─┐      ',
            '┌─┐ ┌─┘   ──┘         ┌─┼─┘   ┌─┘ └─┘     │ ┌─┘      ',
            '└─┼─┼─┐               └─┼─┐ ┌─┼─┐         └─┘        ',
            '  └─┼─┘               ┌─┼─┼─┼─┼─┼─┐                  ',
            '    └─┐ ┌─┐     ┌─┐   └─┼─┼─┼─┼─┼─┼─┐                ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘                ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┐                    ',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┐                  ',
            '            └─┼─┼─┼─┐       └─┼─┼─┼─┐                ',
            '        ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘                ',
            '        └─┼─┼─┼─┐       └─┼─┼─┼─┐                    ',
            '          └─┘ └─┘         └─┘ └─┘                    ',
        ];

        let result = new DragonCurve().create(9, { step: 8, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9 inverse=true rotation=left', () => {
        let expected = [
            '                                ┌─┐     ┌─┐          ',
            '                              ┌─┼─┘   ┌─┼─┘          ',
            '                              └─┼─┐ ┌─┼─┼─┐ ┌─┐      ',
            '                              ┌─┼─┼─┘ └─┘ └─┼─┘      ',
            '                        ┌─┐   └─┼─┼─┐       └─┐      ',
            '                      ┌─┼─┘   ┌─┘ └─┘     │ ┌─┘      ',
            '                      └─┼─┐ ┌─┼─┐         └─┘        ',
            '                      ┌─┼─┼─┼─┼─┼─┐                  ',
            '                      └─┘ └─┼─┼─┼─┼─┐                ',
            '                          ┌─┼─┼─┘ └─┘                ',
            '                          └─┘ └─┐                    ',
            '                              ┌─┼─┐ ┌─┐ ┌─┐          ',
            '                        ┌─┐   └─┼─┼─┼─┼─┼─┼─┐        ',
            '                      ┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘        ',
            '                      └─┼─┐ ┌─┼─┼─┼─┼─┼─┐            ',
            '                      ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '                      └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐',
            '                          ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘',
            '                          └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┐    ',
            '    ┌─┐ ┌─┐                   ┌─┼─┼─┘ └─┘ └─┼─┼─┼─┐  ',
            '    └─┼─┘ └─┐           ┌─┐   └─┼─┼─┐       └─┼─┼─┼─┐',
            '┌─┐ ┌─┘   ──┘         ┌─┼─┘   ┌─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘',
            '└─┼─┼─┐               └─┼─┐ ┌─┼─┐       └─┼─┼─┼─┐    ',
            '  └─┼─┘               ┌─┼─┼─┼─┼─┼─┐       └─┘ └─┘    ',
            '    └─┐ ┌─┐     ┌─┐   └─┼─┼─┼─┼─┼─┼─┐                ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┘ └─┘                ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┐                    ',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┐                  ',
            '            └─┼─┼─┼─┐       └─┼─┼─┼─┐                ',
            '        ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘                ',
            '        └─┼─┼─┼─┐       └─┼─┼─┼─┐                    ',
            '          └─┘ └─┘         └─┘ └─┘                    ',
        ];

        let result = new DragonCurve().create(9, { step: 9, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=right', () => {
        let expected = [
            '───',
        ];

        let result = new DragonCurve().create(0, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=right', () => {
        let expected = [
            '│  ',
            '└──',
        ];

        let result = new DragonCurve().create(1, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=right', () => {
        let expected = [
            '  │',
            '┌─┘',
            '└──',
        ];

        let result = new DragonCurve().create(2, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=right', () => {
        let expected = [
            '  ┌─┐ │',
            '┌─┘ └─┘',
            '└──    ',
        ];

        let result = new DragonCurve().create(3, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=right', () => {
        let expected = [
            '  ┌─┐ ┌─┐  ',
            '┌─┘ └─┼─┘  ',
            '└──   └─┐ │',
            '        └─┘',
        ];

        let result = new DragonCurve().create(4, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=right', () => {
        let expected = [
            '  ┌─┐ ┌─┐    ',
            '┌─┘ └─┼─┘    ',
            '└──   └─┐ ┌─┐',
            '      ┌─┼─┼─┘',
            '      └─┼─┘  ',
            '      ┌─┘    ',
            '      └─┐ │  ',
            '        └─┘  ',
        ];

        let result = new DragonCurve().create(5, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 rotation=right', () => {
        let expected = [
            '    ┌─┐ ┌─┐    ',
            '  ┌─┘ └─┼─┘    ',
            '  └──   └─┐ ┌─┐',
            '        ┌─┼─┼─┘',
            '        └─┼─┘  ',
            '    ┌─┐ ┌─┘    ',
            '    └─┼─┼─┐ ┌─┐',
            '┌─┐ ┌─┼─┼─┼─┼─┘',
            '└─┼─┘ └─┘ └─┘  ',
            '┌─┘            ',
            '└─┐ │          ',
            '  └─┘          ',
        ];

        let result = new DragonCurve().create(6, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 rotation=right', () => {
        let expected = [
            '                    ┌─┐ ┌─┐    ',
            '                  ┌─┘ └─┼─┘    ',
            '                  └──   └─┐ ┌─┐',
            '                        ┌─┼─┼─┘',
            '                        └─┼─┘  ',
            '    ┌─┐     ┌─┐     ┌─┐ ┌─┘    ',
            '    └─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '└─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '┌─┘       ┌─┼─┼─┼─┘            ',
            '└─┐ │     └─┘ └─┼─┐ ┌─┐        ',
            '  └─┘         ┌─┼─┼─┼─┘        ',
            '              └─┘ └─┘          ',
        ];

        let result = new DragonCurve().create(7, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 rotation=right', () => {
        let expected = [
            '    ┌─┐     ┌─┐                                ',
            '    └─┼─┐   └─┼─┐                              ',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┘                              ',
            '└─┼─┘ └─┘ └─┼─┼─┐                   ┌─┐ ┌─┐    ',
            '┌─┘       ┌─┼─┼─┘   ┌─┐           ┌─┘ └─┼─┘    ',
            '└─┐ │     └─┘ └─┐   └─┼─┐         └──   └─┐ ┌─┐',
            '  └─┘         ┌─┼─┐ ┌─┼─┘               ┌─┼─┼─┘',
            '            ┌─┼─┼─┼─┼─┼─┐               └─┼─┘  ',
            '          ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐     ┌─┐ ┌─┘    ',
            '          └─┘ └─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '              ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '            ┌─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '          ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘            ',
            '          └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐        ',
            '              ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘        ',
            '              └─┘ └─┘         └─┘ └─┘          ',
        ];

        let result = new DragonCurve().create(8, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 rotation=right', () => {
        let expected = [
            '          ┌─┐     ┌─┐                                ',
            '          └─┼─┐   └─┼─┐                              ',
            '      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘                              ',
            '      └─┼─┘ └─┘ └─┼─┼─┐                              ',
            '      ┌─┘       ┌─┼─┼─┘   ┌─┐                        ',
            '      └─┐ │     └─┘ └─┐   └─┼─┐                      ',
            '        └─┘         ┌─┼─┐ ┌─┼─┘                      ',
            '                  ┌─┼─┼─┼─┼─┼─┐                      ',
            '                ┌─┼─┼─┼─┼─┘ └─┘                      ',
            '                └─┘ └─┼─┼─┐                          ',
            '                    ┌─┘ └─┘                          ',
            '          ┌─┐ ┌─┐ ┌─┼─┐                              ',
            '        ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐                        ',
            '        └─┘ └─┼─┼─┼─┼─┐   └─┼─┐                      ',
            '            ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┘                      ',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                      ',
            '┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘                      ',
            '└─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                          ',
            '    ┌─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘                          ',
            '  ┌─┼─┼─┼─┘ └─┘ └─┼─┼─┐                   ┌─┐ ┌─┐    ',
            '┌─┼─┼─┼─┘       ┌─┼─┼─┘   ┌─┐           ┌─┘ └─┼─┘    ',
            '└─┘ └─┼─┐ ┌─┐   └─┘ └─┐   └─┼─┐         └──   └─┐ ┌─┐',
            '    ┌─┼─┼─┼─┘       ┌─┼─┐ ┌─┼─┘               ┌─┼─┼─┘',
            '    └─┘ └─┘       ┌─┼─┼─┼─┼─┼─┐               └─┼─┘  ',
            '                ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐     ┌─┐ ┌─┘    ',
            '                └─┘ └─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '                    ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '                  ┌─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '                ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘            ',
            '                └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐        ',
            '                    ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘        ',
            '                    └─┘ └─┘         └─┘ └─┘          ',
        ];

        let result = new DragonCurve().create(9, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                        ───          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 0, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                        │            ',
            '                                        └──          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 1, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                          │          ',
            '                                        ┌─┘          ',
            '                                        └──          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 2, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                          ┌─┐ │      ',
            '                                        ┌─┘ └─┘      ',
            '                                        └──          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 3, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                          ┌─┐ ┌─┐    ',
            '                                        ┌─┘ └─┼─┘    ',
            '                                        └──   └─┐ │  ',
            '                                                └─┘  ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 4, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                          ┌─┐ ┌─┐    ',
            '                                        ┌─┘ └─┼─┘    ',
            '                                        └──   └─┐ ┌─┐',
            '                                              ┌─┼─┼─┘',
            '                                              └─┼─┘  ',
            '                                              ┌─┘    ',
            '                                              └─┐ │  ',
            '                                                └─┘  ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 5, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                          ┌─┐ ┌─┐    ',
            '                                        ┌─┘ └─┼─┘    ',
            '                                        └──   └─┐ ┌─┐',
            '                                              ┌─┼─┼─┘',
            '                                              └─┼─┘  ',
            '                                          ┌─┐ ┌─┘    ',
            '                                          └─┼─┼─┐ ┌─┐',
            '                                      ┌─┐ ┌─┼─┼─┼─┼─┘',
            '                                      └─┼─┘ └─┘ └─┘  ',
            '                                      ┌─┘            ',
            '                                      └─┐ │          ',
            '                                        └─┘          ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 6, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                          ┌─┐ ┌─┐    ',
            '                                        ┌─┘ └─┼─┘    ',
            '                                        └──   └─┐ ┌─┐',
            '                                              ┌─┼─┼─┘',
            '                                              └─┼─┘  ',
            '                          ┌─┐     ┌─┐     ┌─┐ ┌─┘    ',
            '                          └─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '                      ┌─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '                      └─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '                      ┌─┘       ┌─┼─┼─┼─┘            ',
            '                      └─┐ │     └─┘ └─┼─┐ ┌─┐        ',
            '                        └─┘         ┌─┼─┼─┼─┘        ',
            '                                    └─┘ └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 7, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8 rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '          ┌─┐     ┌─┐                                ',
            '          └─┼─┐   └─┼─┐                              ',
            '      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘                              ',
            '      └─┼─┘ └─┘ └─┼─┼─┐                   ┌─┐ ┌─┐    ',
            '      ┌─┘       ┌─┼─┼─┘   ┌─┐           ┌─┘ └─┼─┘    ',
            '      └─┐ │     └─┘ └─┐   └─┼─┐         └──   └─┐ ┌─┐',
            '        └─┘         ┌─┼─┐ ┌─┼─┘               ┌─┼─┼─┘',
            '                  ┌─┼─┼─┼─┼─┼─┐               └─┼─┘  ',
            '                ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐     ┌─┐ ┌─┘    ',
            '                └─┘ └─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '                    ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '                  ┌─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '                ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘            ',
            '                └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐        ',
            '                    ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘        ',
            '                    └─┘ └─┘         └─┘ └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 8, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9 rotation=right', () => {
        let expected = [
            '          ┌─┐     ┌─┐                                ',
            '          └─┼─┐   └─┼─┐                              ',
            '      ┌─┐ ┌─┼─┼─┐ ┌─┼─┘                              ',
            '      └─┼─┘ └─┘ └─┼─┼─┐                              ',
            '      ┌─┘       ┌─┼─┼─┘   ┌─┐                        ',
            '      └─┐ │     └─┘ └─┐   └─┼─┐                      ',
            '        └─┘         ┌─┼─┐ ┌─┼─┘                      ',
            '                  ┌─┼─┼─┼─┼─┼─┐                      ',
            '                ┌─┼─┼─┼─┼─┘ └─┘                      ',
            '                └─┘ └─┼─┼─┐                          ',
            '                    ┌─┘ └─┘                          ',
            '          ┌─┐ ┌─┐ ┌─┼─┐                              ',
            '        ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐                        ',
            '        └─┘ └─┼─┼─┼─┼─┐   └─┼─┐                      ',
            '            ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┘                      ',
            '  ┌─┐ ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                      ',
            '┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘                      ',
            '└─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                          ',
            '    ┌─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘                          ',
            '  ┌─┼─┼─┼─┘ └─┘ └─┼─┼─┐                   ┌─┐ ┌─┐    ',
            '┌─┼─┼─┼─┘       ┌─┼─┼─┘   ┌─┐           ┌─┘ └─┼─┘    ',
            '└─┘ └─┼─┐ ┌─┐   └─┘ └─┐   └─┼─┐         └──   └─┐ ┌─┐',
            '    ┌─┼─┼─┼─┘       ┌─┼─┐ ┌─┼─┘               ┌─┼─┼─┘',
            '    └─┘ └─┘       ┌─┼─┼─┼─┼─┼─┐               └─┼─┘  ',
            '                ┌─┼─┼─┼─┼─┼─┼─┘   ┌─┐     ┌─┐ ┌─┘    ',
            '                └─┘ └─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '                    ┌─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '                  ┌─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '                ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘            ',
            '                └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐        ',
            '                    ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘        ',
            '                    └─┘ └─┘         └─┘ └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 9, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true rotation=right', () => {
        let expected = [
            '───',
        ];

        let result = new DragonCurve().create(0, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=right', () => {
        let expected = [
            '┌──',
            '│  ',
        ];

        let result = new DragonCurve().create(1, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=right', () => {
        let expected = [
            '┌──',
            '└─┐',
            '  │',
        ];

        let result = new DragonCurve().create(2, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=right', () => {
        let expected = [
            '┌──    ',
            '└─┐ ┌─┐',
            '  └─┘ │',
        ];

        let result = new DragonCurve().create(3, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=right', () => {
        let expected = [
            '        ┌─┐',
            '┌──   ┌─┘ │',
            '└─┐ ┌─┼─┐  ',
            '  └─┘ └─┘  ',
        ];

        let result = new DragonCurve().create(4, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=right', () => {
        let expected = [
            '        ┌─┐  ',
            '      ┌─┘ │  ',
            '      └─┐    ',
            '      ┌─┼─┐  ',
            '      └─┼─┼─┐',
            '┌──   ┌─┘ └─┘',
            '└─┐ ┌─┼─┐    ',
            '  └─┘ └─┘    ',
        ];

        let result = new DragonCurve().create(5, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true rotation=right', () => {
        let expected = [
            '  ┌─┐          ',
            '┌─┘ │          ',
            '└─┐            ',
            '┌─┼─┐ ┌─┐ ┌─┐  ',
            '└─┘ └─┼─┼─┼─┼─┐',
            '    ┌─┼─┼─┘ └─┘',
            '    └─┘ └─┐    ',
            '        ┌─┼─┐  ',
            '        └─┼─┼─┐',
            '  ┌──   ┌─┘ └─┘',
            '  └─┐ ┌─┼─┐    ',
            '    └─┘ └─┘    ',
        ];

        let result = new DragonCurve().create(6, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true rotation=right', () => {
        let expected = [
            '              ┌─┐ ┌─┐          ',
            '  ┌─┐         └─┼─┼─┼─┐        ',
            '┌─┘ │     ┌─┐ ┌─┼─┘ └─┘        ',
            '└─┐       └─┼─┼─┼─┐            ',
            '┌─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '└─┘ └─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '    ┌─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '    └─┘     └─┘     └─┘ └─┐    ',
            '                        ┌─┼─┐  ',
            '                        └─┼─┼─┐',
            '                  ┌──   ┌─┘ └─┘',
            '                  └─┐ ┌─┼─┐    ',
            '                    └─┘ └─┘    ',
        ];

        let result = new DragonCurve().create(7, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true rotation=right', () => {
        let expected = [
            '              ┌─┐ ┌─┐         ┌─┐ ┌─┐          ',
            '              └─┼─┼─┼─┐       └─┼─┼─┼─┐        ',
            '          ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘        ',
            '          └─┼─┼─┼─┐       └─┼─┼─┼─┐            ',
            '            └─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '              └─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '          ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '          └─┼─┼─┼─┼─┼─┼─┐   └─┘     └─┘ └─┐    ',
            '            └─┼─┼─┼─┼─┼─┘               ┌─┼─┐  ',
            '  ┌─┐         └─┼─┘ └─┼─┐               └─┼─┼─┐',
            '┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘         ┌──   ┌─┘ └─┘',
            '└─┐       └─┼─┼─┐   └─┘           └─┐ ┌─┼─┐    ',
            '┌─┼─┐ ┌─┐ ┌─┼─┼─┘                   └─┘ └─┘    ',
            '└─┘ └─┼─┼─┘ └─┼─┐                              ',
            '    ┌─┼─┘   ┌─┼─┘                              ',
            '    └─┘     └─┘                                ',
        ];

        let result = new DragonCurve().create(8, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true rotation=right', () => {
        let expected = [
            '                    ┌─┐ ┌─┐         ┌─┐ ┌─┐          ',
            '                    └─┼─┼─┼─┐       └─┼─┼─┼─┐        ',
            '                ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘        ',
            '                └─┼─┼─┼─┐       └─┼─┼─┼─┐            ',
            '                  └─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '                    └─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '                ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '                └─┼─┼─┼─┼─┼─┼─┐   └─┘     └─┘ └─┐    ',
            '    ┌─┐ ┌─┐       └─┼─┼─┼─┼─┼─┘               ┌─┼─┐  ',
            '    └─┼─┼─┼─┐       └─┼─┘ └─┼─┐               └─┼─┼─┐',
            '┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┘   ┌─┼─┘         ┌──   ┌─┘ └─┘',
            '└─┼─┼─┼─┐       └─┼─┼─┐   └─┘           └─┐ ┌─┼─┐    ',
            '  └─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┘                   └─┘ └─┘    ',
            '    └─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐                          ',
            '┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                          ',
            '└─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐                      ',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                      ',
            '            └─┼─┼─┼─┼─┼─┘ └─┼─┐                      ',
            '        ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘                      ',
            '        └─┼─┼─┼─┼─┼─┼─┐   └─┘                        ',
            '          └─┘ └─┘ └─┼─┘                              ',
            '                    └─┐ ┌─┐                          ',
            '                ┌─┐ ┌─┼─┼─┘                          ',
            '                └─┼─┼─┼─┼─┐ ┌─┐                      ',
            '                  └─┼─┼─┼─┼─┼─┘                      ',
            '        ┌─┐         └─┼─┘ └─┼─┐                      ',
            '      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘                      ',
            '      └─┐       └─┼─┼─┐   └─┘                        ',
            '      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘                              ',
            '      └─┘ └─┼─┼─┘ └─┼─┐                              ',
            '          ┌─┼─┘   ┌─┼─┘                              ',
            '          └─┘     └─┘                                ',
        ];

        let result = new DragonCurve().create(9, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0 inverse=true rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                        ───          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 0, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1 inverse=true rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                        ┌──          ',
            '                                        │            ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 1, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2 inverse=true rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                        ┌──          ',
            '                                        └─┐          ',
            '                                          │          ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 2, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3 inverse=true rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                        ┌──          ',
            '                                        └─┐ ┌─┐      ',
            '                                          └─┘ │      ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 3, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4 inverse=true rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                ┌─┐  ',
            '                                        ┌──   ┌─┘ │  ',
            '                                        └─┐ ┌─┼─┐    ',
            '                                          └─┘ └─┘    ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 4, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5 inverse=true rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                ┌─┐  ',
            '                                              ┌─┘ │  ',
            '                                              └─┐    ',
            '                                              ┌─┼─┐  ',
            '                                              └─┼─┼─┐',
            '                                        ┌──   ┌─┘ └─┘',
            '                                        └─┐ ┌─┼─┐    ',
            '                                          └─┘ └─┘    ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 5, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6 inverse=true rotation=right', () => {
        let expected = [
            '                                                     ',
            '                                        ┌─┐          ',
            '                                      ┌─┘ │          ',
            '                                      └─┐            ',
            '                                      ┌─┼─┐ ┌─┐ ┌─┐  ',
            '                                      └─┘ └─┼─┼─┼─┼─┐',
            '                                          ┌─┼─┼─┘ └─┘',
            '                                          └─┘ └─┐    ',
            '                                              ┌─┼─┐  ',
            '                                              └─┼─┼─┐',
            '                                        ┌──   ┌─┘ └─┘',
            '                                        └─┐ ┌─┼─┐    ',
            '                                          └─┘ └─┘    ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 6, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7 inverse=true rotation=right', () => {
        let expected = [
            '                                    ┌─┐ ┌─┐          ',
            '                        ┌─┐         └─┼─┼─┼─┐        ',
            '                      ┌─┘ │     ┌─┐ ┌─┼─┘ └─┘        ',
            '                      └─┐       └─┼─┼─┼─┐            ',
            '                      ┌─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '                      └─┘ └─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '                          ┌─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '                          └─┘     └─┘     └─┘ └─┐    ',
            '                                              ┌─┼─┐  ',
            '                                              └─┼─┼─┐',
            '                                        ┌──   ┌─┘ └─┘',
            '                                        └─┐ ┌─┼─┐    ',
            '                                          └─┘ └─┘    ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 7, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8 inverse=true rotation=right', () => {
        let expected = [
            '                    ┌─┐ ┌─┐         ┌─┐ ┌─┐          ',
            '                    └─┼─┼─┼─┐       └─┼─┼─┼─┐        ',
            '                ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘        ',
            '                └─┼─┼─┼─┐       └─┼─┼─┼─┐            ',
            '                  └─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '                    └─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '                ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '                └─┼─┼─┼─┼─┼─┼─┐   └─┘     └─┘ └─┐    ',
            '                  └─┼─┼─┼─┼─┼─┘               ┌─┼─┐  ',
            '        ┌─┐         └─┼─┘ └─┼─┐               └─┼─┼─┐',
            '      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘         ┌──   ┌─┘ └─┘',
            '      └─┐       └─┼─┼─┐   └─┘           └─┐ ┌─┼─┐    ',
            '      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘                   └─┘ └─┘    ',
            '      └─┘ └─┼─┼─┘ └─┼─┐                              ',
            '          ┌─┼─┘   ┌─┼─┘                              ',
            '          └─┘     └─┘                                ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
            '                                                     ',
        ];

        let result = new DragonCurve().create(9, { step: 8, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9 inverse=true rotation=right', () => {
        let expected = [
            '                    ┌─┐ ┌─┐         ┌─┐ ┌─┐          ',
            '                    └─┼─┼─┼─┐       └─┼─┼─┼─┐        ',
            '                ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘        ',
            '                └─┼─┼─┼─┐       └─┼─┼─┼─┐            ',
            '                  └─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┼─┼─┐ ┌─┐ ┌─┐  ',
            '                    └─┼─┼─┼─┼─┼─┘ └─┼─┼─┘ └─┼─┼─┼─┼─┐',
            '                ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┘ └─┘',
            '                └─┼─┼─┼─┼─┼─┼─┐   └─┘     └─┘ └─┐    ',
            '    ┌─┐ ┌─┐       └─┼─┼─┼─┼─┼─┘               ┌─┼─┐  ',
            '    └─┼─┼─┼─┐       └─┼─┘ └─┼─┐               └─┼─┼─┐',
            '┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┘   ┌─┼─┘         ┌──   ┌─┘ └─┘',
            '└─┼─┼─┼─┐       └─┼─┼─┐   └─┘           └─┐ ┌─┼─┐    ',
            '  └─┼─┼─┼─┐ ┌─┐ ┌─┼─┼─┘                   └─┘ └─┘    ',
            '    └─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐                          ',
            '┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                          ',
            '└─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐                      ',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                      ',
            '            └─┼─┼─┼─┼─┼─┘ └─┼─┐                      ',
            '        ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘                      ',
            '        └─┼─┼─┼─┼─┼─┼─┐   └─┘                        ',
            '          └─┘ └─┘ └─┼─┘                              ',
            '                    └─┐ ┌─┐                          ',
            '                ┌─┐ ┌─┼─┼─┘                          ',
            '                └─┼─┼─┼─┼─┐ ┌─┐                      ',
            '                  └─┼─┼─┼─┼─┼─┘                      ',
            '        ┌─┐         └─┼─┘ └─┼─┐                      ',
            '      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘                      ',
            '      └─┐       └─┼─┼─┐   └─┘                        ',
            '      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘                              ',
            '      └─┘ └─┼─┼─┘ └─┼─┐                              ',
            '          ┌─┼─┘   ┌─┼─┘                              ',
            '          └─┘     └─┘                                ',
        ];

        let result = new DragonCurve().create(9, { step: 9, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=flip', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new DragonCurve().create(0, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=flip', () => {
        let expected = [
            '┌──',
            '│  ',
        ];

        let result = new DragonCurve().create(1, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=flip', () => {
        let expected = [
            '┌─┐  ',
            '│ └──',
        ];

        let result = new DragonCurve().create(2, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=flip', () => {
        let expected = [
            '┌─┐  ',
            '│ └─┐',
            '  ┌─┘',
            '  └──',
        ];

        let result = new DragonCurve().create(3, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=flip', () => {
        let expected = [
            '  ┌─┐  ',
            '  │ └─┐',
            '    ┌─┘',
            '  ┌─┼─┐',
            '┌─┘ └─┘',
            '└──    ',
        ];

        let result = new DragonCurve().create(4, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=flip', () => {
        let expected = [
            '          ┌─┐  ',
            '          │ └─┐',
            '            ┌─┘',
            '  ┌─┐ ┌─┐ ┌─┼─┐',
            '┌─┘ └─┼─┼─┘ └─┘',
            '└──   └─┼─┐    ',
            '        └─┘    ',
        ];

        let result = new DragonCurve().create(5, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 rotation=flip', () => {
        let expected = [
            '  ┌─┐ ┌─┐              ',
            '┌─┘ └─┼─┘         ┌─┐  ',
            '└──   └─┐ ┌─┐     │ └─┐',
            '      ┌─┼─┼─┘       ┌─┘',
            '      └─┼─┼─┐ ┌─┐ ┌─┼─┐',
            '      ┌─┼─┘ └─┼─┼─┘ └─┘',
            '      └─┼─┐   └─┼─┐    ',
            '        └─┘     └─┘    ',
        ];

        let result = new DragonCurve().create(6, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 rotation=flip', () => {
        let expected = [
            '    ┌─┐ ┌─┐              ',
            '  ┌─┘ └─┼─┘              ',
            '  └──   └─┐ ┌─┐          ',
            '        ┌─┼─┼─┘          ',
            '        └─┼─┘            ',
            '    ┌─┐ ┌─┘              ',
            '    └─┼─┼─┐ ┌─┐          ',
            '┌─┐ ┌─┼─┼─┼─┼─┘          ',
            '└─┼─┼─┼─┼─┼─┘            ',
            '┌─┼─┘ └─┼─┘         ┌─┐  ',
            '└─┼─┐   └─┐ ┌─┐     │ └─┐',
            '  └─┘   ┌─┼─┼─┘       ┌─┘',
            '        └─┼─┼─┐ ┌─┐ ┌─┼─┐',
            '        ┌─┼─┘ └─┼─┼─┘ └─┘',
            '        └─┼─┐   └─┼─┐    ',
            '          └─┘     └─┘    ',
        ];

        let result = new DragonCurve().create(7, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 rotation=flip', () => {
        let expected = [
            '                    ┌─┐ ┌─┐    ',
            '                  ┌─┘ └─┼─┘    ',
            '                  └──   └─┐ ┌─┐',
            '                        ┌─┼─┼─┘',
            '                        └─┼─┘  ',
            '    ┌─┐     ┌─┐     ┌─┐ ┌─┘    ',
            '    └─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '└─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '┌─┼─┘ └─┼─┼─┼─┼─┼─┘            ',
            '└─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐        ',
            '  └─┘   ┌─┼─┼─┼─┼─┼─┼─┘        ',
            '        └─┼─┘ └─┘ └─┘          ',
            '    ┌─┐ ┌─┘                    ',
            '    └─┼─┼─┐ ┌─┐                ',
            '┌─┐ ┌─┼─┼─┼─┼─┘                ',
            '└─┼─┼─┼─┼─┼─┘                  ',
            '┌─┼─┘ └─┼─┘         ┌─┐        ',
            '└─┼─┐   └─┐ ┌─┐     │ └─┐      ',
            '  └─┘   ┌─┼─┼─┘       ┌─┘      ',
            '        └─┼─┼─┐ ┌─┐ ┌─┼─┐      ',
            '        ┌─┼─┘ └─┼─┼─┘ └─┘      ',
            '        └─┼─┐   └─┼─┐          ',
            '          └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(8, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 rotation=flip', () => {
        let expected = [
            '                    ┌─┐     ┌─┐                                ',
            '                    └─┼─┐   └─┼─┐                              ',
            '                ┌─┐ ┌─┼─┼─┐ ┌─┼─┘                              ',
            '                └─┼─┼─┼─┼─┼─┼─┼─┐                   ┌─┐ ┌─┐    ',
            '                ┌─┼─┘ └─┼─┼─┼─┼─┘   ┌─┐           ┌─┘ └─┼─┘    ',
            '                └─┼─┐   └─┼─┼─┼─┐   └─┼─┐         └──   └─┐ ┌─┐',
            '                  └─┘   ┌─┼─┼─┼─┼─┐ ┌─┼─┘               ┌─┼─┼─┘',
            '                        └─┼─┼─┼─┼─┼─┼─┼─┐               └─┼─┘  ',
            '    ┌─┐     ┌─┐     ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┘   ┌─┐     ┌─┐ ┌─┘    ',
            '    └─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '└─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '┌─┼─┘ └─┼─┼─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘            ',
            '└─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐        ',
            '  └─┘   ┌─┼─┼─┼─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘        ',
            '        └─┼─┘ └─┘ └─┘         └─┘ └─┘         └─┘ └─┘          ',
            '    ┌─┐ ┌─┘                                                    ',
            '    └─┼─┼─┐ ┌─┐                                                ',
            '┌─┐ ┌─┼─┼─┼─┼─┘                                                ',
            '└─┼─┼─┼─┼─┼─┘                                                  ',
            '┌─┼─┘ └─┼─┘         ┌─┐                                        ',
            '└─┼─┐   └─┐ ┌─┐     │ └─┐                                      ',
            '  └─┘   ┌─┼─┼─┘       ┌─┘                                      ',
            '        └─┼─┼─┐ ┌─┐ ┌─┼─┐                                      ',
            '        ┌─┼─┘ └─┼─┼─┘ └─┘                                      ',
            '        └─┼─┐   └─┼─┐                                          ',
            '          └─┘     └─┘                                          ',
        ];

        let result = new DragonCurve().create(9, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    │                                          ',
            '                    │                                          ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 0, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    ┌──                                        ',
            '                    │                                          ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 1, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    ┌─┐                                        ',
            '                    │ └──                                      ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 2, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    ┌─┐                                        ',
            '                    │ └─┐                                      ',
            '                      ┌─┘                                      ',
            '                      └──                                      ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 3, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    ┌─┐                                        ',
            '                    │ └─┐                                      ',
            '                      ┌─┘                                      ',
            '                    ┌─┼─┐                                      ',
            '                  ┌─┘ └─┘                                      ',
            '                  └──                                          ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 4, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    ┌─┐                                        ',
            '                    │ └─┐                                      ',
            '                      ┌─┘                                      ',
            '            ┌─┐ ┌─┐ ┌─┼─┐                                      ',
            '          ┌─┘ └─┼─┼─┘ └─┘                                      ',
            '          └──   └─┼─┐                                          ',
            '                  └─┘                                          ',
        ];

        let result = new DragonCurve().create(9, { step: 5, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '    ┌─┐ ┌─┐                                                    ',
            '  ┌─┘ └─┼─┘         ┌─┐                                        ',
            '  └──   └─┐ ┌─┐     │ └─┐                                      ',
            '        ┌─┼─┼─┘       ┌─┘                                      ',
            '        └─┼─┼─┐ ┌─┐ ┌─┼─┐                                      ',
            '        ┌─┼─┘ └─┼─┼─┘ └─┘                                      ',
            '        └─┼─┐   └─┼─┐                                          ',
            '          └─┘     └─┘                                          ',
        ];

        let result = new DragonCurve().create(9, { step: 6, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '    ┌─┐ ┌─┐                                                    ',
            '  ┌─┘ └─┼─┘                                                    ',
            '  └──   └─┐ ┌─┐                                                ',
            '        ┌─┼─┼─┘                                                ',
            '        └─┼─┘                                                  ',
            '    ┌─┐ ┌─┘                                                    ',
            '    └─┼─┼─┐ ┌─┐                                                ',
            '┌─┐ ┌─┼─┼─┼─┼─┘                                                ',
            '└─┼─┼─┼─┼─┼─┘                                                  ',
            '┌─┼─┘ └─┼─┘         ┌─┐                                        ',
            '└─┼─┐   └─┐ ┌─┐     │ └─┐                                      ',
            '  └─┘   ┌─┼─┼─┘       ┌─┘                                      ',
            '        └─┼─┼─┐ ┌─┐ ┌─┼─┐                                      ',
            '        ┌─┼─┘ └─┼─┼─┘ └─┘                                      ',
            '        └─┼─┐   └─┼─┐                                          ',
            '          └─┘     └─┘                                          ',
        ];

        let result = new DragonCurve().create(9, { step: 7, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8 rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                    ┌─┐ ┌─┐                                    ',
            '                  ┌─┘ └─┼─┘                                    ',
            '                  └──   └─┐ ┌─┐                                ',
            '                        ┌─┼─┼─┘                                ',
            '                        └─┼─┘                                  ',
            '    ┌─┐     ┌─┐     ┌─┐ ┌─┘                                    ',
            '    └─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐                                ',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘                                ',
            '└─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘ └─┘                                  ',
            '┌─┼─┘ └─┼─┼─┼─┼─┼─┘                                            ',
            '└─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐                                        ',
            '  └─┘   ┌─┼─┼─┼─┼─┼─┼─┘                                        ',
            '        └─┼─┘ └─┘ └─┘                                          ',
            '    ┌─┐ ┌─┘                                                    ',
            '    └─┼─┼─┐ ┌─┐                                                ',
            '┌─┐ ┌─┼─┼─┼─┼─┘                                                ',
            '└─┼─┼─┼─┼─┼─┘                                                  ',
            '┌─┼─┘ └─┼─┘         ┌─┐                                        ',
            '└─┼─┐   └─┐ ┌─┐     │ └─┐                                      ',
            '  └─┘   ┌─┼─┼─┘       ┌─┘                                      ',
            '        └─┼─┼─┐ ┌─┐ ┌─┼─┐                                      ',
            '        ┌─┼─┘ └─┼─┼─┘ └─┘                                      ',
            '        └─┼─┐   └─┼─┐                                          ',
            '          └─┘     └─┘                                          ',
        ];

        let result = new DragonCurve().create(9, { step: 8, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9 rotation=flip', () => {
        let expected = [
            '                    ┌─┐     ┌─┐                                ',
            '                    └─┼─┐   └─┼─┐                              ',
            '                ┌─┐ ┌─┼─┼─┐ ┌─┼─┘                              ',
            '                └─┼─┼─┼─┼─┼─┼─┼─┐                   ┌─┐ ┌─┐    ',
            '                ┌─┼─┘ └─┼─┼─┼─┼─┘   ┌─┐           ┌─┘ └─┼─┘    ',
            '                └─┼─┐   └─┼─┼─┼─┐   └─┼─┐         └──   └─┐ ┌─┐',
            '                  └─┘   ┌─┼─┼─┼─┼─┐ ┌─┼─┘               ┌─┼─┼─┘',
            '                        └─┼─┼─┼─┼─┼─┼─┼─┐               └─┼─┘  ',
            '    ┌─┐     ┌─┐     ┌─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┘   ┌─┐     ┌─┐ ┌─┘    ',
            '    └─┼─┐   └─┼─┐   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐   └─┼─┐   └─┼─┼─┐ ┌─┐',
            '┌─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┘',
            '└─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┘  ',
            '┌─┼─┘ └─┼─┼─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘            ',
            '└─┼─┐   └─┼─┼─┼─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐   └─┘ └─┼─┐ ┌─┐        ',
            '  └─┘   ┌─┼─┼─┼─┼─┼─┼─┘       ┌─┼─┼─┼─┘       ┌─┼─┼─┼─┘        ',
            '        └─┼─┘ └─┘ └─┘         └─┘ └─┘         └─┘ └─┘          ',
            '    ┌─┐ ┌─┘                                                    ',
            '    └─┼─┼─┐ ┌─┐                                                ',
            '┌─┐ ┌─┼─┼─┼─┼─┘                                                ',
            '└─┼─┼─┼─┼─┼─┘                                                  ',
            '┌─┼─┘ └─┼─┘         ┌─┐                                        ',
            '└─┼─┐   └─┐ ┌─┐     │ └─┐                                      ',
            '  └─┘   ┌─┼─┼─┘       ┌─┘                                      ',
            '        └─┼─┼─┐ ┌─┐ ┌─┼─┐                                      ',
            '        ┌─┼─┘ └─┼─┼─┘ └─┘                                      ',
            '        └─┼─┐   └─┼─┐                                          ',
            '          └─┘     └─┘                                          ',
        ];

        let result = new DragonCurve().create(9, { step: 9, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true rotation=flip', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new DragonCurve().create(0, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=flip', () => {
        let expected = [
            '──┐',
            '  │',
        ];

        let result = new DragonCurve().create(1, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=flip', () => {
        let expected = [
            '  ┌─┐',
            '──┘ │',
        ];

        let result = new DragonCurve().create(2, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=flip', () => {
        let expected = [
            '  ┌─┐',
            '┌─┘ │',
            '└─┐  ',
            '──┘  ',
        ];

        let result = new DragonCurve().create(3, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=flip', () => {
        let expected = [
            '  ┌─┐  ',
            '┌─┘ │  ',
            '└─┐    ',
            '┌─┼─┐  ',
            '└─┘ └─┐',
            '    ──┘',
        ];

        let result = new DragonCurve().create(4, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=flip', () => {
        let expected = [
            '  ┌─┐          ',
            '┌─┘ │          ',
            '└─┐            ',
            '┌─┼─┐ ┌─┐ ┌─┐  ',
            '└─┘ └─┼─┼─┘ └─┐',
            '    ┌─┼─┘   ──┘',
            '    └─┘        ',
        ];

        let result = new DragonCurve().create(5, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true rotation=flip', () => {
        let expected = [
            '              ┌─┐ ┌─┐  ',
            '  ┌─┐         └─┼─┘ └─┐',
            '┌─┘ │     ┌─┐ ┌─┘   ──┘',
            '└─┐       └─┼─┼─┐      ',
            '┌─┼─┐ ┌─┐ ┌─┼─┼─┘      ',
            '└─┘ └─┼─┼─┘ └─┼─┐      ',
            '    ┌─┼─┘   ┌─┼─┘      ',
            '    └─┘     └─┘        ',
        ];

        let result = new DragonCurve().create(6, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true rotation=flip', () => {
        let expected = [
            '              ┌─┐ ┌─┐    ',
            '              └─┼─┘ └─┐  ',
            '          ┌─┐ ┌─┘   ──┘  ',
            '          └─┼─┼─┐        ',
            '            └─┼─┘        ',
            '              └─┐ ┌─┐    ',
            '          ┌─┐ ┌─┼─┼─┘    ',
            '          └─┼─┼─┼─┼─┐ ┌─┐',
            '            └─┼─┼─┼─┼─┼─┘',
            '  ┌─┐         └─┼─┘ └─┼─┐',
            '┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘',
            '└─┐       └─┼─┼─┐   └─┘  ',
            '┌─┼─┐ ┌─┐ ┌─┼─┼─┘        ',
            '└─┘ └─┼─┼─┘ └─┼─┐        ',
            '    ┌─┼─┘   ┌─┼─┘        ',
            '    └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(7, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true rotation=flip', () => {
        let expected = [
            '    ┌─┐ ┌─┐                    ',
            '    └─┼─┘ └─┐                  ',
            '┌─┐ ┌─┘   ──┘                  ',
            '└─┼─┼─┐                        ',
            '  └─┼─┘                        ',
            '    └─┐ ┌─┐     ┌─┐     ┌─┐    ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┘    ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘',
            '            └─┼─┼─┼─┼─┼─┘ └─┼─┐',
            '        ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘',
            '        └─┼─┼─┼─┼─┼─┼─┐   └─┘  ',
            '          └─┘ └─┘ └─┼─┘        ',
            '                    └─┐ ┌─┐    ',
            '                ┌─┐ ┌─┼─┼─┘    ',
            '                └─┼─┼─┼─┼─┐ ┌─┐',
            '                  └─┼─┼─┼─┼─┼─┘',
            '        ┌─┐         └─┼─┘ └─┼─┐',
            '      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘',
            '      └─┐       └─┼─┼─┐   └─┘  ',
            '      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘        ',
            '      └─┘ └─┼─┼─┘ └─┼─┐        ',
            '          ┌─┼─┘   ┌─┼─┘        ',
            '          └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(8, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true rotation=flip', () => {
        let expected = [
            '                                ┌─┐     ┌─┐                    ',
            '                              ┌─┼─┘   ┌─┼─┘                    ',
            '                              └─┼─┐ ┌─┼─┼─┐ ┌─┐                ',
            '    ┌─┐ ┌─┐                   ┌─┼─┼─┼─┼─┼─┼─┼─┘                ',
            '    └─┼─┘ └─┐           ┌─┐   └─┼─┼─┼─┼─┘ └─┼─┐                ',
            '┌─┐ ┌─┘   ──┘         ┌─┼─┘   ┌─┼─┼─┼─┘   ┌─┼─┘                ',
            '└─┼─┼─┐               └─┼─┐ ┌─┼─┼─┼─┼─┐   └─┘                  ',
            '  └─┼─┘               ┌─┼─┼─┼─┼─┼─┼─┼─┘                        ',
            '    └─┐ ┌─┐     ┌─┐   └─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐     ┌─┐     ┌─┐    ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┘    ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘',
            '            └─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┼─┼─┘ └─┼─┐',
            '        ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘',
            '        └─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┼─┼─┼─┐   └─┘  ',
            '          └─┘ └─┘         └─┘ └─┘         └─┘ └─┘ └─┼─┘        ',
            '                                                    └─┐ ┌─┐    ',
            '                                                ┌─┐ ┌─┼─┼─┘    ',
            '                                                └─┼─┼─┼─┼─┐ ┌─┐',
            '                                                  └─┼─┼─┼─┼─┼─┘',
            '                                        ┌─┐         └─┼─┘ └─┼─┐',
            '                                      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘',
            '                                      └─┐       └─┼─┼─┐   └─┘  ',
            '                                      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘        ',
            '                                      └─┘ └─┼─┼─┘ └─┼─┐        ',
            '                                          ┌─┼─┘   ┌─┼─┘        ',
            '                                          └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(9, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=0 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                          │                    ',
            '                                          │                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 0, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=1 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                        ──┐                    ',
            '                                          │                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 1, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=2 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                        ┌─┐                    ',
            '                                      ──┘ │                    ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 2, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=3 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                        ┌─┐                    ',
            '                                      ┌─┘ │                    ',
            '                                      └─┐                      ',
            '                                      ──┘                      ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 3, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=4 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                        ┌─┐                    ',
            '                                      ┌─┘ │                    ',
            '                                      └─┐                      ',
            '                                      ┌─┼─┐                    ',
            '                                      └─┘ └─┐                  ',
            '                                          ──┘                  ',
            '                                                               ',
        ];

        let result = new DragonCurve().create(9, { step: 4, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=5 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                        ┌─┐                    ',
            '                                      ┌─┘ │                    ',
            '                                      └─┐                      ',
            '                                      ┌─┼─┐ ┌─┐ ┌─┐            ',
            '                                      └─┘ └─┼─┼─┘ └─┐          ',
            '                                          ┌─┼─┘   ──┘          ',
            '                                          └─┘                  ',
        ];

        let result = new DragonCurve().create(9, { step: 5, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=6 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                    ┌─┐ ┌─┐    ',
            '                                        ┌─┐         └─┼─┘ └─┐  ',
            '                                      ┌─┘ │     ┌─┐ ┌─┘   ──┘  ',
            '                                      └─┐       └─┼─┼─┐        ',
            '                                      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘        ',
            '                                      └─┘ └─┼─┼─┘ └─┼─┐        ',
            '                                          ┌─┼─┘   ┌─┼─┘        ',
            '                                          └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 6, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=7 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                    ┌─┐ ┌─┐    ',
            '                                                    └─┼─┘ └─┐  ',
            '                                                ┌─┐ ┌─┘   ──┘  ',
            '                                                └─┼─┼─┐        ',
            '                                                  └─┼─┘        ',
            '                                                    └─┐ ┌─┐    ',
            '                                                ┌─┐ ┌─┼─┼─┘    ',
            '                                                └─┼─┼─┼─┼─┐ ┌─┐',
            '                                                  └─┼─┼─┼─┼─┼─┘',
            '                                        ┌─┐         └─┼─┘ └─┼─┐',
            '                                      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘',
            '                                      └─┐       └─┼─┼─┐   └─┘  ',
            '                                      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘        ',
            '                                      └─┘ └─┼─┼─┘ └─┼─┐        ',
            '                                          ┌─┼─┘   ┌─┼─┘        ',
            '                                          └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 7, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=8 inverse=true rotation=flip', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                    ┌─┐ ┌─┐                    ',
            '                                    └─┼─┘ └─┐                  ',
            '                                ┌─┐ ┌─┘   ──┘                  ',
            '                                └─┼─┼─┐                        ',
            '                                  └─┼─┘                        ',
            '                                    └─┐ ┌─┐     ┌─┐     ┌─┐    ',
            '                                ┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┘    ',
            '                                └─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '                                  └─┘ └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘',
            '                                            └─┼─┼─┼─┼─┼─┘ └─┼─┐',
            '                                        ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘',
            '                                        └─┼─┼─┼─┼─┼─┼─┐   └─┘  ',
            '                                          └─┘ └─┘ └─┼─┘        ',
            '                                                    └─┐ ┌─┐    ',
            '                                                ┌─┐ ┌─┼─┼─┘    ',
            '                                                └─┼─┼─┼─┼─┐ ┌─┐',
            '                                                  └─┼─┼─┼─┼─┼─┘',
            '                                        ┌─┐         └─┼─┘ └─┼─┐',
            '                                      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘',
            '                                      └─┐       └─┼─┼─┐   └─┘  ',
            '                                      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘        ',
            '                                      └─┘ └─┼─┼─┘ └─┼─┐        ',
            '                                          ┌─┼─┘   ┌─┼─┘        ',
            '                                          └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 8, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 step=9 inverse=true rotation=flip', () => {
        let expected = [
            '                                ┌─┐     ┌─┐                    ',
            '                              ┌─┼─┘   ┌─┼─┘                    ',
            '                              └─┼─┐ ┌─┼─┼─┐ ┌─┐                ',
            '    ┌─┐ ┌─┐                   ┌─┼─┼─┼─┼─┼─┼─┼─┘                ',
            '    └─┼─┘ └─┐           ┌─┐   └─┼─┼─┼─┼─┘ └─┼─┐                ',
            '┌─┐ ┌─┘   ──┘         ┌─┼─┘   ┌─┼─┼─┼─┘   ┌─┼─┘                ',
            '└─┼─┼─┐               └─┼─┐ ┌─┼─┼─┼─┼─┐   └─┘                  ',
            '  └─┼─┘               ┌─┼─┼─┼─┼─┼─┼─┼─┘                        ',
            '    └─┐ ┌─┐     ┌─┐   └─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┐     ┌─┐     ┌─┐    ',
            '┌─┐ ┌─┼─┼─┘   ┌─┼─┘   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘   ┌─┼─┘   ┌─┼─┘    ',
            '└─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ┌─┼─┼─┐ ┌─┼─┼─┐ ┌─┐',
            '  └─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┘ └─┘ └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘',
            '            └─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┼─┼─┘ └─┼─┐',
            '        ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┘ └─┘   ┌─┐ ┌─┼─┼─┼─┼─┘   ┌─┼─┘',
            '        └─┼─┼─┼─┐       └─┼─┼─┼─┐       └─┼─┼─┼─┼─┼─┼─┐   └─┘  ',
            '          └─┘ └─┘         └─┘ └─┘         └─┘ └─┘ └─┼─┘        ',
            '                                                    └─┐ ┌─┐    ',
            '                                                ┌─┐ ┌─┼─┼─┘    ',
            '                                                └─┼─┼─┼─┼─┐ ┌─┐',
            '                                                  └─┼─┼─┼─┼─┼─┘',
            '                                        ┌─┐         └─┼─┘ └─┼─┐',
            '                                      ┌─┘ │     ┌─┐ ┌─┘   ┌─┼─┘',
            '                                      └─┐       └─┼─┼─┐   └─┘  ',
            '                                      ┌─┼─┐ ┌─┐ ┌─┼─┼─┘        ',
            '                                      └─┘ └─┼─┼─┘ └─┼─┐        ',
            '                                          ┌─┼─┘   ┌─┼─┘        ',
            '                                          └─┘     └─┘          ',
        ];

        let result = new DragonCurve().create(9, { step: 9, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});