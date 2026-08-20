const primaryCountMap = { 5: 5, 6: 6, 8: 6, 10: 8 };

export function primaryTrackerCount(set) {
  return primaryCountMap[set] !== undefined ? primaryCountMap[set] : set;
}

export function extensionCount(set) {
  return set - primaryTrackerCount(set);
}

export function physicalTrackerCount(set) {
  return set;
}

export const componentCategories = [
  {
    name: 'Microcontroller',
    choices: [
      {
        name: 'Wemos D1 Mini (AliExpress)',
        description: 'ESP8266 dev board. Standard choice for DIY SlimeVR trackers.',
        amount: (set) => primaryTrackerCount(set),
        cost: () => 1.85,
        costAll: (set) => primaryTrackerCount(set) * 1.85,
        links: '\
            <a href="https://www.aliexpress.com/wholesale?SearchText=D1+mini">AliExpress Wemos D1 Mini</a><br/>\
            <span>$1.85 per board, plus $2.53 shipping.</span>',
      },
    ],
  },
  {
    name: 'IMU',
    choices: [
      {
        name: '🟢 ICM-45686 (SlimeVR shop)',
        description: 'Best performance option.',
        amount: (set) => set,
        cost: () => 6.70,
        costAll: (set) => set * 6.70 + 6.70,
        links: '\
            <a href="https://shop.slimevr.dev/products/slimevr-mumo-breakout-module-v1-icm-45686-qmc6309">SlimeVR Mumo Breakout Module V1 (ICM-45686 + QMC6309)</a><br/>\
            <span>$6.70 per IMU. Cost includes one extra spare (+$6.70).</span>',
      },
      {
        name: '🟢 LSM6DSV (Moffshop)',
        description: 'Great performance from Moffshop.',
        amount: (set) => set,
        cost: () => 8.93,
        costAll: (set) => set * 8.93 + 5.58,
        links: '\
            <a href="https://moffshop.deyta.de/products/lsm6dsv-module" target="_blank">Moffshop LSM6DSV</a><br/>\
            <span>$8.93 per IMU. Cost includes one extra spare (+$5.58).</span>',
      },
      {
        name: '🟢 LSM6DSR (AliExpress)',
        description: 'Budget option.',
        amount: (set) => set,
        cost: () => 3.35,
        costAll: (set) => set * 3.35 + 6.70,
        links: '\
            <a href="https://www.aliexpress.com/wholesale?SearchText=LSM6DSR">AliExpress LSM6DSR</a><br/>\
            <span>$3.35 per IMU. Cost includes one extra spare (+$6.70).</span>',
      },
    ],
  },
  {
    name: 'Batteries',
    choices: [
      {
        name: '1800 mAh 804040 Li-Po (AliExpress)',
        description: 'Large capacity. One per primary tracker.',
        amount: () => 1,
        cost: () => 23.72,
        costAll: () => 23.72,
        links: '\
            <a href="https://www.aliexpress.com/item/1005009612692951.html">804040 1800mAh (10pcs 2 wires) (AliExpress)</a>',
      },
      {
        name: 'Sourced elsewhere',
        amount: (set) => primaryTrackerCount(set),
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Charging Board',
    choices: [
      {
        name: 'TP4056 USB charging board (AliExpress)',
        description: 'One per primary tracker.',
        amount: (set) => primaryTrackerCount(set),
        cost: () => 0.99,
        costAll: (set) => primaryTrackerCount(set) * 0.99,
        links: '\
            <a href="https://www.aliexpress.com/item/32649780468.html">AliExpress (18650 mini / type-c / micro)</a>',
      },
      {
        name: 'TP4056 USB charging board - 10 pcs (Amazon)',
        description: 'Enough for 10 primary trackers.',
        amount: () => 1,
        cost: () => 7.99,
        costAll: () => 7.99,
        links: '\
            <a href="https://www.amazon.com/dp/B08DNK398S">Amazon TP4056 (10 pcs) </a><br/>\
            <span>$7.99 for 10pcs.</span>',
      },
      {
        name: 'Sourced elsewhere',
        amount: (set) => primaryTrackerCount(set),
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Power Switches',
    choices: [
      {
        name: 'SS22F32 switches - 10 pcs (AliExpress)',
        description: '',
        amount: () => 1,
        cost: () => 1.97,
        costAll: () => 1.97,
        links: '\
            <a href="https://www.aliexpress.com/item/32975535599.html">AliExpress</a><br/>\
            <span>$1.97 for 10pcs.</span>',
      },
      {
        name: 'SS22F32 switches - 10 pcs (Amazon)',
        description: '',
        amount: () => 1,
        cost: () => 7.99,
        costAll: () => 7.99,
        links: '\
            <a href="https://www.amazon.com/dp/B083RBS2RT">Amazon SS22F32 switches</a><br/>\
            <span>$7.99 for 10pcs.</span>',
      },
      {
        name: 'Sourced elsewhere',
        amount: (set) => primaryTrackerCount(set),
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Diodes',
    choices: [
      {
        name: '1N5817 diodes - 50 pcs (AliExpress)',
        description: 'Optional for battery protection.',
        amount: () => 1,
        cost: () => 0.99,
        costAll: () => 0.99,
        links: '\
            <a href="https://www.aliexpress.us/item/3256801365779334.html">AliExpress (1N5817)</a><br/>\
            <span>$0.62 for 50pcs, plus $2.21 shipping.</span>',
      },
      {
        name: '1N5817 diodes - 100 pcs (Amazon)',
        description: 'Optional for battery protection.',
        amount: () => 1,
        cost: () => 5.99,
        costAll: () => 5.99,
        links: '\
            <a href="https://www.amazon.com/dp/B079KDQQPD">Amazon 1N5817 diodes</a><br/>\
            <span>$5.99 for 100pcs.</span>',
      },
      {
        name: 'Sourced elsewhere',
        defaultSelected: true,
        amount: (set) => primaryTrackerCount(set),
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Resistors',
    choices: [
      {
        name: '180K ohm resistors - 100 pcs (AliExpress)',
        description: 'Optional for battery percentage reporting.',
        amount: () => 1,
        cost: () => 1.96,
        costAll: () => 1.96 + 1.29,
        links: '\
            <a href="https://www.aliexpress.us/item/3256802808441054.html">AliExpress (100pcs 180K ohms)</a><br/>\
            <span>$1.96 for 100pcs, plus $1.29 shipping.</span>',
      },
      {
        name: '180K ohm resistors - 100 pcs (Amazon)',
        description: 'Optional for battery percentage reporting.',
        amount: () => 1,
        cost: () => 4.99,
        costAll: () => 4.99,
        links: '\
            <a href="https://www.amazon.com/dp/B07HDFCNXB">Amazon 180K ohm resistors</a><br/>\
            <span>$4.99 for 100pcs.</span>',
      },
      {
        name: 'Sourced elsewhere',
        defaultSelected: true,
        amount: () => 0,
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Carrier Board Options',
    choices: [
      {
        name: 'PCB chosen from cases page',
        amount: () => 10,
        cost: () => 0.50,
        costAll: () => 5,
        links: '\
            <a href="https://docs.slimevr.dev/diy/cases.html">Cases page here</a><br/>\
            <span>$0.50 per PCB, $5 for 10pcs.</span><br/>\
            <span>Order 10 PCBs from a PCB fab.</span>',
      },
      {
        name: '24-26 AWG Wire, No PCB (Not Recommended) (AliExpress)',
        description: 'Point-to-point wiring instead of PCB.',
        amount: () => 1,
        cost: () => 1.85,
        costAll: () => 1.85 + 1.68,
        links: '\
            <a href="https://www.aliexpress.com/item/1005002632016529.html">AliExpress (22 AWG, 2m)</a><br/>\
            <span>$1.85 for wire, plus $1.68 shipping.</span>',
      },
      {
        name: '26AWG Wire, No PCB (Not Recommended) (Amazon)',
        description: '10m spools, 6-pack.',
        amount: () => 1,
        cost: () => 14.99,
        costAll: () => 14.99,
        links: '\
            <a href="https://www.amazon.com/dp/B07G2LRX68">Amazon 26 AWG, 10m spools</a><br/>\
            <span>$14.99 for 6 spools.</span>',
      },
      {
        name: 'Sourced elsewhere',
        amount: (set) => primaryTrackerCount(set),
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Wiring for Extensions',
    hideFor5Set: true,
    choices: [
      {
        name: 'JST connectors (AliExpress)',
        description: '\
          (JST 1.25mm, 5 pin, Length 100mm, 5 pcs)<br/>\
          Optional for removable extensions. 2 connectors per extension.',
        amount: (set) => Math.ceil(extensionCount(set) * 2 / 5),
        cost: () => 6.92,
        costAll: (set) => Math.ceil(extensionCount(set) * 2 / 5) * 6.92,
        links: '\
            <a href="https://www.aliexpress.us/item/3256803829669959.html">AliExpress JST connectors</a><br/>\
            <span>$3 for 5pcs, plus $3.96 shipping.</span>',
      },
      {
        name: 'JST connectors - 5 pin 20 pcs (Amazon)',
        description: 'Optional for removable extensions. 2 connectors per extension.',
        amount: (set) => Math.ceil(extensionCount(set) * 2 / 20),
        cost: () => 12.98,
        costAll: (set) => Math.ceil(extensionCount(set) * 2 / 20) * 12.98,
        links: '\
            <a href="https://www.amazon.com/dp/B075K6N7DF">Amazon JST connectors</a><br/>\
            <span>$12.98 for 20pcs.</span>',
      },
      {
        name: 'Sourced elsewhere',
        amount: (set) => extensionCount(set),
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Cases',
    choices: [
      {
        name: '🟢 3D printed yourself, approximate $',
        description: '',
        amount: (set) => set,
        cost: () => 2,
        costAll: (set) => set * 2,
        links: '\
            <span>You make your own cases!<br/><br/>$2 per case (3D print material estimate).</span>',
      },
      {
        name: '🟡 Amazon cases - 6 pcs (Amazon)',
        description: '1 pack for up to 6 trackers, 2 for 7+.',
        amount: (set) => Math.ceil(set / 6),
        cost: () => 7.49,
        costAll: (set) => Math.ceil(set / 6) * 7.49,
        links: '\
            <a href="https://www.amazon.com/dp/B08T97JD6Z">Amazon cases</a><br/>\
            <span>$7.49 per 6-pack.</span>',
      },
      {
        name: 'Sourced elsewhere',
        amount: (set) => set,
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
  {
    name: 'Straps',
    choices: [
      {
        name: '🟢 VYRO VR Comfort Strap Bundle',
        amount: () => 1,
        cost: (set) => {
          if (set <= 6) return 109;
          if (set <= 8) return 114;
          return 139;
        },
        costAll: (set) => {
          if (set <= 6) return 109;
          if (set <= 8) return 114;
          return 139;
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
        name: '🟡 VYRO VR Silicone Straps',
        amount: (set) => 1,
        cost: () => 27.46,
        costAll: (set) => 27.46,
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
        name: '🟡 Generic AliExpress straps - 6 pcs (AliExpress)',
        description: '1 pack for fewer than 6 trackers, 2 for 6+.',
        amount: (set) => Math.ceil(set / 6),
        cost: () => 5,
        costAll: (set) => Math.ceil(set / 6) * 5 + 2.77,
        links: '\
            <a href="https://aliexpress.com/item/1005001908740631.html">AliExpress straps</a><br/>\
            <span>$5 per 6-pack, plus $2.77 shipping.</span>',
      },
      {
        name: '🟡 Generic Amazon straps - 5 pcs (Amazon)',
        description: '1 pack for under 5 trackers, 2 for 5+.',
        amount: (set) => Math.ceil(set / 5),
        cost: () => 9.00,
        costAll: (set) => Math.ceil(set / 5) * 9.00,
        links: '\
            <a href="https://www.amazon.com/dp/B09T5YDMTR/">Amazon straps</a><br/>\
            <span>$9 per 5-pack.</span>',
      },
      {
        name: 'Sourced elsewhere',
        defaultSelected: true,
        amount: (set) => set,
        cost: () => 0,
        costAll: () => 0,
        links: '',
      },
    ],
  },
];
