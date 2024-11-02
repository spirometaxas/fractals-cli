const { CantorSet } = require('../../src/fractals/cantorSet');
const { Utils } = require('../../src/utils');

describe('CantorSet Tests', () => {
    test('generate n=0', () => {
        let expected = [
            '─',
        ];

        let result = new CantorSet().create(0, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1', () => {
        let expected = [
            '───',
            '─ ─',
        ];

        let result = new CantorSet().create(1, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2', () => {
        let expected = [
            '─────────',
            '───   ───',
            '─ ─   ─ ─',
        ];

        let result = new CantorSet().create(2, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3', () => {
        let expected = [
            '───────────────────────────',
            '─────────         ─────────',
            '───   ───         ───   ───',
            '─ ─   ─ ─         ─ ─   ─ ─',
        ];

        let result = new CantorSet().create(3, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4', () => {
        let expected = [
            '─────────────────────────────────────────────────────────────────────────────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────         ─────────                           ─────────         ─────────',
            '───   ───         ───   ───                           ───   ───         ───   ───',
            '─ ─   ─ ─         ─ ─   ─ ─                           ─ ─   ─ ─         ─ ─   ─ ─',
        ];

        let result = new CantorSet().create(4, {});
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0', () => {
        let expected = [
            '─────────────────────────────────────────────────────────────────────────────────',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 0 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1', () => {
        let expected = [
            '─────────────────────────────────────────────────────────────────────────────────',
            '───────────────────────────                           ───────────────────────────',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 1 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2', () => {
        let expected = [
            '─────────────────────────────────────────────────────────────────────────────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────         ─────────                           ─────────         ─────────',
            '                                                                                 ',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 2 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3', () => {
        let expected = [
            '─────────────────────────────────────────────────────────────────────────────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────         ─────────                           ─────────         ─────────',
            '───   ───         ───   ───                           ───   ───         ───   ───',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 3 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4', () => {
        let expected = [
            '─────────────────────────────────────────────────────────────────────────────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────         ─────────                           ─────────         ─────────',
            '───   ───         ───   ───                           ───   ───         ───   ───',
            '─ ─   ─ ─         ─ ─   ─ ─                           ─ ─   ─ ─         ─ ─   ─ ─',
        ];

        let result = new CantorSet().create(4, { step: 4 });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 rotation=flip', () => {
        let expected = [
            '─',
        ];

        let result = new CantorSet().create(0, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 rotation=flip', () => {
        let expected = [
            '─ ─',
            '───',
        ];

        let result = new CantorSet().create(1, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 rotation=flip', () => {
        let expected = [
            '─ ─   ─ ─',
            '───   ───',
            '─────────',
        ];

        let result = new CantorSet().create(2, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 rotation=flip', () => {
        let expected = [
            '─ ─   ─ ─         ─ ─   ─ ─',
            '───   ───         ───   ───',
            '─────────         ─────────',
            '───────────────────────────',
        ];

        let result = new CantorSet().create(3, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 rotation=flip', () => {
        let expected = [
            '─ ─   ─ ─         ─ ─   ─ ─                           ─ ─   ─ ─         ─ ─   ─ ─',
            '───   ───         ───   ───                           ───   ───         ───   ───',
            '─────────         ─────────                           ─────────         ─────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────────────────────────────────────────────────────────────────────────────',
        ];

        let result = new CantorSet().create(4, { rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '─────────────────────────────────────────────────────────────────────────────────',
        ];

        let result = new CantorSet().create(4, { step: 0, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '───────────────────────────                           ───────────────────────────',
            '─────────────────────────────────────────────────────────────────────────────────',
        ];

        let result = new CantorSet().create(4, { step: 1, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '                                                                                 ',
            '─────────         ─────────                           ─────────         ─────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────────────────────────────────────────────────────────────────────────────',
        ];

        let result = new CantorSet().create(4, { step: 2, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '───   ───         ───   ───                           ───   ───         ───   ───',
            '─────────         ─────────                           ─────────         ─────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────────────────────────────────────────────────────────────────────────────',
        ];

        let result = new CantorSet().create(4, { step: 3, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 rotation=flip', () => {
        let expected = [
            '─ ─   ─ ─         ─ ─   ─ ─                           ─ ─   ─ ─         ─ ─   ─ ─',
            '───   ───         ───   ───                           ───   ───         ───   ───',
            '─────────         ─────────                           ─────────         ─────────',
            '───────────────────────────                           ───────────────────────────',
            '─────────────────────────────────────────────────────────────────────────────────',
        ];

        let result = new CantorSet().create(4, { step: 4, rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 mode=blocks', () => {
        let expected = [
            '█',
        ];

        let result = new CantorSet().create(0, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 mode=blocks', () => {
        let expected = [
            '███',
            '   ',
            '█ █',
        ];

        let result = new CantorSet().create(1, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 mode=blocks', () => {
        let expected = [
            '█████████',
            '         ',
            '███   ███',
            '         ',
            '█ █   █ █',
        ];

        let result = new CantorSet().create(2, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 mode=blocks', () => {
        let expected = [
            '███████████████████████████',
            '                           ',
            '█████████         █████████',
            '                           ',
            '███   ███         ███   ███',
            '                           ',
            '█ █   █ █         █ █   █ █',
        ];

        let result = new CantorSet().create(3, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 mode=blocks', () => {
        let expected = [
            '█████████████████████████████████████████████████████████████████████████████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '███   ███         ███   ███                           ███   ███         ███   ███',
            '                                                                                 ',
            '█ █   █ █         █ █   █ █                           █ █   █ █         █ █   █ █',
        ];

        let result = new CantorSet().create(4, { mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 mode=blocks', () => {
        let expected = [
            '█████████████████████████████████████████████████████████████████████████████████',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 0, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 mode=blocks', () => {
        let expected = [
            '█████████████████████████████████████████████████████████████████████████████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 1, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 mode=blocks', () => {
        let expected = [
            '█████████████████████████████████████████████████████████████████████████████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 2, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 mode=blocks', () => {
        let expected = [
            '█████████████████████████████████████████████████████████████████████████████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '███   ███         ███   ███                           ███   ███         ███   ███',
            '                                                                                 ',
            '                                                                                 ',
        ];

        let result = new CantorSet().create(4, { step: 3, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 mode=blocks', () => {
        let expected = [
            '█████████████████████████████████████████████████████████████████████████████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '███   ███         ███   ███                           ███   ███         ███   ███',
            '                                                                                 ',
            '█ █   █ █         █ █   █ █                           █ █   █ █         █ █   █ █',
        ];

        let result = new CantorSet().create(4, { step: 4, mode: 'blocks' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=0 mode=blocks rotation=flip', () => {
        let expected = [
            '█',
        ];

        let result = new CantorSet().create(0, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=1 mode=blocks rotation=flip', () => {
        let expected = [
            '█ █',
            '   ',
            '███',
        ];

        let result = new CantorSet().create(1, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=2 mode=blocks rotation=flip', () => {
        let expected = [
            '█ █   █ █',
            '         ',
            '███   ███',
            '         ',
            '█████████',
        ];

        let result = new CantorSet().create(2, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=3 mode=blocks rotation=flip', () => {
        let expected = [
            '█ █   █ █         █ █   █ █',
            '                           ',
            '███   ███         ███   ███',
            '                           ',
            '█████████         █████████',
            '                           ',
            '███████████████████████████',
        ];

        let result = new CantorSet().create(3, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 mode=blocks rotation=flip', () => {
        let expected = [
            '█ █   █ █         █ █   █ █                           █ █   █ █         █ █   █ █',
            '                                                                                 ',
            '███   ███         ███   ███                           ███   ███         ███   ███',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████████████████████████████████████████████████████████████████████████████',
        ];

        let result = new CantorSet().create(4, { mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=0 mode=blocks rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '█████████████████████████████████████████████████████████████████████████████████',
        ];

        let result = new CantorSet().create(4, { step: 0, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=1 mode=blocks rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████████████████████████████████████████████████████████████████████████████',
        ];

        let result = new CantorSet().create(4, { step: 1, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=2 mode=blocks rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████████████████████████████████████████████████████████████████████████████',
        ];

        let result = new CantorSet().create(4, { step: 2, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=3 mode=blocks rotation=flip', () => {
        let expected = [
            '                                                                                 ',
            '                                                                                 ',
            '███   ███         ███   ███                           ███   ███         ███   ███',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████████████████████████████████████████████████████████████████████████████',
        ];

        let result = new CantorSet().create(4, { step: 3, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });


    test('generate n=4 step=4 mode=blocks rotation=flip', () => {
        let expected = [
            '█ █   █ █         █ █   █ █                           █ █   █ █         █ █   █ █',
            '                                                                                 ',
            '███   ███         ███   ███                           ███   ███         ███   ███',
            '                                                                                 ',
            '█████████         █████████                           █████████         █████████',
            '                                                                                 ',
            '███████████████████████████                           ███████████████████████████',
            '                                                                                 ',
            '█████████████████████████████████████████████████████████████████████████████████',
        ];

        let result = new CantorSet().create(4, { step: 4, mode: 'blocks', rotation: 'flip' });
        expect(Utils.drawForTest(result)).toStrictEqual(expected);
    });
});