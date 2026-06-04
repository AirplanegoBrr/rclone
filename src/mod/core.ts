import rc from "../client";

export interface BwlimitResult {
  bytesPerSecond: number;
  bytesPerSecondTx: number;
  bytesPerSecondRx: number;
  rate: string;
}

export interface DuResult {
  dir: string;
  info: {
    Available: number;
    Free: number;
    Total: number;
  };
}

export interface VersionInfo {
  version: string;
  decomposed: number[];
  isGit: boolean;
  isBeta: boolean;
  os: string;
  osKernel: string;
  osVersion: string;
  osArch: string;
  arch: string;
  goVersion: string;
  linking: string;
  goTags: string;
}

const core = {
  /**
   * Set the bandwidth limit.
   * This sets the bandwidth limit to the string passed in. This should be a single bandwidth limit entry or a pair of upload:download bandwidth.
   * @param options.rate - e.g. `"1M"` (both) or `"1M:100k"` (upload:download)
   */
  bwlimit: async (options?: { rate?: string }): Promise<BwlimitResult> => {
    const { data } = await rc.post("/core/bwlimit", options);
    return data;
  },

  /** Run a rclone terminal command over rc. WIP. */
  command: async (options: Record<string, unknown>): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/command", options);
    return data;
  },

  /**
   * Returns disk usage of a locally attached disk.
   * Defaults to the directory pointed to by --cache-dir if dir is omitted.
   */
  du: async (options?: { dir?: string }): Promise<DuResult> => {
    const { data } = await rc.post("/core/du", options);
    return data;
  },

  /** Runs a garbage collection. */
  gc: async (): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/gc");
    return data;
  },

  /** Returns list of stats groups currently in memory. WIP. */
  grouplist: async (): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/group-list");
    return data;
  },

  /** Returns the memory statistics of the running program. WIP. */
  memstats: async (): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/memstats");
    return data;
  },

  /** Obscures a clear string for use in the rclone config file. */
  obscure: async (options: { clear: string }): Promise<{ obscured: string }> => {
    const { data } = await rc.post("/core/obscure", options);
    return data;
  },

  /** Return PID of current process. */
  pid: async (): Promise<{ pid: number }> => {
    const { data } = await rc.post("/core/pid");
    return data;
  },

  /** Terminate the rclone process. */
  quit: async (options?: { exitCode?: number }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/quit", options);
    return data;
  },

  /** Returns stats about current transfers. If group is omitted, summed stats for all groups are returned. WIP. */
  stats: async (options?: { group?: string; short?: boolean }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/stats", options);
    return data;
  },

  /** Delete an entire stats group. WIP. */
  statsdelete: async (options: { group: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/stats-delete", options);
    return data;
  },

  /** Reset stats counters, errors and finished transfers. */
  statsreset: async (options?: { group?: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/stats-reset", options);
    return data;
  },

  /** Returns stats about completed transfers (last 100). If group is omitted, all groups are returned. */
  transferred: async (options?: { group?: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/core/transferred", options);
    return data;
  },

  /** Returns names of local disks available to the rclone process. */
  disks: async (): Promise<{ disks: string[] }> => {
    const { data } = await rc.post("/core/disks");
    return data;
  },

  /** Shows the current version of rclone and the go runtime. */
  version: async (): Promise<VersionInfo> => {
    const { data } = await rc.post("/core/version");
    return data;
  },
};

export default core;
