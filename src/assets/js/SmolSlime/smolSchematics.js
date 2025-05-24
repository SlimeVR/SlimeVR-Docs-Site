(() => {
    const chips = {
        'nrf': {
            'width': 2405,
            'height': 2425,
            'base': 'base-nrf.png',
            'options': [
                [
                    'I2C',
                    (imu) => ({
                        'DSV': 'nrf-ICM.png',
                        'ICM45': 'nrf-ICM.png',
                        'DSR': 'nrf-DSR.png',

                    })[imu]
                ],
                [
                    'SPI',
                    () => {
                        const box = document.querySelector("input[name='nrf-SPI']:checked");
                        if (box) {
                            return ({
                                'SPI': 'SPI-nrf.png',
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
                                'SPI': 'smol_slime_stacked_schematic.png',
                                'I2C': 'smol_slime_stacked_schematic.png',

                            })[box.value]
                        }
                    }
                ],
                [
                    'SW0',
                    () => "SW0-button.png"
                ],
                [
                    'RST',
                    () => "RST-button.png"
                ],
                [
                    'ANT',
                    () => "nrf-ANT.png"
                ]
            ]
        }
    };

    Object.entries(chips).forEach(([chip, config]) => {
        const div = document.getElementById(chip);
        div.style.paddingTop = (config.height / config.width) * 100 + '%';
    });

    const bgGen = () => {
        Object.entries(chips).forEach(([chip, config]) => {
            const bgs = [config.base];
            config.options.forEach(([optName, optVal]) => {
                const box = document.querySelector('input[name="' + chip + '-' + optName + '"]:checked');
                if (box) {
                    bgs.push(optVal(box.value));
                }
            });
            const div = document.getElementById(chip);
            div.style.background = bgs.map(bg => 'url(../../assets/img/' + bg + ') 0 0/100% 100%').reverse().join(",");
        });
    }
    bgGen();
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', bgGen);
    });
})();
