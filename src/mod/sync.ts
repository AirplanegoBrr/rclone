import rc from "../client";

export interface SyncOptions {
  srcFs: string;
  dstFs: string;
  createEmptySrcDirs?: boolean;
}

export interface MoveOptions extends SyncOptions {
  deleteEmptySrcDirs?: boolean;
}

export interface BisyncOptions {
  path1: string;
  path2: string;
  dryRun?: boolean;
  resync?: boolean;
  checkAccess?: boolean;
  checkFilename?: string;
  checkSync?: string;
  createEmptySrcDirs?: boolean;
  removeEmptyDirs?: boolean;
  filtersFile?: string;
  ignoreListingChecksum?: boolean;
  resilient?: boolean;
  recover?: boolean;
  noCleanup?: boolean;
  force?: boolean;
  workdir?: string;
}

const sync = {
  /** Bidirectional sync between two paths. Uses path1/path2, not srcFs/dstFs. */
  bisync: async (options: BisyncOptions): Promise<{ jobid?: number }> => {
    const { data } = await rc.post("/sync/bisync", options);
    return data;
  },

  /** Copy a directory from source remote to destination remote. */
  copy: async (options: SyncOptions): Promise<{ jobid?: number }> => {
    const { data } = await rc.post("/sync/copy", options);
    return data;
  },

  /** Move a directory from source remote to destination remote. */
  move: async (options: MoveOptions): Promise<{ jobid?: number }> => {
    const { data } = await rc.post("/sync/move", options);
    return data;
  },

  /** Sync a directory from source remote to destination remote. */
  sync: async (options: SyncOptions): Promise<{ jobid?: number }> => {
    const { data } = await rc.post("/sync/sync", options);
    return data;
  },
};

export default sync;
