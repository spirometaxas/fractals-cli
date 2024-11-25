const { GosperCurve } = require('../../src/fractals/gosperCurve');
const { Utils } = require('../../src/utils');

describe('GosperCurve Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '__',
        ];

        let result = new GosperCurve().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            ' ____',
            '╱ __╱',
            '  ╲__',
        ];

        let result = new GosperCurve().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '     ____      ',
            '    ╱ __╱ ____ ',
            ' __ ╲ ╲__╱ __╱ ',
            '╱ ╱ ╱ ____ ╲__ ',
            '  ╲╱ ╱ __╱ __ ╲',
            '  __ ╲ ╲__╱ ╱ ╱',
            '  ╲ ╲╱ ____ ╲╱ ',
            '   ╲__╱ __╱    ',
            '        ╲__    ',
        ];

        let result = new GosperCurve().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '                   ____                 ',
            '                  ╱ __╱ ____            ',
            '               __ ╲ ╲__╱ __╱            ',
            '      ____    ╱ ╱ ╱ ____ ╲__            ',
            '     ╱ __╱ __ ╲ ╲╱ ╱ __╱ __ ╲           ',
            '  __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱ ____      ',
            ' ╱ ╱ ╱ __ ╲ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ ____ ',
            '   ╲╱ ╱ ╱ ╱ __ ╲ ╲__╱ __╱ __ ╲ ╲__╱ __╱ ',
            '   __ ╲ ╲╱ ╱ ╱ ╱ ____ ╲__╱ ╱ ╱ ____ ╲__ ',
            '   ╲ ╲╱ __ ╲ ╲╱ ╱ __╱ ____ ╲╱ ╱ __╱ __ ╲',
            '    ╲__╱ ╱ ╱ __ ╲ ╲__╱ __╱ __ ╲ ╲__╱ ╱ ╱',
            '    ____ ╲╱ ╱ ╱ ╱ ____ ╲__ ╲ ╲╱ ____ ╲╱ ',
            '   ╱ __╱ __ ╲ ╲╱ ╱ __╱ __ ╲ ╲__╱ __╱    ',
            '__ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱ ____ ╲__    ',
            '╲ ╲╱ __ ╲ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ __ ╲   ',
            ' ╲__ ╲ ╲╱ __ ╲ ╲__╱ __╱ __ ╲ ╲__ ╲ ╲╱   ',
            ' __ ╲ ╲__╱ ╱ ╱ ____ ╲__╱ ╱ ╱ __ ╲ ╲__   ',
            ' ╲ ╲╱ ____ ╲╱ ╱ __╱ ____ ╲╱ ╱ ╱ ╱ __ ╲  ',
            '  ╲__╱ __╱ __ ╲ ╲__╱ __╱ __ ╲ ╲╱ ╱ ╱ ╱  ',
            '       ╲__╱ ╱ ╱ ____ ╲__ ╲ ╲╱ __ ╲ ╲╱   ',
            '            ╲╱ ╱ __╱ __ ╲ ╲__╱ ╱ ╱      ',
            '            __ ╲ ╲__╱ ╱ ╱      ╲╱       ',
            '            ╲ ╲╱ ____ ╲╱                ',
            '             ╲__╱ __╱                   ',
            '                  ╲__                   ',
        ];

        let result = new GosperCurve().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true', () => {
        let expected = [
            '__',
        ];

        let result = new GosperCurve().create(0, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true', () => {
        let expected = [
            '____ ',
            '╲__ ╲',
            '__╱  ',
        ];

        let result = new GosperCurve().create(1, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true', () => {
        let expected = [
            '      ____     ',
            ' ____ ╲__ ╲    ',
            ' ╲__ ╲__╱ ╱ __ ',
            ' __╱ ____ ╲ ╲ ╲',
            '╱ __ ╲__ ╲ ╲╱  ',
            '╲ ╲ ╲__╱ ╱ __  ',
            ' ╲╱ ____ ╲╱ ╱  ',
            '    ╲__ ╲__╱   ',
            '    __╱        ',
        ];

        let result = new GosperCurve().create(2, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true', () => {
        let expected = [
            '                 ____                   ',
            '            ____ ╲__ ╲                  ',
            '            ╲__ ╲__╱ ╱ __               ',
            '            __╱ ____ ╲ ╲ ╲    ____      ',
            '           ╱ __ ╲__ ╲ ╲╱ ╱ __ ╲__ ╲     ',
            '      ____ ╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __  ',
            ' ____ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ ╱ __ ╲ ╲ ╲ ',
            ' ╲__ ╲__╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲ ╲ ╲ ╲╱   ',
            ' __╱ ____ ╲ ╲ ╲__╱ ____ ╲ ╲ ╲ ╲╱ ╱ __   ',
            '╱ __ ╲__ ╲ ╲╱ ____ ╲__ ╲ ╲╱ ╱ __ ╲╱ ╱   ',
            '╲ ╲ ╲__╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲ ╲ ╲__╱    ',
            ' ╲╱ ____ ╲╱ ╱ __╱ ____ ╲ ╲ ╲ ╲╱ ____    ',
            '    ╲__ ╲__╱ ╱ __ ╲__ ╲ ╲╱ ╱ __ ╲__ ╲   ',
            '    __╱ ____ ╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __',
            '   ╱ __ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ ╱ __ ╲╱ ╱',
            '   ╲╱ ╱ __╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲╱ ╱ __╱ ',
            '   __╱ ╱ __ ╲ ╲ ╲__╱ ____ ╲ ╲ ╲__╱ ╱ __ ',
            '  ╱ __ ╲ ╲ ╲ ╲╱ ____ ╲__ ╲ ╲╱ ____ ╲╱ ╱ ',
            '  ╲ ╲ ╲ ╲╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲__ ╲__╱  ',
            '   ╲╱ ╱ __ ╲╱ ╱ __╱ ____ ╲ ╲ ╲__╱       ',
            '      ╲ ╲ ╲__╱ ╱ __ ╲__ ╲ ╲╱            ',
            '       ╲╱      ╲ ╲ ╲__╱ ╱ __            ',
            '                ╲╱ ____ ╲╱ ╱            ',
            '                   ╲__ ╲__╱             ',
            '                   __╱                  ',
        ];

        let result = new GosperCurve().create(3, { inverse: true });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=left', () => {
        let expected = [
            '╲',
        ];

        let result = new GosperCurve().create(0, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=left', () => {
        let expected = [
            '__ ╲',
            '╲ ╲╱',
            ' ╲__',
        ];

        let result = new GosperCurve().create(1, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=left', () => {
        let expected = [
            '    ____      ',
            '   ╱ __╱ __ ╲ ',
            '__ ╲ ╲__ ╲ ╲╱ ',
            '╲ ╲╱ __ ╲ ╲__ ',
            ' ╲__ ╲ ╲╱ __ ╲',
            ' __ ╲ ╲__╱ ╱ ╱',
            ' ╲ ╲╱ ____ ╲╱ ',
            '  ╲__╱ __╱    ',
            '       ╲__    ',
        ];

        let result = new GosperCurve().create(2, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=left', () => {
        let expected = [
            '                   ____                 ',
            '                  ╱ __╱ ____            ',
            '               __ ╲ ╲__╱ __╱            ',
            '      ____    ╱ ╱ ╱ ____ ╲__            ',
            '     ╱ __╱ __ ╲ ╲╱ ╱ __╱ __ ╲           ',
            '  __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱ ____      ',
            '  ╲ ╲╱ __ ╲ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ __ ╲ ',
            '   ╲__ ╲ ╲╱ __ ╲ ╲__╱ __╱ __ ╲ ╲__ ╲ ╲╱ ',
            '   __ ╲ ╲__╱ ╱ ╱ ____ ╲__ ╲ ╲╱ __ ╲ ╲__ ',
            '   ╲ ╲╱ ____ ╲╱ ╱ __╱ __ ╲ ╲__ ╲ ╲╱ __ ╲',
            '    ╲__╱ __╱ __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱',
            '    ____ ╲__ ╲ ╲╱ __ ╲ ╲__ ╲ ╲╱ ____ ╲╱ ',
            '   ╱ __╱ __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ __╱    ',
            '__ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱ ____ ╲__    ',
            '╲ ╲╱ __ ╲ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ __ ╲   ',
            ' ╲__ ╲ ╲╱ __ ╲ ╲__╱ __╱ __ ╲ ╲__ ╲ ╲╱   ',
            ' __ ╲ ╲__╱ ╱ ╱ ____ ╲__╱ ╱ ╱ __ ╲ ╲__   ',
            ' ╲ ╲╱ ____ ╲╱ ╱ __╱ ____ ╲╱ ╱ ╱ ╱ __ ╲  ',
            '  ╲__╱ __╱ __ ╲ ╲__╱ __╱ __ ╲ ╲╱ ╱ ╱ ╱  ',
            '       ╲__╱ ╱ ╱ ____ ╲__ ╲ ╲╱ __ ╲ ╲╱   ',
            '            ╲╱ ╱ __╱ __ ╲ ╲__╱ ╱ ╱      ',
            '            __ ╲ ╲__╱ ╱ ╱      ╲╱       ',
            '            ╲ ╲╱ ____ ╲╱                ',
            '             ╲__╱ __╱                   ',
            '                  ╲__                   ',
        ];

        let result = new GosperCurve().create(3, { rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true rotation=left', () => {
        let expected = [
            '╲',
        ];

        let result = new GosperCurve().create(0, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=left', () => {
        let expected = [
            '╱ __ ',
            '╲ ╲ ╲',
            ' ╲╱  ',
        ];

        let result = new GosperCurve().create(1, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=left', () => {
        let expected = [
            '      ____     ',
            ' ╱ __ ╲__ ╲    ',
            ' ╲╱ ╱ __╱ ╱ __ ',
            ' __╱ ╱ __ ╲ ╲ ╲',
            '╱ __ ╲ ╲ ╲ ╲╱  ',
            '╲ ╲ ╲ ╲╱ ╱ __  ',
            ' ╲╱ ╱ __ ╲╱ ╱  ',
            '    ╲ ╲ ╲__╱   ',
            '     ╲╱        ',
        ];

        let result = new GosperCurve().create(2, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=left', () => {
        let expected = [
            '                 ____                   ',
            '            ____ ╲__ ╲                  ',
            '            ╲__ ╲__╱ ╱ __               ',
            '            __╱ ____ ╲ ╲ ╲    ____      ',
            '           ╱ __ ╲__ ╲ ╲╱ ╱ __ ╲__ ╲     ',
            '      ____ ╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __  ',
            ' ╱ __ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ ╱ __ ╲ ╲ ╲ ',
            ' ╲╱ ╱ __╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲ ╲ ╲ ╲╱   ',
            ' __╱ ╱ __ ╲╱ ╱ __╱ ____ ╲ ╲ ╲ ╲╱ ╱ __   ',
            '╱ __ ╲╱ ╱ __╱ ╱ __ ╲__ ╲ ╲╱ ╱ __ ╲╱ ╱   ',
            '╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __ ╲ ╲ ╲__╱    ',
            ' ╲╱ ____ ╲╱ ╱ __╱ ╱ __ ╲ ╲ ╲ ╲╱ ____    ',
            '    ╲__ ╲__╱ ╱ __ ╲ ╲ ╲ ╲╱ ╱ __ ╲__ ╲   ',
            '    __╱ ____ ╲ ╲ ╲ ╲╱ ╱ __ ╲╱ ╱ __╱ ╱ __',
            '   ╱ __ ╲__ ╲ ╲╱ ╱ __ ╲╱ ╱ __╱ ╱ __ ╲╱ ╱',
            '   ╲╱ ╱ __╱ ╱ __ ╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ',
            '   __╱ ╱ __ ╲ ╲ ╲ ╲╱ ____ ╲ ╲ ╲__╱ ╱ __ ',
            '  ╱ __ ╲ ╲ ╲ ╲╱ ╱ __ ╲__ ╲ ╲╱ ____ ╲╱ ╱ ',
            '  ╲ ╲ ╲ ╲╱ ╱ __ ╲╱ ╱ __╱ ╱ __ ╲__ ╲__╱  ',
            '   ╲╱ ╱ __ ╲╱ ╱ __╱ ╱ __ ╲ ╲ ╲__╱       ',
            '      ╲ ╲ ╲__╱ ╱ __ ╲ ╲ ╲ ╲╱            ',
            '       ╲╱      ╲ ╲ ╲ ╲╱ ╱ __            ',
            '                ╲╱ ╱ __ ╲╱ ╱            ',
            '                   ╲ ╲ ╲__╱             ',
            '                    ╲╱                  ',
        ];

        let result = new GosperCurve().create(3, { inverse: true, rotation: 'left' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=right', () => {
        let expected = [
            '╱',
        ];

        let result = new GosperCurve().create(0, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=right', () => {
        let expected = [
            ' __ ╲',
            '╱ ╱ ╱',
            '  ╲╱ ',
        ];

        let result = new GosperCurve().create(1, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=right', () => {
        let expected = [
            '     ____      ',
            '    ╱ __╱ __ ╲ ',
            ' __ ╲ ╲__ ╲ ╲╱ ',
            '╱ ╱ ╱ __ ╲ ╲__ ',
            '  ╲╱ ╱ ╱ ╱ __ ╲',
            '  __ ╲ ╲╱ ╱ ╱ ╱',
            '  ╲ ╲╱ __ ╲ ╲╱ ',
            '   ╲__╱ ╱ ╱    ',
            '        ╲╱     ',
        ];

        let result = new GosperCurve().create(2, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=right', () => {
        let expected = [
            '                   ____                 ',
            '                  ╱ __╱ ____            ',
            '               __ ╲ ╲__╱ __╱            ',
            '      ____    ╱ ╱ ╱ ____ ╲__            ',
            '     ╱ __╱ __ ╲ ╲╱ ╱ __╱ __ ╲           ',
            '  __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱ ____      ',
            ' ╱ ╱ ╱ __ ╲ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ __ ╲ ',
            '   ╲╱ ╱ ╱ ╱ __ ╲ ╲__╱ __╱ __ ╲ ╲__ ╲ ╲╱ ',
            '   __ ╲ ╲╱ ╱ ╱ ╱ ____ ╲__ ╲ ╲╱ __ ╲ ╲__ ',
            '   ╲ ╲╱ __ ╲ ╲╱ ╱ __╱ __ ╲ ╲__ ╲ ╲╱ __ ╲',
            '    ╲__╱ ╱ ╱ __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱',
            '    ____ ╲╱ ╱ ╱ ╱ __ ╲ ╲__ ╲ ╲╱ ____ ╲╱ ',
            '   ╱ __╱ __ ╲ ╲╱ ╱ ╱ ╱ __ ╲ ╲__╱ __╱    ',
            '__ ╲ ╲__ ╲ ╲╱ __ ╲ ╲╱ ╱ ╱ ╱ ____ ╲__    ',
            '╲ ╲╱ __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲╱ ╱ __╱ __ ╲   ',
            ' ╲__ ╲ ╲╱ __ ╲ ╲__╱ ╱ ╱ __ ╲ ╲__ ╲ ╲╱   ',
            ' __ ╲ ╲__╱ ╱ ╱ ____ ╲╱ ╱ ╱ ╱ __ ╲ ╲__   ',
            ' ╲ ╲╱ ____ ╲╱ ╱ __╱ __ ╲ ╲╱ ╱ ╱ ╱ __ ╲  ',
            '  ╲__╱ __╱ __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲╱ ╱ ╱ ╱  ',
            '       ╲__╱ ╱ ╱ __ ╲ ╲__ ╲ ╲╱ __ ╲ ╲╱   ',
            '            ╲╱ ╱ ╱ ╱ __ ╲ ╲__╱ ╱ ╱      ',
            '            __ ╲ ╲╱ ╱ ╱ ╱      ╲╱       ',
            '            ╲ ╲╱ __ ╲ ╲╱                ',
            '             ╲__╱ ╱ ╱                   ',
            '                  ╲╱                    ',
        ];

        let result = new GosperCurve().create(3, { rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 inverse=true rotation=right', () => {
        let expected = [
            '╱',
        ];

        let result = new GosperCurve().create(0, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 inverse=true rotation=right', () => {
        let expected = [
            '╱ __',
            '╲╱ ╱',
            '__╱ ',
        ];

        let result = new GosperCurve().create(1, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 inverse=true rotation=right', () => {
        let expected = [
            '      ____    ',
            ' ╱ __ ╲__ ╲   ',
            ' ╲╱ ╱ __╱ ╱ __',
            ' __╱ ╱ __ ╲╱ ╱',
            '╱ __ ╲╱ ╱ __╱ ',
            '╲ ╲ ╲__╱ ╱ __ ',
            ' ╲╱ ____ ╲╱ ╱ ',
            '    ╲__ ╲__╱  ',
            '    __╱       ',
        ];

        let result = new GosperCurve().create(2, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 inverse=true rotation=right', () => {
        let expected = [
            '                 ____                   ',
            '            ____ ╲__ ╲                  ',
            '            ╲__ ╲__╱ ╱ __               ',
            '            __╱ ____ ╲ ╲ ╲    ____      ',
            '           ╱ __ ╲__ ╲ ╲╱ ╱ __ ╲__ ╲     ',
            '      ____ ╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __  ',
            ' ╱ __ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ ╱ __ ╲╱ ╱  ',
            ' ╲╱ ╱ __╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲╱ ╱ __╱   ',
            ' __╱ ╱ __ ╲╱ ╱ __╱ ____ ╲ ╲ ╲__╱ ╱ __   ',
            '╱ __ ╲╱ ╱ __╱ ╱ __ ╲__ ╲ ╲╱ ____ ╲╱ ╱   ',
            '╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __ ╲__ ╲__╱    ',
            ' ╲╱ ____ ╲╱ ╱ __╱ ╱ __ ╲╱ ╱ __╱ ____    ',
            '    ╲__ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __ ╲__ ╲   ',
            '    __╱ ____ ╲ ╲ ╲__╱ ╱ __ ╲╱ ╱ __╱ ╱ __',
            '   ╱ __ ╲__ ╲ ╲╱ ____ ╲╱ ╱ __╱ ╱ __ ╲╱ ╱',
            '   ╲╱ ╱ __╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲╱ ╱ __╱ ',
            '   __╱ ╱ __ ╲ ╲ ╲__╱ ____ ╲ ╲ ╲__╱ ╱ __ ',
            '  ╱ __ ╲ ╲ ╲ ╲╱ ____ ╲__ ╲ ╲╱ ____ ╲╱ ╱ ',
            '  ╲ ╲ ╲ ╲╱ ╱ __ ╲__ ╲__╱ ╱ __ ╲__ ╲__╱  ',
            '   ╲╱ ╱ __ ╲╱ ╱ __╱ ____ ╲ ╲ ╲__╱       ',
            '      ╲ ╲ ╲__╱ ╱ __ ╲__ ╲ ╲╱            ',
            '       ╲╱      ╲ ╲ ╲__╱ ╱ __            ',
            '                ╲╱ ____ ╲╱ ╱            ',
            '                   ╲__ ╲__╱             ',
            '                   __╱                  ',
        ];

        let result = new GosperCurve().create(3, { inverse: true, rotation: 'right' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});