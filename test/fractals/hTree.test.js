const { HTree } = require('../../src/fractals/hTree');
const { Utils } = require('../../src/utils');

describe('HTree Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '─',
        ];

        let result = new HTree().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            '├─┤',
        ];

        let result = new HTree().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '┬   ┬',
            '├───┤',
            '┴   ┴',
        ];

        let result = new HTree().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '├┬┤ ├┬┤',
            ' ├───┤ ',
            '├┴┤ ├┴┤',
        ];

        let result = new HTree().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '┬   ┬   ┬   ┬',
            '├─┬─┤   ├─┬─┤',
            '┴ │ ┴   ┴ │ ┴',
            '  ├───────┤  ',
            '┬ │ ┬   ┬ │ ┬',
            '├─┴─┤   ├─┴─┤',
            '┴   ┴   ┴   ┴',
        ];

        let result = new HTree().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5', () => {
        let expected = [
            '├┬┤ ├┬┤ ├┬┤ ├┬┤',
            ' ├─┬─┤   ├─┬─┤ ',
            '├┴┤│├┴┤ ├┴┤│├┴┤',
            '   ├───────┤   ',
            '├┬┤│├┬┤ ├┬┤│├┬┤',
            ' ├─┴─┤   ├─┴─┤ ',
            '├┴┤ ├┴┤ ├┴┤ ├┴┤',
        ];

        let result = new HTree().create(5, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6', () => {
        let expected = [
            '┬   ┬   ┬   ┬   ┬   ┬   ┬   ┬',
            '├─┬─┤   ├─┬─┤   ├─┬─┤   ├─┬─┤',
            '┴ │ ┴   ┴ │ ┴   ┴ │ ┴   ┴ │ ┴',
            '  ├───┬───┤       ├───┬───┤  ',
            '┬ │ ┬ │ ┬ │ ┬   ┬ │ ┬ │ ┬ │ ┬',
            '├─┴─┤ │ ├─┴─┤   ├─┴─┤ │ ├─┴─┤',
            '┴   ┴ │ ┴   ┴   ┴   ┴ │ ┴   ┴',
            '      ├───────────────┤      ',
            '┬   ┬ │ ┬   ┬   ┬   ┬ │ ┬   ┬',
            '├─┬─┤ │ ├─┬─┤   ├─┬─┤ │ ├─┬─┤',
            '┴ │ ┴ │ ┴ │ ┴   ┴ │ ┴ │ ┴ │ ┴',
            '  ├───┴───┤       ├───┴───┤  ',
            '┬ │ ┬   ┬ │ ┬   ┬ │ ┬   ┬ │ ┬',
            '├─┴─┤   ├─┴─┤   ├─┴─┤   ├─┴─┤',
            '┴   ┴   ┴   ┴   ┴   ┴   ┴   ┴',
        ];

        let result = new HTree().create(6, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7', () => {
        let expected = [
            '├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤',
            ' ├─┬─┤   ├─┬─┤   ├─┬─┤   ├─┬─┤ ',
            '├┴┤│├┴┤ ├┴┤│├┴┤ ├┴┤│├┴┤ ├┴┤│├┴┤',
            '   ├───┬───┤       ├───┬───┤   ',
            '├┬┤│├┬┤│├┬┤│├┬┤ ├┬┤│├┬┤│├┬┤│├┬┤',
            ' ├─┴─┤ │ ├─┴─┤   ├─┴─┤ │ ├─┴─┤ ',
            '├┴┤ ├┴┤│├┴┤ ├┴┤ ├┴┤ ├┴┤│├┴┤ ├┴┤',
            '       ├───────────────┤       ',
            '├┬┤ ├┬┤│├┬┤ ├┬┤ ├┬┤ ├┬┤│├┬┤ ├┬┤',
            ' ├─┬─┤ │ ├─┬─┤   ├─┬─┤ │ ├─┬─┤ ',
            '├┴┤│├┴┤│├┴┤│├┴┤ ├┴┤│├┴┤│├┴┤│├┴┤',
            '   ├───┴───┤       ├───┴───┤   ',
            '├┬┤│├┬┤ ├┬┤│├┬┤ ├┬┤│├┬┤ ├┬┤│├┬┤',
            ' ├─┴─┤   ├─┴─┤   ├─┴─┤   ├─┴─┤ ',
            '├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤',
        ];

        let result = new HTree().create(7, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=0', () => {
        let expected = [
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '        ───────────────        ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
        ];

        let result = new HTree().create(7, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=1', () => {
        let expected = [
            '                               ',
            '                               ',
            '                               ',
            '                               ',
            '       │               │       ',
            '       │               │       ',
            '       │               │       ',
            '       ├───────────────┤       ',
            '       │               │       ',
            '       │               │       ',
            '       │               │       ',
            '                               ',
            '                               ',
            '                               ',
            '                               ',
        ];

        let result = new HTree().create(7, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=2', () => {
        let expected = [
            '                               ',
            '                               ',
            '                               ',
            '    ───┬───         ───┬───    ',
            '       │               │       ',
            '       │               │       ',
            '       │               │       ',
            '       ├───────────────┤       ',
            '       │               │       ',
            '       │               │       ',
            '       │               │       ',
            '    ───┴───         ───┴───    ',
            '                               ',
            '                               ',
            '                               ',
        ];

        let result = new HTree().create(7, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=3', () => {
        let expected = [
            '                               ',
            '                               ',
            '   │       │       │       │   ',
            '   ├───┬───┤       ├───┬───┤   ',
            '   │   │   │       │   │   │   ',
            '       │               │       ',
            '       │               │       ',
            '       ├───────────────┤       ',
            '       │               │       ',
            '       │               │       ',
            '   │   │   │       │   │   │   ',
            '   ├───┴───┤       ├───┴───┤   ',
            '   │       │       │       │   ',
            '                               ',
            '                               ',
        ];

        let result = new HTree().create(7, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=4', () => {
        let expected = [
            '                               ',
            '  ─┬─     ─┬─     ─┬─     ─┬─  ',
            '   │       │       │       │   ',
            '   ├───┬───┤       ├───┬───┤   ',
            '   │   │   │       │   │   │   ',
            '  ─┴─  │  ─┴─     ─┴─  │  ─┴─  ',
            '       │               │       ',
            '       ├───────────────┤       ',
            '       │               │       ',
            '  ─┬─  │  ─┬─     ─┬─  │  ─┬─  ',
            '   │   │   │       │   │   │   ',
            '   ├───┴───┤       ├───┴───┤   ',
            '   │       │       │       │   ',
            '  ─┴─     ─┴─     ─┴─     ─┴─  ',
            '                               ',
        ];

        let result = new HTree().create(7, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=5', () => {
        let expected = [
            '                               ',
            ' ├─┬─┤   ├─┬─┤   ├─┬─┤   ├─┬─┤ ',
            '   │       │       │       │   ',
            '   ├───┬───┤       ├───┬───┤   ',
            '   │   │   │       │   │   │   ',
            ' ├─┴─┤ │ ├─┴─┤   ├─┴─┤ │ ├─┴─┤ ',
            '       │               │       ',
            '       ├───────────────┤       ',
            '       │               │       ',
            ' ├─┬─┤ │ ├─┬─┤   ├─┬─┤ │ ├─┬─┤ ',
            '   │   │   │       │   │   │   ',
            '   ├───┴───┤       ├───┴───┤   ',
            '   │       │       │       │   ',
            ' ├─┴─┤   ├─┴─┤   ├─┴─┤   ├─┴─┤ ',
            '                               ',
        ];

        let result = new HTree().create(7, { step: 5 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=6', () => {
        let expected = [
            ' ┬   ┬   ┬   ┬   ┬   ┬   ┬   ┬ ',
            ' ├─┬─┤   ├─┬─┤   ├─┬─┤   ├─┬─┤ ',
            ' ┴ │ ┴   ┴ │ ┴   ┴ │ ┴   ┴ │ ┴ ',
            '   ├───┬───┤       ├───┬───┤   ',
            ' ┬ │ ┬ │ ┬ │ ┬   ┬ │ ┬ │ ┬ │ ┬ ',
            ' ├─┴─┤ │ ├─┴─┤   ├─┴─┤ │ ├─┴─┤ ',
            ' ┴   ┴ │ ┴   ┴   ┴   ┴ │ ┴   ┴ ',
            '       ├───────────────┤       ',
            ' ┬   ┬ │ ┬   ┬   ┬   ┬ │ ┬   ┬ ',
            ' ├─┬─┤ │ ├─┬─┤   ├─┬─┤ │ ├─┬─┤ ',
            ' ┴ │ ┴ │ ┴ │ ┴   ┴ │ ┴ │ ┴ │ ┴ ',
            '   ├───┴───┤       ├───┴───┤   ',
            ' ┬ │ ┬   ┬ │ ┬   ┬ │ ┬   ┬ │ ┬ ',
            ' ├─┴─┤   ├─┴─┤   ├─┴─┤   ├─┴─┤ ',
            ' ┴   ┴   ┴   ┴   ┴   ┴   ┴   ┴ ',
        ];

        let result = new HTree().create(7, { step: 6 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 step=7', () => {
        let expected = [
            '├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤ ├┬┤',
            ' ├─┬─┤   ├─┬─┤   ├─┬─┤   ├─┬─┤ ',
            '├┴┤│├┴┤ ├┴┤│├┴┤ ├┴┤│├┴┤ ├┴┤│├┴┤',
            '   ├───┬───┤       ├───┬───┤   ',
            '├┬┤│├┬┤│├┬┤│├┬┤ ├┬┤│├┬┤│├┬┤│├┬┤',
            ' ├─┴─┤ │ ├─┴─┤   ├─┴─┤ │ ├─┴─┤ ',
            '├┴┤ ├┴┤│├┴┤ ├┴┤ ├┴┤ ├┴┤│├┴┤ ├┴┤',
            '       ├───────────────┤       ',
            '├┬┤ ├┬┤│├┬┤ ├┬┤ ├┬┤ ├┬┤│├┬┤ ├┬┤',
            ' ├─┬─┤ │ ├─┬─┤   ├─┬─┤ │ ├─┬─┤ ',
            '├┴┤│├┴┤│├┴┤│├┴┤ ├┴┤│├┴┤│├┴┤│├┴┤',
            '   ├───┴───┤       ├───┴───┤   ',
            '├┬┤│├┬┤ ├┬┤│├┬┤ ├┬┤│├┬┤ ├┬┤│├┬┤',
            ' ├─┴─┤   ├─┴─┤   ├─┴─┤   ├─┴─┤ ',
            '├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤ ├┴┤',
        ];

        let result = new HTree().create(7, { step: 7 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});