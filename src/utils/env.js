export function getEnv() {
  if (typeof globalThis != 'undefined' && globalThis.__env__) {
    return globalThis.__env__;
  }

  return import.meta.env;
}

export function envVar(key, defaultValue = 'not set') {
  const env = getEnv();
  return env[key] || defaultValue;
}
