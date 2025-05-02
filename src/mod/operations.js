const rc = require("../client.js");

const operationsExport = {
    /**
     * Copy a file from source remote to destination remote
     * @param {Object} options
     * @param {String} options.srcFs - a remote name string e.g. "drive:" for the source, "/" for local filesystem
     * @param {String} options.srcRemote - a path within that remote e.g. "file.txt" for the source
     * @param {String} options.dstFs - a remote name string e.g. "drive2:" for the destination, "/" for local filesystem
     * @param {String} options.dstRemote - a path within that remote e.g. "file2.txt" for the destination
     * @returns {Promise<{ jobid?: Number}>}
     */
    copyfile: async (options) => {
        let { data } = await rc.post("/operations/copyfile", options)
        return data;
    },

    /**
     * List files/folders in the requested location
     * @param {Object} options - List options
     * @param {String} options.fs - a remote name string e.g. "drive:"
     * @param {String} options.remote - a path within that remote e.g. "dir"
     * @param {Object} [options.opt] - a dictionary of options to control the listing (optional)
     * @param {Boolean} [options.opt.recurse] - If set recurse directories
     * @param {Boolean} [options.opt.noModTime] - If set return modification time
     * @param {Boolean} [options.opt.showEncrypted] - If set show decrypted names (Requires remote to be "crypt" type)
     * @param {Boolean} [options.opt.showOrigIDs] - If set show the IDs for each item if known
     * @param {Boolean} [options.opt.showHash] - If set return a dictionary of hashes (Slow!)
     * @param {Boolean} [options.opt.noMimeType] - If set don't show mime types
     * @param {Boolean} [options.opt.dirsOnly] - If set only show directories
     * @param {Boolean} [options.opt.filesOnly] - If set only show files
     * @param {Boolean} [options.opt.metadata] - If set return metadata of objects also
     * @param {String[]} [options.opt.hashTypes] - array of strings of hash types to show if showHash set
     * @returns {Promise<{ list: import("../types.js").lsjson_File[] }>}
     */
    list: async (options) => {
        let { data } = await rc.post("/operations/list", options)
        return data;
    }
}

module.exports = operationsExport