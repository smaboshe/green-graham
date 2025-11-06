export const GET = async ({request}) => {
  const env = {
    hasRuntime: typeof globalThis != 'undefined' && !!globalThis.process,
    globalThisKeys: Object.keys(globalThis).filter(key =>
      key.includes('ENV') || key.includes('env') || key.includes('TEST') || key.includes('PUBLIC')
    ),
    cloudflareEnv: globalThis.process?.env ? Object.keys(globalThis.process.env) : 'no process.env',
    importMetaEnv: Object.keys(import.meta.env)
  };

  return new Response(JSON.stringify(env, null, 2), {
    headers: { 'Content-Type': 'application/json'}
  });
};
