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
    'nrf': {
        'width': 2405,
        'height': 2425,
        'base': 'base-nrf.webp',
        'options': [
            [
                'I2C',
                (imu) => {
                    // Returns the image filename for the selected IMU type.
                    // If imu is 'DSV', returns 'nrf-DSV.webp', etc.
                    return ({
                        'DSV': 'nrf-DSV.webp',
                        'ICM45': 'nrf-ICM.webp',
                        'DSR': 'nrf-DSR.webp',
                    })[imu];
                }
            ],
            [
                'SPI',
                () => {
                    const box = document.querySelector("input[name='nrf-SPI']:checked");
                    if (box) {
                        return ({
                            'SPI': 'SPI-nrf.webp',
                        })[box.value]
                    }
                }
            ],
            [
                'SPI',
                () => {
                    const box = document.querySelector("input[name='nrf-USR']:checked");
                    if (box) {
                        return ({})[box.value] || 'USR-button.webp'
                    }
                }
            ],
            [
                'SPI',
                () => {
                    const box = document.querySelector("input[name='nrf-RST']:checked");
                    if (box) {
                        return ({})[box.value] || 'RST-button.webp'
                    }
                }
            ],
            [
                'STK',
                () => 'stacked-base.webp'

            ],
            [
                'STK',
                () => {
                    const box = document.querySelector("input[name='nrf-I2C']:checked");
                    if (box) {
                        return ({
                            'ICM45': 'stacked-ICM.webp',
                            'DSV': 'stacked-DSV.webp',
                            'DSR': 'stacked-DSR.webp',

                        })[box.value]
                    }
                }
            ],
            [
                'STK',
                () => {
                    const box = document.querySelector("input[name='nrf-SPI']:checked");
                    if (box) {
                        return ({
                            'SPI': 'stacked-SPI.webp',
                            'I2C': 'stacked-I2C.webp',

                        })[box.value]
                    }
                }
            ],
            [
                'STK',
                () => {
                    const box = document.querySelector("input[name='nrf-USR']:checked");
                    if (box) {
                        return ({})[box.value] || 'stacked-USR.webp'
                    }
                }
            ],
            [
                'STK',
                () => {
                    const box = document.querySelector("input[name='nrf-RST']:checked");
                    if (box) {
                        return ({})[box.value] || 'stacked-RST.webp'
                    }
                }
            ],
            [
                'ANT',
                () => "nrf-ANT.webp"
            ]
        ]
    }
};

Object.entries(nrfSchematicConfig).forEach(([chip, config]) => {
    const div = document.getElementById(chip);
    div.style.paddingTop = (config.height / config.width) * 100 + '%';
});

const bgGen = () => {
    Object.entries(nrfSchematicConfig).forEach(([chip, config]) => {
        const bgs = [config.base];
        config.options.forEach(([optName, optVal]) => {
            const box = document.querySelector('input[name="' + chip + '-' + optName + '"]:checked');
            if (box) {
                bgs.push(optVal(box.value));
            }
        });
        const div = document.getElementById(chip);
        div.style.background = bgs.map(bg => 'url(../../diy/smol-slimes/assets/' + bg + ') 0 0/100% 100%').reverse().join(",");
    });
}

bgGen();
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', bgGen);
});
