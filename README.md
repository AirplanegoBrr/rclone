# @airplanegobrr/rclone-api

TypeScript library for interacting with the [rclone RC REST API](https://rclone.org/rc/). Publishes both ESM and CommonJS builds with full type declarations.

## Install

```sh
bun add @airplanegobrr/rclone-api
# or
npm install @airplanegobrr/rclone-api
```

## Usage

```ts
import { core, operations, sync } from "@airplanegobrr/rclone-api";

// CommonJS also works:
// const { core, operations, sync } = require("@airplanegobrr/rclone-api");

console.log(await core.version());
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
  osKernel: "...",
  osVersion: "...",
  osArch: "386",
  version: "v1.69.1",
}
*/

console.log(await operations.list({
  fs: "Files:",
  remote: "/testing",
  opt: {
    showHash: true, // Slow! You've been warned.
  },
}));
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
        sha1: "00b70f68d99536bb1039c25b6034a3fd5c718367",
      }
    }
  ],
}
*/
```

Each API section is exposed as its own named export containing the related functions, following the RC docs 1:1 — no abstraction is applied to inputs or outputs.

## Endpoint coverage

`Done ✅` = fully typed inputs and outputs  
`WIP ⚠️` = implemented, types on inputs/outputs are incomplete

### /core

| URL                  | Status     |
| -------------------- | ---------- |
| `/core/bwlimit`      | Done ✅     |
| `/core/command`      | WIP ⚠️     |
| `/core/disks`        | Done ✅     |
| `/core/du`           | Done ✅     |
| `/core/gc`           | Done ✅     |
| `/core/group-list`   | WIP ⚠️     |
| `/core/memstats`     | WIP ⚠️     |
| `/core/obscure`      | Done ✅     |
| `/core/pid`          | Done ✅     |
| `/core/quit`         | Done ✅     |
| `/core/stats`        | WIP ⚠️     |
| `/core/stats-delete` | Done ✅     |
| `/core/stats-reset`  | Done ✅     |
| `/core/transferred`  | Done ✅     |
| `/core/version`      | Done ✅     |

### /operations

| URL                          | Status  |
| ---------------------------- | ------- |
| `/operations/about`          | WIP ⚠️  |
| `/operations/check`          | Done ✅  |
| `/operations/cleanup`        | Done ✅  |
| `/operations/copyfile`       | Done ✅  |
| `/operations/copyurl`        | Done ✅  |
| `/operations/delete`         | Done ✅  |
| `/operations/deletefile`     | Done ✅  |
| `/operations/fsinfo`         | Done ✅  |
| `/operations/hashsum`        | Done ✅  |
| `/operations/hashsumfile`    | Done ✅  |
| `/operations/list`           | Done ✅  |
| `/operations/mkdir`          | Done ✅  |
| `/operations/movefile`       | Done ✅  |
| `/operations/publiclink`     | Done ✅  |
| `/operations/purge`          | Done ✅  |
| `/operations/rmdir`          | Done ✅  |
| `/operations/rmdirs`         | Done ✅  |
| `/operations/settier`        | WIP ⚠️  |
| `/operations/settierfile`    | WIP ⚠️  |
| `/operations/size`           | Done ✅  |
| `/operations/stat`           | Done ✅  |
| `/operations/uploadfile`     | —       |

> `/operations/uploadfile` requires multipart form data and is not implemented.

### /sync

| URL            | Status  |
| -------------- | ------- |
| `/sync/bisync` | Done ✅  |
| `/sync/copy`   | Done ✅  |
| `/sync/move`   | Done ✅  |
| `/sync/sync`   | Done ✅  |

> Note: `bisync` uses `path1`/`path2` parameters, not `srcFs`/`dstFs`.

### Planned modules

- [ ] `/backend`
- [ ] `/cache`
- [ ] `/config`
- [x] `/core`
- [ ] `/debug`
- [ ] `/fscache`
- [ ] `/job`
- [ ] `/mount`
- [x] `/operations`
- [ ] `/options`
- [ ] `/pluginsctl`
- [ ] `/rc`
- [x] `/sync`
- [ ] `/vfs`

## Build

```sh
bun run build      # emit dist/ (ESM + CJS + .d.ts)
bun run dev        # watch mode
bun run typecheck  # type-check without emitting
```

## Projects using this

[tt-downloader-v2](https://github.com/AirplaneGobrr-Trash/tt-downloader-v2) by [AirplaneGobrr](https://github.com/AirplaneGobrr)
