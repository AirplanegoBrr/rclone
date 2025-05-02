const rc = require("../src/index");

console.log(await rc.core.version())

console.log((await rc.operations.list({
    fs: "Files:",
    remote: "/testing",
    opt: {
        showHash: true // Slow! You've been warned.
    }
})).list[0])