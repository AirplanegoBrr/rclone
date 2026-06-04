export interface LsJsonFile {
  Path: string;
  Name: string;
  Size: number;
  ModTime: string;
  IsDir: boolean;
  MimeType?: string;
  Hashes?: {
    md5?: string;
    sha1?: string;
  };
  Encrypted?: string;
  EncryptedPath?: string;
}
