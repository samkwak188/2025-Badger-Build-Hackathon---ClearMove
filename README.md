# 🏠 Ultimate Rent Consultant

> Turn paper move-in checklists into digital evidence with AI-powered parsing and before/after photo comparison.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-1.5_Flash-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

**That's it!** The app works perfectly without any API keys using mock data.

## ✨ Features

- 📸 **Upload checklist photo** → AI extracts items automatically
- ✏️ **Edit & organize** → Customize items, add notes
- 📷 **Before/after photos** → Attach move-in and move-out photos per area
- 🔄 **Side-by-side comparison** → Show landlord proof of no damage
- 💾 **Auto-save** → All data persists in browser (localStorage)
- 📱 **Mobile-friendly** → Fully responsive design

## 🆓 Optional: FREE AI Parsing

Want **real AI-powered checklist parsing** instead of mock data?

1. Get a FREE API key (2 minutes): https://aistudio.google.com/app/apikey
2. Open `src/config.ts` and paste your key:
   ```typescript
   GOOGLE_GEMINI_API_KEY: 'your-key-here',
   ```
3. Save and restart the dev server

**Free tier**: 1,500 requests/day, no credit card required! 🎉

📖 **Step-by-step guide**: [HOW-TO-ADD-API-KEY.md](./HOW-TO-ADD-API-KEY.md)

## 📚 Documentation

- **[SETUP.md](./rent-consultant/SETUP.md)** - Full setup guide & tech stack
- **[HACKATHON-DEMO.md](./rent-consultant/HACKATHON-DEMO.md)** - Demo script & talking points
- **[GEMINI-API-SETUP.md](./rent-consultant/GEMINI-API-SETUP.md)** - Step-by-step API key guide

## 🎯 The Problem We Solve

Students and renters often **lose their security deposits** due to:
- ❌ No proof of pre-existing damage
- ❌ Missing photos with timestamps
- ❌ Messy paper checklists that get lost
- ❌ Difficulty comparing move-in vs move-out condition

## 💡 Our Solution

A mobile-first web app that:
1. Digitizes paper checklists using AI vision
2. Organizes inspection items in a clean interface
3. Captures before/after photos for each area
4. Preserves evidence with timestamps
5. Enables side-by-side comparison during move-out

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with TypeScript
- **Tailwind CSS** - Utility-first styling
- **Google Gemini 1.5 Flash** - FREE AI vision API
- **localStorage** - Client-side data persistence

## 📱 Mobile Testing

The app is fully responsive! Test on your phone:

```bash
# After running npm run dev, look for the Network URL:
# Example: http://10.141.19.139:3000

# Open that URL on your phone (same WiFi network)
```

## 🎬 Demo Flow

1. **Upload** a paper checklist photo
2. **AI extracts** all checklist items (or use mock data)
3. **Edit** items to match your needs
4. **Take photos** of each area when you move in
5. **Take photos** again when you move out
6. **Compare** side-by-side to prove no new damage

## 🔮 Future Features

- 📄 Export checklist as PDF report
- ☁️ Cloud storage integration
- 📋 Lease document parsing & analysis
- 🤖 AI-powered damage detection
- 📍 Geolocation & timestamp metadata
- 🏢 Multi-property support

## 📊 Market Opportunity

- 🎯 **Target users**: 20M+ college students in US
- 💸 **Average deposit**: $1,000-2,000
- 📉 **Deposit disputes**: 50% of renters face issues
- ⏰ **Time saved**: 2 hours of manual checklist entry

## 🤝 Contributing

This is a hackathon project! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Fork and customize for your needs

## 📄 License

MIT License - feel free to use for your own projects!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI powered by [Google Gemini](https://ai.google.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Built for hackathon. Made with ❤️ for renters everywhere.**

Questions? Check the [documentation](./rent-consultant/) or open an issue!
