function getArticleText() {
  // Try standard article tag
  const article = document.querySelector("article");
  if (article) return article.innerText;

  // Try common content containers
  const contentSelectors = [
    "main",
    "[role='main']",
    ".article-content",
    ".post-content",
    ".entry-content",
    ".story-body",
    "[class*='content']",
    "[class*='article']"
  ];

  for (const selector of contentSelectors) {
    const element = document.querySelector(selector);
    if (element) {
      const text = element.innerText;
      if (text && text.length > 200) return text;
    }
  }

  // Fallback: collect all paragraphs
  const paragraphs = Array.from(document.querySelectorAll("p"));
  const text = paragraphs.map((p) => p.innerText).filter((t) => t.trim()).join("\n");
  
  return text || "No article text found";
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GET_ARTICLE_TEXT") {
    const text = getArticleText();
    sendResponse({ text });
  }
});
