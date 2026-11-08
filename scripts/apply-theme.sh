#!/usr/bin/env bash
# Applies the SolarMiles V2 colour palette to every stylesheet in src/.
# Run once from the project root, e.g. in a GitHub Codespace terminal:  bash scripts/apply-theme.sh
set -euo pipefail

# Old colour → SolarMiles V2 colour (case-insensitive)
perl -pi -e '
  s/#2b3990/#232f7a/gi;   # navy (headings, primary text)
  s/#101b4d/#232f7a/gi;   # dark heading colour
  s/#5397d9/#2b6fd1/gi;   # blue accent
  s/#4c82c7/#2b6fd1/gi;   # blue accent (links, kickers)
  s/#4f93db/#2b6fd1/gi;   # gradient start
  s/#f59e0b/#ffc42e/gi;   # primary CTA yellow
  s/#dbe7f3/#e2e8f1/gi;   # card borders
  s/#b7c4e1/#e2e8f1/gi;   # card borders
  s/#b9c7e5/#e2e8f1/gi;   # card borders
  s/#d7deea/#e2e8f1/gi;   # input borders
  s/#f7fbff/#f5f8fc/gi;   # soft surface
  s/#eaf5fd/#eaf2fd/gi;   # soft blue
  s/#e8f4fd/#eaf2fd/gi;   # soft blue
  s/#1f2937/#1b2440/gi;   # body text
  s/#5b6b80/#5b6478/gi;   # muted text
  s/#78869b/#5b6478/gi;   # muted text
  s/#7890a8/#5b6478/gi;   # muted text
  s/rgba\(43,\s*57,\s*144/rgba(35, 47, 122/gi;  # navy shadows
' $(find src -name "*.css")

echo "Theme applied to $(find src -name '*.css' | wc -l) stylesheets."