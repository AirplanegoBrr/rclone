import rc from "../client";
import type { LsJsonFile } from "../types";

export interface ListOptions {
  fs: string;
  remote: string;
  opt?: {
    recurse?: boolean;
    noModTime?: boolean;
    showEncrypted?: boolean;
    showOrigIDs?: boolean;
    showHash?: boolean;
    noMimeType?: boolean;
    dirsOnly?: boolean;
    filesOnly?: boolean;
    metadata?: boolean;
    hashTypes?: string[];
  };
}

export interface CopyFileOptions {
  srcFs: string;
  srcRemote: string;
  dstFs: string;
  dstRemote: string;
}

export interface MoveFileOptions {
  srcFs: string;
  srcRemote: string;
  dstFs: string;
  dstRemote: string;
}

export interface FsInfoResult {
  Features: Record<string, boolean | null>;
  Hashes: string[];
  Name: string;
  Precision: number;
  Root: string;
  String: string;
  MetadataInfo?: Record<string, unknown>;
}

export interface SizeResult {
  count: number;
  bytes: number;
}

export interface StatResult {
  item: LsJsonFile | null;
}

export interface PublicLinkResult {
  url: string;
}

export interface HashsumResult {
  hashsum: Array<{ Path: string; Hash: string }>;
  hashType: string;
}

export interface HashsumFileResult {
  hash: string;
  hashType: string;
}

export interface CheckOptions {
  srcFs: string;
  dstFs: string;
  download?: boolean;
  checkFileHash?: string;
  checkFileFs?: string;
  checkFileRemote?: string;
  oneWay?: boolean;
  combined?: boolean;
  missingOnSrc?: boolean;
  missingOnDst?: boolean;
  match?: boolean;
  differ?: boolean;
  error?: boolean;
}

export interface CheckResult {
  success: boolean;
  status: string;
  hashType?: string;
  combined?: string[];
  missingOnSrc?: string[];
  missingOnDst?: string[];
  match?: string[];
  differ?: string[];
  error?: string[];
}

const operations = {
  /** Returns space usage information for a remote. */
  about: async (options: { fs: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/about", options);
    return data;
  },

  /** Check if the files in the source and destination match. */
  check: async (options: CheckOptions): Promise<CheckResult> => {
    const { data } = await rc.post("/operations/check", options);
    return data;
  },

  /** Removes trashed files from the remote. */
  cleanup: async (options: { fs: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/cleanup", options);
    return data;
  },

  /** Copy a file from source remote to destination remote. */
  copyfile: async (options: CopyFileOptions): Promise<{ jobid?: number }> => {
    const { data } = await rc.post("/operations/copyfile", options);
    return data;
  },

  /** Copy the URL to a remote path. */
  copyurl: async (options: { fs: string; remote: string; url: string; autoFilename?: boolean }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/copyurl", options);
    return data;
  },

  /** Remove the contents of a remote. Unlike purge, it does not remove the directory itself. */
  delete: async (options: { fs: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/delete", options);
    return data;
  },

  /** Remove a single file from a remote. */
  deletefile: async (options: { fs: string; remote: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/deletefile", options);
    return data;
  },

  /** Returns information about a remote filesystem. */
  fsinfo: async (options: { fs: string }): Promise<FsInfoResult> => {
    const { data } = await rc.post("/operations/fsinfo", options);
    return data;
  },

  /** Generates hashsum of files in a remote. */
  hashsum: async (options: { fs: string; hashType: string; download?: boolean; base64?: boolean }): Promise<HashsumResult> => {
    const { data } = await rc.post("/operations/hashsum", options);
    return data;
  },

  /** Generates hashsum of a single file. */
  hashsumfile: async (options: { fs: string; remote: string; hashType: string; download?: boolean; base64?: boolean }): Promise<HashsumFileResult> => {
    const { data } = await rc.post("/operations/hashsumfile", options);
    return data;
  },

  /** List files/folders in the requested location. */
  list: async (options: ListOptions): Promise<{ list: LsJsonFile[] }> => {
    const { data } = await rc.post("/operations/list", options);
    return data;
  },

  /** Create a directory. */
  mkdir: async (options: { fs: string; remote: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/mkdir", options);
    return data;
  },

  /** Move a file from source remote to destination remote. */
  movefile: async (options: MoveFileOptions): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/movefile", options);
    return data;
  },

  /** Create or retrieve a public link to a file/directory. */
  publiclink: async (options: { fs: string; remote: string; unlink?: boolean; expire?: string }): Promise<PublicLinkResult> => {
    const { data } = await rc.post("/operations/publiclink", options);
    return data;
  },

  /** Remove a directory and all its contents. */
  purge: async (options: { fs: string; remote: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/purge", options);
    return data;
  },

  /** Remove an empty directory. */
  rmdir: async (options: { fs: string; remote: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/rmdir", options);
    return data;
  },

  /** Remove all empty directories under a path. */
  rmdirs: async (options: { fs: string; remote: string; leaveRoot?: boolean }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/rmdirs", options);
    return data;
  },

  /** Changes storage class/tier of a remote. */
  settier: async (options: { fs: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/settier", options);
    return data;
  },

  /** Changes storage class/tier of a single file. */
  settierfile: async (options: { fs: string; remote: string }): Promise<Record<string, unknown>> => {
    const { data } = await rc.post("/operations/settierfile", options);
    return data;
  },

  /** Returns the total number of files and total size of a path. */
  size: async (options: { fs: string }): Promise<SizeResult> => {
    const { data } = await rc.post("/operations/size", options);
    return data;
  },

  /** Returns info about a single item (file or directory). */
  stat: async (options: { fs: string; remote: string; opt?: Record<string, unknown> }): Promise<StatResult> => {
    const { data } = await rc.post("/operations/stat", options);
    return data;
  },
};

export default operations;
