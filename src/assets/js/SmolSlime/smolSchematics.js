(() => {
    const chips = {
        'nrf': {
            'width': 2405,
            'height': 2425,
            'base': 'base-nrf.webp',
            'options': [
                [
                    'I2C',
                    (imu) => ({
                        'DSV': 'nrf-DSV.webp',
                        'ICM45': 'nrf-ICM.webp',
                        'DSR': 'nrf-DSR.webp',

                    })[imu]
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
            div.style.background = bgs.map(bg => 'url(../../diy/smol-slimes/assets/' + bg + ') 0 0/100% 100%').reverse().join(",");
        });
    }
    bgGen();
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', bgGen);
    });
})();
