(() => {
    const chips = {
        'd1': {
            'width': 1722,
            'height': 1552,
            'base': 'd1_Base.png',
            'options': [
                [
                    'imu',
                    (imu) => ({
                        'ICM45': 'd1_ICM45-Main.png',
                        'DSV': 'd1_LSM6DSV-Main.png',
                        'DSR': 'd1_LSM6DSR-Main.png',
                        'bno': 'd1_BNO-Main.png',
                        'bno_ada': 'd1_BNO_Ada-Main.png',
                        'bmi160': 'd1_BMI160-Main.png',
                        'bmi270': 'd1_MPU-Main.png',
                        'mpu9250': 'd1_MPU9250-Main.png',
                        'mpu': 'd1_MPU-Main.png',
                        'qmc': 'd1_MPU+QMC-Main.png'
                    })[imu] || "d1_ICM45-Main.png"
                ],
                [
                    'aux',
                    () => {
                        const box = document.querySelector("input[name='d1-imu']:checked");
                        if (box) {
                            return ({
                                'ICM45': 'd1_ICM45-Aux.png',
                                'DSV': 'd1_LSM6DSV-Aux.png',
                                'DSR': 'd1_LSM6DSR-Aux.png',
                                'bno': 'd1_BNO-Aux.png',
                                'bno_ada': 'd1_BNO_Ada-Aux.png',
                                'bmi160': 'd1_BMI160-Aux.png',
                                'bmi270': 'd1_MPU-Aux.png',
                                'mpu9250': 'd1_MPU9250-Aux.png',
                                'mpu': 'd1_MPU-Aux.png',
                                'qmc': 'd1_MPU+QMC-Aux.png'
                            })[box.value] || "d1_ICM45-Aux.png"
                        }
                    }
                ],
                [
                    'battery-sense',
                    () => "d1_Battery-Sense.png"
                ],
                [
                    'charge-diodes',
                    () => "d1_Charge-Diodes.png"
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
            div.style.background = bgs.map(bg => 'url(../assets/img/' + bg + ') 0 0/100% 100%').reverse().join(",");
        });
    }
    bgGen();
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', bgGen);
    });
})();
