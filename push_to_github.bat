@echo off
title Push Guru Kripa Dairy to GitHub
echo ===================================================
echo Pushing website files to GitHub...
echo If prompted, please authorize GitHub in the browser popup.
echo ===================================================
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo ===================================================
echo Process completed.
echo ===================================================
pause
