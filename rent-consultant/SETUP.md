# Ultimate Rent Consultant - Setup Guide

## Quick Start

1. **Install dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features

✅ **Upload checklist photo** - Take a picture of your paper move-in checklist  
✅ **Auto-parse to digital** - AI extracts checklist items (or use mock data for demo)  
✅ **Edit & organize** - Rename items, add notes  
✅ **Before/after photos** - Attach move-in and move-out photos for each area  
✅ **Local storage** - All data persists in your browser (no backend needed)  
✅ **Mobile-friendly** - Fully responsive design  

## Optional: Google Gemini Integration (FREE!)

The app works **without an API key** using mock checklist data for demos.

To enable **real AI parsing** of checklist photos with Google Gemini (completely FREE):

1. Get a FREE API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - No credit card required
   - 1,500 requests/day free tier
   - Takes 2 minutes to set up

2. Create a `.env.local` file in the project root:
   ```bash
   GOOGLE_GEMINI_API_KEY=your-gemini-api-key-here
   ```

3. Restart the dev server

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Google Gemini 1.5 Flash** (optional, FREE) for checklist parsing
- **localStorage** for data persistence

## Hackathon Demo Tips

1. **Without Gemini key**: The app automatically provides 20 realistic mock checklist items when you upload any image
2. **With FREE Gemini key**: Get real AI parsing in 2 minutes from [Google AI Studio](https://aistudio.google.com/app/apikey)
3. **Mobile testing**: Open on your phone using the Network URL shown in terminal (e.g., `http://10.141.19.139:3000`)
4. **Reset demo**: Use the "Reset demo" button to clear all data and start fresh
5. **Photo tips**: Use your phone camera to take real before/after photos for the most convincing demo

## Project Structure

```
rent-consultant/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── parse-checklist/
│   │   │       └── route.ts          # API endpoint for image parsing
│   │   ├── page.tsx                  # Main UI component
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css               # Global styles
│   └── ...
├── package.json
└── README.md
```

## How It Works

1. **Upload**: User uploads a photo of their paper checklist
2. **Parse**: API route sends image to Google Gemini Vision (or returns mock data)
3. **Edit**: User can rename items, add notes, reorder
4. **Capture**: For each checklist item, user attaches move-in and move-out photos
5. **Compare**: During move-out, user can show side-by-side photos to landlord
6. **Persist**: All data saved to browser localStorage (survives page refreshes)

## Future Enhancements

- Export checklist as PDF report
- Cloud storage integration
- Lease document parsing (second feature from original plan)
- Photo comparison with AI-detected differences
- Geolocation and timestamp metadata on photos
- Multi-property support

---

Built for hackathon demo. Good luck! 🚀

