/**
 * Smol Building Calculator - Components Data
 * Defines all component choices and their cost/amount calculations.
 * @module components-data
 */

export const recommendedTrackersPerReceiver = 8;

// TENSTAR NRF52840 2-pack: $7.16 (2pcs Red NRF52840)
export const nrf52840_2Pack_Price = 7.16;
export const nrf52840_Price = nrf52840_2Pack_Price / 2;
// 401230 120mAh 10pcs
export const battery_401230_10Pack_Price = 17.45;
export const battery_401230_Price = battery_401230_10Pack_Price / 10;


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
                name: "nRF52840 (AliExpress)",
                description: "Includes 20% overage to account for DOA (Dead on Arrival) issues.",
                amount: (set) => Math.ceil(set * 1.2) + " (20% overage)",
                cost: () => nrf52840_Price,
                costAll: (set) => Math.ceil(set * 1.2) * nrf52840_Price,
                links: '\
                    Available on AliExpress with <code>compatible with nice!nano</code>, <code>SuperMini</code>, or<code>Pro Micro</code> branding.\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress (2pcs Red NRF52840)</a>\
                            <br/>\
                            <span>$7.16 per 2-pack ($3.58/board).</span>\
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
                name: "🟢 ICM-45686 (SlimeVR shop)",
                description: "",
                amount: (set) => set,
                cost: () => 8,
                costAll: (set) => set * 8,
                links: '<a href="https://shop.slimevr.dev/products/slimevr-mumo-breakout-module-v1-icm-45686-qmc6309" target="_blank">SlimeVR Mumo Breakout Module V1 (ICM-45686 + QMC6309)</a>',
            },
            {
                name: "🟢 LSM6DSV (Moffshop)",
                amount: (set) => set,
                cost: () => 5.76,
                costAll: (set) => set * 5.76,
                links: '<a href="https://moffshop.deyta.de/products/lsm6dsv-module" target="_blank">Moffshop LSM6DSV</a>',
            },
            {
                name: "🟢 Nekumori Chrysalis LSM6DSV (Nekumori)",
                description: "An LSM6DSV shield with a button and RGB LED",
                amount: (set) => set,
                cost: () => 6.99,
                costAll: (set) => set * 6.99,
                links: '<a href="https://nekumori.pink/products/chrysalis" target="_blank">\'Chrysalis\' - Stacked Smol Slime Alternative | v2.1 - LSM6DSV</a>',
            },
        ],
    },
    {
        name: 'Button\
        <br/>\
        <sup><a href="smol-tracker.html#-buttons" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "3X4X2MM SMD 2-PIN (AliExpress)",
                amount: (set) => set,
                cost: () => 1.26 / 100,
                costAll: (set) => set * (1.26 / 100),
                links: '<a href="https://www.aliexpress.com/item/1005004194174696.html" target="_blank">AliExpress (100pcs)</a>',
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
                name: "401230 3.7V 120 mAh Battery (AliExpress)",
                description: "Most community cases are designed to accommodate this battery.",
                amount: (set) => set,
                cost: () => battery_401230_Price,
                costAll: (set) => set * battery_401230_Price,
                links: '<a href="https://www.aliexpress.com/item/1005006119986947.html" target="_blank">AliExpress (401230 3.7V 120 mAh Battery)</a>',
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
                name: "Width: 20MM (AliExpress)",
                description: "Do not skip using Kapton tape—it's essential to prevent short circuits when building stacked setups.",
                amount: () => 1,
                cost: () => 0.99,
                costAll: () => 0.99 + 0.99,
                links: '<a href="https://www.aliexpress.com/item/1005007518587827.html" target="_blank">AliExpress (Brown/33M/0.05MM/20MM)</a>\
                <br/>\
                <span>$0.99 per roll, plus $0.99 shipping.</span>',
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
                name: "🟢 22 AWG, 2m (AliExpress)",
                amount: () => 1,
                cost: () => 3.78,
                costAll: () => 3.78 + 1.68,
                links: '<a href="https://www.aliexpress.com/item/1005002632016529.html" target="_blank">AliExpress (22 AWG, 2m)</a>\
                <br/>\
                <span>$3.78 for 2m wire, plus $1.68 shipping.</span>',
            },
            {
                name: "🟡 26AWG, 10m spools - 6 pcs (Amazon)",
                amount: () => 1,
                cost: () => 14.99,
                costAll: () => 14.99,
                links: '<a href="https://www.amazon.com/dp/B07G2LRX68" target="_blank">Amazon (26 AWG, 10m spools)</a>',
            },
            {
                name: "🟢 Sourced from Ethernet cable",
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
                name: "🟢 3D printed, approximate cost",
                amount: (set) => set,
                cost: () => 2,
                costAll: (set) => set * 2,
                links: '\
                    Files of case designs can be found on <a href="smol-slimes-community-builds.html" target="_blank">community builds page</a>.\
                    <br/>\
                    <br/>\
                    Stacked designs are recommended.',
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
                name: "🟢 DIY, Depact V3",
                amount: (set) => set,
                cost: (set) => 0.99 + Math.ceil(set / 6) * 1.14,
                costAll: (set) => 0.99 + Math.ceil(set / 6) * 1.14,
                links: '<a href="smol-slimes-community-straps.html#depact-smol-strap-v3" target="_blank">Depact V3 strap docs</a>',
            },
            {
                name: "🟢 VYRO VR Comfort Strap Bundle",
                amount: () => 1,
                cost: (set) => {
                    if (set <= 6) return 109;
                    if (set <= 8) return 114;
                    return 139;
                },
                costAll: (set) => {
                    if (set <= 6) return 109;
                    if (set <= 8) return 114;
                    if (set <= 10) return 139;
                    return 278;
                },
                links: '\
                    <a href="https://vyrovr.com/products/vyro-vr-comfort-strap-bundles" target="_blank">VYRO VR Comfort Strap Bundles</a><br/>\
                    <br/>\
                    Variants:\
                    <ul>\
                        <li>Core: 1 Chest + 1 Hip + 2 Thigh + 2 Ankles + 3 Extension Brackets: $109</li>\
                        <li>Advanced: Core + 2 extra basic straps for feet trackers: $114</li>\
                        <li>Full Body: Core + 2 extra basic straps + 2 extra Comfort straps for arms: $139</li>\
                    </ul>',
            },
            {
                name: "🟡 VYRO VR Silicone Straps",
                amount: (set) => Math.ceil(set / 10),
                cost: () => 30,
                costAll: (set) => Math.ceil(set / 10) * 30,
                links: '\
                    <a href="https://vyrovr.com/products/10-slimevr-compatible-silicone-backed-30mm-straps" target="_blank">VYRO VR Silicone Straps</a><br/>\
                    10-pack: 2x30cm + 4x35cm + 2x50cm + 2x110cm\
                    <ul>\
                        <li>30cm (~12"): ankles, arms</li>\
                        <li>50cm (~20"): thighs, hip</li>\
                        <li>110cm (~43"): chest, waist</li>\
                    </ul><br/>\
                    <span>Add GoPro style chest strap to improve set.</span>',
            },
            {
                name: "🟡 Generic AliExpress straps + GoPro Chest Strap",
                amount: () => 0,
                cost: (set) => {
                    const five20cmPackCost = 2.26;
                    const five30cmPackCost = 2.68;
                    const five40cmPackCost = 3.02;
                    const deliveryCost = 0.99;
                    const packCostAveragePlusDelivery = (five20cmPackCost + five30cmPackCost + five40cmPackCost) / 3 + deliveryCost;

                    return packCostAveragePlusDelivery;
                },
                costAll: (set) => {
                    const five20cmPackCost = 2.26;
                    const five30cmPackCost = 2.68;
                    const five40cmPackCost = 3.02;
                    const deliveryCost = 0.99;

                    const twentyCmPacks = set <= 8 ? 1 : 2;
                    return five40cmPackCost + five30cmPackCost + twentyCmPacks * five20cmPackCost + deliveryCost;
                },
                links: '\
                    Parts:\
                    <ul>\
                        <li><a href="https://www.aliexpress.com/item/1005009646538072.html" target="_blank">AliExpress (30mm×20-40cm, 5pcs)</a>\
                            <br/>Most cases are designed for 30mm wide straps.\
                        </li>\
                        <li><a href="https://www.aliexpress.com/item/1005004792179605.html" target="_blank">$0.99 GoPro Chest Strap</a></li>\
                    </ul>\
                    Prices:\
                    <ul>\
                        <li>5×20cm: $2.26</li>\
                        <li>5×30cm: $2.68</li>\
                        <li>5×40cm: $3.02</li>\
                        <li>Delivery: $0.99</li>\
                    </ul>\
                    Example set configuration:\
                    <ul>\
                        <li>5 Lower: 1×5x40cm + 1×5x30cm + 1×5x20cm</li>\
                        <li>6 Core: 1×5x40cm + 1×5x30cm + 1×5x20cm</li>\
                        <li>8 Enhanced: 1×5x40cm + 1×5x30cm + 1×5x20cm</li>\
                        <li>10 Full: 1×5x40cm + 1×5x30cm + 2×5x20cm</li>\
                    </ul>'
            },
            {
                name: "🟡 Generic Amazon straps",
                amount: (set) => {
                    const fivePackCost = 8.99;
                    const packsNeeded = Math.ceil(set / 5);
                    return packsNeeded;
                },
                cost: () => 8.99,
                costAll: (set) => {
                    const fivePackCost = 8.99;
                    const packsNeeded = Math.ceil(set / 5);
                    return packsNeeded * fivePackCost;
                },
                links: '\
                    Parts:\
                    <ul>\
                        <li><a href="https://www.amazon.com/dp/B09T5YDMTR/" target="_blank">Amazon straps</a>\
                            <br/>3 size combo (12"×2 + 18"×2 + 24"×1) $8.99\
                            <ul>\
                                <li>24" (610mm): upper-body main trackers (chest, hip, spine)</li>\
                                <li>18" (457mm): thighs</li>\
                                <li>12" (305mm): ankles, elbows, arms</li>\
                            </ul>\
                        </li>\
                    </ul>\
                    Example set configuration:\
                    <ul>\
                        <li>5 Lower-Body: 1x3 size combo</li>\
                        <li>6 Core: 2x3 size combo</li>\
                        <li>8 Enhanced: 2x3 size combo</li>\
                        <li>10 Full: 2x3 size combo</li>\
                        <li>16 Deluxe: 4x3 size combo</li>\
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
        name: 'Dongle\
        <br/>\
        <sup><a href="smol-receiver.html" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "🟢 HolyIOT-21017 (AliExpress)",
                description: "Best performance option.<br/>Good signal over 4m, even through walls, but is the most expensive.",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => 16.17,
                costAll: (set) => 16.17 * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="https://www.aliexpress.com/item/1005004673179004.html" target="_blank">AliExpress</a>\
                    <br/>\
                    <span>$16.17 per receiver (one per 8 trackers, min 1).</span>',
            },
            {
                name: "🟡 nRF52840 with Wi-Fi Antenna Mod (AliExpress)",
                description: "Range is about 4m and cannot penetrate walls",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => nrf52840_Price + 3.14,
                costAll: (set) => (nrf52840_Price + 3.14) * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="smol-receiver.html#option-3-wi-fi-antenna-mod" target="_blank">Wi-Fi Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress (2pcs Red NRF52840)</a>\
                            <br/>\
                            $7.16(2pack)/2 = $3.58/board\
                        </li>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/4000298368244.html" target="_blank">AliExpress (5PCS)</a>\
                            <br/>\
                            $3.14 antenna\
                        </li>\
                    </ul>',
            },
            {
                name: "🟠 nRF52840 with Wire Antenna Mod (AliExpress)",
                description: "Cheapest option with the shortest range.<br/>Range is about 3m and cannot penetrate walls",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => nrf52840_Price,
                costAll: (set) => (nrf52840_Price) * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="./smol-receiver.html#option-2-wire-antenna-mod" target="_blank">Wire Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html">AliExpress (2pcs Red NRF52840)</a>\
                            <br/>\
                            $7.16(2pack)/2 = $3.58 per board\
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
                name: "🟡 Depact Smol Sudo Dock",
                amount: (set) => Math.ceil(set / 7),
                cost: (set) => Math.ceil(set / 7) * 0.99 + set * 0.38 + 0.99,
                costAll: (set) => Math.ceil(set / 7) * 0.99 + set * 0.38 + 0.99,
                links: '<a href="../community/smol-slimes-community-docks.html#depact-smol-sudo-dock" target="_blank">Depact Smol Sudo Dock docs</a>',
            },
        ],
    },
];
