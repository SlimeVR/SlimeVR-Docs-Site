export const makeElement = (parent, type, contents = "") => {
    const el = document.createElement(type);
    el.innerHTML = contents;
    parent.appendChild(el);
    return el;
};

export function formatCost(value) {
    return "$" + value.toFixed(2).replace(/\.00$/, "");
}

export function getSelectedSet() {
    return +document.querySelector("input[name=diy-set]:checked").value;
}

export function getSelectedChoiceIndex(radioGroup) {
    const checkedRadio = radioGroup.find((radio) => radio.checked);
    return checkedRadio ? checkedRadio.value : 0;
}
