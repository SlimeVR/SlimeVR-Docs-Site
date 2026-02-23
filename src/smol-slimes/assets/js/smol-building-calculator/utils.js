/**
 * Smol Building Calculator - Utilities
 * DOM helpers, formatting, and shared utilities.
 * @module utils
 */

/**
 * Dynamically create and append DOM elements.
 * @param {HTMLElement} parent - The parent element to append to.
 * @param {string} type - The type of element to create (e.g., 'td', 'tr').
 * @param {string} [contents=""] - The innerHTML for the element.
 * @returns {HTMLElement} The created element.
 */
export const makeElement = (parent, type, contents = "") => {
    const el = document.createElement(type);
    el.innerHTML = contents;
    parent.appendChild(el);
    return el;
};

/**
 * Format a number to two decimal places, removing trailing ".00" if present.
 * @param {number} value - The number to format.
 * @returns {string} The formatted string, e.g. "$18" or "$18.25".
 */
export function formatCost(value) {
    return "$" + value.toFixed(2).replace(/\.00$/, "");
}

/**
 * Get the currently selected tracker set value from the radio buttons.
 * @returns {number}
 */
export function getSelectedSet() {
    return +document.querySelector("input[name=diy-set]:checked").value;
}

/**
 * Get the selected choice index for a component's radio group.
 * @param {Array<HTMLInputElement>} radioGroup
 * @returns {number}
 */
export function getSelectedChoiceIndex(radioGroup) {
    const checkedRadio = radioGroup.find((radio) => radio.checked);
    return checkedRadio ? checkedRadio.value : 0;
}
