/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_API: string;
  readonly VITE_PROD_API: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
