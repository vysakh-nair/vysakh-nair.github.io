#!/bin/sh
# Rebuilds assets/Vysakh-G-Nair-Resume.pdf from resume.html (its print styles are the ATS layout).
# Run after any résumé edit, with the preview server (python3 serve.py) running on 5241.
cd "$(dirname "$0")"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-first-run --no-default-browser-check --user-data-dir="${TMPDIR:-/tmp}/resume-pdf-chrome" \
  --no-pdf-header-footer --virtual-time-budget=10000 \
  --print-to-pdf=assets/Vysakh-G-Nair-Resume.pdf "http://127.0.0.1:5241/resume.html"
