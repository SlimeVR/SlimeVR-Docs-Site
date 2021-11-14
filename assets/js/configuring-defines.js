(() => {
    const types = {
        SELECT: (name, opts, callback) => {
            let select = document.createElement("select");
            Object.entries(opts.values).forEach(([key, value]) => {
                let option = document.createElement("option");
                option.value = key;
                option.innerHTML = value;
                select.appendChild(option);
            });

            callback(Object.keys(opts.values)[0]);
            select.addEventListener("change", (e) => {
                callback(e.target.value);
            });
            return select;
        },
        INPUT: (name, opts, callback) => {
            let input = document.createElement("input");
            input.value = opts.default;
            callback(opts.default);
            input.addEventListener("change", (e) => {
                callback(e.target.value);
            });
            return input;
        },
        CHECKBOX: (name, opts, callback) => {
            let label = document.createElement("label");
            let input = document.createElement("input");
            input.type = 'checkbox';
            if (opts.default) { input.checked = "checked"; }
            callback(opts.default);
            input.addEventListener("change", (e) => {
                callback(e.target.checked);
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(" " + opts.text));
            return label;
        },
        HTML: (name, opts, callback) => {
            let div = document.createElement("div");
            div.innerHTML = opts.html;
            return div;
        },
        ROTATION: (name, opts, callback) => {
            let div = document.createElement("div");
            console.log(opts.values);
            opts.values.forEach((val) => {
                let label = document.createElement("label");
                let input = document.createElement("input");
                input.type = 'radio';
                input.name = "rotation_" + name;
                if (val.default) {
                    input.checked = 'checked';
                    callback(val.value);
                }
                input.addEventListener("change", (e) => {
                    callback(e.target.value);
                });
                input.value = val.value;
                label.appendChild(input);

                label.appendChild(document.createTextNode(" " + val.value));
                label.classList.add("rotation")
                div.appendChild(label);
            });
            return div;
        }
    };
    const options = {
        board: {
            name: 'Microcontroller',
            renderer: types.SELECT,
            values: {
                'WEMOSD1MINI': 'Wemos D1 Mini',
                'NODEMCU': 'NodeMCU',
                'TTGO_TBASE': 'TTGO TBASE',
                'SLIMEVR': 'SlimeVR',
                'SLIMEVR_DEV': 'SlimeVR Dev',
                'WROOM32': 'WROOM32',
                'CUSTOM': 'Custom board'
            },
            action: (vals) => {
                if (vals.board == 'SLIMEVR' || vals.board == 'SLIMEVR_DEV') {
                    return {board: vals.board, sda: '4', scl: '5', int: '10', int_2: '13', battery: '17'};
                } else if (vals.board == 'NODEMCU' || vals.board == 'WEMOSD1MINI') {
                    return {board: vals.board, sda: 'D2', scl: 'D1', int: 'D5', int_2: 'D6', battery: 'A0'};
                } else if (vals.board == 'TTGO_TBASE') {
                    return {board: vals.board, sda: '5', scl: '4', int: '14', int_2: '13', battery: 'A0'};
                } else if (vals.board == 'WROOM32') {
                    return {board: vals.board, sda: '21', scl: '22', int: '23', int_2: '25', battery: '36'};
                } else {
                    return {board: vals.board};
                }
            }
        },
        sda: {
            name: 'Pin IMU SDA',
            renderer: types.INPUT,
            default: 'D2',
            hidden: (vals) => vals.board != 'CUSTOM',
            action: (vals) => { return {sda: vals.sda}; }
        },
        scl: {
            name: 'Pin IMU SCL',
            renderer: types.INPUT,
            default: 'D1',
            hidden: (vals) => vals.board != 'CUSTOM',
            action: (vals) => { return {scl: vals.scl}; }
        },
        int: {
            name: 'Pin IMU INT',
            renderer: types.INPUT,
            default: 'D5',
            hidden: (vals) => vals.board != 'CUSTOM',
            action: (vals) => { return {int: vals.int}; }
        },
        int_2: {
            name: 'Pin IMU INT_2',
            renderer: types.INPUT,
            default: 'D6',
            hidden: (vals) => vals.board != 'CUSTOM',
            action: (vals) => { return {int_2: vals.int_2}; }
        },
        battery: {
            name: 'Pin for battery level',
            renderer: types.INPUT,
            default: 'A0',
            hidden: (vals) => vals.board != 'CUSTOM',
            action: (vals) => { return {battery: vals.battery}; }
        },
        imu: {
            name: 'Sensor',
            renderer: types.SELECT,
            values: {
                'IMU_BNO085': 'BNO085',
                'IMU_BNO080': 'BNO080',
                'IMU_BNO055': 'BNO055',
                'IMU_MPU9250': 'MPU9250',
                'IMU_MPU6500': 'MPU6500',
                'IMU_MPU6050': 'MPU6050',
            },
            action: (vals) => {
                if (vals.imu == 'IMU_BNO085') {
                    return {
                        imu: vals.imu,
                        imu_name: vals.imu.slice(4),
                        i2c_speed: 400000,
                        has_mag: true,
                        extra: '#define BNO_HAS_ARVR_STABILIZATION true'
                    };
                } else if (vals.imu == 'IMU_BNO080' || vals.imu == 'IMU_BNO055') {
                    return {
                        imu: vals.imu,
                        imu_name: vals.imu.slice(4),
                        i2c_speed: 400000,
                        has_mag: true,
                        extra: '#define BNO_HAS_ARVR_STABILIZATION false'
                    };
                } else if (vals.imu == 'IMU_MPU9250') {
                    return {
                        imu: vals.imu,
                        imu_name: vals.imu.slice(4),
                        i2c_speed: 100000,
                        has_mag: true
                    };
                } else if (vals.imu == 'IMU_MPU6050' || vals.imu == 'IMU_MPU6500') {
                    return {
                        imu: vals.imu,
                        imu_name: vals.imu.slice(4),
                        has_mag: false,
                        extra: '#define IMU_MPU6050_RUNTIME_CALIBRATION'
                    };
                }
            }
        },
        aux: {
            name: 'Auxiliary IMU',
            renderer: types.CHECKBOX,
            text: 'I have an auxiliary IMU',
            default: false,
            hidden: (vals) => !(vals.imu == 'IMU_MPU6050' || vals.imu == 'IMU_MPU6500'),
            action: (vals) => { return {i2c_speed: (vals.aux ? 400000 : 100000)}; }
        },
        rotation_image: {
            name: '',
            renderer: types.HTML,
            html: '<img src="assets/img/rotation.png">',
            action: () => { return {}; }
        },
        rotation: {
            name: 'IMU rotation',
            renderer: types.ROTATION,
            values: [
                {value: 'PI / 2.0'},
                {value: 'PI'},
                {value: '-PI / 2.0', default: true},
                {value: '0'}
            ],
            action: (vals) => { return {rotation: vals.rotation}; }
        },
        rotation_2: {
            name: 'Auxiliary IMU rotation',
            renderer: types.ROTATION,
            values: [
                {value: 'PI / 2.0'},
                {value: 'PI'},
                {value: '-PI / 2.0', default: true},
                {value: '0',}
            ],
            action: (vals) => { return {rotation_2: vals.rotation_2}; }
        },
        battery_shield: {
            name: 'Wemos Battery Shield',
            renderer: types.CHECKBOX,
            text: 'I am using the Wemos Battery Shield product',
            default: false,
            hidden: (vals) => !(vals.board == 'WEMOSD1MINI'),
            action: (vals) => { return {battery_shield: vals.battery_shield}; }
        }
    };

    const definesCode = document.getElementById("defines_code");
    const button = document.getElementById("defines_download");
    button.download = 'defines.h';
    const makeDefine = (vals) => {
        let c = `#include "consts.h"
#include "debug.h"
#define IMU ${vals.imu}
#define BOARD BOARD_${vals.board}
#define IMU_ROTATION ${vals.rotation}
#define SECOND_IMU_ROTATION ${vals.rotation_2}

#define IMU_NAME "${vals.imu_name}"
#define IMU_HAS_ACCELL true
#define IMU_HAS_GYRO true
#define IMU_HAS_MAG ${vals.has_mag ? true : false}
${vals.extra ? vals.extra : ''}
#define I2C_SPEED ${vals.i2c_speed}

#define PIN_IMU_SDA ${vals.sda}
#define PIN_IMU_SCL ${vals.scl}
#define PIN_IMU_INT ${vals.int}
#define PIN_IMU_INT_2 ${vals.int_2}
#define PIN_BATTERY_LEVEL ${vals.battery}

#define LOADING_LED LED_BUILTIN
#define CALIBRATING_LED LED_BUILTIN
#define STATUS_LED LED_BUILTIN

`;

        if (vals.battery_shield) {
            c += `// Wemos D1 Mini has an internal Voltage Divider with R1=220K and R2=100K > this means, 3.3V analogRead input voltage results in 1023.0
// Wemos D1 Mini with Wemos BatteryShiled v1.2.0 or higher: BatteryShield with J2 closed, has an addtional 130K resistor. So the resulting Voltage Divider is R1=220K+100K=320K and R2=100K > this means, 4.5V analogRead input voltage results in 1023.0
#define batteryADCMultiplier 1.0 / 1023.0 * 4.5`;
        } else {
            c += `// SlimeVR Board can handle max 5V > so analogRead of 5.0V input will result in 1023.0
#define batteryADCMultiplier 1.0 / 1023.0 * 5.0`;
        }

        definesCode.innerText = c;
        button.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(c);
    }

    const values = {};

    const runActions = () => {
        let output = {};
        Object.entries(options).forEach(([option, config]) => {
            const hidden = config.hidden_handler();
            if (!hidden) {
                Object.assign(output, config.action(values));
            }
        });
        makeDefine(output);
    };

    const definesConfig = document.getElementById('defines_config');
    let startup = true;
    Object.entries(options).forEach(([option, config]) => {
        const dt = document.createElement("dt");
        if (config.name) {
            dt.innerHTML = config.name;
            definesConfig.appendChild(dt);
        }
        const dd = document.createElement("dd");

        config.hidden_handler = () => {
            const hidden = config.hidden && config.hidden(values);
            dd.style.display = dt.style.display = (hidden ? 'none' : 'block');
            return hidden;
        };
        config.hidden_handler();

        dd.appendChild(config.renderer(option, config, (new_value) => {
            values[option] = new_value;
            if (!startup) { runActions(); }
        }));
        definesConfig.appendChild(dd);
    });
    startup = false;
    runActions();
})();