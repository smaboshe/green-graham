import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const runtime = context.locals.runtime;

  const envVars = {
    runtimeEnv: runtime?.env ? Object.keys(runtime.env) : 'no runtime.env',
    globalEnv: globalThis.__env__ ? Object.keys(globalThis.__env__) :'no __env__',
    actualValues: globalThis.__env__ ? {
      PUBLIC_TEST_CILANTRO_URL: globalThis.__env__.PUBLIC_TEST_CILANTRO_URL || 'not set',
      PUBLIC_TEST_OREGANO_URL: globalThis.__env__.PUBLIC_TEST_OREGANO_URL || 'not set',
      SECRET_TEST_ACCOUNT_ID: globalThis.__env__.SECRET_TEST_ACCOUNT_ID || 'not set',
      SECRET_TEST_API_KEY: globalThis.__env__.SECRET_TEST_API_KEY || 'not set'
    } : 'no __env__ object'
  };

  return new Response(JSON.stringify(envVars, null, 2), {
    headers: { 'Content-Type': 'application/json'}
  });
};
