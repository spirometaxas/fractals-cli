class Cache {

    constructor() {
        this.cache = {};
    }

    get(key) {
        return this.cache[key];
    }

    put(key, board) {
        this.cache[key] = board;
    }

    static createCacheKey(fractal) {
        let key = fractal.key;
        key += '_' + fractal.nStep;

        if (fractal.step !== undefined) {
            key += '_' + fractal.step;
        }

        if (fractal.mode !== undefined) {
            key += '_' + fractal.mode;
        }

        if (fractal.inverse !== undefined) {
            key += '_' + fractal.inverse;
        }

        if (fractal.rotation !== undefined) {
            key += '_' + fractal.rotation;
        }

        return key;
    }

}

module.exports = {
    Cache: Cache,
}