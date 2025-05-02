const rc = require("../client");

const syncExports = {
    /**
     * WIP
     * @param {Object} options 
     * @returns {Promise<{ jobid?: Number}>}
     */
    bisync: async (options) => {
        let { data } = await rc.post("/sync/bisync", options)
        return data;
    },

    /**
     * Copy a directory from source remote to destination remote
     * @param {Object} options
     * @param {String} options.srcFs - a remote name string e.g. "drive:src" for the source
     * @param {String} options.dstFs - a remote name string e.g. "drive:dst" for the destination
     * @param {Boolean} [options.createEmptySrcDirs] - create empty src directories on destination if set
     * @returns {Promise<{ jobid?: Number}>}
     */
    sync: async (options) => {
        let { data } = await rc.post("/sync/copy", options)
        return data;
    },

    /**
     * Move a directory from source remote to destination remote
     * @param {Object} options
     * @param {String} options.srcFs - a remote name string e.g. "drive:src" for the source
     * @param {String} options.dstFs - a remote name string e.g. "drive:dst" for the destination
     * @param {Boolean} [options.createEmptySrcDirs] - create empty src directories on destination if set
     * @param {Boolean} [options.deleteEmptySrcDirs] - delete empty src directories if set
     * @returns {Promise<{ jobid?: Number}>}
     */
    move: async (options) => {
        let { data } = await rc.post("/sync/move", options)
        return data;
    },

    /**
     * Sync a directory from source remote to destination remote
     * @param {Object} options
     * @param {String} options.srcFs - a remote name string e.g. "drive:src" for the source
     * @param {String} options.dstFs - a remote name string e.g. "drive:dst" for the destination
     * @param {Boolean} [options.createEmptySrcDirs] - create empty src directories on destination if set
     * @returns {Promise<{ jobid?: Number}>}
     */
    sync: async (options) => {
        let { data } = await rc.post("/sync/sync", options)
        return data;
    }
}

module.exports = syncExports