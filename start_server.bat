@echo off
title Guru Kripa Dairy Local Server
echo ===================================================
echo Starting Guru Kripa Dairy Local Server on Port 8000...
echo Open http://localhost:8000 in your web browser.
echo Press Ctrl+C in this window to stop the server.
echo ===================================================
python -m http.server 8000 --directory "%~dp0"
pause
