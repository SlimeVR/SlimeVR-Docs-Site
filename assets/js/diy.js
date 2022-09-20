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
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=D1+mini">Aliexpress Wemos D1 Mini</a>'
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
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU6050">Aliexpress MPU6050</a>'
                },
                {
                    'name': 'MPU6500',
                    'amount': (set) => set,
                    'cost': 0.95,
                    'costAll': (set) => set * 0.95 + 2.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU6500">Aliexpress MPU6500</a>'
                },
                {
                    'name': 'BNO055',
                    'amount': (set) => set,
                    'cost': 55.10,
                    'costAll': (set) => set * 55.10 + 2.73,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=BNO055">Aliexpress BNO055</a>'
                },
                {
                    'name': 'BMI160',
                    'amount': (set) => set,
                    'cost': 1.42,
                    'costAll': (set) => set * 1.42 + 2.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=BMI160">Aliexpress BMI160</a>'
                },
                {
                    'name': 'MPU+QMC5883L',
                    'amount': (set) => set,
                    'cost': 1.04+1.23,
                    'costAll': (set) => (set * (1.04+1.23)) + 2.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU6050">Aliexpress MPU6050</a> and <a href="https://www.aliexpress.com/wholesale?SearchText=QMC5883L">Aliexpress QMC5883L</a>. Performance should apprxomiately match an MPU9250, but please note that this is <b>Experimental</b>.'
                },
                {
                    'name': 'MPU9250',
                    'amount': (set) => set,
                    'cost': 4.75,
                    'costAll': (set) => set * 4.75 + 2.73,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU9250">Aliexpress MPU9250</a>'
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
            // Batteries needed are equal to number of trackers, but listings don't necessarily come in the same number, complicating costs.
            'name': 'Batteries',
            'choices': [
                {
                    'name': '1800 mAh 804040 Li-Po',
                    'amount': () => 5,
                    'cost': 3.66,
                    'costAll': () => 5*3.19 + 5.33,
                    'links': 'This is a rough price, but these are some options: <a href="https://www.aliexpress.com/item/33021202630.html">Batteries, choose 4 pack + 1</a> or <a href="https://www.aliexpress.com/item/1005002559604104.html">pack of 10</a>'
                },
                {
                    'name': '1200 mAh 903052 Li-Po',
                    'amount': () => 5,
                    'cost': 4.60,
                    'costAll': () => 5*4.60 + 5.33,
                    'links': '<a href="https://www.amazon.com/dp/B088YKPZ9D/">Amazon Li-Po Batteries</a>'
                },
                {
                    'name': 'Generic 18650',
                    'amount': () => 5,
                    'cost': 3 + 0.27,
                    'costAll': () => 5 * (3 + 0.27) + (1.89),
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=18650+cell">AliExpress 18650 cell</a> and <a href="https://www.aliexpress.us/item/3256801521575042.html">AliExpress 18650 holder</a>. Price is approximate, 18650s can be found for both very cheap and very expensive.'
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
            'name': 'Charging board',
            'choices': [
                {
                    'name': 'TP4056-based USB charging board',
                    'amount': () => 5,
                    'cost': 0.36,
                    'costAll': () => 5*0.36 + 2.07,
                    'links': '<a href="https://www.aliexpress.com/item/32649780468.html">Aliexpress TP4056</a>'
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
            'name': 'Power switches',
            'choices': [
                {
                    'name': '10 pcs 2 Position',
                    'amount': () => 1,
                    'cost': 2.36,
                    'costAll': () => 2.36,
                    'links': '<a href="https://www.aliexpress.com/item/32975535599.html">Aliexpress 10 pcs 2 Position</a>'
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
            'name': 'Wiring for soldering',
            'choices': [
                {
                    'name': 'Sourced elsewhere',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
                },
                {
                    'name': '24-26 AWG 5m',
                    'amount': () => 1,
                    'cost': 1.85,
                    'costAll': () => 1.85+1.68,
                    'links': '<a href="https://www.aliexpress.com/item/1005002632016529.html">AliExpress 24-26 AWG 5m</a>'
                },
                {
                    'name': '26AWG, 6 spools multicolor',
                    'amount': () => 1,
                    'cost': 14.99,
                    'costAll': () => 14.99,
                    'links': '<a href="https://www.aliexpress.com/item/1005002632016529.html">AliExpress 22 AWG 5m</a>'
                },
            ]
        },
        {
            'name': 'Wiring for extensions',
            'hideFor5Set': true,
            'choices': [
                {
                    'name': 'JST connectors - 5 pin 5 pcs',
                    'amount': () => 1,
                    'cost': 1.55,
                    'costAll': () => 1.55,
                    'links': '<a href="https://www.aliexpress.com/item/1005002304293157.html">AliExpress JST connectors</a>'
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
                    'amount': () => 5,
                    'cost': 2,
                    'costAll': () => 10,
                    'links': 'You make your own cases!'
                },
                {
                    'name': 'Amazon cases, pack of 6',
                    'amount': () => 1,
                    'cost': 7.49,
                    'costAll': () => 7.49,
                    'links': '<a href="https://www.amazon.com/dp/B08T97JD6Z">Amazon cases</a>. Not guaranteed to fit, measure yourself before ordering.'
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
                    'name': 'Generic Aliexpress straps',
                    'amount': () => 2,
                    'cost': 5,
                    'costAll': () => 13,
                    'links': '<a href="https://aliexpress.com/item/1005001908740631.html">Aliexpress straps</a>, get some in different sizes?'
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
