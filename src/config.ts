/**
 * Configuration file for Ultimate Rent Consultant
 * 
 * For hackathon demo: You can hardcode your API key here.
 * This is simpler than using .env files for quick demos.
 */

export const config = {
  /**
   * Google Gemini API Key
   * 
   * Get your FREE API key from: https://aistudio.google.com/app/apikey
   * 
   * Instructions:
   * 1. Visit https://aistudio.google.com/app/apikey
   * 2. Sign in with your Google account
   * 3. Click "Create API Key"
   * 4. Copy the key and paste it below
   * 
   * Example: 'AIzaSyD...' (starts with AIza)
   */
  GOOGLE_GEMINI_API_KEY: 'AIzaSyD_UDWCBtnuNK5PffxQSnrgIpyzLQmwmJ4', // Paste your API key here between the quotes
  
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
  return config.GOOGLE_GEMINI_API_KEY.trim().length > 0;
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

