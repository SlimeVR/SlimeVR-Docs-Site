/**
 * @typedef {Object} SchematicOption
 * @property {string} 0 - Option name (e.g. 'I2C', 'SPI', 'STK', 'ANT')
 * @property {function(string=): (string|undefined)} 1 - Function returning image filename for the option
 */

/**
 * @typedef {Object} SchematicConfig
 * @property {number} width - Schematic image width
 * @property {number} height - Schematic image height
 * @property {string} base - Base image filename
 * @property {SchematicOption[]} options - Array of schematic options
 */

/**
 * Configuration for nRF schematic rendering.
 * Keyed by chip name (currently only 'nrf').
 * @type {Object.<string, SchematicConfig>}
 */
const nrfSchematicConfig = {
    width: 2405,
    height: 2425,
    canvasId: "schema-canvas",
    pcbBase: "pcb-base.webp",
    stackedBase: "stacked-base.webp",
    pcbOptions: [
        [
            "IMU",
            (imu) =>
                ({
                    "ICM-45686": "pcb-ICM.webp",
                    LSM6DSV: "pcb-DSV.webp",
                    LSM6DSR: "pcb-DSR.webp",
                }[imu]),
        ],
        [
            "Protocol",
            function (protocol) {
                return {
                    SPI: "pcb-SPI.webp",
                }[protocol];
            },
        ],
    ],
    stackedOptions: [
        [
            "IMU",
            (imu) =>
                ({
                    "ICM-45686": "stacked-ICM.webp",
                    LSM6DSV: "stacked-DSV.webp",
                    LSM6DSR: "stacked-DSR.webp",
                }[imu]),
        ],
        [
            "Protocol",
            function (protocol) {
                return {
                    I2C: "stacked-I2C.webp",
                    SPI: "stacked-SPI.webp",
                }[protocol];
            },
        ],
    ],
    commonOptions: [
        ["UserButton", "user-button.webp"],
        ["ResetButton", "reset-button.webp"],
        ["Antenna", "antenna.webp"],
    ],
};

const div = document.getElementById(nrfSchematicConfig.canvasId);
div.style.paddingTop =
    (nrfSchematicConfig.height / nrfSchematicConfig.width) * 100 + "%";

const bgGen = () => {
    var IsStacked = !!document.querySelector("input[name='IsStacked']:checked");
    var flags = [];

    const bgs = [
        IsStacked ? nrfSchematicConfig.stackedBase : nrfSchematicConfig.pcbBase,
    ];

    [...nrfSchematicConfig.commonOptions].forEach(([name, value]) => {
        const isTrue = !!document.querySelector(
            'input[name="' + name + '"]:checked'
        );
        if (isTrue) {
            flags.push(name);
            bgs.push(value);
        }
    });

    console.log("Common options processed:", IsStacked);
    (IsStacked
        ? nrfSchematicConfig.stackedOptions
        : nrfSchematicConfig.pcbOptions
    ).forEach(([name, value]) => {
        const valueControl = document.querySelector(
            'input[name="' + name + '"]:checked'
        );

        flags.push(valueControl.value);
        let image = value(valueControl.value);

        if (image) {
            bgs.push(image);
        }
    });

    const div = document.getElementById(nrfSchematicConfig.canvasId);
    div.style.background = bgs
        .map(
            (bg) =>
                "url(../../diy/smol-slimes/assets/schematics/" +
                bg +
                ") 0 0/100% 100%"
        )
        .reverse()
        .join(",");

    // Generate a table based on the flags array and insert/update it below the canvas
    let tableHtml = `<table class="schematic-flags-table"><thead><tr><th>Selected Option</th></tr></thead><tbody>`;
    flags.forEach((flag) => {
        tableHtml += `<tr><td>${flag}</td></tr>`;
    });
    tableHtml += `</tbody></table>`;

    // Insert or update the table after the canvas div
    let tableElem = document.getElementById("shopping-list-table-container");
    tableElem.innerHTML = tableHtml;
    console.log("Backgrounds set:", flags);
};

bgGen();
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", bgGen);
});
