const { VTree } = require('../../src/fractals/vTree');
const { Utils } = require('../../src/utils');

describe('VTree Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '┌─┐',
            '└─┘',
        ];

        let result = new VTree().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            '┌─┐    ',
            '├─┴─┐  ',
            '│   ├─┐',
            '└───┴─┘',
        ];

        let result = new VTree().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '┌─┐            ',
            '├─┴─┐          ',
            '│   ├─┐        ',
            '├───┴─┴─┐      ',
            '│       ├─┐    ',
            '│       ├─┴─┐  ',
            '│       │   ├─┐',
            '└───────┴───┴─┘',
        ];

        let result = new VTree().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '┌─┐                            ',
            '├─┴─┐                          ',
            '│   ├─┐                        ',
            '├───┴─┴─┐                      ',
            '│       ├─┐                    ',
            '│       ├─┴─┐                  ',
            '│       │   ├─┐                ',
            '├───────┴───┴─┴─┐              ',
            '│               ├─┐            ',
            '│               ├─┴─┐          ',
            '│               │   ├─┐        ',
            '│               ├───┴─┴─┐      ',
            '│               │       ├─┐    ',
            '│               │       ├─┴─┐  ',
            '│               │       │   ├─┐',
            '└───────────────┴───────┴───┴─┘',
        ];

        let result = new VTree().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '┌─┐                                                            ',
            '├─┴─┐                                                          ',
            '│   ├─┐                                                        ',
            '├───┴─┴─┐                                                      ',
            '│       ├─┐                                                    ',
            '│       ├─┴─┐                                                  ',
            '│       │   ├─┐                                                ',
            '├───────┴───┴─┴─┐                                              ',
            '│               ├─┐                                            ',
            '│               ├─┴─┐                                          ',
            '│               │   ├─┐                                        ',
            '│               ├───┴─┴─┐                                      ',
            '│               │       ├─┐                                    ',
            '│               │       ├─┴─┐                                  ',
            '│               │       │   ├─┐                                ',
            '├───────────────┴───────┴───┴─┴─┐                              ',
            '│                               ├─┐                            ',
            '│                               ├─┴─┐                          ',
            '│                               │   ├─┐                        ',
            '│                               ├───┴─┴─┐                      ',
            '│                               │       ├─┐                    ',
            '│                               │       ├─┴─┐                  ',
            '│                               │       │   ├─┐                ',
            '│                               ├───────┴───┴─┴─┐              ',
            '│                               │               ├─┐            ',
            '│                               │               ├─┴─┐          ',
            '│                               │               │   ├─┐        ',
            '│                               │               ├───┴─┴─┐      ',
            '│                               │               │       ├─┐    ',
            '│                               │               │       ├─┴─┐  ',
            '│                               │               │       │   ├─┐',
            '└───────────────────────────────┴───────────────┴───────┴───┴─┘',
        ];

        let result = new VTree().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0', () => {
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
            '┌───────────────────────────────┐                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '└───────────────────────────────┘                              ',
        ];

        let result = new VTree().create(4, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '┌───────────────┐                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '├───────────────┴───────────────┐                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               ├───────────────┐              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '└───────────────────────────────┴───────────────┘              ',
        ];

        let result = new VTree().create(4, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '┌───────┐                                                      ',
            '│       │                                                      ',
            '│       │                                                      ',
            '│       │                                                      ',
            '├───────┴───────┐                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               ├───────┐                                      ',
            '│               │       │                                      ',
            '│               │       │                                      ',
            '│               │       │                                      ',
            '├───────────────┴───────┴───────┐                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               ├───────┐                      ',
            '│                               │       │                      ',
            '│                               │       │                      ',
            '│                               │       │                      ',
            '│                               ├───────┴───────┐              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               ├───────┐      ',
            '│                               │               │       │      ',
            '│                               │               │       │      ',
            '│                               │               │       │      ',
            '└───────────────────────────────┴───────────────┴───────┘      ',
        ];

        let result = new VTree().create(4, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3', () => {
        let expected = [
            '                                                               ',
            '┌───┐                                                          ',
            '│   │                                                          ',
            '├───┴───┐                                                      ',
            '│       │                                                      ',
            '│       ├───┐                                                  ',
            '│       │   │                                                  ',
            '├───────┴───┴───┐                                              ',
            '│               │                                              ',
            '│               ├───┐                                          ',
            '│               │   │                                          ',
            '│               ├───┴───┐                                      ',
            '│               │       │                                      ',
            '│               │       ├───┐                                  ',
            '│               │       │   │                                  ',
            '├───────────────┴───────┴───┴───┐                              ',
            '│                               │                              ',
            '│                               ├───┐                          ',
            '│                               │   │                          ',
            '│                               ├───┴───┐                      ',
            '│                               │       │                      ',
            '│                               │       ├───┐                  ',
            '│                               │       │   │                  ',
            '│                               ├───────┴───┴───┐              ',
            '│                               │               │              ',
            '│                               │               ├───┐          ',
            '│                               │               │   │          ',
            '│                               │               ├───┴───┐      ',
            '│                               │               │       │      ',
            '│                               │               │       ├───┐  ',
            '│                               │               │       │   │  ',
            '└───────────────────────────────┴───────────────┴───────┴───┘  ',
        ];

        let result = new VTree().create(4, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4', () => {
        let expected = [
            '┌─┐                                                            ',
            '├─┴─┐                                                          ',
            '│   ├─┐                                                        ',
            '├───┴─┴─┐                                                      ',
            '│       ├─┐                                                    ',
            '│       ├─┴─┐                                                  ',
            '│       │   ├─┐                                                ',
            '├───────┴───┴─┴─┐                                              ',
            '│               ├─┐                                            ',
            '│               ├─┴─┐                                          ',
            '│               │   ├─┐                                        ',
            '│               ├───┴─┴─┐                                      ',
            '│               │       ├─┐                                    ',
            '│               │       ├─┴─┐                                  ',
            '│               │       │   ├─┐                                ',
            '├───────────────┴───────┴───┴─┴─┐                              ',
            '│                               ├─┐                            ',
            '│                               ├─┴─┐                          ',
            '│                               │   ├─┐                        ',
            '│                               ├───┴─┴─┐                      ',
            '│                               │       ├─┐                    ',
            '│                               │       ├─┴─┐                  ',
            '│                               │       │   ├─┐                ',
            '│                               ├───────┴───┴─┴─┐              ',
            '│                               │               ├─┐            ',
            '│                               │               ├─┴─┐          ',
            '│                               │               │   ├─┐        ',
            '│                               │               ├───┴─┴─┐      ',
            '│                               │               │       ├─┐    ',
            '│                               │               │       ├─┴─┐  ',
            '│                               │               │       │   ├─┐',
            '└───────────────────────────────┴───────────────┴───────┴───┴─┘',
        ];

        let result = new VTree().create(4, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=left', () => {
        let expected = [
            '┌─┐',
            '└─┘',
        ];

        let result = new VTree().create(0, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=left', () => {
        let expected = [
            '    ┌─┐',
            '  ┌─┴─┤',
            '┌─┤   │',
            '└─┴───┘',
        ];

        let result = new VTree().create(1, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=left', () => {
        let expected = [
            '            ┌─┐',
            '          ┌─┴─┤',
            '        ┌─┤   │',
            '      ┌─┴─┴───┤',
            '    ┌─┤       │',
            '  ┌─┴─┤       │',
            '┌─┤   │       │',
            '└─┴───┴───────┘',
        ];

        let result = new VTree().create(2, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=left', () => {
        let expected = [
            '                            ┌─┐',
            '                          ┌─┴─┤',
            '                        ┌─┤   │',
            '                      ┌─┴─┴───┤',
            '                    ┌─┤       │',
            '                  ┌─┴─┤       │',
            '                ┌─┤   │       │',
            '              ┌─┴─┴───┴───────┤',
            '            ┌─┤               │',
            '          ┌─┴─┤               │',
            '        ┌─┤   │               │',
            '      ┌─┴─┴───┤               │',
            '    ┌─┤       │               │',
            '  ┌─┴─┤       │               │',
            '┌─┤   │       │               │',
            '└─┴───┴───────┴───────────────┘',
        ];

        let result = new VTree().create(3, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=left', () => {
        let expected = [
            '                                                            ┌─┐',
            '                                                          ┌─┴─┤',
            '                                                        ┌─┤   │',
            '                                                      ┌─┴─┴───┤',
            '                                                    ┌─┤       │',
            '                                                  ┌─┴─┤       │',
            '                                                ┌─┤   │       │',
            '                                              ┌─┴─┴───┴───────┤',
            '                                            ┌─┤               │',
            '                                          ┌─┴─┤               │',
            '                                        ┌─┤   │               │',
            '                                      ┌─┴─┴───┤               │',
            '                                    ┌─┤       │               │',
            '                                  ┌─┴─┤       │               │',
            '                                ┌─┤   │       │               │',
            '                              ┌─┴─┴───┴───────┴───────────────┤',
            '                            ┌─┤                               │',
            '                          ┌─┴─┤                               │',
            '                        ┌─┤   │                               │',
            '                      ┌─┴─┴───┤                               │',
            '                    ┌─┤       │                               │',
            '                  ┌─┴─┤       │                               │',
            '                ┌─┤   │       │                               │',
            '              ┌─┴─┴───┴───────┤                               │',
            '            ┌─┤               │                               │',
            '          ┌─┴─┤               │                               │',
            '        ┌─┤   │               │                               │',
            '      ┌─┴─┴───┤               │                               │',
            '    ┌─┤       │               │                               │',
            '  ┌─┴─┤       │               │                               │',
            '┌─┤   │       │               │                               │',
            '└─┴───┴───────┴───────────────┴───────────────────────────────┘',
        ];

        let result = new VTree().create(4, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 rotation=left', () => {
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
            '                              ┌───────────────────────────────┐',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              └───────────────────────────────┘',
        ];

        let result = new VTree().create(4, { step: 0, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 rotation=left', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                              ┌───────────────┐',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                              ┌───────────────┴───────────────┤',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '              ┌───────────────┤                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              └───────────────┴───────────────────────────────┘',
        ];

        let result = new VTree().create(4, { step: 1, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 rotation=left', () => {
        let expected = [
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                      ┌───────┐',
            '                                                      │       │',
            '                                                      │       │',
            '                                                      │       │',
            '                                              ┌───────┴───────┤',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                      ┌───────┤               │',
            '                                      │       │               │',
            '                                      │       │               │',
            '                                      │       │               │',
            '                              ┌───────┴───────┴───────────────┤',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                      ┌───────┤                               │',
            '                      │       │                               │',
            '                      │       │                               │',
            '                      │       │                               │',
            '              ┌───────┴───────┤                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '      ┌───────┤               │                               │',
            '      │       │               │                               │',
            '      │       │               │                               │',
            '      │       │               │                               │',
            '      └───────┴───────────────┴───────────────────────────────┘',
        ];

        let result = new VTree().create(4, { step: 2, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 rotation=left', () => {
        let expected = [
            '                                                               ',
            '                                                          ┌───┐',
            '                                                          │   │',
            '                                                      ┌───┴───┤',
            '                                                      │       │',
            '                                                  ┌───┤       │',
            '                                                  │   │       │',
            '                                              ┌───┴───┴───────┤',
            '                                              │               │',
            '                                          ┌───┤               │',
            '                                          │   │               │',
            '                                      ┌───┴───┤               │',
            '                                      │       │               │',
            '                                  ┌───┤       │               │',
            '                                  │   │       │               │',
            '                              ┌───┴───┴───────┴───────────────┤',
            '                              │                               │',
            '                          ┌───┤                               │',
            '                          │   │                               │',
            '                      ┌───┴───┤                               │',
            '                      │       │                               │',
            '                  ┌───┤       │                               │',
            '                  │   │       │                               │',
            '              ┌───┴───┴───────┤                               │',
            '              │               │                               │',
            '          ┌───┤               │                               │',
            '          │   │               │                               │',
            '      ┌───┴───┤               │                               │',
            '      │       │               │                               │',
            '  ┌───┤       │               │                               │',
            '  │   │       │               │                               │',
            '  └───┴───────┴───────────────┴───────────────────────────────┘',
        ];

        let result = new VTree().create(4, { step: 3, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 rotation=left', () => {
        let expected = [
            '                                                            ┌─┐',
            '                                                          ┌─┴─┤',
            '                                                        ┌─┤   │',
            '                                                      ┌─┴─┴───┤',
            '                                                    ┌─┤       │',
            '                                                  ┌─┴─┤       │',
            '                                                ┌─┤   │       │',
            '                                              ┌─┴─┴───┴───────┤',
            '                                            ┌─┤               │',
            '                                          ┌─┴─┤               │',
            '                                        ┌─┤   │               │',
            '                                      ┌─┴─┴───┤               │',
            '                                    ┌─┤       │               │',
            '                                  ┌─┴─┤       │               │',
            '                                ┌─┤   │       │               │',
            '                              ┌─┴─┴───┴───────┴───────────────┤',
            '                            ┌─┤                               │',
            '                          ┌─┴─┤                               │',
            '                        ┌─┤   │                               │',
            '                      ┌─┴─┴───┤                               │',
            '                    ┌─┤       │                               │',
            '                  ┌─┴─┤       │                               │',
            '                ┌─┤   │       │                               │',
            '              ┌─┴─┴───┴───────┤                               │',
            '            ┌─┤               │                               │',
            '          ┌─┴─┤               │                               │',
            '        ┌─┤   │               │                               │',
            '      ┌─┴─┴───┤               │                               │',
            '    ┌─┤       │               │                               │',
            '  ┌─┴─┤       │               │                               │',
            '┌─┤   │       │               │                               │',
            '└─┴───┴───────┴───────────────┴───────────────────────────────┘',
        ];

        let result = new VTree().create(4, { step: 4, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=right', () => {
        let expected = [
            '┌─┐',
            '└─┘',
        ];

        let result = new VTree().create(0, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=right', () => {
        let expected = [
            '┌───┬─┐',
            '│   ├─┘',
            '├─┬─┘  ',
            '└─┘    ',
        ];

        let result = new VTree().create(1, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=right', () => {
        let expected = [
            '┌───────┬───┬─┐',
            '│       │   ├─┘',
            '│       ├─┬─┘  ',
            '│       ├─┘    ',
            '├───┬─┬─┘      ',
            '│   ├─┘        ',
            '├─┬─┘          ',
            '└─┘            ',
        ];

        let result = new VTree().create(2, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=right', () => {
        let expected = [
            '┌───────────────┬───────┬───┬─┐',
            '│               │       │   ├─┘',
            '│               │       ├─┬─┘  ',
            '│               │       ├─┘    ',
            '│               ├───┬─┬─┘      ',
            '│               │   ├─┘        ',
            '│               ├─┬─┘          ',
            '│               ├─┘            ',
            '├───────┬───┬─┬─┘              ',
            '│       │   ├─┘                ',
            '│       ├─┬─┘                  ',
            '│       ├─┘                    ',
            '├───┬─┬─┘                      ',
            '│   ├─┘                        ',
            '├─┬─┘                          ',
            '└─┘                            ',
        ];

        let result = new VTree().create(3, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=right', () => {
        let expected = [
            '┌───────────────────────────────┬───────────────┬───────┬───┬─┐',
            '│                               │               │       │   ├─┘',
            '│                               │               │       ├─┬─┘  ',
            '│                               │               │       ├─┘    ',
            '│                               │               ├───┬─┬─┘      ',
            '│                               │               │   ├─┘        ',
            '│                               │               ├─┬─┘          ',
            '│                               │               ├─┘            ',
            '│                               ├───────┬───┬─┬─┘              ',
            '│                               │       │   ├─┘                ',
            '│                               │       ├─┬─┘                  ',
            '│                               │       ├─┘                    ',
            '│                               ├───┬─┬─┘                      ',
            '│                               │   ├─┘                        ',
            '│                               ├─┬─┘                          ',
            '│                               ├─┘                            ',
            '├───────────────┬───────┬───┬─┬─┘                              ',
            '│               │       │   ├─┘                                ',
            '│               │       ├─┬─┘                                  ',
            '│               │       ├─┘                                    ',
            '│               ├───┬─┬─┘                                      ',
            '│               │   ├─┘                                        ',
            '│               ├─┬─┘                                          ',
            '│               ├─┘                                            ',
            '├───────┬───┬─┬─┘                                              ',
            '│       │   ├─┘                                                ',
            '│       ├─┬─┘                                                  ',
            '│       ├─┘                                                    ',
            '├───┬─┬─┘                                                      ',
            '│   ├─┘                                                        ',
            '├─┬─┘                                                          ',
            '└─┘                                                            ',
        ];

        let result = new VTree().create(4, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 rotation=right', () => {
        let expected = [
            '┌───────────────────────────────┐                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '└───────────────────────────────┘                              ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
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

        let result = new VTree().create(4, { step: 0, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 rotation=right', () => {
        let expected = [
            '┌───────────────────────────────┬───────────────┐              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               ├───────────────┘              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '├───────────────┬───────────────┘                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '└───────────────┘                                              ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new VTree().create(4, { step: 1, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 rotation=right', () => {
        let expected = [
            '┌───────────────────────────────┬───────────────┬───────┐      ',
            '│                               │               │       │      ',
            '│                               │               │       │      ',
            '│                               │               │       │      ',
            '│                               │               ├───────┘      ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               │               │              ',
            '│                               ├───────┬───────┘              ',
            '│                               │       │                      ',
            '│                               │       │                      ',
            '│                               │       │                      ',
            '│                               ├───────┘                      ',
            '│                               │                              ',
            '│                               │                              ',
            '│                               │                              ',
            '├───────────────┬───────┬───────┘                              ',
            '│               │       │                                      ',
            '│               │       │                                      ',
            '│               │       │                                      ',
            '│               ├───────┘                                      ',
            '│               │                                              ',
            '│               │                                              ',
            '│               │                                              ',
            '├───────┬───────┘                                              ',
            '│       │                                                      ',
            '│       │                                                      ',
            '│       │                                                      ',
            '└───────┘                                                      ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new VTree().create(4, { step: 2, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 rotation=right', () => {
        let expected = [
            '┌───────────────────────────────┬───────────────┬───────┬───┐  ',
            '│                               │               │       │   │  ',
            '│                               │               │       ├───┘  ',
            '│                               │               │       │      ',
            '│                               │               ├───┬───┘      ',
            '│                               │               │   │          ',
            '│                               │               ├───┘          ',
            '│                               │               │              ',
            '│                               ├───────┬───┬───┘              ',
            '│                               │       │   │                  ',
            '│                               │       ├───┘                  ',
            '│                               │       │                      ',
            '│                               ├───┬───┘                      ',
            '│                               │   │                          ',
            '│                               ├───┘                          ',
            '│                               │                              ',
            '├───────────────┬───────┬───┬───┘                              ',
            '│               │       │   │                                  ',
            '│               │       ├───┘                                  ',
            '│               │       │                                      ',
            '│               ├───┬───┘                                      ',
            '│               │   │                                          ',
            '│               ├───┘                                          ',
            '│               │                                              ',
            '├───────┬───┬───┘                                              ',
            '│       │   │                                                  ',
            '│       ├───┘                                                  ',
            '│       │                                                      ',
            '├───┬───┘                                                      ',
            '│   │                                                          ',
            '└───┘                                                          ',
            '                                                               ',
        ];

        let result = new VTree().create(4, { step: 3, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 rotation=right', () => {
        let expected = [
            '┌───────────────────────────────┬───────────────┬───────┬───┬─┐',
            '│                               │               │       │   ├─┘',
            '│                               │               │       ├─┬─┘  ',
            '│                               │               │       ├─┘    ',
            '│                               │               ├───┬─┬─┘      ',
            '│                               │               │   ├─┘        ',
            '│                               │               ├─┬─┘          ',
            '│                               │               ├─┘            ',
            '│                               ├───────┬───┬─┬─┘              ',
            '│                               │       │   ├─┘                ',
            '│                               │       ├─┬─┘                  ',
            '│                               │       ├─┘                    ',
            '│                               ├───┬─┬─┘                      ',
            '│                               │   ├─┘                        ',
            '│                               ├─┬─┘                          ',
            '│                               ├─┘                            ',
            '├───────────────┬───────┬───┬─┬─┘                              ',
            '│               │       │   ├─┘                                ',
            '│               │       ├─┬─┘                                  ',
            '│               │       ├─┘                                    ',
            '│               ├───┬─┬─┘                                      ',
            '│               │   ├─┘                                        ',
            '│               ├─┬─┘                                          ',
            '│               ├─┘                                            ',
            '├───────┬───┬─┬─┘                                              ',
            '│       │   ├─┘                                                ',
            '│       ├─┬─┘                                                  ',
            '│       ├─┘                                                    ',
            '├───┬─┬─┘                                                      ',
            '│   ├─┘                                                        ',
            '├─┬─┘                                                          ',
            '└─┘                                                            ',
        ];

        let result = new VTree().create(4, { step: 4, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=flip', () => {
        let expected = [
            '┌─┐',
            '└─┘',
        ];

        let result = new VTree().create(0, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=flip', () => {
        let expected = [
            '┌─┬───┐',
            '└─┤   │',
            '  └─┬─┤',
            '    └─┘',
        ];

        let result = new VTree().create(1, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=flip', () => {
        let expected = [
            '┌─┬───┬───────┐',
            '└─┤   │       │',
            '  └─┬─┤       │',
            '    └─┤       │',
            '      └─┬─┬───┤',
            '        └─┤   │',
            '          └─┬─┤',
            '            └─┘',
        ];

        let result = new VTree().create(2, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=flip', () => {
        let expected = [
            '┌─┬───┬───────┬───────────────┐',
            '└─┤   │       │               │',
            '  └─┬─┤       │               │',
            '    └─┤       │               │',
            '      └─┬─┬───┤               │',
            '        └─┤   │               │',
            '          └─┬─┤               │',
            '            └─┤               │',
            '              └─┬─┬───┬───────┤',
            '                └─┤   │       │',
            '                  └─┬─┤       │',
            '                    └─┤       │',
            '                      └─┬─┬───┤',
            '                        └─┤   │',
            '                          └─┬─┤',
            '                            └─┘',
        ];

        let result = new VTree().create(3, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=flip', () => {
        let expected = [
            '┌─┬───┬───────┬───────────────┬───────────────────────────────┐',
            '└─┤   │       │               │                               │',
            '  └─┬─┤       │               │                               │',
            '    └─┤       │               │                               │',
            '      └─┬─┬───┤               │                               │',
            '        └─┤   │               │                               │',
            '          └─┬─┤               │                               │',
            '            └─┤               │                               │',
            '              └─┬─┬───┬───────┤                               │',
            '                └─┤   │       │                               │',
            '                  └─┬─┤       │                               │',
            '                    └─┤       │                               │',
            '                      └─┬─┬───┤                               │',
            '                        └─┤   │                               │',
            '                          └─┬─┤                               │',
            '                            └─┤                               │',
            '                              └─┬─┬───┬───────┬───────────────┤',
            '                                └─┤   │       │               │',
            '                                  └─┬─┤       │               │',
            '                                    └─┤       │               │',
            '                                      └─┬─┬───┤               │',
            '                                        └─┤   │               │',
            '                                          └─┬─┤               │',
            '                                            └─┤               │',
            '                                              └─┬─┬───┬───────┤',
            '                                                └─┤   │       │',
            '                                                  └─┬─┤       │',
            '                                                    └─┤       │',
            '                                                      └─┬─┬───┤',
            '                                                        └─┤   │',
            '                                                          └─┬─┤',
            '                                                            └─┘',
        ];

        let result = new VTree().create(4, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 rotation=flip', () => {
        let expected = [
            '                              ┌───────────────────────────────┐',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              └───────────────────────────────┘',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
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

        let result = new VTree().create(4, { step: 0, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 rotation=flip', () => {
        let expected = [
            '              ┌───────────────┬───────────────────────────────┐',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              └───────────────┤                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              └───────────────┬───────────────┤',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              └───────────────┘',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new VTree().create(4, { step: 1, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 rotation=flip', () => {
        let expected = [
            '      ┌───────┬───────────────┬───────────────────────────────┐',
            '      │       │               │                               │',
            '      │       │               │                               │',
            '      │       │               │                               │',
            '      └───────┤               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              │               │                               │',
            '              └───────┬───────┤                               │',
            '                      │       │                               │',
            '                      │       │                               │',
            '                      │       │                               │',
            '                      └───────┤                               │',
            '                              │                               │',
            '                              │                               │',
            '                              │                               │',
            '                              └───────┬───────┬───────────────┤',
            '                                      │       │               │',
            '                                      │       │               │',
            '                                      │       │               │',
            '                                      └───────┤               │',
            '                                              │               │',
            '                                              │               │',
            '                                              │               │',
            '                                              └───────┬───────┤',
            '                                                      │       │',
            '                                                      │       │',
            '                                                      │       │',
            '                                                      └───────┘',
            '                                                               ',
            '                                                               ',
            '                                                               ',
        ];

        let result = new VTree().create(4, { step: 2, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 rotation=flip', () => {
        let expected = [
            '  ┌───┬───────┬───────────────┬───────────────────────────────┐',
            '  │   │       │               │                               │',
            '  └───┤       │               │                               │',
            '      │       │               │                               │',
            '      └───┬───┤               │                               │',
            '          │   │               │                               │',
            '          └───┤               │                               │',
            '              │               │                               │',
            '              └───┬───┬───────┤                               │',
            '                  │   │       │                               │',
            '                  └───┤       │                               │',
            '                      │       │                               │',
            '                      └───┬───┤                               │',
            '                          │   │                               │',
            '                          └───┤                               │',
            '                              │                               │',
            '                              └───┬───┬───────┬───────────────┤',
            '                                  │   │       │               │',
            '                                  └───┤       │               │',
            '                                      │       │               │',
            '                                      └───┬───┤               │',
            '                                          │   │               │',
            '                                          └───┤               │',
            '                                              │               │',
            '                                              └───┬───┬───────┤',
            '                                                  │   │       │',
            '                                                  └───┤       │',
            '                                                      │       │',
            '                                                      └───┬───┤',
            '                                                          │   │',
            '                                                          └───┘',
            '                                                               ',
        ];

        let result = new VTree().create(4, { step: 3, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 rotation=flip', () => {
        let expected = [
            '┌─┬───┬───────┬───────────────┬───────────────────────────────┐',
            '└─┤   │       │               │                               │',
            '  └─┬─┤       │               │                               │',
            '    └─┤       │               │                               │',
            '      └─┬─┬───┤               │                               │',
            '        └─┤   │               │                               │',
            '          └─┬─┤               │                               │',
            '            └─┤               │                               │',
            '              └─┬─┬───┬───────┤                               │',
            '                └─┤   │       │                               │',
            '                  └─┬─┤       │                               │',
            '                    └─┤       │                               │',
            '                      └─┬─┬───┤                               │',
            '                        └─┤   │                               │',
            '                          └─┬─┤                               │',
            '                            └─┤                               │',
            '                              └─┬─┬───┬───────┬───────────────┤',
            '                                └─┤   │       │               │',
            '                                  └─┬─┤       │               │',
            '                                    └─┤       │               │',
            '                                      └─┬─┬───┤               │',
            '                                        └─┤   │               │',
            '                                          └─┬─┤               │',
            '                                            └─┤               │',
            '                                              └─┬─┬───┬───────┤',
            '                                                └─┤   │       │',
            '                                                  └─┬─┤       │',
            '                                                    └─┤       │',
            '                                                      └─┬─┬───┤',
            '                                                        └─┤   │',
            '                                                          └─┬─┤',
            '                                                            └─┘',
        ];

        let result = new VTree().create(4, { step: 4, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 mode=blocks', () => {
        let expected = [
            '██',
        ];

        let result = new VTree().create(0, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 mode=blocks', () => {
        let expected = [
            '██    ',
            '████  ',
            '██████',
        ];

        let result = new VTree().create(1, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 mode=blocks', () => {
        let expected = [
            '██            ',
            '████          ',
            '██████        ',
            '████████      ',
            '██████████    ',
            '████████████  ',
            '██████████████',
        ];

        let result = new VTree().create(2, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 mode=blocks', () => {
        let expected = [
            '██                            ',
            '████                          ',
            '██████                        ',
            '████████                      ',
            '██████████                    ',
            '████████████                  ',
            '██████████████                ',
            '████████████████              ',
            '██████████████████            ',
            '████████████████████          ',
            '██████████████████████        ',
            '████████████████████████      ',
            '██████████████████████████    ',
            '████████████████████████████  ',
            '██████████████████████████████',
        ];

        let result = new VTree().create(3, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 mode=blocks', () => {
        let expected = [
            '██                                                            ',
            '████                                                          ',
            '██████                                                        ',
            '████████                                                      ',
            '██████████                                                    ',
            '████████████                                                  ',
            '██████████████                                                ',
            '████████████████                                              ',
            '██████████████████                                            ',
            '████████████████████                                          ',
            '██████████████████████                                        ',
            '████████████████████████                                      ',
            '██████████████████████████                                    ',
            '████████████████████████████                                  ',
            '██████████████████████████████                                ',
            '████████████████████████████████                              ',
            '██████████████████████████████████                            ',
            '████████████████████████████████████                          ',
            '██████████████████████████████████████                        ',
            '████████████████████████████████████████                      ',
            '██████████████████████████████████████████                    ',
            '████████████████████████████████████████████                  ',
            '██████████████████████████████████████████████                ',
            '████████████████████████████████████████████████              ',
            '██████████████████████████████████████████████████            ',
            '████████████████████████████████████████████████████          ',
            '██████████████████████████████████████████████████████        ',
            '████████████████████████████████████████████████████████      ',
            '██████████████████████████████████████████████████████████    ',
            '████████████████████████████████████████████████████████████  ',
            '██████████████████████████████████████████████████████████████',
        ];

        let result = new VTree().create(4, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 mode=blocks', () => {
        let expected = [
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
        ];

        let result = new VTree().create(4, { step: 0, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 mode=blocks', () => {
        let expected = [
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
        ];

        let result = new VTree().create(4, { step: 1, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 mode=blocks', () => {
        let expected = [
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '████████                                                      ',
            '████████                                                      ',
            '████████                                                      ',
            '████████                                                      ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
        ];

        let result = new VTree().create(4, { step: 2, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 mode=blocks', () => {
        let expected = [
            '                                                              ',
            '████                                                          ',
            '████                                                          ',
            '████████                                                      ',
            '████████                                                      ',
            '████████████                                                  ',
            '████████████                                                  ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████████                                          ',
            '████████████████████                                          ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████████████████                                  ',
            '████████████████████████████                                  ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████████                          ',
            '████████████████████████████████████                          ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████████                  ',
            '████████████████████████████████████████████                  ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████████          ',
            '████████████████████████████████████████████████████          ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████████  ',
            '████████████████████████████████████████████████████████████  ',
        ];

        let result = new VTree().create(4, { step: 3, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 mode=blocks', () => {
        let expected = [
            '██                                                            ',
            '████                                                          ',
            '██████                                                        ',
            '████████                                                      ',
            '██████████                                                    ',
            '████████████                                                  ',
            '██████████████                                                ',
            '████████████████                                              ',
            '██████████████████                                            ',
            '████████████████████                                          ',
            '██████████████████████                                        ',
            '████████████████████████                                      ',
            '██████████████████████████                                    ',
            '████████████████████████████                                  ',
            '██████████████████████████████                                ',
            '████████████████████████████████                              ',
            '██████████████████████████████████                            ',
            '████████████████████████████████████                          ',
            '██████████████████████████████████████                        ',
            '████████████████████████████████████████                      ',
            '██████████████████████████████████████████                    ',
            '████████████████████████████████████████████                  ',
            '██████████████████████████████████████████████                ',
            '████████████████████████████████████████████████              ',
            '██████████████████████████████████████████████████            ',
            '████████████████████████████████████████████████████          ',
            '██████████████████████████████████████████████████████        ',
            '████████████████████████████████████████████████████████      ',
            '██████████████████████████████████████████████████████████    ',
            '████████████████████████████████████████████████████████████  ',
            '██████████████████████████████████████████████████████████████',
        ];

        let result = new VTree().create(4, { step: 4, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 mode=blocks rotation=left', () => {
        let expected = [
            '██',
        ];

        let result = new VTree().create(0, { mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 mode=blocks rotation=left', () => {
        let expected = [
            '    ██',
            '  ████',
            '██████',
        ];

        let result = new VTree().create(1, { mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 mode=blocks rotation=left', () => {
        let expected = [
            '            ██',
            '          ████',
            '        ██████',
            '      ████████',
            '    ██████████',
            '  ████████████',
            '██████████████',
        ];

        let result = new VTree().create(2, { mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 mode=blocks rotation=left', () => {
        let expected = [
            '                            ██',
            '                          ████',
            '                        ██████',
            '                      ████████',
            '                    ██████████',
            '                  ████████████',
            '                ██████████████',
            '              ████████████████',
            '            ██████████████████',
            '          ████████████████████',
            '        ██████████████████████',
            '      ████████████████████████',
            '    ██████████████████████████',
            '  ████████████████████████████',
            '██████████████████████████████',
        ];

        let result = new VTree().create(3, { mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 mode=blocks rotation=left', () => {
        let expected = [
            '                                                            ██',
            '                                                          ████',
            '                                                        ██████',
            '                                                      ████████',
            '                                                    ██████████',
            '                                                  ████████████',
            '                                                ██████████████',
            '                                              ████████████████',
            '                                            ██████████████████',
            '                                          ████████████████████',
            '                                        ██████████████████████',
            '                                      ████████████████████████',
            '                                    ██████████████████████████',
            '                                  ████████████████████████████',
            '                                ██████████████████████████████',
            '                              ████████████████████████████████',
            '                            ██████████████████████████████████',
            '                          ████████████████████████████████████',
            '                        ██████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                    ██████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '                ██████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '            ██████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '        ██████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '    ██████████████████████████████████████████████████████████',
            '  ████████████████████████████████████████████████████████████',
            '██████████████████████████████████████████████████████████████',
        ];

        let result = new VTree().create(4, { mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 mode=blocks rotation=left', () => {
        let expected = [
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
        ];

        let result = new VTree().create(4, { step: 0, mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 mode=blocks rotation=left', () => {
        let expected = [
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
        ];

        let result = new VTree().create(4, { step: 1, mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 mode=blocks rotation=left', () => {
        let expected = [
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                      ████████',
            '                                                      ████████',
            '                                                      ████████',
            '                                                      ████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
        ];

        let result = new VTree().create(4, { step: 2, mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 mode=blocks rotation=left', () => {
        let expected = [
            '                                                              ',
            '                                                          ████',
            '                                                          ████',
            '                                                      ████████',
            '                                                      ████████',
            '                                                  ████████████',
            '                                                  ████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                          ████████████████████',
            '                                          ████████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                                  ████████████████████████████',
            '                                  ████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                          ████████████████████████████████████',
            '                          ████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '  ████████████████████████████████████████████████████████████',
            '  ████████████████████████████████████████████████████████████',
        ];

        let result = new VTree().create(4, { step: 3, mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 mode=blocks rotation=left', () => {
        let expected = [
            '                                                            ██',
            '                                                          ████',
            '                                                        ██████',
            '                                                      ████████',
            '                                                    ██████████',
            '                                                  ████████████',
            '                                                ██████████████',
            '                                              ████████████████',
            '                                            ██████████████████',
            '                                          ████████████████████',
            '                                        ██████████████████████',
            '                                      ████████████████████████',
            '                                    ██████████████████████████',
            '                                  ████████████████████████████',
            '                                ██████████████████████████████',
            '                              ████████████████████████████████',
            '                            ██████████████████████████████████',
            '                          ████████████████████████████████████',
            '                        ██████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                    ██████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '                ██████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '            ██████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '        ██████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '    ██████████████████████████████████████████████████████████',
            '  ████████████████████████████████████████████████████████████',
            '██████████████████████████████████████████████████████████████',
        ];

        let result = new VTree().create(4, { step: 4, mode: 'blocks', rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 mode=blocks rotation=right', () => {
        let expected = [
            '██',
        ];

        let result = new VTree().create(0, { mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 mode=blocks rotation=right', () => {
        let expected = [
            '██████',
            '████  ',
            '██    ',
        ];

        let result = new VTree().create(1, { mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 mode=blocks rotation=right', () => {
        let expected = [
            '██████████████',
            '████████████  ',
            '██████████    ',
            '████████      ',
            '██████        ',
            '████          ',
            '██            ',
        ];

        let result = new VTree().create(2, { mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 mode=blocks rotation=right', () => {
        let expected = [
            '██████████████████████████████',
            '████████████████████████████  ',
            '██████████████████████████    ',
            '████████████████████████      ',
            '██████████████████████        ',
            '████████████████████          ',
            '██████████████████            ',
            '████████████████              ',
            '██████████████                ',
            '████████████                  ',
            '██████████                    ',
            '████████                      ',
            '██████                        ',
            '████                          ',
            '██                            ',
        ];

        let result = new VTree().create(3, { mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 mode=blocks rotation=right', () => {
        let expected = [
            '██████████████████████████████████████████████████████████████',
            '████████████████████████████████████████████████████████████  ',
            '██████████████████████████████████████████████████████████    ',
            '████████████████████████████████████████████████████████      ',
            '██████████████████████████████████████████████████████        ',
            '████████████████████████████████████████████████████          ',
            '██████████████████████████████████████████████████            ',
            '████████████████████████████████████████████████              ',
            '██████████████████████████████████████████████                ',
            '████████████████████████████████████████████                  ',
            '██████████████████████████████████████████                    ',
            '████████████████████████████████████████                      ',
            '██████████████████████████████████████                        ',
            '████████████████████████████████████                          ',
            '██████████████████████████████████                            ',
            '████████████████████████████████                              ',
            '██████████████████████████████                                ',
            '████████████████████████████                                  ',
            '██████████████████████████                                    ',
            '████████████████████████                                      ',
            '██████████████████████                                        ',
            '████████████████████                                          ',
            '██████████████████                                            ',
            '████████████████                                              ',
            '██████████████                                                ',
            '████████████                                                  ',
            '██████████                                                    ',
            '████████                                                      ',
            '██████                                                        ',
            '████                                                          ',
            '██                                                            ',
        ];

        let result = new VTree().create(4, { mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 mode=blocks rotation=right', () => {
        let expected = [
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 0, mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 mode=blocks rotation=right', () => {
        let expected = [
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 1, mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 mode=blocks rotation=right', () => {
        let expected = [
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████                                                      ',
            '████████                                                      ',
            '████████                                                      ',
            '████████                                                      ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 2, mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 mode=blocks rotation=right', () => {
        let expected = [
            '████████████████████████████████████████████████████████████  ',
            '████████████████████████████████████████████████████████████  ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████████      ',
            '████████████████████████████████████████████████████          ',
            '████████████████████████████████████████████████████          ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████████              ',
            '████████████████████████████████████████████                  ',
            '████████████████████████████████████████████                  ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████████                      ',
            '████████████████████████████████████                          ',
            '████████████████████████████████████                          ',
            '████████████████████████████████                              ',
            '████████████████████████████████                              ',
            '████████████████████████████                                  ',
            '████████████████████████████                                  ',
            '████████████████████████                                      ',
            '████████████████████████                                      ',
            '████████████████████                                          ',
            '████████████████████                                          ',
            '████████████████                                              ',
            '████████████████                                              ',
            '████████████                                                  ',
            '████████████                                                  ',
            '████████                                                      ',
            '████████                                                      ',
            '████                                                          ',
            '████                                                          ',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 3, mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 mode=blocks rotation=right', () => {
        let expected = [
            '██████████████████████████████████████████████████████████████',
            '████████████████████████████████████████████████████████████  ',
            '██████████████████████████████████████████████████████████    ',
            '████████████████████████████████████████████████████████      ',
            '██████████████████████████████████████████████████████        ',
            '████████████████████████████████████████████████████          ',
            '██████████████████████████████████████████████████            ',
            '████████████████████████████████████████████████              ',
            '██████████████████████████████████████████████                ',
            '████████████████████████████████████████████                  ',
            '██████████████████████████████████████████                    ',
            '████████████████████████████████████████                      ',
            '██████████████████████████████████████                        ',
            '████████████████████████████████████                          ',
            '██████████████████████████████████                            ',
            '████████████████████████████████                              ',
            '██████████████████████████████                                ',
            '████████████████████████████                                  ',
            '██████████████████████████                                    ',
            '████████████████████████                                      ',
            '██████████████████████                                        ',
            '████████████████████                                          ',
            '██████████████████                                            ',
            '████████████████                                              ',
            '██████████████                                                ',
            '████████████                                                  ',
            '██████████                                                    ',
            '████████                                                      ',
            '██████                                                        ',
            '████                                                          ',
            '██                                                            ',
        ];

        let result = new VTree().create(4, { step: 4, mode: 'blocks', rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 mode=blocks rotation=flip', () => {
        let expected = [
            '██',
        ];

        let result = new VTree().create(0, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 mode=blocks rotation=flip', () => {
        let expected = [
            '██████',
            '  ████',
            '    ██',
        ];

        let result = new VTree().create(1, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 mode=blocks rotation=flip', () => {
        let expected = [
            '██████████████',
            '  ████████████',
            '    ██████████',
            '      ████████',
            '        ██████',
            '          ████',
            '            ██',
        ];

        let result = new VTree().create(2, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 mode=blocks rotation=flip', () => {
        let expected = [
            '██████████████████████████████',
            '  ████████████████████████████',
            '    ██████████████████████████',
            '      ████████████████████████',
            '        ██████████████████████',
            '          ████████████████████',
            '            ██████████████████',
            '              ████████████████',
            '                ██████████████',
            '                  ████████████',
            '                    ██████████',
            '                      ████████',
            '                        ██████',
            '                          ████',
            '                            ██',
        ];

        let result = new VTree().create(3, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 mode=blocks rotation=flip', () => {
        let expected = [
            '██████████████████████████████████████████████████████████████',
            '  ████████████████████████████████████████████████████████████',
            '    ██████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '        ██████████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '            ██████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '                ██████████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '                    ██████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                        ██████████████████████████████████████',
            '                          ████████████████████████████████████',
            '                            ██████████████████████████████████',
            '                              ████████████████████████████████',
            '                                ██████████████████████████████',
            '                                  ████████████████████████████',
            '                                    ██████████████████████████',
            '                                      ████████████████████████',
            '                                        ██████████████████████',
            '                                          ████████████████████',
            '                                            ██████████████████',
            '                                              ████████████████',
            '                                                ██████████████',
            '                                                  ████████████',
            '                                                    ██████████',
            '                                                      ████████',
            '                                                        ██████',
            '                                                          ████',
            '                                                            ██',
        ];

        let result = new VTree().create(4, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 mode=blocks rotation=flip', () => {
        let expected = [
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 0, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 mode=blocks rotation=flip', () => {
        let expected = [
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 1, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 mode=blocks rotation=flip', () => {
        let expected = [
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                                      ████████',
            '                                                      ████████',
            '                                                      ████████',
            '                                                      ████████',
            '                                                              ',
            '                                                              ',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 2, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 mode=blocks rotation=flip', () => {
        let expected = [
            '  ████████████████████████████████████████████████████████████',
            '  ████████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                          ████████████████████████████████████',
            '                          ████████████████████████████████████',
            '                              ████████████████████████████████',
            '                              ████████████████████████████████',
            '                                  ████████████████████████████',
            '                                  ████████████████████████████',
            '                                      ████████████████████████',
            '                                      ████████████████████████',
            '                                          ████████████████████',
            '                                          ████████████████████',
            '                                              ████████████████',
            '                                              ████████████████',
            '                                                  ████████████',
            '                                                  ████████████',
            '                                                      ████████',
            '                                                      ████████',
            '                                                          ████',
            '                                                          ████',
            '                                                              ',
        ];

        let result = new VTree().create(4, { step: 3, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 mode=blocks rotation=flip', () => {
        let expected = [
            '██████████████████████████████████████████████████████████████',
            '  ████████████████████████████████████████████████████████████',
            '    ██████████████████████████████████████████████████████████',
            '      ████████████████████████████████████████████████████████',
            '        ██████████████████████████████████████████████████████',
            '          ████████████████████████████████████████████████████',
            '            ██████████████████████████████████████████████████',
            '              ████████████████████████████████████████████████',
            '                ██████████████████████████████████████████████',
            '                  ████████████████████████████████████████████',
            '                    ██████████████████████████████████████████',
            '                      ████████████████████████████████████████',
            '                        ██████████████████████████████████████',
            '                          ████████████████████████████████████',
            '                            ██████████████████████████████████',
            '                              ████████████████████████████████',
            '                                ██████████████████████████████',
            '                                  ████████████████████████████',
            '                                    ██████████████████████████',
            '                                      ████████████████████████',
            '                                        ██████████████████████',
            '                                          ████████████████████',
            '                                            ██████████████████',
            '                                              ████████████████',
            '                                                ██████████████',
            '                                                  ████████████',
            '                                                    ██████████',
            '                                                      ████████',
            '                                                        ██████',
            '                                                          ████',
            '                                                            ██',
        ];

        let result = new VTree().create(4, { step: 4, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});