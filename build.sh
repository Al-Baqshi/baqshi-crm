#!/bin/bash

# Hostinger Node.js Build Script
echo "Starting Astro.js build process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building Astro.js project..."
npm run build

# Copy built files to public directory
echo "Copying built files to public directory..."
cp -r dist/* public_html/

echo "Build completed successfully!"

