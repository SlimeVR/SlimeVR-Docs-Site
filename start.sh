#!/usr/bin/env bash
##############################################################################
# SlimeVR Docs - Local Development Server
##############################################################################
#
# WHY: This script automates the setup and launch of a local preview server
# for the SlimeVR documentation site. 
#
# REQUIREMENTS:
#   - Rust/Cargo (https://rustup.rs/) — used to install mdbook if missing
#   - Linux/macOS (Windows users should use start.bat instead)
#
# OUTPUT: The server runs at http://localhost:3000 and opens a browser window.
#         Changes to source files trigger automatic rebuilds and live reload.
#
##############################################################################

set -e

# Add cargo bin to PATH
export PATH="$HOME/.cargo/bin:$PATH"

echo "========================================="
echo "  SlimeVR Docs - Local Server"
echo "========================================="

# Check for cargo
if ! command -v cargo &> /dev/null; then
    echo "❌ Cargo not found. Please install Rust/Cargo:"
    echo "   https://rustup.rs/"
    exit 1
fi

# Check/install mdbook
if ! command -v mdbook &> /dev/null; then
    echo "📦 Installing mdbook..."
    cargo install mdbook --version 0.4.52
else
    echo "✅ mdbook already installed"
fi

# Check/install mdbook-admonish
if ! command -v mdbook-admonish &> /dev/null; then
    echo "📦 Installing mdbook-admonish..."
    cargo install mdbook-admonish
else
    echo "✅ mdbook-admonish already installed"
fi

# Check/install mdbook-toc (in-file table of contents)
if ! command -v mdbook-toc &> /dev/null; then
    echo "📦 Installing mdbook-toc..."
    cargo install mdbook-toc --version 0.14.2
else
    echo "✅ mdbook-toc already installed"
fi

echo ""
echo "🚀 Starting local server..."
echo "   http://localhost:3000"
echo ""

cd "$(dirname "$0")"
mdbook serve -o
