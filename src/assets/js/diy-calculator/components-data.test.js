import { describe, it, expect } from 'vitest';
import { componentCategories, physicalTrackerCount, primaryTrackerCount, extensionCount } from './components-data.js';

const SET = { LOWER: 5, CORE: 6, ENHANCED: 8, FULL: 10 };

function cat(name) {
  return componentCategories.find(c => c.name === name);
}
function choice(category, index) {
  return cat(category).choices[index];
}

describe('primaryTrackerCount', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${5}
    ${SET.CORE} | ${6}
    ${SET.ENHANCED}| ${6}
    ${SET.FULL} | ${8}
  `('returns $expected for set=$set', ({ set, expected }) => {
    expect(primaryTrackerCount(set)).toBe(expected);
  });
});

describe('extensionCount', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('returns $expected for set=$set', ({ set, expected }) => {
    expect(extensionCount(set)).toBe(expected);
  });
});

describe('physicalTrackerCount', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${SET.LOWER}
    ${SET.CORE} | ${SET.CORE}
    ${SET.ENHANCED}| ${SET.ENHANCED}
    ${SET.FULL} | ${SET.FULL}
  `('returns $expected for set=$set', ({ set, expected }) => {
    expect(physicalTrackerCount(set)).toBe(expected);
  });
});

describe('Microcontroller', () => {
  const c = choice('Microcontroller', 0);
  it.each`
    set          | expected
    ${SET.LOWER}| ${5}
    ${SET.CORE} | ${6}
    ${SET.ENHANCED}| ${6}
    ${SET.FULL} | ${8}
  `('$expected boards for $set IMUs', ({ set, expected }) => {
    expect(c.amount(set)).toBe(expected);
  });
});

describe('IMU', () => {
  for (let i = 0; i < 3; i++) {
    const c = choice('IMU', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${SET.LOWER}
      ${SET.CORE} | ${SET.CORE}
      ${SET.ENHANCED}| ${SET.ENHANCED}
      ${SET.FULL} | ${SET.FULL}
    `(`${c.name}: $expected IMUs for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }
});

describe('Batteries', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${5}
    ${SET.CORE} | ${6}
    ${SET.ENHANCED}| ${6}
    ${SET.FULL} | ${8}
  `('1800 mAh 804040: $expected batteries for $set trackers', ({ set, expected }) => {
    expect(choice('Batteries', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${2}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('1200 mAh 5-pack: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Batteries', 1).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${5}
    ${SET.CORE} | ${6}
    ${SET.ENHANCED}| ${6}
    ${SET.FULL} | ${8}
  `('Generic 18650: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Batteries', 2).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Batteries', 3).amount(set)).toBe(expected);
  });
});

describe('Charging Board', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${5}
    ${SET.CORE} | ${6}
    ${SET.ENHANCED}| ${6}
    ${SET.FULL} | ${8}
  `('TP4056 single: $expected boards for $set trackers', ({ set, expected }) => {
    expect(choice('Charging Board', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${1}
    ${SET.ENHANCED}| ${1}
    ${SET.FULL} | ${1}
  `('TP4056 10-pack: $expected pack for $set trackers', ({ set, expected }) => {
    expect(choice('Charging Board', 1).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Charging Board', 2).amount(set)).toBe(expected);
  });
});

describe('Power Switches', () => {
  for (let i = 0; i < 2; i++) {
    const c = choice('Power Switches', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${1}
      ${SET.CORE} | ${1}
      ${SET.ENHANCED}| ${1}
      ${SET.FULL} | ${1}
    `(`${c.name}: $expected pack for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Power Switches', 2).amount(set)).toBe(expected);
  });
});

describe('Diodes', () => {
  for (let i = 0; i < 2; i++) {
    const c = choice('Diodes', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${1}
      ${SET.CORE} | ${1}
      ${SET.ENHANCED}| ${1}
      ${SET.FULL} | ${1}
    `(`${c.name}: $expected pack for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Diodes', 2).amount(set)).toBe(expected);
  });
});

describe('Resistors', () => {
  for (let i = 0; i < 2; i++) {
    const c = choice('Resistors', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${1}
      ${SET.CORE} | ${1}
      ${SET.ENHANCED}| ${1}
      ${SET.FULL} | ${1}
    `(`${c.name}: $expected pack for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Resistors', 2).amount(set)).toBe(expected);
  });
});

describe('Carrier Board Options', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${10}
    ${SET.CORE} | ${10}
    ${SET.ENHANCED}| ${10}
    ${SET.FULL} | ${10}
  `('PCB from cases page: $expected PCBs for $set trackers', ({ set, expected }) => {
    expect(choice('Carrier Board Options', 0).amount(set)).toBe(expected);
  });

  for (let i = 1; i <= 2; i++) {
    const c = choice('Carrier Board Options', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${1}
      ${SET.CORE} | ${1}
      ${SET.ENHANCED}| ${1}
      ${SET.FULL} | ${1}
    `(`${c.name}: $expected for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Carrier Board Options', 3).amount(set)).toBe(expected);
  });
});

describe('Wiring for Extensions', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${1}
    ${SET.FULL} | ${1}
  `('JST 5-pin 5 pcs: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Wiring for Extensions', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${1}
    ${SET.FULL} | ${1}
  `('JST 5-pin 20 pcs: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Wiring for Extensions', 1).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${1}
    ${SET.FULL} | ${1}
  `('Deluxe Set: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Wiring for Extensions', 2).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${1}
    ${SET.FULL} | ${1}
  `('Full-Body Set: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Wiring for Extensions', 3).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Wiring for Extensions', 4).amount(set)).toBe(expected);
  });
});

describe('Cases', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${SET.LOWER}
    ${SET.CORE} | ${SET.CORE}
    ${SET.ENHANCED}| ${SET.ENHANCED}
    ${SET.FULL} | ${SET.FULL}
  `('3D printed: $expected cases for $set trackers', ({ set, expected }) => {
    expect(choice('Cases', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${1}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('Amazon cases 6-pack: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Cases', 1).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Cases', 2).amount(set)).toBe(expected);
  });
});

describe('Straps', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${2}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('AliExpress straps 6-pack: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Straps', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${2}
    ${SET.CORE} | ${2}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('Amazon straps 5-pack: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Straps', 1).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Straps', 2).amount(set)).toBe(expected);
  });
});
