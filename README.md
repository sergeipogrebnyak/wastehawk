# WasteHawk Static Dashboard

This is a static dashboard website for WasteHawk, a drone manufacturing simulation. It displays simulated telemetry, print queues, and warnings, styled with company branding.

## Features
- Live-updating drone telemetry and print queue (simulated)
- Visualizations: progress bars, warnings, and more
- Responsive, modern design using WasteHawk colors

## Getting Started

###  Set Up Python Virtual Environment
```
source venv/bin/activate
```

### Serve the Site Locally
#### Option A: Using the Custom Python Server (Recommended for ngrok)
```
python serve.py
```
- The site will be available at: [http://localhost:8000](http://localhost:8000)
- This server automatically sets the `ngrok-skip-browser-warning` header to avoid ngrok's warning page.


### Open the Dashboard
Open your browser and go to:
```
http://localhost:8000
```

## Exposing the Site via ngrok
1. [Download and install ngrok](https://ngrok.com/download)
2. Start your local server (see above)
3. In a new terminal, run:
```
ngrok http 8000
```
4. ngrok will provide a public URL (e.g., `https://xxxx.ngrok.io`). Share this link to allow external access.

- The custom `serve.py` server ensures visitors do not see the ngrok browser warning.


### Run chatbot CLI

```bash
python main.py
```

### Run chatbot Web app

```bash
python webapp.py
```

## Project Structure
```
assets/           # Logo and static assets
index.html        # Main dashboard page
styles.css        # Dashboard styles
app.js            # Simulated data and dashboard logic
serve.py          # Custom Python server for ngrok
README.md         # This file
```

## Customization
- Update `assets/logo.png` with your company logo.
- Edit `app.js` to change or expand simulated data.
- Modify `styles.css` for further branding.

---
© WasteHawk 