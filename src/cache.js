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

    static createCacheKey(fractalKey, nStep, config) {
        let key = fractalKey;
        key += '_' + nStep;

        if (config.step !== undefined) {
            key += '_' + config.step;
        }

        if (config.mode !== undefined) {
            key += '_' + config.mode;
        }

        if (config.inverse !== undefined) {
            key += '_' + config.inverse;
        }

        if (config.rotation !== undefined) {
            key += '_' + config.rotation;
        }

        return key;
    }

}

module.exports = {
    Cache: Cache,
}