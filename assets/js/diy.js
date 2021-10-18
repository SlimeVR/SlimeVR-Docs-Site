(() => {
    const components = [
        {
            'name': 'Microchip',
            'choices': [
                {
                    'name': 'Wemos D1 Mini',
                    'amount': () => 5,
                    'cost': 1.85,
                    'costAll': () => 5*1.85 + 2.53,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=D1+mini">aliexpress Wemos D1 Mini</a>'
                }
            ]
        },
        {
            'name': 'IMU',
            'choices': [
                {
                    'name': 'MPU6050',
                    'amount': (set) => set,
                    'cost': 1.01,
                    'costAll': (set) => set * 1.01 + 1.67,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=MPU6050">aliexpress MPU6050</a>'
                },
                {
                    'name': 'BNO085',
                    'amount': (set) => set,
                    'cost': 20,
                    'costAll': (set) => set * 20 + 1,
                    'links': '<a href="https://www.aliexpress.com/wholesale?SearchText=BNO085">aliexpress BNO085</a>'
                }
            ]
        },
        {
            'name': 'Batteries',
            'choices': [
                {
                    'name': '3.7v Li-ion polymer 804040',
                    'amount': () => 5,
                    'cost': 3.19,
                    'costAll': () => 5*3.19 + 5.33,
                    'links': 'This is a rough price, but these are some options: <a href="https://www.aliexpress.com/item/33021202630.html">Batteries, choose 4 pack + 1</a> or <a href="https://www.aliexpress.com/item/1005002559604104.html">pack of 10</a>'
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
                    'name': '18650 board with TP4056',
                    'amount': () => 5,
                    'cost': 0.34,
                    'costAll': () => 5*0.34 + 1.42,
                    'links': '<a href="https://www.aliexpress.com/item/32649780468.html">aliexpress 18650 + TP4056</a>'
                }
            ]
        },
        {
            'name': 'Power switches',
            'choices': [
                {
                    'name': '10 Pcs 2 Position',
                    'amount': () => 1,
                    'cost': 2.36,
                    'costAll': () => 2.36,
                    'links': '<a href="https://www.aliexpress.com/item/32975535599.html">aliexpress 10 Pcs 2 Position</a>'
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
                    'name': '22 AWG 5m',
                    'amount': () => 1,
                    'cost': 2.26,
                    'costAll': () => 2.26+1.68,
                    'links': '<a href="https://www.aliexpress.com/item/1005002632016529.html">aliexpress 22 AWG 5m</a>'
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
                    'links': '<a href="https://www.aliexpress.com/item/1005002304293157.html">aliexpress JST connectors</a>'
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
                    'name': 'TODO',
                    'amount': () => 0,
                    'cost': 0,
                    'costAll': () => 0,
                    'links': ''
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
                    'name': 'Generic aliexpress straps?',
                    'amount': () => 2,
                    'cost': 5,
                    'costAll': () => 13,
                    'links': 'https://www.aliexpress.com/item/1005002350231996.html'
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
        const set = document.querySelector('input[name=diy-set]:checked').value;
        let total = 0;
        components.forEach(component => {
            if (component.hideFor5Set) {
                component.tr.style.visibility = (set == 5 ? "hidden" : "visible");
                if (set == 5) { return; }
            }
            const updateValues = (choice) => {
                component.amount.innerHTML = choice.amount(set);
                component.cost.innerHTML = '' + '$' + choice.cost;
                component.costAll.innerHTML = '~' + '$' + choice.costAll(set);
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