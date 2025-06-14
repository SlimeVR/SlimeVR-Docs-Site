# Smol Building Calculator

<fieldset class="amount-of-trackers">
      <span>
        <a href="#">How many trackers you need</a>
      </span>
    <legend>Amount of trackers:</legend>
<label><input type="radio" name="diy-set" value="5"> Lower-Body Set - 5 Trackers</label>
<label><input type="radio" name="diy-set" value="6" checked="checked"> Core Set - 6 Trackers</label>
<label><input type="radio" name="diy-set" value="8"> Enhanced Core Set - 8 Trackers</label>
<label><input type="radio" name="diy-set" value="10"> Full-Body Set - 10 Trackers</label>
<label><input type="radio" name="diy-set" value="16"> Deluxe Tracker Set - 16 Trackers</label>
</fieldset>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Component</th>
                <th>Choice</th>
                <th>Amount</th>
                <th>Cost per</th>
                <th>Cost with Shipping</th>
                <th style="min-width: 200px">Quick Link</th>
            </tr>
        </thead>
        <tbody id="diy-components">
        </tbody>
    </table>
</div>

**TOTAL COST**: ~$<span id="diy-total"></span>

<script src="assets/js/smol-building-calculator.js"></script>

<style>
fieldset {
    border-radius: 8px;
}

.amount-of-trackers {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

    @media (min-width: 50rem) {
        .main { max-width: 1100px !important; }
    }
    select {
        width:250px;
    }
    td:first-of-type {
    border-left: 1px solid #eeebee;
    }
</style>