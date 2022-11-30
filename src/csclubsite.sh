#!/bin/bash
echo "Starting csclubsite editing processes..."
gnome-terminal --tab --command 'python3 -m http.server'
gnome-terminal --tab --command 'npx babel --watch components --out-dir src --presets react-app/prod'