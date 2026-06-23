# Croshiee Website

A responsive single-page crochet business website built with plain HTML, CSS,
JavaScript, and GSAP.

## Project structure

```text
croshiee-static/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Run the project

### Option 1: Open directly

Double-click `index.html`, or right-click it and open it in a browser.

### Option 2: Run a local server (recommended)

Open a terminal inside the `croshiee-static` folder and run:

```bash
python -m http.server 5500
```

If your computer uses `python3`, run:

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

Press `Ctrl+C` in the terminal to stop the server.

### Option 3: VS Code Live Server

1. Open the `croshiee-static` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Update the contact details

The Instagram username is currently `croshieee`.

The temporary WhatsApp number is:

```text
+1 (647) 555-0187
```

In `index.html`, replace every occurrence of:

```text
16475550187
```

with your real WhatsApp number in international format without `+`, spaces,
brackets, or hyphens.

Example:

```text
919876543210
```

The page loads GSAP, ScrollTrigger, and product photographs from the internet,
so an internet connection is required for animations and images.
