const requiredEnvVars = ['HYGRAPH_ENDPOINT'] as const

type RequiredEnvVars = typeof requiredEnvVars[number]

function validateEnv(): Record<RequiredEnvVars, string> {
  const missing: string[] = []

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar)
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      `Please check your .env.local file and ensure all required variables are set.`
    )
  }

  return {
    HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT!,
  }
}

export const env = validateEnv()
