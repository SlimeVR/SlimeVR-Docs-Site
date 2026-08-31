import { makeElement, formatCost, getSelectedSet, getSelectedChoiceIndex } from "./utils.js";
import { componentCategories, physicalTrackerCount } from "./components-data.js";

export let trackerAmount = 6;

function sanitizeComponentName(name) {
    const stripped = name.replace(/<[^>]*>/g, '');
    return stripped.replace(/[!"#$%&'()*+,.\/:;?@[\\\]^`{|}~\s]/g, '_');
}

export function updateComponentRow(component, set) {
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

export const updatePrices = () => {
    trackerAmount = getSelectedSet();
    const set = trackerAmount;

    let total = 0;
    componentCategories.forEach((component) => {
        if (component.hideFor5Set) {
            component.tr.style.visibility = (set == 5 ? "hidden" : "visible");
            if (set == 5) return;
        }
        total += updateComponentRow(component, set);
    });

    document.getElementById("diy-total-value").innerHTML = formatCost(total);
};

function createRadioCard(component, choiceObj, index) {
    const card = document.createElement("div");
    card.className = "radio-card";
    card.tabIndex = 0;
    card.style.cursor = "pointer";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = component.radioName;
    radio.value = index;
    if (choiceObj.defaultSelected || index === 0) radio.checked = true;
    radio.addEventListener("change", updatePrices);
    component.radioGroup.push(radio);

    card.addEventListener("click", () => {
        radio.checked = true;
        updatePrices();
    });

    card.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
            radio.checked = true;
            updatePrices();
            e.preventDefault();
        }
    });

    const info = document.createElement("div");
    info.className = "radio-card-info";

    const nameEl = document.createElement("div");
    nameEl.className = "radio-card-name";
    nameEl.innerHTML = choiceObj.name;
    info.appendChild(nameEl);

    if (choiceObj.description) {
        const descEl = document.createElement("div");
        descEl.className = "radio-card-desc";
        descEl.innerHTML = choiceObj.description;
        info.appendChild(descEl);
    }

    const costEl = document.createElement("div");
    costEl.className = "radio-card-cost";
    const cost = choiceObj.costAll(trackerAmount);
    costEl.innerHTML = cost != 0 ? `~${formatCost(cost)}` : "";

    card.appendChild(radio);
    card.appendChild(info);
    card.appendChild(costEl);

    return card;
}

function createRadioGroup(component, choiceCell) {
    component.radioGroup = [];
    component.radioName = "name-" + sanitizeComponentName(component.name);
    component.choices.forEach((choiceObj, index) => {
        choiceCell.appendChild(createRadioCard(component, choiceObj, index));
    });
}

function createComponentRow(component, tbody) {
    const tr = makeElement(tbody, "tr");
    component.tr = tr;
    makeElement(tr, "th", component.name);

    const choice = makeElement(tr, "td");
    if (component.choices.length == 1) {
        choice.innerHTML = component.choices[0].name;
    } else {
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

export function initializeCalculator() {
    const tbody = document.getElementById("diy-components");
    componentCategories.forEach((component) => createComponentRow(component, tbody));

    updatePrices();
    document.querySelectorAll('input[name="diy-set"]').forEach((set) => set.addEventListener("change", updatePrices));
}
