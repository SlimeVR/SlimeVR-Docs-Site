(() => {
    var tracker

    const components = [
        {
            'name': 'Microcontroller',
            'choices': [
                {
                    'name': 'Wemos D1 Mini',
                    'amount': () => tracker,
                    'cost': 1.85,
                    'costAll': () => tracker * 1.85 + 2.53,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=D1+mini">AliExpress Wemos D1 Mini</a>'
                }
            ]
        },
        {
            'name': 'IMU',
            'choices': [
                //Prices are based on the seller "Simple Robot Store" for AliExpress links.
                {
                    'name': 'MPU6050',
                    'amount': (set) => set,
                    'cost': 1.04,
                    'costAll': (set) => set * 1.04 + 2.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU6050">AliExpress MPU6050</a>'
                },
                {
                    'name': 'MPU6500',
                    'amount': (set) => set,
                    'cost': 0.95,
                    'costAll': (set) => set * 0.95 + 2.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU6500">AliExpress MPU6500</a>'
                },
                {
                    'name': 'BNO055',
                    'amount': (set) => set,
                    'cost': 55.10,
                    'costAll': (set) => set * 55.10 + 2.73,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=BNO055">AliExpress BNO055</a>'
                },
                {
                    'name': 'BMI160',
                    'amount': (set) => set,
                    'cost': 1.42,
                    'costAll': (set) => set * 1.42 + 2.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=BMI160">AliExpress BMI160</a>'
                },
                {
                    'name': 'MPU+QMC5883L',
                    'amount': (set) => set,
                    'cost': 1.04+1.23,
                    'costAll': (set) => (set * (1.04+1.23)) + 2.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU6050">AliExpress MPU6050</a> and <a href="https://www.aliexpress.com/wholesale?SearchText=QMC5883L">AliExpress QMC5883L</a>. Performance should apprxomiately match an MPU9250, but please note that this is <b>Experimental</b>.'
                },
                {
                    'name': 'MPU9250',
                    'amount': (set) => set,
                    'cost': 4.75,
                    'costAll': (set) => set * 4.75 + 2.73,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU9250">AliExpress MPU9250</a>. Buyer beware: large amount of fakes.'
                },
                {
                    'name': 'ICM20948',
                    'amount': (set) => set,
                    'cost': 17.40,
                    'costAll': (set) => set * 17.40 + 8.89,
                    'links': '<a href="https://www.mouser.com/c/?q=ICM20948">Mouser ICM20948</a>. The most commonly chosen options are either the Pimoroni or Adafruit ICM20948. Please note that any orders you place will be <b>backordered</b>, potentially meaning a wait of <u>upwards of 3 months</u> before shipping.'
                },
                {
                    'name': 'BNO085',
                    'amount': (set) => set,
                    'cost': 24.95,
                    'costAll': (set) => set * 24.95 + 9.79,
                    'links': '<a href="https://www.mouser.com/c/?q=BNO085">Adafruit BNO085</a>. Please note that any orders you place will be <b>backordered</b>, potentially meaning a wait of <u>upwards of 3 months</u> before shipping.'
                }
            ]
        },
        {
            'name': 'Batteries',
            'choices': [
                {
                    'name': '1800 mAh 804040 Li-Po',
                    'amount': () => tracker,
                    'cost': 3.66,
                    'costAll': () => tracker*3.19 + 5.33,
                    'links': '<a href="https://www.aliexpress.us/item/3256803961495200.html">AliExpress 804040, 5 pcs</a> or <a href="https://www.aliexpress.com/item/1005002559604104.html">AliExpress 804040, 10 pcs</a>. Pricing is approximate.'
                },
                {
                    'name': '1200 mAh 903052 Li-Po - 5 pcs',
                    'amount': () => ((tracker == 5) ? 1 : 2),
                    'cost': 22.99, 
                    'costAll': () => ((tracker == 5) ? 1 : 2) * 22.99,
                    'links': '<a href="https://www.amazon.com/dp/B088YKPZ9D/">Amazon Li-Po Batteries</a>'
                },
                {
                    'name': 'Generic 18650',
                    'amount': () => tracker,
                    'cost': 3 + 0.27,
                    'costAll': () => tracker * (3 + 0.27) + (1.89),
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=18650+cell">AliExpress 18650 cell</a> and <a href="https://www.aliexpress.us/item/3256801521575042.html">AliExpress 18650 holder</a>. Buyer beware: rated capacities are likely inaccurate.'
                },
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                }
            ]
        },
        {
            'name': 'Charging Board',
            'choices': [
                {
                    'name': 'TP4056 USB charging board',
                    'amount': () => tracker,
                    'cost': 0.36,
                    'costAll': () => tracker*0.36 + 2.07,
                    'links': '<a href="https://www.aliexpress.com/item/32649780468.html">AliExpress TP4056</a>'
                },
                {
                    'name': 'TP4056 USB charging board - 10 pcs',
                    'amount': () => 1,
                    'cost': 8.19,
                    'costAll': () => 8.19,
                    'links': '<a href="https://www.amazon.com/dp/B08DNK398S">Amazon TP4056</a>'
                },
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                }
            ]
        },
        {
            'name': 'Power Switches',
            'choices': [
                {
                    'name': 'SS22F32 switches - 10 pcs',
                    'amount': () => 1,
                    'cost': 2.36,
                    'costAll': () => 2.36,
                    'links': '<a href="https://www.aliexpress.com/item/32975535599.html">AliExpress SS22F32 switches</a>'
                },
                {
                    'name': 'SS22F32 switches - 10 pcs (Alt)',
                    'amount': () => 1,
                    'cost': 7.99,
                    'costAll': () => 7.99,
                    'links': '<a href="https://www.amazon.com/dp/B083RBS2RT">Amazon SS22F32 switches</a>'
                },
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                }
            ]
        },
        {
            'name': 'Diodes',
            'choices': [
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                },
                {
                    'name': '1N5817 diodes - 50 pcs',
                    'amount': () => 1,
                    'cost': 0.62,
                    'costAll': () => 0.62 + 2.21,
                    'links': '<a href="https://www.aliexpress.us/item/3256801365779334.html">AliExpress 1N5817 diodes.</a> Optional component for battery protection.'
                },
                {
                    'name': '1N5817 diodes - 100 pcs',
                    'amount': () => 1,
                    'cost': 5.99,
                    'costAll': () => 5.99,
                    'links': '<a href="https://www.amazon.com/dp/B079KDQQPD">Amazon 1N5817 diodes.</a> Optional component for battery protection.'
                }
            ]
        },
        {
            'name': 'Resistors',
            'choices': [
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                },
                {
                    'name': '180K ohm resistors - 100 pcs',
                    'amount': () => 1,
                    'cost': 1.96,
                    'costAll': () => 1.96 + 1.29,
                    'links': '<a href="https://www.aliexpress.us/item/3256802808441054.html">AliExpress 180K ohm resistors.</a> Optional component for checking battery percentage.'
                },
                {
                    'name': '180K ohm resistors - 100 pcs (Alt)',
                    'amount': () => 1,
                    'cost': 4.99,
                    'costAll': () => 4.99,
                    'links': '<a href="https://www.amazon.com/dp/B07HDFCNXB">Amazon 180K ohm resistors.</a> Optional component for checking battery percentage.'
                }
            ]
        },
        {
            'name': 'Wiring for Soldering',
            'choices': [
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                },
                {
                    'name': '24-26 AWG, 5m',
                    'amount': () => 1,
                    'cost': 1.85,
                    'costAll': () => 1.85+1.68,
                    'links': '<a href="https://www.aliexpress.com/item/1005002632016529.html">AliExpress 24-26 AWG 5m</a>'
                },
                {
                    'name': '26AWG, 10m spools - 6 pcs',
                    'amount': () => 1,
                    'cost': 14.99,
                    'costAll': () => 14.99,
                    'links': '<a href="https://www.amazon.com/dp/B07G2LRX68">Amazon 26 AWG, 10m spools</a>'
                },
            ]
        },
        {
            'name': 'Wiring for Extensions',
            'hideFor5Set': true,
            'choices': [
                {
                    'name': 'JST connectors - 5 pin 5 pcs',
                    'amount': () => 1,
                    'cost': 3,
                    'costAll': () => 3 + 3.96,
                    'links': '<a href="https://www.aliexpress.us/item/3256803829669959.html">AliExpress JST connectors</a>. Optional component for allowing removable extensions.'
                },
                {
                    'name': 'JST connectors - 5 pin 20 pcs',
                    'amount': () => 1,
                    'cost': 12.98,
                    'costAll': () => 12.98,
                    'links': '<a href="https://www.amazon.com/dp/B075K6N7DF">Amazon JST connectors</a>. Optional component for allowing removable extensions.'
                },
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                }
            ]
        },
        {
            'name': 'Cases',
            'choices': [
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                },
                {
                    'name': '3D printed yourself, approximate $',
                    'amount': () => tracker,
                    'cost': 2,
                    'costAll': () => tracker * 2,
                    'links': 'You make your own cases!'
                },
                {
                    'name': 'AliExpress cases',
                    'amount': () => tracker,
                    'cost': 0.65,
                    'costAll': () => (tracker * 0.65) + 3.01,
                    'links': '<a href="https://www.aliexpress.us/item/3256803305182027.html">AliExpress cases</a>. Not guaranteed to fit, check your parts before ordering.'
                },
                {
                    'name': 'Amazon cases - 6 pcs',
                    'amount': () => ((tracker == 5) ? 1 : 2),
                    'cost': 7.49,
                    'costAll': () => ((tracker == 5) ? 1 : 2) * 7.49,
                    'links': '<a href="https://www.amazon.com/dp/B08T97JD6Z">Amazon cases</a>. Not guaranteed to fit, check your parts before ordering.'
                }
            ]
        },
        {
            'name': 'Straps',
            'choices': [
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                },
                {
                    'name': 'Generic AliExpress straps - 6 pcs',
                    'amount': (set) => ((set < 6) ? 1 : 2),
                    'cost': 5,
                    'costAll': (set) => ((set < 6) ? 1 : 2) * 5 + 2.77,
                    'links': '<a href="https://aliexpress.com/item/1005001908740631.html">AliExpress straps</a>, get some in different sizes?'
                },
                {
                    'name': 'Generic Amazon straps - 6 pcs',
                    'amount': (set) => ((set < 6) ? 1 : 2),
                    'cost': 9.89,
                    'costAll': (set) => ((set < 6) ? 1 : 2) * 9.89,
                    'links': '<a href="https://www.amazon.com/dp/B091J4TWVX/">Amazon straps</a>'
                }
            ]
        },

    ];

    const makeElement = (parent, type, contents = "") => {
        let el = document.createElement(type);
        el.innerHTML = contents;
        parent.appendChild(el);
        return el;
    }

    const tbody = document.getElementById("diy-components");

    const updatePrices = () => {
        // IMU number
        const set = document.querySelector('input[name=diy-set]:checked').value;
        // Tracker number
        if (set == 10) {
            tracker = 7;
        } else {
            tracker = 5;
        }

        let total = 0;
        components.forEach(component => {
            if (component.hideFor5Set) {
                component.tr.style.visibility = (set == 5 ? "hidden" : "visible");
                if (set == 5) { return; }
            }
            const updateValues = (choice) => {
                component.amount.innerHTML = choice.amount(set);
                component.cost.innerHTML = '$' + choice.cost;
                component.costAll.innerHTML = '~$' + Math.round(choice.costAll(set) * 100) / 100;
                component.links.innerHTML = choice.links;

                total += choice.costAll(set);
            }
            if (component.choices.length == 1) {
                updateValues(component.choices[0]);
            } else {
                updateValues(component.choices[component.select.value]);
            }
        });

        document.getElementById("diy-total").innerHTML = Math.round(total * 100) / 100;
    }

    components.forEach(component => {
        const tr = makeElement(tbody, "tr");
        component.tr = tr;
        makeElement(tr, "th", component.name);

        const choice = makeElement(tr, "td");
        if (component.choices.length == 1) {
            choice.innerHTML = component.choices[0].name;
        } else {
            const select = makeElement(choice, "select");
            select.name = "name-" + component.name;
            component.choices.forEach((choice, index) => {
                const option = makeElement(select, "option", choice.name);
                option.value = index;
            });
            select.addEventListener("change", updatePrices);
            component.select = select;
        }

        component.amount = makeElement(tr, "td", 0);
        component.cost = makeElement(tr, "td", 0);
        component.costAll = makeElement(tr, "td", 0);
        component.links = makeElement(tr, "td", 69);
    });

    updatePrices();
    document.querySelectorAll('input[name="diy-set"]').forEach((set) => {
        set.addEventListener("change", updatePrices);
    });
})();
