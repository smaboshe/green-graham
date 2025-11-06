// <reference types="astro/client">
interface ImportMetaEnv {
  readonly PUBLIC_TEST_CILANTRO_URL: string;
  readonly PUBLIC_TEST_OREGANO_URL: string;
  readonly TEST_ACCOUNT_ID: string;
  readonly TEST_SECRET_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
