# Smol DIY Set Cost Calculator

```admonish info
Default selected values catered to offer best price-to-performance balance. 

For better performance change selection to those values: 
- Dongle: HolyIOT-21017
- IMU: ICM-45686
```


## Select Amount Of Trackers

Before you start, decide on [how many trackers you may need](../../../slimevr101.md#how-many-trackers-do-you-need).

<div class="radio-card-group">
  <div class="radio-card">
    <input type="radio" name="diy-set" value="5" id="trackers-5" />
    <label for="trackers-5">
      <div class="radio-card-name">Lower-Body Set</div>
      <div class="radio-card-desc">5 IMUs &mdash; Casual VR users</div>
      <div class="radio-card-desc">
        Provides positional tracking for legs and spine. Limited tracking for foot orientation and lower spine bending.
      </div>
    </label>
  </div>
  <div class="radio-card">
    <input type="radio" name="diy-set" value="6" id="trackers-6" checked="checked" />
    <label for="trackers-6">
      <div class="radio-card-name">Core Set</div>
      <div class="radio-card-desc">6 IMUs &mdash; Users who want better stability</div>
      <div class="radio-card-desc">
        Adds an extra spine tracker for improved stability, especially when sitting, lying down, or bending over.
      </div>
    </label>
  </div>
  <div class="radio-card">
    <input type="radio" name="diy-set" value="8" id="trackers-8" />
    <label for="trackers-8">
      <div class="radio-card-name">Enhanced Core Set</div>
      <div class="radio-card-desc">8 IMUs &mdash; Users who sit or lie down often</div>
      <div class="radio-card-desc">
        Adds foot movement tracking for more expressive, emotive poses when seated or lying down.
      </div>
    </label>
  </div>
  <div class="radio-card">
    <input type="radio" name="diy-set" value="10" id="trackers-10" />
    <label for="trackers-10">
      <div class="radio-card-name">Full-Body Set</div>
      <div class="radio-card-desc">10 IMUs &mdash; Dancers, role-players, immersive users</div>
      <div class="radio-card-desc">
        Enables independent elbow movement, providing more realistic upper-body motion and increased immersion in VR.
      </div>
    </label>
  </div>
  <div class="radio-card">
    <input type="radio" name="diy-set" value="16" id="trackers-16" />
    <label for="trackers-16">
      <div class="radio-card-name">Deluxe Tracker Set</div>
      <div class="radio-card-desc">16 IMUs &mdash; Motion capture professionals, animators</div>
      <div class="radio-card-desc">
        Can be used for motion capture without VR gear, split into two Enhanced Core Sets, or customized as needed for flexibility and precision.
      </div>
    </label>
  </div>
</div>

## Select Parts

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Component</th>
                <th style="width:70%">Choice</th>
                <th>Amount</th>
                <th>Cost per one</th>
                <th>Cost with Shipping</th>
                <th style="min-width: 200px">Quick Link</th>
            </tr>
        </thead>
        <tbody id="diy-components">
        </tbody>
    </table>
</div>

<div class="total-cost">
  <strong>TOTAL COST:</strong>
  ~<span id="diy-total-value"></span>
</div>

## Steps After Acquiring Parts

Once gathered parts those steps remain to build fully functional set:
1. [Smol Tracker Soldering](./smol-tracker-soldering.md)
2. [Smol Flashing Firmware](../firmware/smol-flashing-firmware.md)
3. [Smol Pairing & Calibration](../firmware/smol-pairing-and-calibration.md)

<hr/>

*Created by Shine Bright ✨ and [Depact](https://github.com/Depact)*

<script src="../assets/js/smol-building-calculator.js"></script>

<style>
table thead th,
table tbody td {
    padding: 3px 10px;
}

fieldset {
    border-radius: 8px;
}

.total-cost {
    padding-top: 10px;
    font-size: large;
}

.radio-card-group {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

@media (min-width: 50rem) {
    .main {
        max-width: 1100px !important;
    }
}

select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
}

td:first-of-type {
    border-left: 1px solid #eeebee;
}

:root {
  --content-max-width: 2000px;
}

td label {
  padding-bottom: 10px;
}

.radio-card-group {
    padding-top: 10px;
    padding-bottom: 10px;
}

.radio-card {
    border: 1px solid var(--theme-popup-border);
    border-radius: 6px;
    padding: 8px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 12px;
}

/* Outline for selected card */
.radio-card:has(input[type="radio"]:checked) {
    outline: 2px solid var(--sidebar-active);
    outline-offset: 2px;
}

.radio-card-info {
    flex: 1;
}

.radio-card-name {
    font-weight: bold;
}

.radio-card-desc {
    font-size: 0.95em;
}

.radio-card-cost {
    font-weight: bold;
    margin-left: 16px;
}
</style>
