# 🧪 Demo QA Automation – Cypress + Cucumber + pnpm

Repository ini berisi contoh automation testing menggunakan **Cypress**, **Cucumber (Gherkin)**, dan **pnpm** sebagai package manager.  
Test scenario mencakup UI testing pada website DemoQA dan dijalankan melalui mode browser maupun headless.

---

## 📦 1. Clone Repository

```bash
git clone https://github.com/USERNAME/NAMA-REPO.git
cd NAMA-REPO

---

## 📁 2. Install pnpm (if not installed yet)
```bash
npm install -g pnpm

untuk check:
```bash
pnpm -v

## 🎯 3. Install dependencies
```bash
pnpm install

## ▶️ 4. Cara Menjalankan Test

UI Mode (membuka mode browser Cypress):
```bash
pnpm demo-qa:open

Headless Mode (jalan via CLI):
```bash
pnpm demo-qa:headless

## 🏗️ 5. Struktur Folder

```bash
project-root/
├── e2e/
├── .cypress-profile/
├── src/
│   └── cypress/
│       └── pages/
│           └── HomePage.js
├── test/
│   ├── features/
│   │   └── element.feature
│   └── steps/
│       └── element.js
├── cypress.config.js
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md

