const rc = require("../client");

const coreExport = {
    /**
     * # Set the bandwidth limit.
     * - This sets the bandwidth limit to the string passed in. This should be a single bandwidth limit entry or a pair of upload:download bandwidth.
     * @param {Object} [options]
     * @param {String} [options.rate] - Upload/Download rate limit.
     * Can be either:
     * - `"1M"`: sets both upload and download to 1M
     * - `"1M:100k"`: sets upload to 1M and download to 100k
     * @returns {Promise<{ bytesPerSecond: Number, bytesPerSecondTx: Number, bytesPerSecondRx: Number, rate: String}>}
     */
    bwlimit: async (options) => {
        let { data } = await rc.post("/core/bwlimit", options)
        return data;
    },
    /**
     * # Run a rclone terminal command over rc.
     * - ***WIP***
     * @param {Object} options 
     * @returns {Promise<>}
     */
    command: async (options) => {
        let { data } = await rc.post("/core/command", options)
        return data;
    },
    /**
     * # Returns disk usage of a locally attached disk.
     * - This returns the disk usage for the local directory passed in as dir.
     * - If the directory is not passed in, it defaults to the directory pointed to by --cache-dir.
     * @param {Object} [options]
     * @param {String} [options.dir] (optional)
     * @returns {Promise<{dir: String, info: {Available: Number, Free: Number, Total: Number}}>}
     */
    du: async (options) => {
        let { data } = await rc.post("/core/du", options)
        return data;
    },
    /**
     * # Runs a garbage collection.
     * - This tells the go runtime to do a garbage collection run. It isn't necessary to call this normally, but it can be useful for debugging memory problems.
     * @returns {Promise<{}>}
     */
    gc: async () => {
        let { data } = await rc.post("/core/gc")
        return data;
    },
    /**
     * # Returns list of stats.
     * - This returns list of stats groups currently in memory.
     * - ***WIP***
     * @returns {Promise<{}>}
     */
    "grouplist": async () => {
        let { data } = await rc.post("/core/group-list")
        return data;
    },
    /**
     * # Returns the memory statistics
     * - This returns the memory statistics of the running program. What the values mean are explained in the go docs: https://golang.org/pkg/runtime/#MemStats
     * - **WIP**
     * @returns {Promise<{}>}
     */
    memstats: async () => {
        let { data } = await rc.post("/core/memstats")
        return data;
    },
    /**
     * # Obscures a string passed in.
     * - Pass a clear string and rclone will obscure it for the config file:
     * @property {Object} options
     * @property {String} clear
     * @returns {Promise<{obscured: String}>}
     */
    obscure: async (options) => {
        let { data } = await rc.post("/core/obscure",options)
        return data;
    },
    /**
     * # Return PID of current process
     * - This returns PID of current process. Useful for stopping rclone process.
     * @returns {Promise<{}>}
     */
    pid: async () => {
        let { data } = await rc.post("/core/pid")
        return data;
    },
    /**
     * # Terminates the app.
     * @property {Object} [options]
     * @property {Number} [options.exitCode] - Pass an exit code to be used for terminating the app
     * @returns {Promise<{}>}
     */
    quit: async (options) => {
        let { data } = await rc.post("/core/quit", options)
        return data;
    },
    /**
     * # Returns stats about current transfers.
     * - If group is not provided then summed up stats for all groups will be returned.
     * - ***WIP***
     * @property {Object} [options]
     * @property {String} [options.group] - name of the stats group
     * @returns {Promise<{}>}
     */
    stats: async (options) => {
        let { data } = await rc.post("/core/stats", options)
        return data;
    },
    /**
     * # Delete stats group.
     * - This deletes entire stats group.
     * - ***WIP***
     * @property {Object} options
     * @property {String} options.group - name of the stats group
     * @returns {Promise<{}>}
     */
    statsdelete: async (options) => {
        let { data } = await rc.post("/core/stats-delete",options)
        return data;
    },
    /**
     * # Reset stats.
     * - This clears counters, errors and finished transfers for all stats or specific stats group if group is provided.
     * @property {Object} options
     * @property {String} options.group - name of the stats group
     * @returns {Promise<{}>}
     */
    statsreset: async (options) => {
        let { data } = await rc.post("/core/stats-reset",options)
        return data;
    },
    /**
     * # Returns stats about completed transfers.
     * - This returns stats about completed transfers
     * - If group is not provided then completed transfers for all groups will be returned.
     * - *Note only the last 100 completed transfers are returned.*
     * @property {Object} options
     * @property {String} [options.group] - name of the stats group
     * @returns {Promise<{}>}
     */
    transferred: async (options) => {
        let { data } = await rc.post("/core/transferred", options)
        return data;
    },

    /**
     * @typedef {Object} versionInfo
     * @property {String} version - rclone version, e.g. "v1.53.0"
     * @property {Number[]} decomposed - version number as [major, minor, patch]
     * @property {Boolean} isGit - true if this was compiled from the git version
     * @property {Boolean} isBeta - true if this is a beta version
     * @property {String} os - OS in use as according to Go
     * @property {String} arch - cpu architecture in use according to Go
     * @property {String} goVersion - version of Go runtime in use
     * @property {String} linking - type of rclone executable (static or dynamic)
     * @property {String} goTags - space separated build tags or "none"
     */

    /**
     * # Shows the current version of rclone and the go runtime.
     * - This shows the current version of go and the go runtime.
     * @returns {Promise<versionInfo>}
     */
    version: async () => {
        let { data } = await rc.post("/core/version")
        return data;
    },
}

module.exports = coreExport