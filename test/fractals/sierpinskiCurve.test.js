const { SierpinskiCurve } = require('../../src/fractals/sierpinskiCurve');
const { Utils } = require('../../src/utils');

describe('SierpinskiCurve Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '┌───┐',
            '│   │',
            '└───┘',
        ];

        let result = new SierpinskiCurve().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            '    ┌─┐    ',
            '  ┌─┘ └─┐  ',
            '┌─┘     └─┐',
            '└─┐     ┌─┘',
            '  └─┐ ┌─┘  ',
            '    └─┘    ',
        ];

        let result = new SierpinskiCurve().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '            ┌─┐            ',
            '          ┌─┘ └─┐          ',
            '        ┌─┘     └─┐        ',
            '        └─┐     ┌─┘        ',
            '    ┌─┐   └─┐ ┌─┘   ┌─┐    ',
            '  ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐  ',
            '┌─┘     └─┘     └─┘     └─┐',
            '└─┐     ┌─┐     ┌─┐     ┌─┘',
            '  └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘  ',
            '    └─┘   ┌─┘ └─┐   └─┘    ',
            '        ┌─┘     └─┐        ',
            '        └─┐     ┌─┘        ',
            '          └─┐ ┌─┘          ',
            '            └─┘            ',
        ];

        let result = new SierpinskiCurve().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '                            ┌─┐                            ',
            '                          ┌─┘ └─┐                          ',
            '                        ┌─┘     └─┐                        ',
            '                        └─┐     ┌─┘                        ',
            '                    ┌─┐   └─┐ ┌─┘   ┌─┐                    ',
            '                  ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐                  ',
            '                ┌─┘     └─┘     └─┘     └─┐                ',
            '                └─┐     ┌─┐     ┌─┐     ┌─┘                ',
            '            ┌─┐   └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘   ┌─┐            ',
            '          ┌─┘ └─┐   └─┘   ┌─┘ └─┐   └─┘   ┌─┘ └─┐          ',
            '        ┌─┘     └─┐     ┌─┘     └─┐     ┌─┘     └─┐        ',
            '        └─┐     ┌─┘     └─┐     ┌─┘     └─┐     ┌─┘        ',
            '    ┌─┐   └─┐ ┌─┘   ┌─┐   └─┐ ┌─┘   ┌─┐   └─┐ ┌─┘   ┌─┐    ',
            '  ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐  ',
            '┌─┘     └─┘     └─┘     └─┘     └─┘     └─┘     └─┘     └─┐',
            '└─┐     ┌─┐     ┌─┐     ┌─┐     ┌─┐     ┌─┐     ┌─┐     ┌─┘',
            '  └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘  ',
            '    └─┘   ┌─┘ └─┐   └─┘   ┌─┘ └─┐   └─┘   ┌─┘ └─┐   └─┘    ',
            '        ┌─┘     └─┐     ┌─┘     └─┐     ┌─┘     └─┐        ',
            '        └─┐     ┌─┘     └─┐     ┌─┘     └─┐     ┌─┘        ',
            '          └─┐ ┌─┘   ┌─┐   └─┐ ┌─┘   ┌─┐   └─┐ ┌─┘          ',
            '            └─┘   ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘ └─┐   └─┘            ',
            '                ┌─┘     └─┘     └─┘     └─┐                ',
            '                └─┐     ┌─┐     ┌─┐     ┌─┘                ',
            '                  └─┐ ┌─┘ └─┐ ┌─┘ └─┐ ┌─┘                  ',
            '                    └─┘   ┌─┘ └─┐   └─┘                    ',
            '                        ┌─┘     └─┐                        ',
            '                        └─┐     ┌─┘                        ',
            '                          └─┐ ┌─┘                          ',
            '                            └─┘                            ',
        ];

        let result = new SierpinskiCurve().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});