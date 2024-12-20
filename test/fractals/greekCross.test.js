const { GreekCross } = require('../../src/fractals/greekCross');
const { Utils } = require('../../src/utils');

describe('GreekCross Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '─┼─',
        ];

        let result = new GreekCross().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            ' ┌─┼─┐ ',
            '─┼─┼─┼─',
            ' └─┼─┘ ',
        ];

        let result = new GreekCross().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '     ┌─┼─┐     ',
            '   ┌─┼─┼─┼─┐   ',
            ' ┌─┼─┼─┼─┼─┼─┐ ',
            '─┼─┼─┼─┼─┼─┼─┼─',
            ' └─┼─┼─┼─┼─┼─┘ ',
            '   └─┼─┼─┼─┘   ',
            '     └─┼─┘     ',
        ];

        let result = new GreekCross().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '             ┌─┼─┐             ',
            '           ┌─┼─┼─┼─┐           ',
            '         ┌─┼─┼─┼─┼─┼─┐         ',
            '       ┌─┼─┼─┼─┼─┼─┼─┼─┐       ',
            '     ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐     ',
            '   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐   ',
            ' ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ',
            '─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─',
            ' └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ ',
            '   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘   ',
            '     └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘     ',
            '       └─┼─┼─┼─┼─┼─┼─┼─┘       ',
            '         └─┼─┼─┼─┼─┼─┘         ',
            '           └─┼─┼─┼─┘           ',
            '             └─┼─┘             ',
        ];

        let result = new GreekCross().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '                             ┌─┼─┐                             ',
            '                           ┌─┼─┼─┼─┐                           ',
            '                         ┌─┼─┼─┼─┼─┼─┐                         ',
            '                       ┌─┼─┼─┼─┼─┼─┼─┼─┐                       ',
            '                     ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                     ',
            '                   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                   ',
            '                 ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                 ',
            '               ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐               ',
            '             ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐             ',
            '           ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐           ',
            '         ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐         ',
            '       ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐       ',
            '     ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐     ',
            '   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐   ',
            ' ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ',
            '─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─',
            ' └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ ',
            '   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘   ',
            '     └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘     ',
            '       └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘       ',
            '         └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘         ',
            '           └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘           ',
            '             └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘             ',
            '               └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘               ',
            '                 └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                 ',
            '                   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                   ',
            '                     └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                     ',
            '                       └─┼─┼─┼─┼─┼─┼─┼─┘                       ',
            '                         └─┼─┼─┼─┼─┼─┘                         ',
            '                           └─┼─┼─┼─┘                           ',
            '                             └─┼─┘                             ',
        ];

        let result = new GreekCross().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0', () => {
        let expected = [
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '───────────────────────────────┼───────────────────────────────',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
        ];

        let result = new GreekCross().create(4, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1', () => {
        let expected = [
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '               ┌───────────────┼───────────────┐               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '───────────────┼───────────────┼───────────────┼───────────────',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               │               │               │               ',
            '               └───────────────┼───────────────┘               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
        ];

        let result = new GreekCross().create(4, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2', () => {
        let expected = [
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
            '                       ┌───────┼───────┐                       ',
            '                       │       │       │                       ',
            '                       │       │       │                       ',
            '                       │       │       │                       ',
            '               ┌───────┼───────┼───────┼───────┐               ',
            '               │       │       │       │       │               ',
            '               │       │       │       │       │               ',
            '               │       │       │       │       │               ',
            '       ┌───────┼───────┼───────┼───────┼───────┼───────┐       ',
            '       │       │       │       │       │       │       │       ',
            '       │       │       │       │       │       │       │       ',
            '       │       │       │       │       │       │       │       ',
            '───────┼───────┼───────┼───────┼───────┼───────┼───────┼───────',
            '       │       │       │       │       │       │       │       ',
            '       │       │       │       │       │       │       │       ',
            '       │       │       │       │       │       │       │       ',
            '       └───────┼───────┼───────┼───────┼───────┼───────┘       ',
            '               │       │       │       │       │               ',
            '               │       │       │       │       │               ',
            '               │       │       │       │       │               ',
            '               └───────┼───────┼───────┼───────┘               ',
            '                       │       │       │                       ',
            '                       │       │       │                       ',
            '                       │       │       │                       ',
            '                       └───────┼───────┘                       ',
            '                               │                               ',
            '                               │                               ',
            '                               │                               ',
        ];

        let result = new GreekCross().create(4, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3', () => {
        let expected = [
            '                               │                               ',
            '                           ┌───┼───┐                           ',
            '                           │   │   │                           ',
            '                       ┌───┼───┼───┼───┐                       ',
            '                       │   │   │   │   │                       ',
            '                   ┌───┼───┼───┼───┼───┼───┐                   ',
            '                   │   │   │   │   │   │   │                   ',
            '               ┌───┼───┼───┼───┼───┼───┼───┼───┐               ',
            '               │   │   │   │   │   │   │   │   │               ',
            '           ┌───┼───┼───┼───┼───┼───┼───┼───┼───┼───┐           ',
            '           │   │   │   │   │   │   │   │   │   │   │           ',
            '       ┌───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┐       ',
            '       │   │   │   │   │   │   │   │   │   │   │   │   │       ',
            '   ┌───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┐   ',
            '   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ',
            '───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───',
            '   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ',
            '   └───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┘   ',
            '       │   │   │   │   │   │   │   │   │   │   │   │   │       ',
            '       └───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┘       ',
            '           │   │   │   │   │   │   │   │   │   │   │           ',
            '           └───┼───┼───┼───┼───┼───┼───┼───┼───┼───┘           ',
            '               │   │   │   │   │   │   │   │   │               ',
            '               └───┼───┼───┼───┼───┼───┼───┼───┘               ',
            '                   │   │   │   │   │   │   │                   ',
            '                   └───┼───┼───┼───┼───┼───┘                   ',
            '                       │   │   │   │   │                       ',
            '                       └───┼───┼───┼───┘                       ',
            '                           │   │   │                           ',
            '                           └───┼───┘                           ',
            '                               │                               ',
        ];

        let result = new GreekCross().create(4, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4', () => {
        let expected = [
            '                             ┌─┼─┐                             ',
            '                           ┌─┼─┼─┼─┐                           ',
            '                         ┌─┼─┼─┼─┼─┼─┐                         ',
            '                       ┌─┼─┼─┼─┼─┼─┼─┼─┐                       ',
            '                     ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                     ',
            '                   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                   ',
            '                 ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐                 ',
            '               ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐               ',
            '             ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐             ',
            '           ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐           ',
            '         ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐         ',
            '       ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐       ',
            '     ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐     ',
            '   ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐   ',
            ' ┌─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┐ ',
            '─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─',
            ' └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘ ',
            '   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘   ',
            '     └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘     ',
            '       └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘       ',
            '         └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘         ',
            '           └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘           ',
            '             └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘             ',
            '               └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘               ',
            '                 └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                 ',
            '                   └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                   ',
            '                     └─┼─┼─┼─┼─┼─┼─┼─┼─┼─┘                     ',
            '                       └─┼─┼─┼─┼─┼─┼─┼─┘                       ',
            '                         └─┼─┼─┼─┼─┼─┘                         ',
            '                           └─┼─┼─┼─┘                           ',
            '                             └─┼─┘                             ',
        ];

        let result = new GreekCross().create(4, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});