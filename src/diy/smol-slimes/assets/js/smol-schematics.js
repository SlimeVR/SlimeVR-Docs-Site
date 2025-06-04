const form = document.getElementById("schematicForm");

function getFormState(form) {
    const formData = new FormData(form);
    const state = {};
    for (const [key, value] of formData.entries()) {
        state[key] = value;
    }

    // Manually add checkbox states (FormData only includes checked boxes)
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb) => {
        state[cb.name] = cb.checked;
    });

    return state;
}

function getImages(formState) {
    const bgs = [formState.isStacked ? "stacked-base.webp" : "pcb-base.webp"];

    switch (formState.IMU) {
        case "ICM-45686":
            bgs.push(formState.isStacked ? "stacked-ICM.webp" : "pcb-ICM.webp");
            break;
        case "LSM6DSV":
            bgs.push(formState.isStacked ? "stacked-DSV.webp" : "pcb-DSV.webp");
            break;
        case "LSM6DSR":
            bgs.push(formState.isStacked ? "stacked-DSR.webp" : "pcb-DSR.webp");
            break;
    }

    switch (formState.Protocol) {
        case "SPI":
            bgs.push(formState.isStacked ? "stacked-SPI.webp" : "pcb-SPI.webp");
            break;
        case "I2C":
            if (formState.isStacked) {
                bgs.push("stacked-I2C.webp");
            }
            break;
    }

    if (formState.HasUserButton) {
        bgs.push("user-button.webp");
    }

    if (formState.hasResetButton) {
        bgs.push("reset-button.webp");
    }

    if (formState.hasAntenna) {
        bgs.push("antenna.webp");
    }

    return bgs;
}

const canvas = document.getElementById("schema-canvas");
canvas.style.paddingTop = (2425 / 2405) * 100 + "%";

function updateCanvas() {
    const formState = getFormState(form);

    canvas.style.background = getImages(formState)
        .map(
            (bg) =>
                "url(../../diy/smol-slimes/assets/schematics/" +
                bg +
                ") 0 0/100% 100%"
        )
        .reverse()
        .join(",");
}

form.addEventListener("input", updateCanvas);
form.addEventListener("change", updateCanvas);

updateCanvas();
