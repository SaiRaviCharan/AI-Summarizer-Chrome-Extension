# AI Summary for Articles - Chrome Extension

A Chrome extension that uses Google's Gemini AI to automatically summarize articles on any webpage.

## Features

- **Quick Summaries**: Get brief, detailed, or bullet-point summaries of any article
- **Multiple Summary Styles**:
  - Brief Summary (2-3 sentences)
  - Detailed Summary (comprehensive overview)
  - Bullet Points (5-7 key insights)
- **Easy Copy**: Copy summaries to clipboard with one click
- **Works Anywhere**: Summarize articles on any website
- **Free & Open Source**: No costs, built with Google's free Gemini API

## Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/SaiRaviCharan/ai-article-summarizer.git
   ```

2. **Get a Gemini API Key** (free):
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Click "Create API Key"
   - Copy your API key

3. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions`
   - Enable **Developer Mode** (toggle in top-right)
   - Click **"Load unpacked"**
   - Select this project folder
   - The extension opens an options page for your API key
   - Paste your Gemini API key and click **"Save Settings"**

4. **Start summarizing**:
   - Open any article webpage
   - Click the extension icon in your toolbar
   - Choose a summary style from the dropdown
   - Click **"Summarize This Page"**
   - Your summary appears instantly!

## How It Works

- **Content Script** (`content.js`): Extracts article text from the current page
- **Popup UI** (`popup.html` & `popup.js`): Provides summary options and displays results
- **Background Worker** (`background.js`): Manages extension lifecycle
- **Options Page** (`options.html` & `options.js`): Stores your Gemini API key securely

## Technical Details

- **Manifest**: V3 (latest Chrome extension standard)
- **API**: Google Generative Language API (Gemini 2.0 Flash)
- **Storage**: Chrome's sync storage (encrypted)
- **Permissions**: Only reads page content when you click summarize

## Privacy

Your API key is stored locally in your Chrome profile and never shared. Article text is only sent to Google's Gemini API when you request a summary.

## Built By

[Sai Ravi Charan](https://github.com/SaiRaviCharan)

## License

MIT - Feel free to use and modify!

---

**Enjoy faster article reading!** 📖✨
