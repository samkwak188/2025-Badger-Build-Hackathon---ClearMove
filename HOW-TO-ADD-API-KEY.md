# 🔑 How to Add Your API Key (Simple!)

## For Hackathon Demo - Hardcode Your Key

### Step 1: Get Your FREE API Key (2 minutes)
1. Go to: **https://aistudio.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key (starts with `AIza...`)

### Step 2: Add Key to Config File
1. Open the file: **`src/config.ts`**
2. Find this line:
   ```typescript
   GOOGLE_GEMINI_API_KEY: '', // Paste your API key here
   ```
3. Paste your key between the quotes:
   ```typescript
   GOOGLE_GEMINI_API_KEY: 'AIzaSyD...your-actual-key-here',
   ```
4. Save the file

### Step 3: Restart the Server
```bash
# Stop the server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

### Step 4: Test It!
1. Go to `http://localhost:3000`
2. Upload a checklist image
3. Watch the real AI parse it! ✨

---

## 🎯 Quick Example

**Before:**
```typescript
// src/config.ts
export const config = {
  GOOGLE_GEMINI_API_KEY: '', // Empty = uses mock data
```

**After:**
```typescript
// src/config.ts
export const config = {
  GOOGLE_GEMINI_API_KEY: 'AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Real key = real AI!
```

---

## 🔧 Optional: Enable Debug Logs

Want to see what's happening behind the scenes?

In `src/config.ts`, change:
```typescript
ENABLE_DEBUG_LOGS: false,  // Change to true
```

To:
```typescript
ENABLE_DEBUG_LOGS: true,   // Now you'll see detailed logs
```

Then check your terminal for logs like:
- "Sending image to Gemini API..."
- "Gemini response received: ..."

---

## ✅ How to Know It's Working

### Without API Key (Mock Data):
- Upload any image
- Get 20 standard checklist items
- Works instantly

### With API Key (Real AI):
- Upload any image
- Get items extracted from YOUR actual image
- Takes 2-3 seconds
- Check terminal for "Sending image to Gemini API..." log

---

## 🆘 Troubleshooting

### "Still seeing mock data after adding key"
1. Make sure you saved `src/config.ts`
2. Restart the dev server (Ctrl+C, then `npm run dev`)
3. Check for typos in your API key
4. Enable debug logs to see what's happening

### "Error: Failed to parse image with Gemini"
1. Check your API key is correct (no spaces)
2. Verify you have internet connection
3. Check you haven't hit rate limits (15/min, 1,500/day)
4. Try a different image

### "Can't find src/config.ts"
The file is at: `/Users/samkwak/Desktop/1. A 2025 h/rent-consultant/src/config.ts`

---

## 🎉 That's It!

No `.env` files, no environment variables, just:
1. Open `src/config.ts`
2. Paste your key
3. Save & restart
4. Done! ✨

Perfect for hackathon demos! 🚀

