/**
 * Smol Slimes DIY Building Calculator
 * Dynamically generates a table of component choices and calculates total cost for building SlimeVR trackers.
 * @module smol-building-calculator
 */
(() => {
    var tracker = 6; // Default number of trackers

    const components = [
        {
            name: "Microcontroller",
            choices: [
                {
                    name: "nRF52840\
                    <br/>(With overage, to avoid Dead On Arrival issues)",
                    amount: () => Math.round(tracker * 1.2) + " (20% overage)",
                    cost: () => 6.55 / 2,
                    costAll: () => Math.round(tracker * 1.2) * (6.55 / 2),
                    links: '\
                    Available on AliExpress with <code>compatible with nice!nano</code>, <code>SuperMini</code>, or<code>Pro Micro</code> branding.\
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
                    name: "LSM6DSR",
                    description: "Half the price of ICM-45686, with slightly more drift",
                    amount: (set) => set,
                    cost: () => 3.52,
                    costAll: (set) => set * 3.52 + 6.7,
                    links: '<a href="https://moffshop.deyta.de/products/lsm6dsr" target=\"_blank\">Moffshop LSM6DSR + QMC6309</a>',
                },
                {
                    name: "ICM-45686",
                    description: "More expensive than LSM6DSR, slightly more precise",
                    amount: (set) => set,
                    cost: () => 7.44,
                    costAll: (set) => set * 7.44 + 6.7,
                    links: '<a href="https://shop.slimevr.dev/products/slimevr-mumo-breakout-module-v1-icm-45686-qmc6309" target=\"_blank\">SlimeVR Mumo Breakout Module V1 (ICM-45686 + QMC6309)</a>',
                },
                {
                    name: "LSM6DSV",
                    amount: (set) => set,
                    cost: () => 9.4,
                    costAll: (set) => set * 9.4 + 5.58,
                    links: '<a href="https://moffshop.deyta.de/products/lsm6dsv-module" target="_blank">Moffshop LSM6DSV</a>',
                },
                {
                    name: "Nekumori Chrysalis",
                    description: "ICM-45686 shield with button and RGB LED",
                    amount: (set) => set,
                    cost: () => 10,
                    costAll: (set) => set * 10 + 4.9,
                    links: '<a href="https://nekumori.pink/products/chysalis-v1_3" target="_blank">Nekumori Chrysalis</a>',
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
                    description: "Provides approximately 25 hours of runtime. Most community cases are designed to accommodate it.",
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
            <sup><a href="smol-tracker.html#-copper-wire-for-wire-antenna-mod" target="_blank">[more]</a></sup>',
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
                    Files of case designs can be found on <a href=\"smol-slimes-community-builds.html\" target=\"_blank\">community builds page</a>.<br/>Stacked designs are recommended.",
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
                    cost: (set) => 3.61 + +(set > 9 ? 2 : 1) * 5.07 + 12.62 + 0.99,
                    costAll: (set) => 3.61 + +(set > 9 ? 2 : 1) * 5.07 + 12.62 + 0.99,
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
                            <a href="https://www.aliexpress.com/item/1005003917576160.html" target=\"_blank\">$12.62 30mm, 5m band with latex webbing</a>\
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
                    name: "nRF52840 with Wi-Fi Antenna Mod",
                    description: "Best price-to-performance ratio. Recommended go-to option. Range is about 4m, can't pierce walls",
                    amount: () => 1,
                    cost: () => 6.55 / 2 + 2.7,
                    costAll: () => 6.55 / 2 + 2.7,
                    links: '\
                    <a href=\"smol-receiver.html#option-3-wi-fi-antenna-mod" target="_blank">Wi-Fi Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress TENSTAR 2pcs pack</a>\
                        </li>\
                        <li>\
                            <a href=\"https://pl.aliexpress.com/item/4000298368244.html" target="_blank">AliExpress OOTDTY 5 Pcs 2.4G/5.8G Dual Band Antenna</a>\
                        </li>\
                    </ul>',
                },
                {
                    name: "HolyIOT-21017",
                    description: "Best performance option. Good signal over 4m and through walls, but most expensive",
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
                    name: "nRF52840 with Wire Antenna Mod",
                    description: "Cheapest option, but has the worst range. Range is about 3m, can't pierce walls",
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
        {
            name: "Dock",
            choices: [
                {
                    name: "Sourced elsewhere",
                    amount: () => 0,
                    cost: () => 0,
                    costAll: () => 0,
                    links: "",
                },
                {
                    name: "Depact Smol Sudo Dock",
                    amount: () => Math.round(tracker / 7),
                    cost: () => Math.round(tracker / 7) * 6.38 + tracker * 0.36,
                    costAll: () => Math.round(tracker / 7) * 6.38 + tracker * 0.36,
                    links: '\
                    <a href=\"smol-slimes-community-builds.html#depact-smol-sudo-dock" target="_blank">Depact Smol Sudo Dock docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">7 Ports USB Hub</a>\
                        </li>\
                        <li>\
                            <a href=\"https://aliexpress.com/item/1005007396270447.html" target="_blank">Type-C Male to USB-A Male OTG Connector\
                            </a>\
                        </li>\
                    </ul>',
                },
            ],
        },
    ];

    /**
     * Needed to dynamically create and append table cells and rows for each component and choice,
     * allowing the calculator to build the UI based on the data structure rather than static HTML.
     * @param {HTMLElement} parent - The parent element to append to.
     * @param {string} type - The type of element to create (e.g., 'td', 'tr').
     * @param {string} [contents=""] - The innerHTML for the element.
     * @returns {HTMLElement} The created element.
     */
    const makeElement = (parent, type, contents = "") => {
        let el = document.createElement(type);
        el.innerHTML = contents;
        parent.appendChild(el);
        return el;
    };

    /**
     * Needed to ensure cost values are presented in a user-friendly format.
     * Formats a number to two decimal places, removing trailing ".00" if present.
     * @param {number} value - The number to format.
     * @returns {string} The formatted string, e.g. "18" or "18.25".
     */
    function formatCost(value) {
        return value.toFixed(2).replace(/\.00$/, "");
    }

    /**
     * Needed to get the currently selected tracker set value from the radio buttons.
     * @returns {number}
     */
    function getSelectedSet() {
        return +document.querySelector("input[name=diy-set]:checked").value;
    }

    /**
     * Needed to get the selected choice index for a component's radio group.
     * @param {Array<HTMLInputElement>} radioGroup
     * @returns {number}
     */
    function getSelectedChoiceIndex(radioGroup) {
        const checkedRadio = radioGroup.find((radio) => radio.checked);
        return checkedRadio ? checkedRadio.value : 0;
    }

    /**
     * Needed to update a single component row in the table based on the selected choice and tracker set.
     * @param {Object} component
     * @param {number} set
     * @returns {number} The cost for this component.
     */
    function updateComponentRow(component, set) {
        if (component.hideFor5Set) {
            component.tr.style.visibility = set == 5 ? "hidden" : "visible";
            if (set == 5) {
                return 0;
            }
        }
        let choice;
        if (component.choices.length == 1) {
            choice = component.choices[0];
        } else {
            const selectedIndex = getSelectedChoiceIndex(component.radioGroup);
            choice = component.choices[selectedIndex];
        }
    
        if (choice.amount(set) != 0) {
            component.amount.innerHTML = choice.amount(set);
        }

        if (choice.costAll(set) != 0) {
            component.cost.innerHTML = "$" + formatCost(choice.cost(set));
        }

        if (choice.costAll(set) != 0) {
            component.costAll.innerHTML = "~$" + formatCost(choice.costAll(set));
        }

        component.links.innerHTML = choice.links;
        return choice.costAll(set);
    }

    /**
     * Needed to keep the displayed prices and quantities in sync with user selections,
     * so the calculator always reflects the current configuration and component choices.
     * Now delegates to smaller helpers for clarity.
     */
    const updatePrices = () => {
        const set = getSelectedSet();
        tracker = set;

        let total = 0;
        components.forEach((component) => {
            total += updateComponentRow(component, set);
        });

        var roundedTotal = formatCost(total);
        document.getElementById("diy-total-value").innerHTML = roundedTotal;
    };

    /**
     * Needed to create and initialize a table row for each component,
     * so the calculator UI is generated dynamically from the data structure.
     * @param {Object} component
     * @param {HTMLElement} tbody
     */
    function createComponentRow(component, tbody) {
        const tr = makeElement(tbody, "tr");
        component.tr = tr;
        makeElement(tr, "th", component.name);

        const choice = makeElement(tr, "td");
        if (component.choices.length == 1) {
            choice.innerHTML = component.choices[0].name;
        } else {
            // Generate radio buttons instead of select
            component.radioGroup = [];
            component.radioName = "name-" + component.name;
            component.choices.forEach((choiceObj, index) => {
                const label = document.createElement("label");
                label.style.display = "block";
                label.style.cursor = "pointer";
                var selectText =
                    choiceObj.costAll(tracker) == 0
                        ? choiceObj.name
                        : `${choiceObj.name}, (${choiceObj.costAll(tracker).toFixed(2)}\$ total)`;
                // Radio input
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = component.radioName;
                radio.value = index;
                if (index === 0) radio.checked = true;
                radio.addEventListener("change", updatePrices);
                component.radioGroup.push(radio);
                label.appendChild(radio);
                // Label text
                label.insertAdjacentHTML("beforeend", " " + selectText);
                choice.appendChild(label);
            });
        }

        component.amount = makeElement(tr, "td");
        component.cost = makeElement(tr, "td");
        component.costAll = makeElement(tr, "td");
        component.links = makeElement(tr, "td");
    }

    const tbody = document.getElementById("diy-components");
    components.forEach((component) => createComponentRow(component, tbody));

    updatePrices();
    document.querySelectorAll('input[name="diy-set"]').forEach((set) => set.addEventListener("change", updatePrices));
})();
