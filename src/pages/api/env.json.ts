import type {APIRoute} from "astro";

export const GET: APIRoute = async () => {
  const envVars = {
    PUBLIC_TEST_CILANTRO_URL: import.meta.env.PUBLIC_TEST_CILANTRO_URL || "not set",
    PUBLIC_TEST_OREGANO_URL: import.meta.env.PUBLIC_TEST_OREGANO_URL || "not set",
    SECRET_TEST_ACCOUNT_ID: import.meta.env.SECRET_TEST_ACCOUNT_ID || "not set",
    SECRET_TEST_API_KEY: import.meta.env.SECRET_TEST_API_KEY || "not set"
  };

  return new Response(JSON.stringify(envVars, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
