# 📰 AI Summary for Articles - Chrome Extension

> **Transform your reading experience with AI-powered article summarization. Read smarter, not harder.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=google-chrome)](https://chrome.google.com/)
[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-brightgreen)]()

---

## ✨ Overview

**AI Summary for Articles** is a powerful Chrome extension that leverages Google's cutting-edge **Gemini 2.0 Flash AI** to instantly summarize any article on the web. Whether you're browsing news, blog posts, or research papers, get the key insights in seconds without losing critical information.

Save time. Stay informed. Read smarter.

---

## 🚀 Key Features

- **⚡ Instant Summaries** - Get article summaries in milliseconds
- **🎯 3 Summary Styles**:
  - **Brief** - 2-3 sentence TL;DR
  - **Detailed** - Comprehensive overview with all key points
  - **Bullet Points** - 5-7 actionable insights
- **📋 One-Click Copy** - Instantly copy summaries to your clipboard
- **🌐 Universal Compatibility** - Works on any webpage with article content
- **🔐 Privacy First** - Your data stays private, API key stored locally
- **💰 100% Free** - Powered by Google's free Gemini API tier
- **🔓 Open Source** - Full transparency, community-driven development

---

## 📦 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/SaiRaviCharan/AI-Summarizer-Chrome-Extension.git
cd AI-Summarizer-Chrome-Extension
```

### Step 2: Get Your Free Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click **"Create API Key"**
3. Copy your generated API key
4. Keep it safe (don't share it publicly)

### Step 3: Load Extension in Chrome
1. Open Chrome and navigate to `chrome://extensions`
2. Enable **Developer Mode** (toggle in the top-right corner)
3. Click **"Load unpacked"**
4. Select the cloned project folder
5. The extension will automatically open the options page
6. **Paste your Gemini API key** and click **"Save Settings"**
7. ✅ Extension is now active!

### Step 4: Start Summarizing
1. Open any article webpage
2. Click the **AI Summary extension icon** in your toolbar
3. Select your preferred summary style:
   - 📝 Brief Summary
   - 📚 Detailed Summary
   - 🎯 Bullet Points
4. Click **"Summarize This Page"**
5. Your AI-powered summary appears instantly!
6. Use **"Copy Summary"** to save it to clipboard

---

## 🏗️ Architecture

```
├── manifest.json          # Extension configuration (Manifest V3)
├── background.js          # Service worker - manages lifecycle
├── content.js             # Injects into pages, extracts article text
├── popup.html/js          # UI for summary generation & display
├── options.html/js        # Settings page for API key management
└── icon.png              # Extension icon
```

### Technical Stack

| Component | Details |
|-----------|---------|
| **Framework** | Chrome Extension Manifest V3 |
| **AI Engine** | Google Generative Language API (Gemini 2.0 Flash) |
| **Storage** | Chrome Sync Storage (Encrypted) |
| **Language** | Vanilla JavaScript (No dependencies) |
| **API Version** | v1 (Stable) |

---

## 🔒 Privacy & Security

✅ **Your data is YOUR data:**
- API keys are stored **locally** in your Chrome profile
- **Never transmitted** to our servers
- Article text is only sent to Google's Gemini API when **you explicitly request** a summary
- No tracking, no telemetry, no third-party services
- Open source - inspect the code yourself

---

## 💡 Use Cases

- 📰 **News & Journalism** - Quickly understand breaking news stories
- 📚 **Research** - Summarize academic papers and long articles
- 💼 **Professional** - Extract key points from business articles
- 🌍 **Multiple Languages** - Works with articles in any language
- 🧠 **Learning** - Supplement your reading with AI-generated summaries

---

## 🛠️ Advanced Configuration

### Adjust Summary Length
Edit the `maxLength` parameter in `popup.js` (line 56):
```javascript
const maxLength = 20000; // Adjust based on your needs
```

### Customize Summary Prompts
Modify the prompt templates in the `getGeminiSummary()` function to fine-tune results for your use case.

---

## 🤝 Contributing

We ❤️ contributions! Whether it's bug fixes, features, or documentation improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## ❓ Support & Questions

Have questions or encountered issues? We're here to help!

📧 **Email:** [sairavicharan.n@gmail.com](mailto:sairavicharan.n@gmail.com)

Please include:
- Steps to reproduce the issue
- Browser version
- Website where the issue occurred

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

**You are free to:**
- ✅ Use commercially
- ✅ Modify and distribute
- ✅ Use privately
- ✅ Use for any purpose

**You must:**
- ⚠️ Include the license and copyright notice

---

## 👨‍💻 About the Developer

**Sai Ravi Charan**

Building AI-powered tools to make the internet more efficient and enjoyable.

- 🔗 [GitHub](https://github.com/SaiRaviCharan)
- 📧 [Email](mailto:sairavicharan.n@gmail.com)

---

## 🌟 Show Your Support

If you find this extension helpful, please:
- ⭐ Star this repository
- 🐛 Report bugs and suggest features
- 🔗 Share with friends and colleagues
- 💬 Give feedback and reviews

---

## 🔄 Roadmap

- [ ] Batch summarization
- [ ] Export summaries to PDF
- [ ] Summary history & management
- [ ] Custom summary styles
- [ ] Chrome Web Store publishing
- [ ] Firefox extension support
- [ ] Multi-language summaries

---

<div align="center">

**Made with ❤️ by [Sai Ravi Charan](https://github.com/SaiRaviCharan)**

*Read smarter. Save time. Stay informed.* 🚀

[Report Bug](https://github.com/SaiRaviCharan/AI-Summarizer-Chrome-Extension/issues) · [Request Feature](https://github.com/SaiRaviCharan/AI-Summarizer-Chrome-Extension/issues) · [Email Support](mailto:sairavicharan.n@gmail.com)

</div>
