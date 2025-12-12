/**
 * Smol Building Calculator - UI Rendering
 * Handles dynamic table creation, radio cards, and price updates.
 * @module ui
 */

/**
 * @typedef {import('./components-data.js').Choice} Choice
 */

/**
 * @typedef {import('./components-data.js').ComponentCategory} ComponentCategory
 */

import { makeElement, formatCost, getSelectedSet, getSelectedChoiceIndex } from "./utils.js";
import { componentCategories } from "./components-data.js";

// State management
export let trackerAmount = 6; // Default tracker count

/**
 * Update a single component row based on selected choice and tracker set.
 * @param {ComponentCategory} component
 * @param {number} set
 * @returns {number} The cost for this component.
 */
export function updateComponentRow(component, set) {
    if (component.hideFor5Set) {
        component.tr.style.visibility = set == 5 ? "hidden" : "visible";
        if (set == 5) {
            return 0;
        }
    }

    /**
     * @type {Choice}
     */
    let choice;
    if (component.choices.length == 1) {
        choice = component.choices[0];
    } else {
        const selectedIndex = getSelectedChoiceIndex(component.radioGroup);
        choice = component.choices[selectedIndex];
    }

    component.amount.innerHTML = choice.amount(set) != 0 ? choice.amount(set) : "";
    component.cost.innerHTML = choice.cost(set) != 0 ? formatCost(choice.cost(set)) : "";
    component.costAll.innerHTML = choice.costAll(set) != 0 ? formatCost(choice.costAll(set)) : "";

    component.links.innerHTML = choice.links;
    return choice.costAll(set);
}

/**
 * Update displayed prices and quantities based on selected tracker set.
 */
export const updatePrices = () => {
    trackerAmount = getSelectedSet();

    let total = 0;
    componentCategories.forEach((component) => {
        total += updateComponentRow(component, trackerAmount);
    });

    document.getElementById("diy-total-value").innerHTML = formatCost(total);
};

/**
 * Create a single radio card element for a choice.
 * @param {Object} component
 * @param {Object} choiceObj
 * @param {number} index
 * @returns {HTMLDivElement}
 */
function createRadioCard(component, choiceObj, index) {
    const card = document.createElement("div");
    card.className = "radio-card";
    card.tabIndex = 0;
    card.style.cursor = "pointer";

    // Radio input
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = component.radioName;
    radio.value = index;
    if (index === 0) radio.checked = true;
    radio.addEventListener("change", updatePrices);
    component.radioGroup.push(radio);

    // Make card clickable to select radio
    card.addEventListener("click", () => {
        radio.checked = true;
        updatePrices();
    });

    // Also allow keyboard selection
    card.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
            radio.checked = true;
            updatePrices();
            e.preventDefault();
        }
    });

    // Info container
    const info = document.createElement("div");
    info.className = "radio-card-info";

    // Name
    const nameEl = document.createElement("div");
    nameEl.className = "radio-card-name";
    nameEl.innerHTML = choiceObj.name;
    info.appendChild(nameEl);

    // Description (if present)
    if (choiceObj.description) {
        const descEl = document.createElement("div");
        descEl.className = "radio-card-desc";
        descEl.innerHTML = choiceObj.description;
        info.appendChild(descEl);
    }

    // Cost (goes last)
    const costEl = document.createElement("div");
    costEl.className = "radio-card-cost";
    const cost = choiceObj.costAll(trackerAmount);
    costEl.innerHTML = cost != 0 ? `~${formatCost(cost)}` : "";

    card.appendChild(radio);
    card.appendChild(info);
    card.appendChild(costEl);

    return card;
}

/**
 * Generate a radio group for component choices.
 * @param {Object} component
 * @param {HTMLElement} choiceCell
 */
function createRadioGroup(component, choiceCell) {
    component.radioGroup = [];
    component.radioName = "name-" + component.name;
    component.choices.forEach((choiceObj, index) => {
        choiceCell.appendChild(createRadioCard(component, choiceObj, index));
    });
}

/**
 * Create and initialize a table row for each component.
 * @param {Object} component
 * @param {HTMLElement} tbody
 */
function createComponentRow(component, tbody) {
    const tr = makeElement(tbody, "tr");
    component.tr = tr;
    makeElement(tr, "th", component.name);

    const choice = makeElement(tr, "td");
    if (component.choices.length == 1) {
        choice.innerHTML = component.choices[0].name;
    } else {
        // Add radio-card-group wrapper
        const group = document.createElement("div");
        group.className = "radio-card-group";
        choice.appendChild(group);
        createRadioGroup(component, group);
    }

    component.amount = makeElement(tr, "td");
    component.cost = makeElement(tr, "td");
    component.costAll = makeElement(tr, "td");
    component.links = makeElement(tr, "td");
}

/**
 * Initialize the calculator: build table rows and attach event listeners.
 */
export function initializeCalculator() {
    const tbody = document.getElementById("diy-components");
    componentCategories.forEach((component) => createComponentRow(component, tbody));

    updatePrices();
    document.querySelectorAll('input[name="diy-set"]').forEach((set) => set.addEventListener("change", updatePrices));
}
