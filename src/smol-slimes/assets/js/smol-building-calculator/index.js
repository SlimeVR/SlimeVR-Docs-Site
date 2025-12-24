/**
 * Smol Building Calculator - Entry Point
 * Initializes the modular calculator when the DOM is ready.
 * @module smol-building-calculator
 */

import { initializeCalculator } from './ui.js';

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCalculator);
} else {
    // DOM is already loaded
    initializeCalculator();
}
