declare namespace NodeJS {
  export interface ProcessEnv {
    /* Node Env */
    NODE_ENV: string;

    /* aws key */
    AWS_ACCESS_KEY: string;
    AWS_SECRET_ACCESS_KEY: string;

    /* table name */
    CONFIG_TABLE: string;
    CLIENT_TABLE: string;
    AUTH_TABLE: string;

    /* table pk */
    PARTITION_KEY: string;

    /* ip */
    SUPER_USER: string;

    /* crypto */
    HASH: string;
    DIGEST: string;
    SECRET_KEY: string;

    /* S3 */
    BUCKET_NAME: string;
  }
}