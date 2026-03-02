/**
 * Smol Building Calculator - Components Data
 * Defines all component choices and their cost/amount calculations.
 * @module components-data
 */

export const recommendedTrackersPerReceiver = 8;

function calculateRecommendedReceiversAmount(set) {
    return Math.max(1, Math.ceil(set / recommendedTrackersPerReceiver));
}


/**
 * @typedef {Object} Choice
 * @property {string} name - Name of the part.
 * @property {string} [description] - Description of the part.
 * @property {(number|((set:number)=>number|string))} amount - Numeric amount or function returning amount/display string.
 * @property {(number|((set:number)=>number))} cost - Unit cost or function returning unit cost.
 * @property {(number|((set:number)=>number))} costAll - Total cost or function returning total cost.
 * @property {string} links - HTML string with purchase links/info.
 */

/**
 * @typedef {Object} ComponentCategory
 * @property {string} name - Name of the component category.
 * @property {Choice[]} choices - Available choices for this component.
 * @property {boolean} [hideFor5Set] - Whether to hide this component when 5-set is selected.
 */

/**
 * All component categories and their choice options.
 * @type {ComponentCategory[]}
 */
export const componentCategories = [
    {
        name: 'Microcontroller\
        <br/>\
        <sup><a href="smol-tracker.html#-microcontroller-boards" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "nRF52840",
                description: "Includes 20% overage to account for DOA (Dead on Arrival) issues",
                amount: (set) => Math.ceil(set * 1.2) + " (20% overage)",
                cost: () => 6.55 / 2,
                costAll: (set) => Math.ceil(set * 1.2) * (6.55 / 2),
                links: '\
                    Available on AliExpress with <code>compatible with nice!nano</code>, <code>SuperMini</code>, or<code>Pro Micro</code> branding.\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress TENSTAR 2pcs pack</a>\
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
        name: 'IMU\
        <br/>\
        <sup><a href="smol-tracker.html#-inertial-measurement-units" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "LSM6DSR",
                description: "Half the price of the ICM-45686, but with slightly more drift",
                amount: (set) => set,
                cost: () => 3.52,
                costAll: (set) => set * 3.52 + 6.7,
                links: '<a href="https://moffshop.deyta.de/products/lsm6dsr" target="_blank">Moffshop LSM6DSR + QMC6309</a>',
            },
            {
                name: "ICM-45686",
                description: "More expensive than the LSM6DSR, but slightly more precise",
                amount: (set) => set,
                cost: () => 7.44,
                costAll: (set) => set * 7.44 + 6.7,
                links: '<a href="https://shop.slimevr.dev/products/slimevr-mumo-breakout-module-v1-icm-45686-qmc6309" target="_blank">SlimeVR Mumo Breakout Module V1 (ICM-45686 + QMC6309)</a>',
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
                description: "An ICM-45686 shield with a button and RGB LED",
                amount: (set) => set,
                cost: () => 10,
                costAll: (set) => set * 10 + 4.9,
                links: '<a href="https://nekumori.pink/products/chysalis-v1_3" target="_blank">Nekumori Chrysalis</a>',
            },
        ],
    },
    {
        name: 'Button\
        <br/>\
        <sup><a href="smol-tracker.html#-buttons" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "3X4X2MM SMD 2-PIN",
                amount: (set) => set,
                cost: () => 1.53 / 50,
                costAll: () => 1.53 / 50 + 0.99,
                links: '<a href="https://www.aliexpress.com/item/1005007004194449.html" target="_blank">AliExpress 3x4x2mm 2pin, 50 pcs</a>',
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
        name: 'Batteries\
        <br/>\
        <sup><a href="smol-tracker.html#-batteries" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "401230 3.7V 110 mAh Battery",
                description: "Most community cases are designed to accommodate this battery.",
                amount: (set) => set,
                cost: () => 8.49 / 10,
                costAll: (set) => set * (8.49 / 10) + 5.2,
                links: '<a href="https://www.aliexpress.com/item/714331867.html" target="_blank">AliExpress 401230 3.7V 110mAh Battery, 10 pcs</a>',
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
        name: 'Kapton Tape <sup><a href="smol-tracker.html#-kapton-tape" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "Width: 20MM",
                description: "Do not skip using Kapton tape—it's essential to prevent short circuits when building stacked setups.",
                amount: () => 1,
                cost: () => 1.37,
                costAll: () => 1.37 + 0.99,
                links: '<a href="https://www.aliexpress.com/item/1005007518587827.html" target="_blank">AliExpress 5-40mm Kapton Tape</a>',
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
        name: 'Wire for trackers wire mod\
            <br/>\
            <sup><a href="smol-tracker.html#-copper-wire-for-wire-antenna-mod" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "24-26 AWG, 5m",
                amount: () => 1,
                cost: () => 1.85,
                costAll: () => 1.85 + 1.68,
                links: '<a href="https://www.aliexpress.com/item/1005002632016529.html" target="_blank">AliExpress 24-26 AWG 5m</a>',
            },
            {
                name: "26AWG, 10m spools - 6 pcs",
                amount: () => 1,
                cost: () => 14.99,
                costAll: () => 14.99,
                links: '<a href="https://www.amazon.com/dp/B07G2LRX68" target="_blank">Amazon 26 AWG, 10m spools</a>',
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
        name: 'Cases\
        <br/>\
        <sup><a href="smol-tracker.html#-cases" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "3D printed, approximate cost",
                amount: (set) => set,
                cost: () => 2,
                costAll: (set) => set * 2,
                links: '\
                    Files of case designs can be found on <a href="smol-slimes-community-builds.html" target="_blank">community builds page</a>.<br/>Stacked designs are recommended.',
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
        name: 'Straps\
        <br/>\
        <sup><a href="smol-tracker.html#-straps" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "DIY, Depact V2",
                amount: (set) => set,
                cost: (set) => 3.66 + +(set > 9 ? 2 : 1) * 5.07 + 12.62 + 0.99,
                costAll: (set) => 3.66 + +(set > 9 ? 2 : 1) * 5.07 + 12.62 + 0.99,
                links: '\
                    <a href="smol-slimes-community-straps.html#depact-v2-smol-strap" target="_blank">Depact V2 strap docs</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://www.aliexpress.com/item/1005004792179605.html" target="_blank">$3.61 GoPro Chest Strap</a>\
                        </li>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/32804319193.html" target="_blank">$5.07 32mm buckles 10pcs</a>\
                        </li>\
                        <li>\
                            <a href="https://www.aliexpress.com/item/1005003917576160.html" target="_blank">$12.62 30mm, 5m band with latex webbing</a>\
                        </li>\
                        <li>\
                            Needle and thread\
                        </li>\
                    </ul>',
            },
            {
                name: "Generic AliExpress straps + GoPro Chest Strap",
                amount: (set) => Math.ceil(set / 5),
                cost: () => 5 + 3.66,
                costAll: (set) => Math.ceil(set / 5) * 2.67 + 2.77 + 3.66,
                links: '\
                    Parts:\
                    <ul>\
                        <li><a href="https://aliexpress.com/item/1005001908740631.html" target="_blank">AliExpress straps</a>\
                            <br/>Most cases are designed for 30mm wide straps.\
                        </li>\
                        <li><a href="https://www.aliexpress.com/item/1005004792179605.html" target="_blank">GoPro Chest Strap</a></li>\
                    </ul>',
            },
            {
                name: "Generic AliExpress straps",
                amount: (set) => Math.ceil(set / 5),
                cost: () => 5,
                costAll: (set) => Math.ceil(set / 5) * 2.67 + 2.77,
                links: '\
                    Parts:\
                    <ul>\
                        <li><a href="https://aliexpress.com/item/1005001908740631.html" target="_blank">AliExpress straps</a>\
                            <br/>Most cases are designed for 30mm wide straps.\
                        </li>\
                    </ul>',
            },
            {
                name: "Generic Amazon straps",
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
        name: 'Dongle\
        <br/>\
        <sup><a href="smol-receiver.html" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "🟢 HolyIOT-21017",
                description: "Best performance option.<br/>Good signal over 4m, even through walls, but is the most expensive",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => 11 + 0.99,
                costAll: (set) => (11 + 0.99) * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="smol-receiver.html#HolyIOT" target="_blank">HolyIOT-21017 docs reference.</a>\
                    <ul>\
                        <li>\
                            <a href="https://www.aliexpress.com/item/1005004673179004.html">AliExpress</a>\
                        </li>\
                        <li>\
                            <a href="https://holyiot.en.alibaba.com/search/product?SearchText=HOLYIOT-21017-nRF52840">Alibaba</a>\
                        </li>\
                    </ul>',
            },
            {
                name: "🟠 nRF52840 with Wi-Fi Antenna Mod",
                description: "Range is about 4m and cannot penetrate walls",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => 6.55 / 2 + 2.7,
                costAll: (set) => (6.55 / 2 + 2.7) * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="smol-receiver.html#option-3-wi-fi-antenna-mod" target="_blank">Wi-Fi Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress TENSTAR 2pcs pack</a>\
                        </li>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/4000298368244.html" target="_blank">AliExpress OOTDTY 5 Pcs 2.4G/5.8G Dual Band Antenna</a>\
                        </li>\
                    </ul>',
            },
            {
                name: "🟠 nRF52840 with Wire Antenna Mod",
                description: "Cheapest option with the shortest range.<br/>Range is about 3m and cannot penetrate walls",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => 6.55 / 2,
                costAll: (set) => (6.55 / 2) * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="./smol-receiver.html#option-2-wire-antenna-mod" target="_blank">Wire Antenna Mod docs reference.</a>\
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
                amount: (set) => Math.ceil(set / 7),
                cost: (set) => Math.ceil(set / 7) * 6.38 + set * 0.36,
                costAll: (set) => Math.ceil(set / 7) * 6.38 + set * 0.36,
                links: '\
                    <a href="smol-slimes-community-builds.html#depact-smol-sudo-dock" target="_blank">Depact Smol Sudo Dock docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://aliexpress.com/item/1005008981599421.html" target="_blank">7 Ports USB Hub</a>\
                        </li>\
                        <li>\
                            <a href="https://aliexpress.com/item/1005007396270447.html" target="_blank">Type-C Male to USB-A Male OTG Connector\
                            </a>\
                        </li>\
                    </ul>',
            },
        ],
    },
];
