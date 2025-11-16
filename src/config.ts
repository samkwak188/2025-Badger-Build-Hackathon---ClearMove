/**
 * Configuration file for ClearMove
 *
 * IMPORTANT:
 * - Do NOT hardcode your real Gemini API key in this file.
 * - Instead, set GOOGLE_GEMINI_API_KEY in a local .env file (not committed)
 *   and in your hosting provider's environment settings (e.g. Render).
 */

export const config = {
  /**
   * Google Gemini API Key (NEVER commit the real key)
   *
   * Leave this empty in the repo. The actual key should come from:
   * - .env.local (for local development)
   * - Environment variables on your deployment platform (e.g. Render)
   */
  GOOGLE_GEMINI_API_KEY: "",
  
  /**
   * App Settings
   */
  APP_NAME: 'ClearMove',
  APP_VERSION: '1.0.0',
  
  /**
   * Feature Flags
   */
  USE_MOCK_DATA_IF_NO_KEY: true, // Set to false to require API key
  ENABLE_DEBUG_LOGS: false, // Set to true to see detailed logs
};

/**
 * Helper function to check if API key is configured
 */
export function hasGeminiApiKey(): boolean {
  if (config.GOOGLE_GEMINI_API_KEY.trim().length > 0) {
    return true;
  }
  if (
    typeof process !== "undefined" &&
    process.env?.GOOGLE_GEMINI_API_KEY &&
    process.env.GOOGLE_GEMINI_API_KEY.trim().length > 0
  ) {
    return true;
  }
  return false;
}

/**
 * Get the API key (checks both config and environment variable)
 */
export function getGeminiApiKey(): string | undefined {
  // First check hardcoded config
  if (config.GOOGLE_GEMINI_API_KEY.trim().length > 0) {
    return config.GOOGLE_GEMINI_API_KEY;
  }
  
  // Fallback to environment variable (for production)
  if (typeof process !== 'undefined' && process.env?.GOOGLE_GEMINI_API_KEY) {
    return process.env.GOOGLE_GEMINI_API_KEY;
  }
  
  return undefined;
}

