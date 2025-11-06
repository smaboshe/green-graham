import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const runtime = context.locals.runtime;

  const debugInfo = {
    runtimeEnvType: typeof runtime?.env,
    runtimeEnvKeys: runtime?.env ? Object.keys(runtime.env) : 'no runtime.env',
    directAccess: {
      PUBLIC_TEST_CILANTRO_URL: runtime?.env?.PUBLIC_TEST_CILANTRO_URL || 'not found (direct)',
      TEST_SECRET_ACCOUNT_ID: runtime?.env?.TEST_SECRET_ACCOUNT_ID || 'not found (direct)',
      TEST_SECRET_API_KEY: runtime?.env?.TEST_SECRET_API_KEY || 'not found (direct)'
    },
    bracketAccess: {
      PUBLIC_TEST_CILANTRO_URL: runtime?.env?.['PUBLIC_TEST_CILANTRO_URL'] || 'not found (bracket)',
      TEST_SECRET_ACCOUNT_ID: runtime?.env?.['TEST_SECRET_ACCOUNT_ID'] || 'not found (bracket)',
      TEST_SECRET_API_KEY: runtime?.env?.['TEST_SECRET_API_KEY'] || 'not found (bracket)'
    },
    isFunction: typeof runtime?.env === 'function' ? 'yes' : 'no'
  }

  return new Response(JSON.stringify(debugInfo, null, 2), {
    headers: { 'Content-Type': 'application/json'}
  });
};
