# E-Commerce Website 🛍️

**Simple static e-commerce website** built with plain HTML, CSS, and JavaScript. This repository contains product pages, a shopping cart, gallery, and support pages suitable for a small online shop demo or template.

---

## 🔧 Features

- Multiple product pages (`product*.html`, `sproduct*.html`) and category pages (`shop.html`, `gallery.html`).
- Shopping cart functionality (`cart.html`, `cart.js`).
- Responsive layout with `styles.css` and small-screen helper script (`miniscreen.js`).
- Popups and promotion pages (`popup.js`, `promotions.html`).
- Static assets in the `img/` folder (products, banners, gallery, etc.).

---

## 📁 Project structure (high level)

- `index.html` — Home / landing page
- `shop.html`, `product*.html` — Shop and product details
- `cart.html`, `cart.js` — Cart UI and logic
- `styles.css` — Main stylesheet
- `script.js`, `popup.js`, `miniscreen.js` — Site scripts
- `img/` — Image assets

> See the repo root for the full set of pages and assets.

---

## ▶️ How to run locally

This is a static site — you can open `index.html` directly in your browser, or serve it locally with a simple HTTP server for full-feature support (recommended):

- With Python 3:

```
cd "c:\Users\Mpume\Desktop\E-Commerce Website"
python -m http.server 8000
# then open http://localhost:8000
```

- With Node (http-server):

```
npx http-server . -p 8000
# then open http://localhost:8000
```

---

## 💡 Notes & Next steps

- This project is static — integrate a backend (API, database, authentication) to make the store production-ready.
- Consider adding tests, build tooling, and a `package.json` if you plan to use npm-based tools.

---

## 🤝 Contributing

Contributions, bug reports, and improvements are welcome — please open an issue or send a PR.

---

## 📄 License

This project currently has **no license specified**. 

---

If you'd like, I can add a `LICENSE` file, improve the README with screenshots, or add running/development scripts — tell me what you'd prefer. ✅
