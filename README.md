# 🛡️ InternShield – Detect Fake Internships

<p align="center">
  <img src="logo.png" alt="InternShield Logo" width="120">
</p>

<p align="center">
  <strong>Protect yourself from internship scams before they cost you.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## 📌 About

**InternShield** is a modern web application that helps students and job seekers verify the legitimacy of internship postings. Simply paste a job description or internship link, and InternShield will instantly scan it for red flags and suspicious patterns commonly used in scam postings.

Every year, thousands of students fall victim to fake internship offers that demand registration fees, personal information, or upfront payments. InternShield empowers you to make informed decisions before committing.

---

## ✨ Features

- 🔍 **Keyword-Based Scam Detection** — Scans text for known scam phrases like "registration fee", "security deposit", "payment required", etc.
- ⚠️ **Suspicious Pattern Recognition** — Flags concerning patterns such as "urgent hiring", "no interview", "WhatsApp only", etc.
- 🟢🟡🔴 **Three-Tier Risk Assessment** — Clear visual feedback: Safe, Suspicious, or Scam.
- 🎨 **Premium Dark-Themed UI** — Glassmorphism design with smooth animations and orange accents.
- 📱 **Fully Responsive** — Looks great on desktop, tablet, and mobile devices.
- ⚡ **Instant Analysis** — No backend or API calls needed. Runs entirely in the browser.

---

## 🖥️ Demo

> Paste any internship description or social media post into the text area and click **"Check for Scams"** to instantly see the analysis results.

### Risk Levels:
| Status | Indicator | Description |
|--------|-----------|-------------|
| 🟢 Safe | Green | No common scam patterns detected |
| 🟡 Suspicious | Yellow | Some concerning patterns found — proceed with caution |
| 🔴 Scam | Red | Major red flags detected — highly likely fraudulent |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic page structure |
| **CSS3** | Glassmorphism styling, animations, responsive design |
| **Vanilla JavaScript** | Core detection logic, DOM manipulation |
| **Google Fonts (Outfit)** | Modern typography |

> No frameworks. No dependencies. Pure HTML/CSS/JS — lightweight and fast.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- No installation or build tools required

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/gayatrishete619/internsheild.git
   cd internsheild
   ```

2. **Open `index.html`** in your browser
   ```bash
   # On Windows
   start index.html

   # On macOS
   open index.html

   # On Linux
   xdg-open index.html
   ```

3. **That's it!** Start pasting internship descriptions to analyze.

---

## ⚙️ How It Works

InternShield uses a **keyword-matching engine** to detect two categories of red flags:

### 🔴 Scam Keywords (High Risk)
These phrases are almost always associated with fraudulent postings:
- `registration fee` — Legitimate companies never charge applicants
- `payment required` — You should never pay to get an internship
- `security deposit` — A classic scam extraction tactic
- `processing fee` — Companies cover their own admin costs
- `buy equipment` — Scammers ask you to buy from their "vendor"
- `bank details` — Never share before a formal contract

### 🟡 Suspicious Keywords (Medium Risk)
These patterns are often used by scammers but can occasionally appear in legitimate posts:
- `urgent hiring` — Creates artificial pressure
- `limited seats` — Scarcity tactics to rush decisions
- `immediate joining` — Used to bypass due diligence
- `whatsapp only` — Professionals use official channels
- `no interview` — Every legitimate role involves vetting
- `high salary` — Unusually high pay for minimal work

---

## 📂 Project Structure

```
internsheild/
├── index.html      # Main HTML page with semantic structure
├── style.css       # Complete styling with glassmorphism & animations
├── script.js       # Scam detection engine & DOM interaction logic
├── logo.png        # InternShield brand logo
├── .gitignore      # Git ignore rules
└── README.md       # Project documentation (you are here)
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

### Ideas for Contribution
- [ ] Add URL-based analysis (fetch and scan page content)
- [ ] Integrate ML-based text classification
- [ ] Add a browser extension version
- [ ] Support multiple languages
- [ ] Add a "Report Scam" feature with a community database

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Gayatri Shete**  
- GitHub: [@gayatrishete619](https://github.com/gayatrishete619)

---

<p align="center">
  Made with ❤️ to protect students from internship scams
</p>
