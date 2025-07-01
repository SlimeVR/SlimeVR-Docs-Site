(() => {
    var tracker = 6; // Default number of trackers

    const components = [
        {
            name: "Microcontroller",
            choices: [
                {
                    name: "ProMicro\
                    <br/>(With overage, to avoid Dead On Arrival issues)",
                    amount: () => Math.round(tracker * 1.2) + " (20% overage)",
                    cost: () => 6.55 / 2,
                    costAll: () => Math.round(tracker * 1.2) * (6.55 / 2),
                    links: '\
                    Available on AliExpress with<code>compatible with nice!nano</code>, <code>SuperMini</code>, or<code>Pro Micro</code> branding.\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target=\"_blank\">AliExpress TENSTAR 2pcs pack</a>\
                        </li>\
                    </ul>',
                },
            ],
        },
        {
            name: "IMU",
            choices: [
                //Prices are based on the seller "Simple Robot Store" for AliExpress links.
                {
                    name: "LSM6DSR (Half the price of ICM-45686, with slightly more drift)",
                    amount: (set) => set,
                    cost: () => 3.46,
                    costAll: (set) => set * 3.46 + 6.7,
                    links: '<a href="https://store.kouno.xyz/products/lsm6dsr-qmc6309-module" target=\"_blank\">KOUNOLAB LSM6DSR + QMC6309</a>',
                },
                {
                    name: "ICM-45686 (More expensive than LSM6DSR, slightly more precise)",
                    amount: (set) => set,
                    cost: () => 6.9,
                    costAll: (set) => set * 6.9 + 6.7,
                    links: '<a href="https://store.kouno.xyz/products/icm-45686-qmc6309-module" target=\"_blank\">KOUNOLAB ICM-45686 + QMC6309</a>',
                },
                {
                    name: "LSM6DSV",
                    amount: (set) => set,
                    cost: () => 9.2,
                    costAll: (set) => set * 9.2 + 5.58,
                    links: '<a href="https://moffshop.deyta.de/products/lsm6dsv-module" target="_blank">Moffshop LSM6DSV</a>',
                },
            ],
        },
        {
            name: "Button",
            choices: [
                {
                    name: "3X4X2MM SMD 2-PIN",
                    amount: () => tracker,
                    cost: () => 1.53 / 50,
                    costAll: () => 1.53 / 50 + 0.99,
                    links: '<a href="https://www.aliexpress.com/item/1005007004194449.html" target=\"_blank\">AliExpress 3x4x2mm 2pin, 50 pcs</a>',
                },
            ],
        },
        {
            name: "Batteries",
            choices: [
                {
                    name: "401230 3.7V 110mAh Battery",
                    amount: () => tracker,
                    cost: () => 8.49 / 10,
                    costAll: () => tracker * (8.49 / 10) + 5.2,
                    links: '<a href="https://www.aliexpress.com/item/714331867.html" target=\"_blank\">AliExpress 401230 3.7V 110mAh Battery, 10 pcs</a>',
                },
            ],
        },
        {
            name: 'Kapton Tape <sup><a href="smol-tracker.html#-kapton-tape" target="_blank">[more]</a></sup>',
            choices: [
                {
                    name: "Width: 20MM",
                    amount: () => 1,
                    cost: () => 1.37,
                    costAll: () => 1.37 + 0.99,
                    links: '<a href="https://www.aliexpress.com/item/1005007518587827.html" target=\"_blank\">AliExpress 5-40mm Kapton Tape</a>',
                },
            ],
        },
        {
            name: 'Wire for trackers wire mod\
            <br/>\
            <sup><a href="smol-tracker.html#-coper-wire-for-wire-antenna-mod" target="_blank">[more]</a></sup>',
            choices: [
                {
                    name: "24-26 AWG, 5m",
                    amount: () => 1,
                    cost: () => 1.85,
                    costAll: () => 1.85 + 1.68,
                    links: '<a href="https://www.aliexpress.com/item/1005002632016529.html" target=\"_blank\">AliExpress 24-26 AWG 5m</a>',
                },
                {
                    name: "26AWG, 10m spools - 6 pcs",
                    amount: () => 1,
                    cost: () => 14.99,
                    costAll: () => 14.99,
                    links: '<a href="https://www.amazon.com/dp/B07G2LRX68" target=\"_blank\">Amazon 26 AWG, 10m spools</a>',
                },
                {
                    name: "Sourced from Ethernet cable",
                    amount: () => 1,
                    cost: () => 3,
                    costAll: () => 3,
                    links: "Ethernet cable has 8 isolated copper wires inside. You can buy cable and cut it for wires.",
                },
                {
                    name: "Sourced elsewhere",
                    amount: () => 0,
                    cost: () => 0,
                    costAll: () => 0,
                    links: "",
                },
            ],
        },
        {
            name: "Cases",
            choices: [
                {
                    name: "3D printed, approximate cost",
                    amount: () => tracker,
                    cost: () => 2,
                    costAll: () => tracker * 2,
                    links: "\
                    Files of case designs can be found on <a href=\"smol-slimes-community-builds.html\" target=\"_blank\">community builds page</a>. Stacked designs are recommended.",
                },
                {
                    name: "Sourced elsewhere",
                    amount: () => 0,
                    cost: () => 0,
                    costAll: () => 0,
                    links: "",
                },
            ],
        },
        {
            name: "Straps",
            choices: [
                {
                    name: "DIY, Depact V2",
                    amount: (set) => set,
                    cost : (set) => 3.61 + + (set > 9 ? 2 : 1) * 5.07 + 12.62 + 0.99,
                    costAll: (set) => 3.61 + + (set > 9 ? 2 : 1) * 5.07 + 12.62 + 0.99,
                    links: '\
                    <a href="smol-slimes-community-straps.html#depact-v2-smol-strap" target="_blank">Depact V2 strap docs</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://www.aliexpress.com/item/1005004792179605.html" target=\"_blank\">$3.61 GoPro Chest Strap</a>\
                        </li>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/32804319193.html" target=\"_blank\">$5.07 32mm buckles 10pcs</a>\
                        </li>\
                        <li>\
                            <a href="https://www.aliexpress.com/item/1005003917576160.html" target=\"_blank\">$12.62 30mm, 10m band with latex webbing</a>\
                        </li>\
                        <li>\
                            Needle and thread\
                        </li>\
                    </ul>',
                },
                {
                    name: "Generic AliExpress straps - 6 pcs",
                    amount: (set) => (set <= 6 ? 1 : 2),
                    cost: () => 5,
                    costAll: (set) => (set <= 6 ? 1 : 2) * 5 + 2.77,
                    links: '<a href="https://aliexpress.com/item/1005001908740631.html" target="_blank">AliExpress straps</a>, get some in different sizes?',
                },
                {
                    name: "Generic Amazon straps - 5 pcs",
                    amount: (set) => (set < 5 ? 1 : 2),
                    cost: () => 9.0,
                    costAll: (set) => (set < 5 ? 1 : 2) * 9.0,
                    links: '<a href="https://www.amazon.com/dp/B09T5YDMTR/" target="_blank">Amazon straps</a>',
                },
                {
                    name: "Sourced elsewhere",
                    amount: () => 0,
                    cost: () => 0,
                    costAll: () => 0,
                    links: "",
                },
            ],
        },
        {
            name: "Dongle",
            choices: [
                {
                    name: "ProMicro nRF52840 with Wi-Fi Antenna Mod (Best price-to-performance ratio. Recommended go-to option. Range is about 4m, can't pierce walls)",
                    amount: () => 1,
                    cost: () => 6.55 / 2 + 2.55 * 1.40 + 0.99,
                    costAll: () => 6.55 / 2 + 2.55 * 1.40 + 0.99,
                    links: '\
                    <a href=\"smol-receiver.html#option-3-wi-fi-antenna-mod" target="_blank">Wi-Fi Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress TENSTAR 2pcs pack</a>\
                        </li>\
                        <li>\
                            <a href=\"https://www.aliexpress.com/item/1005006686310444.html" target="_blank">AliExpress Wi-Fi Antenna, Color: B</a>\
                        </li>\
                        <li>\
                            <a href=\"https://www.aliexpress.com/item/32896039259.html" target="_blank">AliExpress IPX to SMA RF Coax Adapter, 5cm</a>\
                        </li>\
                    </ul>',
                },
                {
                    name: "HolyIOT-21017 (Best performance option. Good signal over 4m and through walls, but most expensive)",
                    amount: () => 1,
                    cost: () => 18.08 + 0.99,
                    costAll: () => 18.08 + 0.99,
                    links: '\
                    <a href=\"smol-receiver.html#HolyIOT" target="_blank">HolyIOT-21017 docs reference.</a>\
                    <ul>\
                        <li>\
                            <a href=\"https://www.aliexpress.com/item/1005004673179004.html">AliExpress</a>\
                        </li>\
                        <li>\
                            <a href="https://holyiot.en.alibaba.com/search/product?SearchText=HOLYIOT-21017-nRF52840">Alibaba</a>\
                        </li>\
                    </ul>',
                },
                {
                    name: "ProMicro nRF52840 with Wire Antenna Mod (Cheapest option, but has the worst range. Range is about 3m, can't pierce walls)",
                    amount: () => 1,
                    cost: () => 6.55 / 2,
                    costAll: () => 6.55 / 2,
                    links: '\
                    <a href=\"./smol-receiver.html#option-2-wire-antenna-mod" target="_blank">Wire Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html">AliExpress TENSTAR 2pcs pack</a>\
                        </li>\
                        <li>\
                            Use the wire from the wire for antenna mod\
                        </li>\
                    </ul>',
                },
                {
                    name: "Sourced elsewhere",
                    amount: () => 0,
                    cost: () => 0,
                    costAll: () => 0,
                    links: "",
                },
            ],
        },
    ];

    const makeElement = (parent, type, contents = "") => {
        let el = document.createElement(type);
        el.innerHTML = contents;
        parent.appendChild(el);
        return el;
    };

    const tbody = document.getElementById("diy-components");

    const updatePrices = () => {
        // IMU number
        const set = document.querySelector("input[name=diy-set]:checked").value;
        // Tracker number
        tracker = +set;

        let total = 0;
        components.forEach((component) => {
            if (component.hideFor5Set) {
                component.tr.style.visibility = set == 5 ? "hidden" : "visible";
                if (set == 5) {
                    return;
                }
            }
            const updateValues = (choice) => {
                component.amount.innerHTML = choice.amount(set);
                component.cost.innerHTML =
                    "$" + Math.round(choice.cost(set) * 100) / 100;
                component.costAll.innerHTML =
                    "~$" + Math.round(choice.costAll(set) * 100) / 100;
                component.links.innerHTML = choice.links;

                total += choice.costAll(set);
            };
            if (component.choices.length == 1) {
                updateValues(component.choices[0]);
            } else {
                updateValues(component.choices[component.select.value]);
            }
        });

        var roundedTotal = Math.round(total * 100) / 100;
        document.getElementById("diy-total-value").innerHTML = roundedTotal;
    };

    components.forEach((component) => {
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
                var selectText = choice.cost(tracker) == 0 ? choice.name : choice.name + ", " +  Math.round(choice.cost(tracker) * 100) / 100 + "$";
                const option = makeElement(select, "option", selectText);
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
