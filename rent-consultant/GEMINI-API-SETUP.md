# 🔑 How to Get Your FREE Google Gemini API Key

## Quick Start (2 Minutes)

### Step 1: Visit Google AI Studio
Go to: **https://aistudio.google.com/app/apikey**

### Step 2: Sign In
- Click "Sign in" with your Google account
- Any Gmail account works (no special requirements)

### Step 3: Create API Key
1. Click **"Create API Key"** button
2. Select **"Create API key in new project"** (or use existing project)
3. Copy the generated API key (starts with `AI...`)

### Step 4: Add to Your App
1. In your project root, create a file named `.env.local`
2. Add this line:
   ```
   GOOGLE_GEMINI_API_KEY=AIza...your-actual-key-here
   ```
3. Save the file

### Step 5: Restart Dev Server
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

That's it! 🎉 Your app now has real AI-powered checklist parsing!

---

## 📊 Free Tier Limits

Google Gemini's free tier is **extremely generous**:

| Feature | Free Tier |
|---------|-----------|
| **Requests per minute** | 15 |
| **Requests per day** | 1,500 |
| **Cost** | $0 (completely free) |
| **Credit card** | Not required |
| **Expiration** | No expiration |

### What This Means for Your Hackathon:
- ✅ **1,500 requests/day** = way more than you need
- ✅ **No credit card** = no risk, no billing surprises
- ✅ **15/minute** = fast enough for live demos
- ✅ **Forever free** = perfect for prototypes

---

## 🔒 Security Best Practices

### ✅ DO:
- Keep your `.env.local` file private (it's already in `.gitignore`)
- Use environment variables for API keys
- Regenerate keys if accidentally exposed

### ❌ DON'T:
- Commit `.env.local` to Git
- Share your API key publicly
- Hardcode keys in your source code

---

## 🧪 Testing Your Setup

After adding the API key and restarting:

1. Open your app: `http://localhost:3000`
2. Upload any checklist image
3. Check the terminal/console for logs:
   - ✅ Success: You'll see parsed checklist items
   - ❌ Error: Check the error message and verify your key

### Troubleshooting:

**"No GOOGLE_GEMINI_API_KEY found"**
- Make sure `.env.local` is in the project root (same folder as `package.json`)
- Verify the variable name is exactly: `GOOGLE_GEMINI_API_KEY`
- Restart the dev server after creating `.env.local`

**"Failed to parse image with Gemini"**
- Check your API key is correct (no extra spaces)
- Verify you have internet connection
- Check the free tier limits (15/min, 1,500/day)

**Still using mock data?**
- Restart the dev server (`Ctrl+C`, then `npm run dev`)
- Check the terminal for "No GOOGLE_GEMINI_API_KEY found" message
- Verify `.env.local` file exists and has the correct key

---

## 🆚 Gemini vs OpenAI Comparison

| Feature | Google Gemini | OpenAI GPT-4o |
|---------|---------------|---------------|
| **Free tier** | ✅ 1,500/day | ❌ None |
| **Credit card** | ❌ Not required | ✅ Required |
| **Cost** | $0 | ~$0.01/image |
| **Quality** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Speed** | Fast | Fast |
| **Setup time** | 2 minutes | 5 minutes |
| **Best for** | Hackathons, prototypes | Production apps |

**Verdict**: For your hackathon, Gemini is the clear winner! 🏆

---

## 📚 Additional Resources

- **Official Docs**: https://ai.google.dev/gemini-api/docs
- **API Reference**: https://ai.google.dev/api
- **Get API Key**: https://aistudio.google.com/app/apikey
- **Pricing**: https://ai.google.dev/pricing (free tier is generous!)
- **Rate Limits**: https://ai.google.dev/gemini-api/docs/quota

---

## 💡 Pro Tips for Hackathon

1. **Demo without key first**: The mock data works perfectly for initial demos
2. **Add key for wow factor**: When judges ask "does it really work?", show them real AI parsing
3. **Mention it's free**: Judges love cost-effective solutions
4. **Show the speed**: Gemini 1.5 Flash is fast (~2-3 seconds per image)
5. **Highlight the limits**: 1,500/day is enough for 1,500 users per day!

---

## 🎯 Quick Reference

```bash
# 1. Get API key
https://aistudio.google.com/app/apikey

# 2. Create .env.local file
echo "GOOGLE_GEMINI_API_KEY=your-key-here" > .env.local

# 3. Restart server
npm run dev

# 4. Test it!
# Upload a checklist image and watch the magic happen ✨
```

---

**Questions?** Check the terminal logs for detailed error messages, or refer to the [official documentation](https://ai.google.dev/gemini-api/docs).

Good luck with your hackathon! 🚀

