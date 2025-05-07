@echo off
echo Building Solo Leveling Fansite for Vercel deployment...

REM Make sure directory structure is maintained
mkdir public\HTML
mkdir public\CSS
mkdir public\js
mkdir public\Images

REM Copy all files to public directory
xcopy /E /I /Y HTML public\HTML
xcopy /E /I /Y CSS public\CSS
xcopy /E /I /Y js public\js
xcopy /E /I /Y Images public\Images
copy index.html public\
copy vercel.json public\

echo Build completed successfully! 