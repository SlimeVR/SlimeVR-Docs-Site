# Smol DIY Set Cost Calculator

Before you start, decide on [how many trackers you may need](../../../slimevr101.md#how-many-trackers-do-you-need).

<fieldset class="amount-of-trackers">
  <legend>Amount of trackers:</legend>
  <label>
    <input type="radio" name="diy-set" value="5" /> &nbsp&nbsp5 Trackers - Lower-Body Set
  </label>
  <label>
    <input type="radio" name="diy-set" value="6" checked="checked" /> &nbsp&nbsp6 Trackers - Core Set
  </label>
  <label>
    <input type="radio" name="diy-set" value="8" /> &nbsp&nbsp8 Trackers - Enhanced Core Set
  </label>
  <label>
    <input type="radio" name="diy-set" value="10" /> 10 Trackers - Full-Body Set
  </label>
  <label>
    <input type="radio" name="diy-set" value="16" /> 16 Trackers - Deluxe Tracker Set
  </label>
</fieldset>

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
  ~$<span id="diy-total-value"></span>
</div>

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

.amount-of-trackers {
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
</style>
