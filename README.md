# rclone

Simple CJS module to interact with the rclone rc rest api!

This was made using the RC docs found [Here](https://rclone.org/rc/)

## ⚠️⚠️ VERY MUCH WIP ⚠️⚠️

Lots of endpoints don't have full JSDoc!

## Project status:

`Done ✅` = Done, full auto completion support (has full jsdoc)
`WIP ⚠️` = JSDoc are missing for inputs/outputs

### /core

| URL                  | Status    |
| -------------------- | --------- |
| `/core/bwlimit`      | Done ✅    |
| `/core/command`      | **WIP** ⚠️ |
| `/core/du`           | Done ✅    |
| `/core/gc`           | Done ✅    |
| `/core/group-list`   | **WIP** ⚠️ |
| `/core/memstats`     | **WIP** ⚠️ |
| `/core/obscure`      | Done ✅    |
| `/core/pid`          | Done ✅    |
| `/core/quit`         | Done ✅    |
| `/core/stats`        | **WIP** ⚠️ |
| `/core/stats-delete` | Done ✅    |
| `/core/stats-reset`  | Done ✅    |
| `/core/transferred`  | Done ✅    |
| `/core/version`      | Done ✅    |


### /operations

Only has 2 supported, all other options have **zero** support!

All other endpoints are not **yet** implemented

| URL                    | Status |
| ---------------------- | ------ |
| `/operations/copyfile` | Done ✅ |
| `/operations/list`     | Done ✅ |

### /sync

**This is the most complete module!** ⭐

| URL            | Status    |
| -------------- | --------- |
| `/sync/bisync` | **WIP** ⚠️ |
| `/sync/copy`   | Done ✅    |
| `/sync/move`   | Done ✅    |
| `/sync/sync`   | Done ✅    |

### Planned modules:

- [ ] `/backend`
- [ ] `/cache`
- [ ] `/config`
- [x] `/core`
- [ ] `/debug`
- [ ] `/fscache`
- [ ] `/job`
- [ ] `/mount`
- [ ] More `/operations`
- [ ] `/options`
- [ ] `/pluginsctl`
- [ ] `/rc`
- [x] `/sync`
- [ ] `/vfs`

# Example

```js
const rc = require("@airplanegobrr/rclone-api");

console.log(await rc.core.version())
/* Output:
{
  arch: "386",
  decomposed: [ 1, 69, 1 ],
  goTags: "cmount",
  goVersion: "go1.24.0",
  isBeta: false,
  isGit: false,
  linking: "static",
  os: "windows",
  version: "v1.69.1",
}
*/

console.log(await rc.operations.list({
    fs: "Files:",
    remote: "/testing",
    opt: {
        showHash: true // Slow! You've been warned.
    }
}))
/* Output:
{
  list: [
    {
        Path: "/testing/test.png",
        Name: "test.png",
        Size: 32916531,
        MimeType: "image/png",
        ModTime: "2025-05-01T13:55:09-07:00",
        IsDir: false,
        Hashes: {
            md5: "1d8d451e7101a735b7b6ea68c6d3f201",
            sha1: "00b70f68d99536bb1039c25b6034a3fd5c718367"},
        }
    }
  ],
}
*/
```

As you can see, Each API section is exposed as its own object containing the related functions.

This is meant to follow the RC docs 1:1—no weird cleanup or abstraction is applied to the inputs or outputs.

# Projects using this

[tt-downloader-v2](https://github.com/AirplaneGobrr-Trash/tt-downloader-v2) by [AirplaneGobrr](https://github.com/AirplaneGobrr)