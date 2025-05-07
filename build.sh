#!/bin/bash

# Make sure directory structure is maintained
mkdir -p public/HTML
mkdir -p public/CSS
mkdir -p public/js
mkdir -p public/Images

# Copy all files to the public directory
cp -r HTML/* public/HTML/
cp -r CSS/* public/CSS/
cp -r js/* public/js/
cp -r Images/* public/Images/
cp index.html public/
cp vercel.json public/

echo "Build completed successfully!" 