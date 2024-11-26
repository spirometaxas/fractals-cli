const { FibonacciWordFractal } = require('../../src/fractals/fibonacciWordFractal');
const { Utils } = require('../../src/utils');

describe('FibonacciWordFractal Tests', () => {
    test('generate n=1', () => {
        let expected = [
            '───',
        ];

        let result = new FibonacciWordFractal().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '│  ',
            '└──',
        ];

        let result = new FibonacciWordFractal().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '│  ',
            '│  ',
            '└──',
        ];

        let result = new FibonacciWordFractal().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '  │',
            '┌─┘',
            '│  ',
            '└──',
        ];

        let result = new FibonacciWordFractal().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5', () => {
        let expected = [
            '────┐',
            '    │',
            '  ┌─┘',
            '  │  ',
            '  └──',
        ];

        let result = new FibonacciWordFractal().create(5, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6', () => {
        let expected = [
            '──┐   ┌───┐',
            '  └───┘   │',
            '        ┌─┘',
            '        │  ',
            '        └──',
        ];

        let result = new FibonacciWordFractal().create(6, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7', () => {
        let expected = [
            '  ┌───┐   ┌───┐',
            '  │   └───┘   │',
            '  └─┐       ┌─┘',
            '    │       │  ',
            '────┘       └──',
        ];

        let result = new FibonacciWordFractal().create(7, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8', () => {
        let expected = [
            '│                      ',
            '└─┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(8, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9', () => {
        let expected = [
            '│                      ',
            '│   ┌───┐              ',
            '└───┘   │              ',
            '      ┌─┘              ',
            '      │                ',
            '      └─┐              ',
            '┌───┐   │              ',
            '│   └───┘              ',
            '└─┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(9, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10', () => {
        let expected = [
            '                      │',
            '┌───┐   ┌───┐       ┌─┘',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '┌─┘       └───┘   └───┘',
            '│   ┌───┐              ',
            '└───┘   │              ',
            '      ┌─┘              ',
            '      │                ',
            '      └─┐              ',
            '┌───┐   │              ',
            '│   └───┘              ',
            '└─┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(10, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11', () => {
        let expected = [
            '────┐       ┌───┐   ┌───┐',
            '    │       │   └───┘   │',
            '  ┌─┘       └─┐       ┌─┘',
            '  │   ┌───┐   │       │  ',
            '  └───┘   └───┘       └─┐',
            '                ┌───┐   │',
            '                │   └───┘',
            '                └─┐      ',
            '                  │      ',
            '                ┌─┘      ',
            '                │   ┌───┐',
            '                └───┘   │',
            '  ┌───┐   ┌───┐       ┌─┘',
            '  │   └───┘   │       │  ',
            '  └─┐       ┌─┘       └─┐',
            '    │       │   ┌───┐   │',
            '  ┌─┘       └───┘   └───┘',
            '  │   ┌───┐              ',
            '  └───┘   │              ',
            '        ┌─┘              ',
            '        │                ',
            '        └─┐              ',
            '  ┌───┐   │              ',
            '  │   └───┘              ',
            '  └─┐       ┌───┐   ┌───┐',
            '    │       │   └───┘   │',
            '  ┌─┘       └─┐       ┌─┘',
            '  │   ┌───┐   │       │  ',
            '  └───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(11, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12', () => {
        let expected = [
            '──┐   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '  └───┘   │               │   └───┘   │       │   └───┘   │',
            '        ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '        │                   │       │   ┌───┐   │       │  ',
            '        └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '  ┌───┐   │               │   ┌───┐               ┌───┐   │',
            '  │   └───┘               └───┘   │               │   └───┘',
            '  └─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '    │       │   └───┘   │       │                   │      ',
            '  ┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '  │   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '  └───┘   └───┘       └───┘   └───┘               └───┘   │',
            '                                    ┌───┐   ┌───┐       ┌─┘',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(12, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                        ───',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                        │  ',
            '                                                        └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                        │  ',
            '                                                        │  ',
            '                                                        └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                          │',
            '                                                        ┌─┘',
            '                                                        │  ',
            '                                                        └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                      ────┐',
            '                                                          │',
            '                                                        ┌─┘',
            '                                                        │  ',
            '                                                        └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                ──┐   ┌───┐',
            '                                                  └───┘   │',
            '                                                        ┌─┘',
            '                                                        │  ',
            '                                                        └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                              ┌───┐   ┌───┐',
            '                                              │   └───┘   │',
            '                                              └─┐       ┌─┘',
            '                                                │       │  ',
            '                                            ────┘       └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                    │                      ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                    │                      ',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                          │',
            '                                    ┌───┐   ┌───┐       ┌─┘',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11', () => {
        let expected = [
            '                                  ────┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └─┐',
            '                                                  ┌───┐   │',
            '                                                  │   └───┘',
            '                                                  └─┐      ',
            '                                                    │      ',
            '                                                  ┌─┘      ',
            '                                                  │   ┌───┐',
            '                                                  └───┘   │',
            '                                    ┌───┐   ┌───┐       ┌─┘',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12', () => {
        let expected = [
            '──┐   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '  └───┘   │               │   └───┘   │       │   └───┘   │',
            '        ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '        │                   │       │   ┌───┐   │       │  ',
            '        └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '  ┌───┐   │               │   ┌───┐               ┌───┐   │',
            '  │   └───┘               └───┘   │               │   └───┘',
            '  └─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '    │       │   └───┘   │       │                   │      ',
            '  ┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '  │   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '  └───┘   └───┘       └───┘   └───┘               └───┘   │',
            '                                    ┌───┐   ┌───┐       ┌─┘',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true', () => {
        let expected = [
            '───',
        ];

        let result = new FibonacciWordFractal().create(1, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true', () => {
        let expected = [
            '┌──',
            '│  ',
        ];

        let result = new FibonacciWordFractal().create(2, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true', () => {
        let expected = [
            '┌──',
            '│  ',
            '│  ',
        ];

        let result = new FibonacciWordFractal().create(3, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true', () => {
        let expected = [
            '┌──',
            '│  ',
            '└─┐',
            '  │',
        ];

        let result = new FibonacciWordFractal().create(4, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true', () => {
        let expected = [
            '  ┌──',
            '  │  ',
            '  └─┐',
            '    │',
            '────┘',
        ];

        let result = new FibonacciWordFractal().create(5, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true', () => {
        let expected = [
            '        ┌──',
            '        │  ',
            '        └─┐',
            '  ┌───┐   │',
            '──┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(6, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true', () => {
        let expected = [
            '────┐       ┌──',
            '    │       │  ',
            '  ┌─┘       └─┐',
            '  │   ┌───┐   │',
            '  └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(7, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌──',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '┌─┘       └───┘   └───┘',
            '│                      ',
        ];

        let result = new FibonacciWordFractal().create(8, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌──',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '┌─┘       └───┘   └───┘',
            '│   ┌───┐              ',
            '└───┘   │              ',
            '      ┌─┘              ',
            '      │                ',
            '      └─┐              ',
            '┌───┐   │              ',
            '│   └───┘              ',
            '│                      ',
        ];

        let result = new FibonacciWordFractal().create(9, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10 inverse=true', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌──',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '┌─┘       └───┘   └───┘',
            '│   ┌───┐              ',
            '└───┘   │              ',
            '      ┌─┘              ',
            '      │                ',
            '      └─┐              ',
            '┌───┐   │              ',
            '│   └───┘              ',
            '└─┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └─┐',
            '                      │',
        ];

        let result = new FibonacciWordFractal().create(10, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11 inverse=true', () => {
        let expected = [
            '  ┌───┐   ┌───┐       ┌──',
            '  │   └───┘   │       │  ',
            '  └─┐       ┌─┘       └─┐',
            '    │       │   ┌───┐   │',
            '  ┌─┘       └───┘   └───┘',
            '  │   ┌───┐              ',
            '  └───┘   │              ',
            '        ┌─┘              ',
            '        │                ',
            '        └─┐              ',
            '  ┌───┐   │              ',
            '  │   └───┘              ',
            '  └─┐       ┌───┐   ┌───┐',
            '    │       │   └───┘   │',
            '  ┌─┘       └─┐       ┌─┘',
            '  │   ┌───┐   │       │  ',
            '  └───┘   └───┘       └─┐',
            '                ┌───┐   │',
            '                │   └───┘',
            '                └─┐      ',
            '                  │      ',
            '                ┌─┘      ',
            '                │   ┌───┐',
            '                └───┘   │',
            '  ┌───┐   ┌───┐       ┌─┘',
            '  │   └───┘   │       │  ',
            '  └─┐       ┌─┘       └─┐',
            '    │       │   ┌───┐   │',
            '────┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(11, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 inverse=true', () => {
        let expected = [
            '                                    ┌───┐   ┌───┐       ┌──',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └─┐',
            '  ┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '  │   └───┘   │       │   └───┘   │               │   └───┘',
            '  └─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '    │       │   ┌───┐   │       │                   │      ',
            '  ┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '  │   ┌───┐               ┌───┐   │               │   ┌───┐',
            '  └───┘   │               │   └───┘               └───┘   │',
            '        ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '        │                   │       │   └───┘   │       │  ',
            '        └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '  ┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '──┘   └───┘               └───┘   └───┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(12, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1 inverse=true', () => {
        let expected = [
            '                                                        ───',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2 inverse=true', () => {
        let expected = [
            '                                                        ┌──',
            '                                                        │  ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3 inverse=true', () => {
        let expected = [
            '                                                        ┌──',
            '                                                        │  ',
            '                                                        │  ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4 inverse=true', () => {
        let expected = [
            '                                                        ┌──',
            '                                                        │  ',
            '                                                        └─┐',
            '                                                          │',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5 inverse=true', () => {
        let expected = [
            '                                                        ┌──',
            '                                                        │  ',
            '                                                        └─┐',
            '                                                          │',
            '                                                      ────┘',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6 inverse=true', () => {
        let expected = [
            '                                                        ┌──',
            '                                                        │  ',
            '                                                        └─┐',
            '                                                  ┌───┐   │',
            '                                                ──┘   └───┘',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7 inverse=true', () => {
        let expected = [
            '                                            ────┐       ┌──',
            '                                                │       │  ',
            '                                              ┌─┘       └─┐',
            '                                              │   ┌───┐   │',
            '                                              └───┘   └───┘',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8 inverse=true', () => {
        let expected = [
            '                                    ┌───┐   ┌───┐       ┌──',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │                      ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9 inverse=true', () => {
        let expected = [
            '                                    ┌───┐   ┌───┐       ┌──',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    │                      ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10 inverse=true', () => {
        let expected = [
            '                                    ┌───┐   ┌───┐       ┌──',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └─┐',
            '                                                          │',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11 inverse=true', () => {
        let expected = [
            '                                    ┌───┐   ┌───┐       ┌──',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └─┐',
            '                                                  ┌───┐   │',
            '                                                  │   └───┘',
            '                                                  └─┐      ',
            '                                                    │      ',
            '                                                  ┌─┘      ',
            '                                                  │   ┌───┐',
            '                                                  └───┘   │',
            '                                    ┌───┐   ┌───┐       ┌─┘',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                  ────┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12 inverse=true', () => {
        let expected = [
            '                                    ┌───┐   ┌───┐       ┌──',
            '                                    │   └───┘   │       │  ',
            '                                    └─┐       ┌─┘       └─┐',
            '                                      │       │   ┌───┐   │',
            '                                    ┌─┘       └───┘   └───┘',
            '                                    │   ┌───┐              ',
            '                                    └───┘   │              ',
            '                                          ┌─┘              ',
            '                                          │                ',
            '                                          └─┐              ',
            '                                    ┌───┐   │              ',
            '                                    │   └───┘              ',
            '                                    └─┐       ┌───┐   ┌───┐',
            '                                      │       │   └───┘   │',
            '                                    ┌─┘       └─┐       ┌─┘',
            '                                    │   ┌───┐   │       │  ',
            '                                    └───┘   └───┘       └─┐',
            '  ┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '  │   └───┘   │       │   └───┘   │               │   └───┘',
            '  └─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '    │       │   ┌───┐   │       │                   │      ',
            '  ┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '  │   ┌───┐               ┌───┐   │               │   ┌───┐',
            '  └───┘   │               │   └───┘               └───┘   │',
            '        ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '        │                   │       │   └───┘   │       │  ',
            '        └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '  ┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '──┘   └───┘               └───┘   └───┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12, inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=left', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new FibonacciWordFractal().create(1, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=left', () => {
        let expected = [
            '  │',
            '──┘',
        ];

        let result = new FibonacciWordFractal().create(2, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=left', () => {
        let expected = [
            '    │',
            '────┘',
        ];

        let result = new FibonacciWordFractal().create(3, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=left', () => {
        let expected = [
            '──┐   │',
            '  └───┘',
        ];

        let result = new FibonacciWordFractal().create(4, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=left', () => {
        let expected = [
            '┌───┐   │',
            '│   └───┘',
            '│        ',
        ];

        let result = new FibonacciWordFractal().create(5, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 rotation=left', () => {
        let expected = [
            '┌───┐   │',
            '│   └───┘',
            '└─┐      ',
            '  │      ',
            '┌─┘      ',
            '│        ',
        ];

        let result = new FibonacciWordFractal().create(6, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 rotation=left', () => {
        let expected = [
            '┌───┐   │',
            '│   └───┘',
            '└─┐      ',
            '  │      ',
            '┌─┘      ',
            '│   ┌───┐',
            '└───┘   │',
            '        │',
        ];

        let result = new FibonacciWordFractal().create(7, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 rotation=left', () => {
        let expected = [
            '  ┌───┐   │',
            '  │   └───┘',
            '  └─┐      ',
            '    │      ',
            '  ┌─┘      ',
            '  │   ┌───┐',
            '  └───┘   │',
            '        ┌─┘',
            '        │  ',
            '        └─┐',
            '  ┌───┐   │',
            '──┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(8, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 rotation=left', () => {
        let expected = [
            '                ┌───┐   │',
            '                │   └───┘',
            '                └─┐      ',
            '                  │      ',
            '                ┌─┘      ',
            '                │   ┌───┐',
            '                └───┘   │',
            '  ┌───┐   ┌───┐       ┌─┘',
            '  │   └───┘   │       │  ',
            '  └─┐       ┌─┘       └─┐',
            '    │       │   ┌───┐   │',
            '────┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(9, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10 rotation=left', () => {
        let expected = [
            '──┐   ┌───┐               ┌───┐   │',
            '  └───┘   │               │   └───┘',
            '        ┌─┘               └─┐      ',
            '        │                   │      ',
            '        └─┐               ┌─┘      ',
            '  ┌───┐   │               │   ┌───┐',
            '  │   └───┘               └───┘   │',
            '  └─┐       ┌───┐   ┌───┐       ┌─┘',
            '    │       │   └───┘   │       │  ',
            '  ┌─┘       └─┐       ┌─┘       └─┐',
            '  │   ┌───┐   │       │   ┌───┐   │',
            '  └───┘   └───┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(10, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11 rotation=left', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
            '│                                                        ',
        ];

        let result = new FibonacciWordFractal().create(11, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 rotation=left', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
            '└─┐       ┌───┐   ┌───┐                                  ',
            '  │       │   └───┘   │                                  ',
            '┌─┘       └─┐       ┌─┘                                  ',
            '│   ┌───┐   │       │                                    ',
            '└───┘   └───┘       └─┐                                  ',
            '              ┌───┐   │                                  ',
            '              │   └───┘                                  ',
            '              └─┐                                        ',
            '                │                                        ',
            '              ┌─┘                                        ',
            '              │   ┌───┐                                  ',
            '              └───┘   │                                  ',
            '┌───┐   ┌───┐       ┌─┘                                  ',
            '│   └───┘   │       │                                    ',
            '└─┐       ┌─┘       └─┐                                  ',
            '  │       │   ┌───┐   │                                  ',
            '┌─┘       └───┘   └───┘                                  ',
            '│                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1 rotation=left', () => {
        let expected = [
            '                                                        │',
            '                                                        │',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2 rotation=left', () => {
        let expected = [
            '                                                        │',
            '                                                      ──┘',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3 rotation=left', () => {
        let expected = [
            '                                                        │',
            '                                                    ────┘',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4 rotation=left', () => {
        let expected = [
            '                                                  ──┐   │',
            '                                                    └───┘',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5 rotation=left', () => {
        let expected = [
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                │        ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6 rotation=left', () => {
        let expected = [
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │        ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7 rotation=left', () => {
        let expected = [
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
            '                                                        │',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8 rotation=left', () => {
        let expected = [
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
            '                                                      ┌─┘',
            '                                                      │  ',
            '                                                      └─┐',
            '                                                ┌───┐   │',
            '                                              ──┘   └───┘',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9 rotation=left', () => {
        let expected = [
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
            '                                  ┌───┐   ┌───┐       ┌─┘',
            '                                  │   └───┘   │       │  ',
            '                                  └─┐       ┌─┘       └─┐',
            '                                    │       │   ┌───┐   │',
            '                                ────┘       └───┘   └───┘',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10 rotation=left', () => {
        let expected = [
            '                      ──┐   ┌───┐               ┌───┐   │',
            '                        └───┘   │               │   └───┘',
            '                              ┌─┘               └─┐      ',
            '                              │                   │      ',
            '                              └─┐               ┌─┘      ',
            '                        ┌───┐   │               │   ┌───┐',
            '                        │   └───┘               └───┘   │',
            '                        └─┐       ┌───┐   ┌───┐       ┌─┘',
            '                          │       │   └───┘   │       │  ',
            '                        ┌─┘       └─┐       ┌─┘       └─┐',
            '                        │   ┌───┐   │       │   ┌───┐   │',
            '                        └───┘   └───┘       └───┘   └───┘',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11 rotation=left', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
            '│                                                        ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12 rotation=left', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
            '└─┐       ┌───┐   ┌───┐                                  ',
            '  │       │   └───┘   │                                  ',
            '┌─┘       └─┐       ┌─┘                                  ',
            '│   ┌───┐   │       │                                    ',
            '└───┘   └───┘       └─┐                                  ',
            '              ┌───┐   │                                  ',
            '              │   └───┘                                  ',
            '              └─┐                                        ',
            '                │                                        ',
            '              ┌─┘                                        ',
            '              │   ┌───┐                                  ',
            '              └───┘   │                                  ',
            '┌───┐   ┌───┐       ┌─┘                                  ',
            '│   └───┘   │       │                                    ',
            '└─┐       ┌─┘       └─┐                                  ',
            '  │       │   ┌───┐   │                                  ',
            '┌─┘       └───┘   └───┘                                  ',
            '│                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=left', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new FibonacciWordFractal().create(1, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=left', () => {
        let expected = [
            '│  ',
            '└──',
        ];

        let result = new FibonacciWordFractal().create(2, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=left', () => {
        let expected = [
            '│    ',
            '└────',
        ];

        let result = new FibonacciWordFractal().create(3, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌──',
            '└───┘  ',
        ];

        let result = new FibonacciWordFractal().create(4, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐',
            '└───┘   │',
            '        │',
        ];

        let result = new FibonacciWordFractal().create(5, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐',
            '└───┘   │',
            '      ┌─┘',
            '      │  ',
            '      └─┐',
            '        │',
        ];

        let result = new FibonacciWordFractal().create(6, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐',
            '└───┘   │',
            '      ┌─┘',
            '      │  ',
            '      └─┐',
            '┌───┐   │',
            '│   └───┘',
            '│        ',
        ];

        let result = new FibonacciWordFractal().create(7, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐  ',
            '└───┘   │  ',
            '      ┌─┘  ',
            '      │    ',
            '      └─┐  ',
            '┌───┐   │  ',
            '│   └───┘  ',
            '└─┐        ',
            '  │        ',
            '┌─┘        ',
            '│   ┌───┐  ',
            '└───┘   └──',
        ];

        let result = new FibonacciWordFractal().create(8, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐                ',
            '└───┘   │                ',
            '      ┌─┘                ',
            '      │                  ',
            '      └─┐                ',
            '┌───┐   │                ',
            '│   └───┘                ',
            '└─┐       ┌───┐   ┌───┐  ',
            '  │       │   └───┘   │  ',
            '┌─┘       └─┐       ┌─┘  ',
            '│   ┌───┐   │       │    ',
            '└───┘   └───┘       └────',
        ];

        let result = new FibonacciWordFractal().create(9, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐               ┌───┐   ┌──',
            '└───┘   │               │   └───┘  ',
            '      ┌─┘               └─┐        ',
            '      │                   │        ',
            '      └─┐               ┌─┘        ',
            '┌───┐   │               │   ┌───┐  ',
            '│   └───┘               └───┘   │  ',
            '└─┐       ┌───┐   ┌───┐       ┌─┘  ',
            '  │       │   └───┘   │       │    ',
            '┌─┘       └─┐       ┌─┘       └─┐  ',
            '│   ┌───┐   │       │   ┌───┐   │  ',
            '└───┘   └───┘       └───┘   └───┘  ',
        ];

        let result = new FibonacciWordFractal().create(10, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
            '                                                        │',
        ];

        let result = new FibonacciWordFractal().create(11, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
            '                                  ┌───┐   ┌───┐       ┌─┘',
            '                                  │   └───┘   │       │  ',
            '                                  └─┐       ┌─┘       └─┐',
            '                                    │       │   ┌───┐   │',
            '                                  ┌─┘       └───┘   └───┘',
            '                                  │   ┌───┐              ',
            '                                  └───┘   │              ',
            '                                        ┌─┘              ',
            '                                        │                ',
            '                                        └─┐              ',
            '                                  ┌───┐   │              ',
            '                                  │   └───┘              ',
            '                                  └─┐       ┌───┐   ┌───┐',
            '                                    │       │   └───┘   │',
            '                                  ┌─┘       └─┐       ┌─┘',
            '                                  │   ┌───┐   │       │  ',
            '                                  └───┘   └───┘       └─┐',
            '                                                        │',
        ];

        let result = new FibonacciWordFractal().create(12, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1 inverse=true rotation=left', () => {
        let expected = [
            '│                                                        ',
            '│                                                        ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2 inverse=true rotation=left', () => {
        let expected = [
            '│                                                        ',
            '└──                                                      ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3 inverse=true rotation=left', () => {
        let expected = [
            '│                                                        ',
            '└────                                                    ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌──                                                  ',
            '└───┘                                                    ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '        │                                                ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '        │                                                ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
            '│                                                        ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
            '└─┐                                                      ',
            '  │                                                      ',
            '┌─┘                                                      ',
            '│   ┌───┐                                                ',
            '└───┘   └──                                              ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
            '└─┐       ┌───┐   ┌───┐                                  ',
            '  │       │   └───┘   │                                  ',
            '┌─┘       └─┐       ┌─┘                                  ',
            '│   ┌───┐   │       │                                    ',
            '└───┘   └───┘       └────                                ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐               ┌───┐   ┌──                      ',
            '└───┘   │               │   └───┘                        ',
            '      ┌─┘               └─┐                              ',
            '      │                   │                              ',
            '      └─┐               ┌─┘                              ',
            '┌───┐   │               │   ┌───┐                        ',
            '│   └───┘               └───┘   │                        ',
            '└─┐       ┌───┐   ┌───┐       ┌─┘                        ',
            '  │       │   └───┘   │       │                          ',
            '┌─┘       └─┐       ┌─┘       └─┐                        ',
            '│   ┌───┐   │       │   ┌───┐   │                        ',
            '└───┘   └───┘       └───┘   └───┘                        ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
            '                                                        │',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12 inverse=true rotation=left', () => {
        let expected = [
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
            '                                  ┌───┐   ┌───┐       ┌─┘',
            '                                  │   └───┘   │       │  ',
            '                                  └─┐       ┌─┘       └─┐',
            '                                    │       │   ┌───┐   │',
            '                                  ┌─┘       └───┘   └───┘',
            '                                  │   ┌───┐              ',
            '                                  └───┘   │              ',
            '                                        ┌─┘              ',
            '                                        │                ',
            '                                        └─┐              ',
            '                                  ┌───┐   │              ',
            '                                  │   └───┘              ',
            '                                  └─┐       ┌───┐   ┌───┐',
            '                                    │       │   └───┘   │',
            '                                  ┌─┘       └─┐       ┌─┘',
            '                                  │   ┌───┐   │       │  ',
            '                                  └───┘   └───┘       └─┐',
            '                                                        │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12, inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=right', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new FibonacciWordFractal().create(1, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=right', () => {
        let expected = [
            '┌──',
            '│  ',
        ];

        let result = new FibonacciWordFractal().create(2, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=right', () => {
        let expected = [
            '┌────',
            '│    ',
        ];

        let result = new FibonacciWordFractal().create(3, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=right', () => {
        let expected = [
            '┌───┐  ',
            '│   └──',
        ];

        let result = new FibonacciWordFractal().create(4, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=right', () => {
        let expected = [
            '        │',
            '┌───┐   │',
            '│   └───┘',
        ];

        let result = new FibonacciWordFractal().create(5, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 rotation=right', () => {
        let expected = [
            '        │',
            '      ┌─┘',
            '      │  ',
            '      └─┐',
            '┌───┐   │',
            '│   └───┘',
        ];

        let result = new FibonacciWordFractal().create(6, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 rotation=right', () => {
        let expected = [
            '│        ',
            '│   ┌───┐',
            '└───┘   │',
            '      ┌─┘',
            '      │  ',
            '      └─┐',
            '┌───┐   │',
            '│   └───┘',
        ];

        let result = new FibonacciWordFractal().create(7, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 rotation=right', () => {
        let expected = [
            '┌───┐   ┌──',
            '│   └───┘  ',
            '└─┐        ',
            '  │        ',
            '┌─┘        ',
            '│   ┌───┐  ',
            '└───┘   │  ',
            '      ┌─┘  ',
            '      │    ',
            '      └─┐  ',
            '┌───┐   │  ',
            '│   └───┘  ',
        ];

        let result = new FibonacciWordFractal().create(8, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 rotation=right', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌────',
            '│   └───┘   │       │    ',
            '└─┐       ┌─┘       └─┐  ',
            '  │       │   ┌───┐   │  ',
            '┌─┘       └───┘   └───┘  ',
            '│   ┌───┐                ',
            '└───┘   │                ',
            '      ┌─┘                ',
            '      │                  ',
            '      └─┐                ',
            '┌───┐   │                ',
            '│   └───┘                ',
        ];

        let result = new FibonacciWordFractal().create(9, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10 rotation=right', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌───┐   ┌───┐  ',
            '│   └───┘   │       │   └───┘   │  ',
            '└─┐       ┌─┘       └─┐       ┌─┘  ',
            '  │       │   ┌───┐   │       │    ',
            '┌─┘       └───┘   └───┘       └─┐  ',
            '│   ┌───┐               ┌───┐   │  ',
            '└───┘   │               │   └───┘  ',
            '      ┌─┘               └─┐        ',
            '      │                   │        ',
            '      └─┐               ┌─┘        ',
            '┌───┐   │               │   ┌───┐  ',
            '│   └───┘               └───┘   └──',
        ];

        let result = new FibonacciWordFractal().create(10, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11 rotation=right', () => {
        let expected = [
            '                                                        │',
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(11, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 rotation=right', () => {
        let expected = [
            '                                                        │',
            '                                  ┌───┐   ┌───┐       ┌─┘',
            '                                  │   └───┘   │       │  ',
            '                                  └─┐       ┌─┘       └─┐',
            '                                    │       │   ┌───┐   │',
            '                                  ┌─┘       └───┘   └───┘',
            '                                  │   ┌───┐              ',
            '                                  └───┘   │              ',
            '                                        ┌─┘              ',
            '                                        │                ',
            '                                        └─┐              ',
            '                                  ┌───┐   │              ',
            '                                  │   └───┘              ',
            '                                  └─┐       ┌───┐   ┌───┐',
            '                                    │       │   └───┘   │',
            '                                  ┌─┘       └─┐       ┌─┘',
            '                                  │   ┌───┐   │       │  ',
            '                                  └───┘   └───┘       └─┐',
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(12, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '│                                                        ',
            '│                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '┌──                                                      ',
            '│                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '┌────                                                    ',
            '│                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '┌───┐                                                    ',
            '│   └──                                                  ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '        │                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '        │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '│                                                        ',
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '┌───┐   ┌──                                              ',
            '│   └───┘                                                ',
            '└─┐                                                      ',
            '  │                                                      ',
            '┌─┘                                                      ',
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '┌───┐   ┌───┐       ┌────                                ',
            '│   └───┘   │       │                                    ',
            '└─┐       ┌─┘       └─┐                                  ',
            '  │       │   ┌───┐   │                                  ',
            '┌─┘       └───┘   └───┘                                  ',
            '│   ┌───┐                                                ',
            '└───┘   │                                                ',
            '      ┌─┘                                                ',
            '      │                                                  ',
            '      └─┐                                                ',
            '┌───┐   │                                                ',
            '│   └───┘                                                ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '┌───┐   ┌───┐       ┌───┐   ┌───┐                        ',
            '│   └───┘   │       │   └───┘   │                        ',
            '└─┐       ┌─┘       └─┐       ┌─┘                        ',
            '  │       │   ┌───┐   │       │                          ',
            '┌─┘       └───┘   └───┘       └─┐                        ',
            '│   ┌───┐               ┌───┐   │                        ',
            '└───┘   │               │   └───┘                        ',
            '      ┌─┘               └─┐                              ',
            '      │                   │                              ',
            '      └─┐               ┌─┘                              ',
            '┌───┐   │               │   ┌───┐                        ',
            '│   └───┘               └───┘   └──                      ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11 rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                        │',
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12 rotation=right', () => {
        let expected = [
            '                                                        │',
            '                                  ┌───┐   ┌───┐       ┌─┘',
            '                                  │   └───┘   │       │  ',
            '                                  └─┐       ┌─┘       └─┐',
            '                                    │       │   ┌───┐   │',
            '                                  ┌─┘       └───┘   └───┘',
            '                                  │   ┌───┐              ',
            '                                  └───┘   │              ',
            '                                        ┌─┘              ',
            '                                        │                ',
            '                                        └─┐              ',
            '                                  ┌───┐   │              ',
            '                                  │   └───┘              ',
            '                                  └─┐       ┌───┐   ┌───┐',
            '                                    │       │   └───┘   │',
            '                                  ┌─┘       └─┐       ┌─┘',
            '                                  │   ┌───┐   │       │  ',
            '                                  └───┘   └───┘       └─┐',
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   │',
            '│   └───┘   │       │   └───┘   │               │   └───┘',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐      ',
            '  │       │   ┌───┐   │       │                   │      ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘      ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐',
            '└───┘   │               │   └───┘               └───┘   │',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘',
            '      │                   │       │   └───┘   │       │  ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=right', () => {
        let expected = [
            '│',
            '│',
        ];

        let result = new FibonacciWordFractal().create(1, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=right', () => {
        let expected = [
            '──┐',
            '  │',
        ];

        let result = new FibonacciWordFractal().create(2, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=right', () => {
        let expected = [
            '────┐',
            '    │',
        ];

        let result = new FibonacciWordFractal().create(3, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=right', () => {
        let expected = [
            '  ┌───┐',
            '──┘   │',
        ];

        let result = new FibonacciWordFractal().create(4, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=right', () => {
        let expected = [
            '│        ',
            '│   ┌───┐',
            '└───┘   │',
        ];

        let result = new FibonacciWordFractal().create(5, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true rotation=right', () => {
        let expected = [
            '│        ',
            '└─┐      ',
            '  │      ',
            '┌─┘      ',
            '│   ┌───┐',
            '└───┘   │',
        ];

        let result = new FibonacciWordFractal().create(6, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true rotation=right', () => {
        let expected = [
            '        │',
            '┌───┐   │',
            '│   └───┘',
            '└─┐      ',
            '  │      ',
            '┌─┘      ',
            '│   ┌───┐',
            '└───┘   │',
        ];

        let result = new FibonacciWordFractal().create(7, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true rotation=right', () => {
        let expected = [
            '──┐   ┌───┐',
            '  └───┘   │',
            '        ┌─┘',
            '        │  ',
            '        └─┐',
            '  ┌───┐   │',
            '  │   └───┘',
            '  └─┐      ',
            '    │      ',
            '  ┌─┘      ',
            '  │   ┌───┐',
            '  └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(8, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true rotation=right', () => {
        let expected = [
            '────┐       ┌───┐   ┌───┐',
            '    │       │   └───┘   │',
            '  ┌─┘       └─┐       ┌─┘',
            '  │   ┌───┐   │       │  ',
            '  └───┘   └───┘       └─┐',
            '                ┌───┐   │',
            '                │   └───┘',
            '                └─┐      ',
            '                  │      ',
            '                ┌─┘      ',
            '                │   ┌───┐',
            '                └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(9, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10 inverse=true rotation=right', () => {
        let expected = [
            '  ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '  │   └───┘   │       │   └───┘   │',
            '  └─┐       ┌─┘       └─┐       ┌─┘',
            '    │       │   ┌───┐   │       │  ',
            '  ┌─┘       └───┘   └───┘       └─┐',
            '  │   ┌───┐               ┌───┐   │',
            '  └───┘   │               │   └───┘',
            '        ┌─┘               └─┐      ',
            '        │                   │      ',
            '        └─┐               ┌─┘      ',
            '  ┌───┐   │               │   ┌───┐',
            '──┘   └───┘               └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(10, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11 inverse=true rotation=right', () => {
        let expected = [
            '│                                                        ',
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(11, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 inverse=true rotation=right', () => {
        let expected = [
            '│                                                        ',
            '└─┐       ┌───┐   ┌───┐                                  ',
            '  │       │   └───┘   │                                  ',
            '┌─┘       └─┐       ┌─┘                                  ',
            '│   ┌───┐   │       │                                    ',
            '└───┘   └───┘       └─┐                                  ',
            '              ┌───┐   │                                  ',
            '              │   └───┘                                  ',
            '              └─┐                                        ',
            '                │                                        ',
            '              ┌─┘                                        ',
            '              │   ┌───┐                                  ',
            '              └───┘   │                                  ',
            '┌───┐   ┌───┐       ┌─┘                                  ',
            '│   └───┘   │       │                                    ',
            '└─┐       ┌─┘       └─┐                                  ',
            '  │       │   ┌───┐   │                                  ',
            '┌─┘       └───┘   └───┘                                  ',
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                        │',
            '                                                        │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                      ──┐',
            '                                                        │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                    ────┐',
            '                                                        │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                    ┌───┐',
            '                                                  ──┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                │        ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                │        ',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                        │',
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                              ──┐   ┌───┐',
            '                                                └───┘   │',
            '                                                      ┌─┘',
            '                                                      │  ',
            '                                                      └─┐',
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                ────┐       ┌───┐   ┌───┐',
            '                                    │       │   └───┘   │',
            '                                  ┌─┘       └─┐       ┌─┘',
            '                                  │   ┌───┐   │       │  ',
            '                                  └───┘   └───┘       └─┐',
            '                                                ┌───┐   │',
            '                                                │   └───┘',
            '                                                └─┐      ',
            '                                                  │      ',
            '                                                ┌─┘      ',
            '                                                │   ┌───┐',
            '                                                └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                        ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '                        │   └───┘   │       │   └───┘   │',
            '                        └─┐       ┌─┘       └─┐       ┌─┘',
            '                          │       │   ┌───┐   │       │  ',
            '                        ┌─┘       └───┘   └───┘       └─┐',
            '                        │   ┌───┐               ┌───┐   │',
            '                        └───┘   │               │   └───┘',
            '                              ┌─┘               └─┐      ',
            '                              │                   │      ',
            '                              └─┐               ┌─┘      ',
            '                        ┌───┐   │               │   ┌───┐',
            '                      ──┘   └───┘               └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11 inverse=true rotation=right', () => {
        let expected = [
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '│                                                        ',
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12 inverse=true rotation=right', () => {
        let expected = [
            '│                                                        ',
            '└─┐       ┌───┐   ┌───┐                                  ',
            '  │       │   └───┘   │                                  ',
            '┌─┘       └─┐       ┌─┘                                  ',
            '│   ┌───┐   │       │                                    ',
            '└───┘   └───┘       └─┐                                  ',
            '              ┌───┐   │                                  ',
            '              │   └───┘                                  ',
            '              └─┐                                        ',
            '                │                                        ',
            '              ┌─┘                                        ',
            '              │   ┌───┐                                  ',
            '              └───┘   │                                  ',
            '┌───┐   ┌───┐       ┌─┘                                  ',
            '│   └───┘   │       │                                    ',
            '└─┐       ┌─┘       └─┐                                  ',
            '  │       │   ┌───┐   │                                  ',
            '┌─┘       └───┘   └───┘                                  ',
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐',
            '└───┘   │               │   └───┘   │       │   └───┘   │',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘',
            '      │                   │       │   ┌───┐   │       │  ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐',
            '┌───┐   │               │   ┌───┐               ┌───┐   │',
            '│   └───┘               └───┘   │               │   └───┘',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐      ',
            '  │       │   └───┘   │       │                   │      ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘      ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐',
            '└───┘   └───┘       └───┘   └───┘               └───┘   │',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12, inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=flip', () => {
        let expected = [
            '───',
        ];

        let result = new FibonacciWordFractal().create(1, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=flip', () => {
        let expected = [
            '──┐',
            '  │',
        ];

        let result = new FibonacciWordFractal().create(2, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=flip', () => {
        let expected = [
            '──┐',
            '  │',
            '  │',
        ];

        let result = new FibonacciWordFractal().create(3, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=flip', () => {
        let expected = [
            '──┐',
            '  │',
            '┌─┘',
            '│  ',
        ];

        let result = new FibonacciWordFractal().create(4, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 rotation=flip', () => {
        let expected = [
            '──┐  ',
            '  │  ',
            '┌─┘  ',
            '│    ',
            '└────',
        ];

        let result = new FibonacciWordFractal().create(5, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 rotation=flip', () => {
        let expected = [
            '──┐        ',
            '  │        ',
            '┌─┘        ',
            '│   ┌───┐  ',
            '└───┘   └──',
        ];

        let result = new FibonacciWordFractal().create(6, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 rotation=flip', () => {
        let expected = [
            '──┐       ┌────',
            '  │       │    ',
            '┌─┘       └─┐  ',
            '│   ┌───┐   │  ',
            '└───┘   └───┘  ',
        ];

        let result = new FibonacciWordFractal().create(7, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └─┐',
            '                      │',
        ];

        let result = new FibonacciWordFractal().create(8, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └─┐',
            '              ┌───┐   │',
            '              │   └───┘',
            '              └─┐      ',
            '                │      ',
            '              ┌─┘      ',
            '              │   ┌───┐',
            '              └───┘   │',
            '                      │',
        ];

        let result = new FibonacciWordFractal().create(9, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └─┐',
            '              ┌───┐   │',
            '              │   └───┘',
            '              └─┐      ',
            '                │      ',
            '              ┌─┘      ',
            '              │   ┌───┐',
            '              └───┘   │',
            '┌───┐   ┌───┐       ┌─┘',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '┌─┘       └───┘   └───┘',
            '│                      ',
        ];

        let result = new FibonacciWordFractal().create(10, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐  ',
            '  │       │   └───┘   │  ',
            '┌─┘       └─┐       ┌─┘  ',
            '│   ┌───┐   │       │    ',
            '└───┘   └───┘       └─┐  ',
            '              ┌───┐   │  ',
            '              │   └───┘  ',
            '              └─┐        ',
            '                │        ',
            '              ┌─┘        ',
            '              │   ┌───┐  ',
            '              └───┘   │  ',
            '┌───┐   ┌───┐       ┌─┘  ',
            '│   └───┘   │       │    ',
            '└─┐       ┌─┘       └─┐  ',
            '  │       │   ┌───┐   │  ',
            '┌─┘       └───┘   └───┘  ',
            '│   ┌───┐                ',
            '└───┘   │                ',
            '      ┌─┘                ',
            '      │                  ',
            '      └─┐                ',
            '┌───┐   │                ',
            '│   └───┘                ',
            '└─┐       ┌───┐   ┌───┐  ',
            '  │       │   └───┘   │  ',
            '┌─┘       └─┐       ┌─┘  ',
            '│   ┌───┐   │       │    ',
            '└───┘   └───┘       └────',
        ];

        let result = new FibonacciWordFractal().create(11, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '┌─┘       └───┘   └───┘                                    ',
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐  ',
            '└───┘   │               │   └───┘   │       │   └───┘   │  ',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘  ',
            '      │                   │       │   ┌───┐   │       │    ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐  ',
            '┌───┐   │               │   ┌───┐               ┌───┐   │  ',
            '│   └───┘               └───┘   │               │   └───┘  ',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐        ',
            '  │       │   └───┘   │       │                   │        ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘        ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐  ',
            '└───┘   └───┘       └───┘   └───┘               └───┘   └──',
        ];

        let result = new FibonacciWordFractal().create(12, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1 rotation=flip', () => {
        let expected = [
            '───                                                        ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2 rotation=flip', () => {
        let expected = [
            '──┐                                                        ',
            '  │                                                        ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3 rotation=flip', () => {
        let expected = [
            '──┐                                                        ',
            '  │                                                        ',
            '  │                                                        ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4 rotation=flip', () => {
        let expected = [
            '──┐                                                        ',
            '  │                                                        ',
            '┌─┘                                                        ',
            '│                                                          ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5 rotation=flip', () => {
        let expected = [
            '──┐                                                        ',
            '  │                                                        ',
            '┌─┘                                                        ',
            '│                                                          ',
            '└────                                                      ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6 rotation=flip', () => {
        let expected = [
            '──┐                                                        ',
            '  │                                                        ',
            '┌─┘                                                        ',
            '│   ┌───┐                                                  ',
            '└───┘   └──                                                ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7 rotation=flip', () => {
        let expected = [
            '──┐       ┌────                                            ',
            '  │       │                                                ',
            '┌─┘       └─┐                                              ',
            '│   ┌───┐   │                                              ',
            '└───┘   └───┘                                              ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '                      │                                    ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '                      │                                    ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '┌─┘       └───┘   └───┘                                    ',
            '│                                                          ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '┌─┘       └───┘   └───┘                                    ',
            '│   ┌───┐                                                  ',
            '└───┘   │                                                  ',
            '      ┌─┘                                                  ',
            '      │                                                    ',
            '      └─┐                                                  ',
            '┌───┐   │                                                  ',
            '│   └───┘                                                  ',
            '└─┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └────                                  ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12 rotation=flip', () => {
        let expected = [
            '──┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '┌─┘       └───┘   └───┘                                    ',
            '│   ┌───┐               ┌───┐   ┌───┐       ┌───┐   ┌───┐  ',
            '└───┘   │               │   └───┘   │       │   └───┘   │  ',
            '      ┌─┘               └─┐       ┌─┘       └─┐       ┌─┘  ',
            '      │                   │       │   ┌───┐   │       │    ',
            '      └─┐               ┌─┘       └───┘   └───┘       └─┐  ',
            '┌───┐   │               │   ┌───┐               ┌───┐   │  ',
            '│   └───┘               └───┘   │               │   └───┘  ',
            '└─┐       ┌───┐   ┌───┐       ┌─┘               └─┐        ',
            '  │       │   └───┘   │       │                   │        ',
            '┌─┘       └─┐       ┌─┘       └─┐               ┌─┘        ',
            '│   ┌───┐   │       │   ┌───┐   │               │   ┌───┐  ',
            '└───┘   └───┘       └───┘   └───┘               └───┘   └──',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=flip', () => {
        let expected = [
            '───',
        ];

        let result = new FibonacciWordFractal().create(1, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=flip', () => {
        let expected = [
            '  │',
            '──┘',
        ];

        let result = new FibonacciWordFractal().create(2, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=flip', () => {
        let expected = [
            '  │',
            '  │',
            '──┘',
        ];

        let result = new FibonacciWordFractal().create(3, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 inverse=true rotation=flip', () => {
        let expected = [
            '│  ',
            '└─┐',
            '  │',
            '──┘',
        ];

        let result = new FibonacciWordFractal().create(4, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=5 inverse=true rotation=flip', () => {
        let expected = [
            '┌────',
            '│    ',
            '└─┐  ',
            '  │  ',
            '──┘  ',
        ];

        let result = new FibonacciWordFractal().create(5, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=6 inverse=true rotation=flip', () => {
        let expected = [
            '┌───┐   ┌──',
            '│   └───┘  ',
            '└─┐        ',
            '  │        ',
            '──┘        ',
        ];

        let result = new FibonacciWordFractal().create(6, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=7 inverse=true rotation=flip', () => {
        let expected = [
            '┌───┐   ┌───┐  ',
            '│   └───┘   │  ',
            '└─┐       ┌─┘  ',
            '  │       │    ',
            '──┘       └────',
        ];

        let result = new FibonacciWordFractal().create(7, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=8 inverse=true rotation=flip', () => {
        let expected = [
            '                      │',
            '┌───┐   ┌───┐       ┌─┘',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '──┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(8, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=9 inverse=true rotation=flip', () => {
        let expected = [
            '                      │',
            '              ┌───┐   │',
            '              │   └───┘',
            '              └─┐      ',
            '                │      ',
            '              ┌─┘      ',
            '              │   ┌───┐',
            '              └───┘   │',
            '┌───┐   ┌───┐       ┌─┘',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '──┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(9, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=10 inverse=true rotation=flip', () => {
        let expected = [
            '│                      ',
            '└─┐       ┌───┐   ┌───┐',
            '  │       │   └───┘   │',
            '┌─┘       └─┐       ┌─┘',
            '│   ┌───┐   │       │  ',
            '└───┘   └───┘       └─┐',
            '              ┌───┐   │',
            '              │   └───┘',
            '              └─┐      ',
            '                │      ',
            '              ┌─┘      ',
            '              │   ┌───┐',
            '              └───┘   │',
            '┌───┐   ┌───┐       ┌─┘',
            '│   └───┘   │       │  ',
            '└─┐       ┌─┘       └─┐',
            '  │       │   ┌───┐   │',
            '──┘       └───┘   └───┘',
        ];

        let result = new FibonacciWordFractal().create(10, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=11 inverse=true rotation=flip', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌────',
            '│   └───┘   │       │    ',
            '└─┐       ┌─┘       └─┐  ',
            '  │       │   ┌───┐   │  ',
            '┌─┘       └───┘   └───┘  ',
            '│   ┌───┐                ',
            '└───┘   │                ',
            '      ┌─┘                ',
            '      │                  ',
            '      └─┐                ',
            '┌───┐   │                ',
            '│   └───┘                ',
            '└─┐       ┌───┐   ┌───┐  ',
            '  │       │   └───┘   │  ',
            '┌─┘       └─┐       ┌─┘  ',
            '│   ┌───┐   │       │    ',
            '└───┘   └───┘       └─┐  ',
            '              ┌───┐   │  ',
            '              │   └───┘  ',
            '              └─┐        ',
            '                │        ',
            '              ┌─┘        ',
            '              │   ┌───┐  ',
            '              └───┘   │  ',
            '┌───┐   ┌───┐       ┌─┘  ',
            '│   └───┘   │       │    ',
            '└─┐       ┌─┘       └─┐  ',
            '  │       │   ┌───┐   │  ',
            '──┘       └───┘   └───┘  ',
        ];

        let result = new FibonacciWordFractal().create(11, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 inverse=true rotation=flip', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   ┌──',
            '│   └───┘   │       │   └───┘   │               │   └───┘  ',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐        ',
            '  │       │   ┌───┐   │       │                   │        ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘        ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐  ',
            '└───┘   │               │   └───┘               └───┘   │  ',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘  ',
            '      │                   │       │   └───┘   │       │    ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐  ',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │  ',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘  ',
            '└─┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '──┘       └───┘   └───┘                                    ',
        ];

        let result = new FibonacciWordFractal().create(12, { inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=1 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '───                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 1, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=2 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '  │                                                        ',
            '──┘                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 2, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=3 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '  │                                                        ',
            '  │                                                        ',
            '──┘                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 3, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=4 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '│                                                          ',
            '└─┐                                                        ',
            '  │                                                        ',
            '──┘                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 4, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=5 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '┌────                                                      ',
            '│                                                          ',
            '└─┐                                                        ',
            '  │                                                        ',
            '──┘                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 5, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=6 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '┌───┐   ┌──                                                ',
            '│   └───┘                                                  ',
            '└─┐                                                        ',
            '  │                                                        ',
            '──┘                                                        ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 6, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=7 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '┌───┐   ┌───┐                                              ',
            '│   └───┘   │                                              ',
            '└─┐       ┌─┘                                              ',
            '  │       │                                                ',
            '──┘       └────                                            ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 7, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=8 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                      │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '──┘       └───┘   └───┘                                    ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 8, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=9 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                      │                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '──┘       └───┘   └───┘                                    ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 9, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=10 inverse=true rotation=flip', () => {
        let expected = [
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '                                                           ',
            '│                                                          ',
            '└─┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '──┘       └───┘   └───┘                                    ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 10, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=11 inverse=true rotation=flip', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌────                                  ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '┌─┘       └───┘   └───┘                                    ',
            '│   ┌───┐                                                  ',
            '└───┘   │                                                  ',
            '      ┌─┘                                                  ',
            '      │                                                    ',
            '      └─┐                                                  ',
            '┌───┐   │                                                  ',
            '│   └───┘                                                  ',
            '└─┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '──┘       └───┘   └───┘                                    ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 11, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=12 step=12 inverse=true rotation=flip', () => {
        let expected = [
            '┌───┐   ┌───┐       ┌───┐   ┌───┐               ┌───┐   ┌──',
            '│   └───┘   │       │   └───┘   │               │   └───┘  ',
            '└─┐       ┌─┘       └─┐       ┌─┘               └─┐        ',
            '  │       │   ┌───┐   │       │                   │        ',
            '┌─┘       └───┘   └───┘       └─┐               ┌─┘        ',
            '│   ┌───┐               ┌───┐   │               │   ┌───┐  ',
            '└───┘   │               │   └───┘               └───┘   │  ',
            '      ┌─┘               └─┐       ┌───┐   ┌───┐       ┌─┘  ',
            '      │                   │       │   └───┘   │       │    ',
            '      └─┐               ┌─┘       └─┐       ┌─┘       └─┐  ',
            '┌───┐   │               │   ┌───┐   │       │   ┌───┐   │  ',
            '│   └───┘               └───┘   └───┘       └───┘   └───┘  ',
            '└─┐       ┌───┐   ┌───┐                                    ',
            '  │       │   └───┘   │                                    ',
            '┌─┘       └─┐       ┌─┘                                    ',
            '│   ┌───┐   │       │                                      ',
            '└───┘   └───┘       └─┐                                    ',
            '              ┌───┐   │                                    ',
            '              │   └───┘                                    ',
            '              └─┐                                          ',
            '                │                                          ',
            '              ┌─┘                                          ',
            '              │   ┌───┐                                    ',
            '              └───┘   │                                    ',
            '┌───┐   ┌───┐       ┌─┘                                    ',
            '│   └───┘   │       │                                      ',
            '└─┐       ┌─┘       └─┐                                    ',
            '  │       │   ┌───┐   │                                    ',
            '──┘       └───┘   └───┘                                    ',
        ];

        let result = new FibonacciWordFractal().create(12, { step: 12, inverse: true, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});