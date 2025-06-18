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
    const bgs = [formState.isStacked ? "stacked/stacked-base.webp" : "pcb/pcb-base.webp"];

    switch (formState.IMU) {
        case "ICM-45686":
            bgs.push(formState.isStacked ? "stacked/stacked-IMU-ICM.webp" : "pcb/pcb-IMU-ICM.webp");
            break;
        case "LSM6DSV":
            bgs.push(formState.isStacked ? "stacked/stacked-IMU-DSV.webp" : "pcb/pcb-IMU-DSV.webp");
            break;
        case "LSM6DSR":
            bgs.push(formState.isStacked ? "stacked/stacked-IMU-DSR.webp" : "pcb/pcb-IMU-DSR.webp");
            break;
    }

    switch (formState.Protocol) {
        case "SPI":
            bgs.push(formState.isStacked ? "stacked/stacked-protocol-SPI.webp" : "pcb/pcb-protocol-SPI.webp");
            break;
        case "I2C":
            if (formState.isStacked) {
                bgs.push("stacked/stacked-protocol-I2C.webp");
            }
            break;
    }

    if (formState.HasUserButton) {
        bgs.push(formState.isStacked ? "stacked/stacked-user-button.webp" : "pcb/pcb-user-button.webp");
    }

    if (formState.hasResetButton) {
        bgs.push(formState.isStacked ? "stacked/stacked-reset-button.webp" : "pcb/pcb-reset-button.webp");
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
                "url(assets/img/smol-schematic/" +
                bg +
                ") 0 0/100% 100%"
        )
        .reverse()
        .join(",");
}

form.addEventListener("input", updateCanvas);
form.addEventListener("change", updateCanvas);

updateCanvas();